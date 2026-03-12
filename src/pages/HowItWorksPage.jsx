import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Home, FileText, Wrench, CheckCircle, Clock, Shield, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HowItWorksPage = () => {
  const steps = [{
    icon: Phone,
    number: '01',
    title: 'Contacto inicial',
    description: 'Todo comienza con una simple llamada o mensaje. Nos cuentas tu necesidad y te hacemos algunas preguntas básicas sobre tu vivienda.',
    details: ['Llamada telefónica o formulario de contacto', 'Conversación inicial sobre tus necesidades', 'Información básica sobre tu vivienda', 'Primera orientación sobre soluciones posibles'],
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80' // Contact concept
  }, {
    icon: Home,
    number: '02',
    title: 'Visita técnica y diagnóstico',
    description: 'Visitamos tu hogar para realizar un análisis detallado. Identificamos problemas, medimos espacios y evaluamos las mejores soluciones.',
    details: ['Visita gratuita sin compromiso', 'Inspección técnica completa de la vivienda', 'Detección de puentes térmicos y problemas', 'Mediciones precisas de áreas a aislar', 'Asesoramiento profesional personalizado'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80' // Technician measuring
  }, {
    icon: FileText,
    number: '03',
    title: 'Presupuesto personalizado',
    description: 'Te presentamos una propuesta detallada y transparente, con todos los costes claramente especificados y sin sorpresas.',
    details: ['Presupuesto detallado y claro', 'Explicación de materiales y proceso', 'Estimación de ahorro energético', 'Plazos de ejecución definidos', 'Respuesta a todas tus dudas', 'Sin compromiso de aceptación'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80' // Budget/Calculation
  }, {
    icon: Wrench,
    number: '04',
    title: 'Ejecución del trabajo',
    description: 'Realizamos la instalación de forma rápida, limpia y eficiente. La mayoría de trabajos se completan en un solo día.',
    details: ['Instalación profesional en 1 día (mayoría de casos)', 'Trabajo limpio sin escombros', 'Mínimas molestias para tu familia', 'Equipo especializado y certificado', 'Uso de materiales de primera calidad', 'Cumplimiento estricto de plazos'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80' // Construction worker
  }, {
    icon: CheckCircle,
    number: '05',
    title: 'Seguimiento y garantía',
    description: 'No nos olvidamos de ti después de la instalación. Hacemos seguimiento y ofrecemos garantía en todos nuestros trabajos.',
    details: ['Revisión post-instalación', 'Verificación de resultados', 'Garantía de calidad del trabajo', 'Soporte técnico continuado', 'Atención a cualquier consulta', 'Compromiso con tu satisfacción'],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80' // Satisfaction/Professional
  }];

  const guarantees = [{
    icon: Clock,
    title: 'Rapidez garantizada',
    description: 'La mayoría de nuestros trabajos se completan en un solo día sin interrumpir tu rutina'
  }, {
    icon: Shield,
    title: 'Calidad certificada',
    description: 'Utilizamos materiales de primera calidad y técnicas profesionales certificadas'
  }, {
    icon: ThumbsUp,
    title: 'Satisfacción asegurada',
    description: 'Garantía en todos nuestros trabajos y seguimiento posterior personalizado'
  }];

  return (
    <>
      <Helmet>
        <title>Cómo Funciona - Ahorraaislando | Proceso de Instalación de Aislamiento</title>
        <meta name="description" content="Descubre nuestro proceso de trabajo paso a paso: desde el primer contacto hasta la instalación y seguimiento. Transparencia y profesionalidad garantizadas." />
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
              ¿Cómo funciona?
            </h1>
            <p className="text-xl text-gray-600">
              Un proceso simple, transparente y profesional de principio a fin. Así trabajamos en Ahorraaislando.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {steps.map((step, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-2">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{step.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={index % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <img 
                    className="rounded-2xl shadow-2xl w-full h-[400px] object-cover" 
                    alt={step.title} 
                    src={step.image} 
                  />
                </motion.div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center my-12">
                  <div className="w-0.5 h-16 bg-gradient-to-b from-emerald-600 to-emerald-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nuestras garantías</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Compromisos que asumimos en cada proyecto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <guarantee.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para empezar?
            </h2>
            <p className="text-xl mb-8 text-emerald-50">
              Contacta con nosotros hoy mismo y comienza a disfrutar de un hogar más confortable y eficiente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 w-full sm:w-auto">
                  Solicitar presupuesto gratuito
                </Button>
              </Link>
              <a href="tel:675893453">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
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

export default HowItWorksPage;