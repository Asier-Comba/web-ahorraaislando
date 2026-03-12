import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Heart, Target } from 'lucide-react';
const AboutPage = () => {
  const values = [{
    icon: Heart,
    title: 'Trato cercano',
    description: 'Creemos en el valor de las relaciones personales. Cada cliente es único y merece atención personalizada.'
  }, {
    icon: Target,
    title: 'Soluciones efectivas',
    description: 'Nos enfocamos en resultados reales: ahorro energético, confort y satisfacción del cliente.'
  }, {
    icon: Users,
    title: 'Equipo profesional',
    description: 'Técnicos especializados con amplia experiencia en el sector del aislamiento.'
  }, {
    icon: Award,
    title: 'Calidad garantizada',
    description: 'Utilizamos materiales de primera calidad y ofrecemos garantía en todos nuestros trabajos.'
  }];
  return <>
      <Helmet>
        <title>Sobre Nosotros - Ahorraaislando | Expertos en Aislamiento País Vasco</title>
        <meta name="description" content="Conoce a Ahorraaislando, empresa líder en aislamiento térmico y acústico en el País Vasco. Experiencia, profesionalidad y compromiso con el ahorro energético. Teléfono: 675 893 453" />
      </Helmet>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre nosotros
            </h1>
            <p className="text-xl text-gray-600">
              Especialistas en aislamiento térmico y acústico con vocación de servicio y compromiso con el ahorro energético
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <img className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" alt="Puente Colgante de Portugalete en Vizcaya" src="https://horizons-cdn.hostinger.com/9831e720-e6b2-43cf-9769-a218c73a8580/puente-colgante-portugalete-xlbNq.png" />
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <span className="font-semibold text-emerald-600">Ahorraaislando</span>, bajo la razón social GIAN GESTIÓN 2015 S.L., nace con una misión clara: ayudar a las familias del País Vasco a mejorar el confort de sus hogares y reducir sus gastos energéticos mediante soluciones de aislamiento profesionales y eficientes.
                </p>
                <p>
                  Con una amplia experiencia en el sector del aislamiento térmico y acústico, hemos completado cientos de proyectos en toda la comunidad autónoma, desde Bilbao hasta Donostia-San Sebastián, pasando por Vitoria-Gasteiz y todas las provincias vascas.
                </p>
                <p>
                  Bajo la dirección de <span className="font-semibold">Gorka</span>, nuestro equipo se caracteriza por su profesionalidad, eficiencia y trato cercano. Entendemos que cada vivienda es única y requiere soluciones personalizadas, por eso ofrecemos un servicio integral que va desde el diagnóstico inicial hasta el seguimiento posterior a la instalación.
                </p>
                <p>
                  Nuestro enfoque se basa en tres pilares fundamentales: <span className="font-semibold">rapidez</span> (completamos la mayoría de trabajos en un solo día), <span className="font-semibold">limpieza</span> (trabajo sin obras ni escombros) y <span className="font-semibold">efectividad</span> (resultados medibles en ahorro energético).
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestros valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">¿Por qué confiar en nosotros?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-lg block mb-1">Experiencia demostrada</span>
                  <span className="text-emerald-100">Cientos de proyectos completados con éxito en todo el País Vasco</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-lg block mb-1">Conocimiento local</span>
                  <span className="text-emerald-100">Entendemos las necesidades específicas del clima vasco</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-lg block mb-1">Materiales ecológicos</span>
                  <span className="text-emerald-100">Priorizamos soluciones naturales y sostenibles</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-lg block mb-1">Garantía de satisfacción</span>
                  <span className="text-emerald-100">Nuestros clientes avalan nuestro trabajo con sus opiniones</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-lg block mb-1">Atención personalizada</span>
                  <span className="text-emerald-100">Cada proyecto recibe un trato único y personalizado</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-lg block mb-1">Compromiso con el ahorro</span>
                  <span className="text-emerald-100">Resultados medibles en reducción de consumo energético</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestro compromiso</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  En Ahorraaislando no solo instalamos aislamiento, creamos hogares más confortables, saludables y eficientes energéticamente. Cada proyecto es una oportunidad para mejorar la calidad de vida de nuestros clientes y contribuir a un futuro más sostenible.
                </p>
                <p>
                  Trabajamos con transparencia, ofreciendo presupuestos claros sin sorpresas y cumpliendo nuestros compromisos de plazos y calidad. Nuestra filosofía es simple: hacer bien las cosas desde el primer momento.
                </p>
                <p>
                  El respeto por tu hogar es fundamental para nosotros. Por eso, nuestros trabajos se caracterizan por la limpieza y el orden, minimizando las molestias y dejando tu vivienda en perfectas condiciones al finalizar.
                </p>
                <p className="font-semibold text-emerald-600">
                  Gorka y todo el equipo de Ahorraaislando estamos a tu disposición para ayudarte a conseguir el hogar confortable y eficiente que mereces.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <img className="rounded-2xl shadow-2xl w-full h-[500px] object-cover" alt="Trabajo profesional de aislamiento" src="https://images.unsplash.com/photo-1674485169641-bcb2bf6f1df9" />
            </motion.div>
          </div>
        </div>
      </section>
    </>;
};
export default AboutPage;