import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    municipality: '',
    message: '',
    notRobot: false,
    privacy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.notRobot) {
      toast({
        title: "Error",
        description: "Por favor, marca la casilla 'No soy un robot'",
        variant: "destructive"
      });
      return;
    }

    if (!formData.privacy) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad para continuar",
        variant: "destructive"
      });
      return;
    }

    // Configuration for the mailto link
    // Destination: info@ahorraaislando.es (Verified)
    const emailDestination = "info@ahorraaislando.es";
    const subject = encodeURIComponent(`Consulta Web Ahorraaislando: ${formData.name}`);
    
    // Using \r\n for better compatibility with desktop mail clients like Outlook
    const body = encodeURIComponent(
      `DATOS DE CONTACTO:\r\n` +
      `------------------\r\n` +
      `Nombre: ${formData.name}\r\n` +
      `Email: ${formData.email}\r\n` +
      `Teléfono: ${formData.phone}\r\n` +
      `Municipio: ${formData.municipality}\r\n\r\n` +
      `MENSAJE:\r\n` +
      `------------------\r\n` +
      `${formData.message}`
    );

    // Open default mail client with pre-filled data
    window.location.href = `mailto:${emailDestination}?subject=${subject}&body=${body}`;

    toast({
      title: "Abriendo gestor de correo...",
      description: "Hemos preparado el correo con tus datos. Confirma el envío desde tu aplicación de email.",
      duration: 5000,
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      municipality: '',
      message: '',
      notRobot: false,
      privacy: false
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Ahorraaislando | Presupuesto Gratuito País Vasco</title>
        <meta name="description" content="Contacta con Ahorraaislando para tu presupuesto gratuito. Teléfono 675 893 453. Servicios de aislamiento en Bilbao, Vitoria-Gasteiz y Donostia." />
      </Helmet>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Contacto
            </h1>
            <p className="text-xl text-gray-600">
              ¿Tienes alguna pregunta o necesitas un presupuesto? Estamos aquí para ayudarte. Contacta con nosotros sin compromiso.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de contacto</h2>
              
              <div className="space-y-6 mb-8">
                <a href="tel:675893453" className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors group">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-emerald-600 text-lg font-semibold">675 893 453</p>
                    <p className="text-gray-600 text-sm">Llámanos en horario de oficina</p>
                  </div>
                </a>

                <a href="mailto:info@ahorraaislando.es" className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-emerald-50 transition-colors group">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-emerald-600 font-semibold">info@ahorraaislando.es</p>
                    <p className="text-gray-600 text-sm">Escríbenos tu consulta</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Zona de trabajo</h3>
                    <p className="text-gray-700">
                      Trabajamos en todo el País Vasco y alrededores:<br />
                      Bilbao, Vitoria-Gasteiz, Donostia-San Sebastián,<br />
                      Bizkaia, Álava y Gipuzkoa
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/34675893453"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                Contactar por WhatsApp
              </a>

              <div className="mt-8">
                <img className="rounded-2xl shadow-lg w-full h-[300px] object-cover" alt="Oficina Ahorraaislando" src="https://images.unsplash.com/photo-1681909623271-b5d90dd4c163" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu presupuesto gratuito</h2>
                <p className="text-sm text-gray-500 mb-6">
                  Al enviar este formulario, se abrirá tu cliente de correo predeterminado para enviar los datos directamente a <span className="font-bold text-emerald-600">info@ahorraaislando.es</span>.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="675 893 453"
                    />
                  </div>

                  <div>
                    <label htmlFor="municipality" className="block text-sm font-semibold text-gray-700 mb-2">
                      Municipio / Código postal
                    </label>
                    <input
                      type="text"
                      id="municipality"
                      name="municipality"
                      value={formData.municipality}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors"
                      placeholder="Bilbao, 48001"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-colors resize-none"
                      placeholder="Cuéntanos qué necesitas..."
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="notRobot"
                        checked={formData.notRobot}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <span className="text-sm text-gray-700">
                        No soy un robot *
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                      />
                      <span className="text-sm text-gray-700">
                        He leído y acepto la{' '}
                        <a href="/politica-privacidad" className="text-emerald-600 hover:underline">
                          política de privacidad
                        </a>{' '}
                        *
                      </span>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Send className="mr-2 w-5 h-5" />
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;