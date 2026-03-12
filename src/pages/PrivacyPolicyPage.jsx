import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad - Ahorraaislando</title>
        <meta name="description" content="Política de privacidad de Ahorraaislando. Información sobre tratamiento de datos personales según RGPD." />
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
              Política de Privacidad
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Responsable del tratamiento</h2>
            <p>
              Los datos de carácter personal que nos proporcione serán tratados por:
            </p>
            <ul>
              <li><strong>Denominación social:</strong> GIAN GESTIÓN 2015 S.L.</li>
              <li><strong>Nombre comercial:</strong> Ahorraaislando</li>
              <li><strong>Email de contacto:</strong> info@ahorraaislando.es</li>
              <li><strong>Teléfono:</strong> 610 777 810</li>
            </ul>

            <h2>2. Finalidad del tratamiento</h2>
            <p>
              Sus datos personales serán tratados con las siguientes finalidades:
            </p>
            <ul>
              <li>Gestionar las consultas realizadas a través del formulario de contacto.</li>
              <li>Enviar presupuestos y propuestas comerciales.</li>
              <li>Gestionar la prestación de servicios contratados.</li>
              <li>Enviar comunicaciones comerciales sobre nuestros servicios, siempre que haya dado su consentimiento expreso.</li>
            </ul>

            <h2>3. Legitimación</h2>
            <p>
              La base legal para el tratamiento de sus datos es:
            </p>
            <ul>
              <li>El consentimiento del interesado al aceptar la presente política de privacidad.</li>
              <li>La ejecución de un contrato en el que el interesado es parte.</li>
              <li>El cumplimiento de obligaciones legales.</li>
            </ul>

            <h2>4. Conservación de datos</h2>
            <p>
              Sus datos personales se conservarán mientras sean necesarios para las finalidades indicadas y, en todo caso, durante los plazos legales de prescripción que resulten de aplicación.
            </p>

            <h2>5. Destinatarios de datos</h2>
            <p>
              Sus datos no serán cedidos a terceros, salvo obligación legal. No se realizan transferencias internacionales de datos.
            </p>

            <h2>6. Derechos del usuario</h2>
            <p>
              Puede ejercer los siguientes derechos:
            </p>
            <ul>
              <li><strong>Derecho de acceso:</strong> Conocer qué datos personales estamos tratando sobre usted.</li>
              <li><strong>Derecho de rectificación:</strong> Solicitar la modificación de sus datos si son inexactos o incompletos.</li>
              <li><strong>Derecho de supresión:</strong> Solicitar la eliminación de sus datos personales.</li>
              <li><strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos.</li>
              <li><strong>Derecho de limitación:</strong> Solicitar la limitación del tratamiento de sus datos.</li>
              <li><strong>Derecho a la portabilidad:</strong> Recibir sus datos en formato estructurado para transmitirlos a otro responsable.</li>
            </ul>
            <p>
              Para ejercer estos derechos, puede contactar con nosotros en info@ahorraaislando.es o en el teléfono 610 777 810, adjuntando copia de su DNI o documento equivalente.
            </p>
            <p>
              Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>

            <h2>7. Seguridad de los datos</h2>
            <p>
              GIAN GESTIÓN 2015 S.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>

            <h2>8. Actualización de la política de privacidad</h2>
            <p>
              GIAN GESTIÓN 2015 S.L. se reserva el derecho a modificar la presente política para adaptarla a novedades legislativas o jurisprudenciales. En tales casos, se anunciará en esta página los cambios introducidos con razonable antelación a su puesta en práctica.
            </p>

            <h2>9. Consentimiento</h2>
            <p>
              Al marcar la casilla de aceptación de la política de privacidad en nuestro formulario de contacto, usted acepta expresamente el tratamiento de sus datos personales conforme a lo establecido en la presente política.
            </p>

            <p className="text-sm text-gray-600 mt-8">
              Última actualización: Noviembre 2024
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;