import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, Wind, Droplets, Home, Leaf, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      icon: Wind,
      title: 'Aislamiento insuflado',
      subtitle: 'La solución más eficiente sin obras',
      description: 'El aislamiento insuflado es una técnica revolucionaria que consiste en introducir material aislante (lana mineral, celulosa o fibra de vidrio) en las cámaras de aire de paredes, techos y suelos mediante un proceso de insuflado a presión.',
      ideal: [
        'Viviendas con cámara de aire en fachadas',
        'Edificios antiguos que necesitan actualización térmica',
        'Proyectos que requieren rapidez de ejecución',
        'Cuando se busca minimizar obras y molestias'
      ],
      benefits: [
        'Instalación completa en un solo día',
        'Sin necesidad de romper paredes ni realizar obras',
        'Reducción de hasta un 30% en consumo energético',
        'Mejora significativa del confort térmico',
        'Elimina puentes térmicos y condensaciones',
        'Aislamiento acústico adicional'
      ],
      process: [
        'Inspección técnica de la vivienda',
        'Pequeñas perforaciones estratégicas en fachada',
        'Insuflado del material aislante a presión',
        'Sellado y acabado de las perforaciones',
        'Limpieza completa de la zona de trabajo'
      ],
      image: 'https://horizons-cdn.hostinger.com/9831e720-e6b2-43cf-9769-a218c73a8580/4b217b2d8e6e3e94aad95ad437a1b2b9.jpg' // Replaced with the specific user-provided image
    },
    {
      icon: Leaf,
      title: 'Corcho proyectado',
      subtitle: 'Aislamiento natural 100% ecológico',
      description: 'El corcho proyectado es un sistema de aislamiento térmico y acústico completamente natural que se aplica mediante proyección. Utilizamos corcho natural triturado mezclado con resinas naturales que se proyecta sobre la superficie a aislar, creando una capa uniforme y altamente eficiente.',
      ideal: [
        'Techos y cubiertas (interior y exterior)',
        'Fachadas ventiladas y medianeras',
        'Suelos y forjados',
        'Viviendas que buscan soluciones ecológicas',
        'Proyectos de rehabilitación sostenible'
      ],
      benefits: [
        'Material 100% natural y reciclable',
        'Excelente aislamiento térmico y acústico',
        'Transpirable, evita condensaciones',
        'Muy durable, no se degrada con el tiempo',
        'Resistente al fuego y a la humedad',
        'Contribuye a la eficiencia energética del edificio',
        'No atrae roedores ni insectos'
      ],
      process: [
        'Preparación de la superficie a tratar',
        'Mezcla del corcho con resinas naturales',
        'Proyección mediante equipo especializado',
        'Aplicación en capas según espesor necesario',
        'Acabado y limpieza final'
      ],
      image: 'https://images.unsplash.com/photo-1437397894762-62c38e5940c4?auto=format&fit=crop&q=80' // Cork texture
    },
    {
      icon: Droplets,
      title: 'Tratamientos antihumedad',
      subtitle: 'Soluciones definitivas contra la humedad',
      description: 'Las humedades son uno de los problemas más comunes y dañinos en las viviendas. En Ahorraaislando ofrecemos tratamientos profesionales específicos para cada tipo de humedad: condensación, filtración o capilaridad. No solo tratamos los síntomas, atacamos el problema de raíz.',
      ideal: [
        'Viviendas con manchas de humedad en paredes',
        'Problemas de condensación y moho',
        'Sótanos y plantas bajas con humedad por capilaridad',
        'Filtraciones desde cubiertas o fachadas',
        'Edificios antiguos con problemas estructurales de humedad'
      ],
      benefits: [
        'Diagnóstico profesional gratuito',
        'Solución específica para cada tipo de humedad',
        'Eliminación definitiva del problema',
        'Prevención de daños estructurales',
        'Mejora de la calidad del aire interior',
        'Eliminación de moho y malos olores',
        'Garantía de resultados'
      ],
      process: [
        'Visita técnica y diagnóstico del tipo de humedad',
        'Análisis de causas y propuesta de solución',
        'Aplicación del tratamiento específico',
        'Secado y saneamiento de superficies afectadas',
        'Acabado y protección preventiva',
        'Seguimiento posterior para verificar resultados'
      ],
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80' // Wall repair/treatment
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - Ahorraaislando | Aislamiento Térmico y Tratamiento Humedades</title>
        <meta name="description" content="Servicios profesionales de aislamiento: insuflado, corcho proyectado y tratamientos antihumedad. Instalación rápida en 1 día. Presupuesto gratuito País Vasco." />
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
              Nuestros servicios
            </h1>
            <p className="text-xl text-gray-600">
              Soluciones profesionales de aislamiento térmico, acústico y tratamiento de humedades adaptadas a las necesidades de tu vivienda
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h2>
                <p className="text-xl text-emerald-600 font-semibold mb-6">{service.subtitle}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ideal para:</h3>
                  <ul className="space-y-2">
                    {service.ideal.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Beneficios:</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Zap className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Proceso:</h3>
                  <ol className="space-y-2">
                    {service.process.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700 pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <img 
                  className="rounded-2xl shadow-2xl w-full h-[600px] object-cover" 
                  alt={service.title} 
                  src={service.image} 
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Garantía y seguimiento
            </h2>
            <p className="text-xl mb-8 text-emerald-50">
              Todos nuestros trabajos incluyen garantía de calidad y seguimiento posterior. Tu satisfacción es nuestra prioridad.
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Solicita tu presupuesto gratuito
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;