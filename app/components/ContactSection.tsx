export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Contacto
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Teléfono:</strong> +569 7670 5424
              </p>
              <p>
                <strong>Email:</strong> reservas@valledelsolquillon.cl
              </p>
            </div>
          </div>

          {/* Right Column - Newsletter Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Newsletter
              </h3>
              <p className="text-gray-700 mb-6">
                ¡Únete a nuestra familia y disfruta de premios, descuentos
                exclusivos, y sé el primero en enterarte de nuestras novedades!
              </p>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Introduzca su dirección de e-mail para suscribirse
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="EMAIL"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  />
                </div>
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="accept"
                    name="accept"
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="accept" className="text-sm text-gray-700">
                    Acepto las condiciones y recibir sus newsletters.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-700 transition-colors"
                >
                  SUSCRIBIRSE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
