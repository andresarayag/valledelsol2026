'use client';

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type OpenBookingOptions = {
  unitSlug?: string;
};

type AlohaBookingContextValue = {
  isReady: boolean;
  openBooking: (options?: OpenBookingOptions) => void;
};

const AlohaBookingContext =
  createContext<AlohaBookingContextValue | null>(null);

const ALOHA_PROPERTY_KEY =
  process.env.NEXT_PUBLIC_ALOHA_PROPERTY_KEY || '';

export function AlohaBookingProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [unitSlug, setUnitSlug] = useState<string | undefined>();
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  /*
   * Recupera los parámetros cuando el usuario regresa
   * desde el proceso de pago.
   */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const returnedBookingId = params.get('booking_id');
    const returnedStatus = params.get('status');

    if (returnedBookingId && returnedStatus) {
      setBookingId(returnedBookingId);
      setPaymentStatus(returnedStatus);
      setIsOpen(true);
    }
  }, []);

  /*
   * Abre el widget general o una cabaña específica.
   */
  const openBooking = useCallback(
    (options?: OpenBookingOptions) => {
      if (!ALOHA_PROPERTY_KEY) {
        console.error(
          'Falta configurar NEXT_PUBLIC_ALOHA_PROPERTY_KEY.'
        );
        return;
      }

      setBookingId(null);
      setPaymentStatus(null);
      setUnitSlug(options?.unitSlug);
      setIsOpen(true);
    },
    []
  );

  const closeBooking = () => {
    setIsOpen(false);
    setUnitSlug(undefined);
  };

  /*
   * Documento HTML independiente para el iframe.
   * El CSS de Aloha queda aislado dentro del iframe
   * y no modifica los estilos de Valle del Sol.
   */
  const iframeDocument = useMemo(() => {
    if (!isOpen || !ALOHA_PROPERTY_KEY) {
      return '';
    }

    const widgetConfig: Record<string, string> = {
      key: ALOHA_PROPERTY_KEY,
      currency: 'CLP',
    };

    if (unitSlug) {
      widgetConfig.unit_slug = unitSlug;
    }

    if (bookingId && paymentStatus) {
      widgetConfig.booking_id = bookingId;
      widgetConfig.payment_status = paymentStatus;
    }

    const serializedConfig = JSON.stringify(widgetConfig).replace(
      /</g,
      '\\u003c'
    );

    return `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <link
            rel="stylesheet"
            href="https://booking-widget.aloha.co/aloha-booking-widget.css"
          />

          <style>
            html,
            body {
              width: 100%;
              height: 100%;
              margin: 0;
              padding: 0;
              overflow: hidden;
              background: transparent;
            }

            #aloha-widget {
              width: 100%;
              height: 100%;
            }
          </style>
        </head>

        <body>
          <div id="aloha-widget"></div>

          <script
            src="https://booking-widget.aloha.co/aloha-booking-widget.umd.js"
          ></script>

          <script>
            window.addEventListener('load', function () {
              try {
                var widget = new AlohaBookingWidget(
                  ${serializedConfig}
                );

                widget.open();
              } catch (error) {
                console.error(
                  'No fue posible abrir el widget de Aloha:',
                  error
                );
              }
            });
          </script>
        </body>
      </html>
    `;
  }, [
    isOpen,
    unitSlug,
    bookingId,
    paymentStatus,
  ]);

  /*
   * Impide que el sitio se desplace detrás del widget.
   */
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /*
   * Permite cerrar con Escape.
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeBooking();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <AlohaBookingContext.Provider
      value={{
        isReady: Boolean(ALOHA_PROPERTY_KEY),
        openBooking,
      }}
    >
      {children}

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/70
            p-0
            sm:p-5
            backdrop-blur-sm
          "
          role="dialog"
          aria-modal="true"
          aria-label="Sistema de reservas"
        >
          <div
            className="
              relative
              w-full
              h-full
              sm:max-w-6xl
              sm:h-[92vh]
              bg-white
              sm:rounded-3xl
              overflow-hidden
              shadow-2xl
            "
          >
            <button
              type="button"
              onClick={closeBooking}
              aria-label="Cerrar reservas"
              className="
                absolute
                top-3
                right-3
                z-50
                w-11
                h-11
                rounded-full
                bg-black
                text-white
                text-2xl
                flex
                items-center
                justify-center
                shadow-xl
                transition-all
                duration-300
                hover:bg-[#FBB03B]
                hover:text-black
                hover:scale-105
              "
            >
              ×
            </button>

            <iframe
              title="Reservas Aloha"
              srcDoc={iframeDocument}
              className="w-full h-full border-0"
              allow="payment"
            />
          </div>
        </div>
      )}
    </AlohaBookingContext.Provider>
  );
}

export function useAlohaBooking() {
  const context = useContext(AlohaBookingContext);

  if (!context) {
    throw new Error(
      'useAlohaBooking debe utilizarse dentro de AlohaBookingProvider.'
    );
  }

  return context;
}