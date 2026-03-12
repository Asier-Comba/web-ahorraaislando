import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Zap, Home, Leaf, Clock, CheckCircle, ArrowRight, Shield, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Instalación en 1 día',
      description: 'Trabajo rápido y eficiente sin interrumpir tu rutina diaria'
    },
    {
      icon: Home,
      title: 'Sin obras',
      description: 'Trabajo limpio, sin escombros ni molestias en tu hogar'
    },
    {
      icon: Zap,
      title: 'Ahorro energético',
      description: 'Reduce hasta un 30% en tus facturas de luz y gas'
    },
    {
      icon: Leaf,
      title: 'Materiales naturales',
      description: 'Soluciones ecológicas y sostenibles para tu vivienda'
    }
  ];

  const services = [
    {
      title: 'Aislamiento insuflado',
      description: 'Técnica eficaz que consiste en introducir material aislante en cámaras de aire y espacios vacíos, mejorando la eficiencia térmica sin necesidad de obras.',
      benefits: ['Ideal para fachadas', 'Sin romper paredes', 'Instalación rápida'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
    },
    {
      title: 'Corcho proyectado',
      description: 'Sistema de aislamiento natural mediante corcho proyectado, perfecto para techos, paredes y suelos. Excelente aislante térmico y acústico 100% ecológico.',
      benefits: ['Material natural', 'Alta durabilidad', 'Aislamiento acústico'],
      image: 'https://images.unsplash.com/photo-1590345612400-b3c7a653608e?auto=format&fit=crop&q=80'
    },
    {
      title: 'Tratamientos antihumedad',
      description: 'Soluciones profesionales contra humedades por condensación, filtración o capilaridad. Acabamos con el problema de raíz y protegemos tu hogar.',
      benefits: ['Diagnóstico gratuito', 'Garantía de resultados', 'Soluciones definitivas'],
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Contacto inicial',
      description: 'Llámanos o rellena el formulario y nos pondremos en contacto contigo'
    },
    {
      number: '02',
      title: 'Visita y diagnóstico',
      description: 'Visitamos tu vivienda y analizamos tus necesidades de aislamiento'
    },
    {
      number: '03',
      title: 'Presupuesto personalizado',
      description: 'Te presentamos una propuesta detallada sin compromiso'
    },
    {
      number: '04',
      title: 'Instalación rápida',
      description: 'Realizamos el trabajo en un día, limpio y sin molestias'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/17ra8dRKN6/", label: "Facebook", color: "hover:text-blue-600" },
    { icon: Instagram, href: "https://www.instagram.com/ahorraaislando/", label: "Instagram", color: "hover:text-pink-600" },
    { icon: Twitter, href: "https://x.com/ahorraaislando?s=08", label: "Twitter/X", color: "hover:text-black" }
  ];

  return (
    <>
      <Helmet>
        <title>Ahorraaislando - Aislamiento Térmico en País Vasco | Sin Obras en 1 Día</title>
        <meta name="description" content="Especialistas en aislamiento térmico y acústico en el País Vasco. Instalación en 1 día sin obras. Ahorra hasta un 30% en tu factura energética. Presupuesto gratuito." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-sky-50 to-white py-24 lg:py-36 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-100/30 skew-x-12 translate-x-20 z-0"></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold mb-6 tracking-wide border border-yellow-200">
                ✨ Soluciones eficientes para tu hogar
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
                Aislamiento térmico <span className="text-sky-600 relative inline-block">
                  en 1 día
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span> sin obras
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                Mejora el confort de tu hogar y <span className="font-semibold text-orange-500">ahorra hasta un 30%</span> en tus facturas de luz y gas. Soluciones profesionales y sostenibles.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/contacto">
                  <Button size="lg" className="bg-sky-600 hover:bg-orange-500 text-white rounded-xl px-8 py-6 text-lg shadow-lg shadow-sky-200 hover:shadow-orange-100 transition-all w-full sm:w-auto">
                    Pide presupuesto sin compromiso
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:675893453">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-xl px-8 py-6 text-lg border-2 border-slate-200 text-slate-700 hover:border-sky-600 hover:text-sky-600 bg-white">
                    <Phone className="mr-2 w-5 h-5" />
                    Llámanos ahora
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-200 to-orange-200 rounded-2xl opacity-50 blur-lg"></div>
              <img 
                className="relative rounded-2xl shadow-2xl w-full h-[550px] object-cover border-4 border-white" 
                alt="Modern insulated home interior" 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d" 
              />
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border-l-4 border-orange-500 max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Shield className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-800">Garantía Total</span>
                </div>
                <p className="text-sm text-slate-600">Certificación de calidad en todos nuestros trabajos de aislamiento.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group p-6 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-sky-50 text-sky-600 rounded-2xl mb-6 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors duration-300">
                  <benefit.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-slate-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-wider uppercase text-sm">Nuestros Servicios</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mt-3 mb-6">Soluciones integrales</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tecnología avanzada para el confort de tu vivienda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group border border-slate-100"
              >
                <div className="relative overflow-hidden h-56">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
                  {index === 1 ? (
                     <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Sprayed cork texture" src="https://images.unsplash.com/photo-1437397894762-62c38e5940c4" />
                  ) : (
                     <img 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        alt={service.title} 
                        src={service.image} 
                      />
                  )}
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/servicios" className="inline-flex items-center text-sky-600 font-bold hover:text-orange-500 transition-colors">
                    Saber más <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
             <Link to="/servicios">
              <Button size="lg" variant="outline" className="border-2 border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white rounded-full px-8 py-6 text-lg font-bold transition-all">
                Ver todos los servicios
              </Button>
             </Link>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-6">Proceso de trabajo</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Transparencia y rapidez desde el primer contacto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl h-full hover:bg-sky-50 transition-colors duration-300 border border-slate-100 hover:border-sky-100">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl font-bold text-sky-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-full w-full h-0.5 bg-slate-200 -translate-x-1/2 z-[-1]" style={{ width: '50%' }} />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Social Media Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-6">
              <Instagram className="w-4 h-4" />
              <span>Redes Sociales</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-slate-900 mb-8">
              Síguenos en redes
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Mantente al día con nuestros últimos proyectos, consejos de eficiencia energética y novedades en nuestras plataformas sociales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 group"
                >
                  <div className={`w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${social.color} text-slate-600`}>
                    <social.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{social.label}</h3>
                  <span className="text-sky-600 font-semibold group-hover:underline">Seguir ahora</span>
                </motion.a>
              ))}
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sky-400 font-bold tracking-wider uppercase text-sm mb-2 block">Nuestra Diferencia</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 leading-tight">¿Por qué elegir <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">Ahorraaislando</span>?</h2>
              
              <div className="space-y-6">
                {[
                  { title: 'Amplia experiencia', desc: 'Cientos de proyectos completados con éxito en todo el País Vasco' },
                  { title: 'Rapidez y eficiencia', desc: 'Instalación completa en un solo día sin interrumpir tu rutina' },
                  { title: 'Trabajo limpio', desc: 'Sin obras, sin escombros, sin molestias para tu familia' },
                  { title: 'Presencia local', desc: 'Conocemos el clima del País Vasco y ofrecemos soluciones adaptadas' },
                  { title: 'Materiales naturales', desc: 'Soluciones ecológicas que cuidan tu salud y el medio ambiente' }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
                  >
                    <div className="bg-sky-600/20 p-2 rounded-lg">
                      <CheckCircle className="w-6 h-6 text-sky-400" />
                    </div>
                    <div>
                      <span className="font-bold text-lg block text-white mb-1">{item.title}</span>
                      <span className="text-slate-300 text-sm leading-relaxed">{item.desc}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-600 rounded-3xl transform rotate-3 opacity-20"></div>
              <img 
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover border-8 border-slate-800" 
                alt="Happy family in comfortable insulated home" 
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-sky-600 to-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 tracking-tight">
              ¿Listo para transformar tu hogar?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 text-sky-100 font-light">
              Solicita tu presupuesto gratuito sin compromiso. <br className="hidden md:block"/>Te llamamos en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contacto">
                <Button size="lg" className="bg-white text-sky-700 hover:bg-orange-50 hover:text-orange-600 w-full sm:w-auto px-10 py-7 text-lg rounded-full font-bold shadow-xl transition-all transform hover:scale-105">
                  Solicitar presupuesto gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:675893453">
                <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 w-full sm:w-auto px-10 py-7 text-lg rounded-full font-bold backdrop-blur-sm">
                  <Phone className="mr-2 w-5 h-5" />
                  675 893 453
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;