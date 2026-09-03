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
   * ==========================================================
   * RECUPERAR RESERVA DESPUÉS DEL PAGO
   * ==========================================================
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
   * ==========================================================
   * ABRIR ALOHA
   * ==========================================================
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

  /*
   * ==========================================================
   * CERRAR COMPLETAMENTE ALOHA
   * ==========================================================
   */
  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setUnitSlug(undefined);
    setBookingId(null);
    setPaymentStatus(null);

    /*
     * Restaurar scroll por seguridad.
     */
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }, []);

  /*
   * ==========================================================
   * RECIBIR AVISO DESDE EL IFRAME
   * ==========================================================
   */
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'ALOHA_WIDGET_CLOSED') {
        closeBooking();
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener(
        'message',
        handleMessage
      );
    };
  }, [closeBooking]);

  /*
   * ==========================================================
   * DOCUMENTO AISLADO DE ALOHA
   * ==========================================================
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

    const serializedConfig =
      JSON.stringify(widgetConfig).replace(
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
              background: transparent !important;
            }

            #aloha-widget {
              width: 100%;
              height: 100%;
              background: transparent !important;
            }

          </style>

        </head>

        <body>

          <div id="aloha-widget"></div>

          <script
            src="https://booking-widget.aloha.co/aloha-booking-widget.umd.js"
          ></script>

          <script>

            window.addEventListener(
              'load',
              function () {

                try {

                  var widget =
                    new AlohaBookingWidget(
                      ${serializedConfig}
                    );

                  widget.open();


                  /*
                   * ==================================================
                   * DETECTAR CUANDO ALOHA SE CIERRA
                   * ==================================================
                   *
                   * Mientras Aloha está abierto aparece permanentemente
                   * el texto "Impulsado por".
                   *
                   * Cuando el usuario presiona la X nativa de Aloha,
                   * el widget elimina su contenido.
                   *
                   * En ese momento avisamos al sitio principal para
                   * desmontar completamente el iframe.
                   */

                  var widgetWasVisible = false;
                  var missingChecks = 0;

                  var closeDetector =
                    window.setInterval(
                      function () {

                        var bodyText =
                          (
                            document.body.innerText ||
                            ''
                          ).toLowerCase();

                        var alohaVisible =
                          bodyText.includes(
                            'impulsado por'
                          );

                        /*
                         * Primero esperamos a confirmar que
                         * el widget realmente abrió.
                         */
                        if (alohaVisible) {

                          widgetWasVisible = true;
                          missingChecks = 0;

                          return;

                        }

                        /*
                         * Si todavía nunca se mostró,
                         * seguimos esperando.
                         */
                        if (!widgetWasVisible) {
                          return;
                        }

                        /*
                         * Si desapareció después de haber
                         * estado visible, contamos varias
                         * comprobaciones para evitar falsos
                         * positivos durante transiciones.
                         */
                        missingChecks++;

                        if (missingChecks >= 4) {

                          window.clearInterval(
                            closeDetector
                          );

                          window.parent.postMessage(
                            {
                              type:
                                'ALOHA_WIDGET_CLOSED'
                            },
                            '*'
                          );

                        }

                      },
                      250
                    );

                } catch (error) {

                  console.error(
                    'No fue posible abrir el widget de Aloha:',
                    error
                  );

                }

              }
            );

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
   * ==========================================================
   * BLOQUEAR SCROLL SOLO MIENTRAS ALOHA ESTÁ ABIERTO
   * ==========================================================
   */
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';

      return;
    }

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  /*
   * ==========================================================
   * ESCAPE TAMBIÉN CIERRA ALOHA
   * ==========================================================
   */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        closeBooking();
      }
    };

    window.addEventListener(
      'keydown',
      handleEscape
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, [isOpen, closeBooking]);

  return (
    <AlohaBookingContext.Provider
      value={{
        isReady: Boolean(
          ALOHA_PROPERTY_KEY
        ),
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
          "
          role="dialog"
          aria-modal="true"
          aria-label="Sistema de reservas"
        >

          <iframe
            title="Reservas Aloha"
            srcDoc={iframeDocument}
            className="
              fixed
              inset-0
              w-screen
              h-screen
              border-0
              bg-transparent
            "
            allow="payment"
          />

        </div>

      )}

    </AlohaBookingContext.Provider>
  );
}

export function useAlohaBooking() {
  const context =
    useContext(
      AlohaBookingContext
    );

  if (!context) {
    throw new Error(
      'useAlohaBooking debe utilizarse dentro de AlohaBookingProvider.'
    );
  }

  return context;
}