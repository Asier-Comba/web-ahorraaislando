import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const LegalNoticePage = () => {
  return (
    <>
      <Helmet>
        <title>Aviso Legal - Ahorraaislando</title>
        <meta name="description" content="Aviso legal de Ahorraaislando - GIAN GESTIÓN 2015 S.L. Información legal sobre el uso del sitio web." />
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
              Aviso Legal
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. Datos identificativos</h2>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa de los siguientes datos identificativos del titular del sitio web:
            </p>
            <ul>
              <li><strong>Denominación social:</strong> GIAN GESTIÓN 2015 S.L.</li>
              <li><strong>Nombre comercial:</strong> Ahorraaislando</li>
              <li><strong>Email de contacto:</strong> info@ahorraaislando.es</li>
              <li><strong>Teléfono:</strong> 610 777 810</li>
            </ul>

            <h2>2. Objeto</h2>
            <p>
              El presente aviso legal regula el uso y utilización del sitio web ahorraaislando.es (en adelante, el "Sitio Web"), del que es titular GIAN GESTIÓN 2015 S.L.
            </p>
            <p>
              La navegación por el Sitio Web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
            </p>

            <h2>3. Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del Sitio Web, entendiendo por estos, a título meramente enunciativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de GIAN GESTIÓN 2015 S.L. o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.
            </p>

            <h2>4. Uso del sitio web</h2>
            <p>
              El usuario se compromete a utilizar el Sitio Web y sus contenidos de forma diligente, correcta y lícita y, en particular, se obliga a abstenerse de:
            </p>
            <ul>
              <li>Utilizar los contenidos de forma contraria a la ley, a la moral, al orden público, o a lo establecido en el presente aviso legal.</li>
              <li>Reproducir, copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de comunicación pública, transformar o modificar los contenidos.</li>
              <li>Suprimir, eludir o manipular los derechos de propiedad intelectual o industrial y demás datos identificativos de los derechos de GIAN GESTIÓN 2015 S.L.</li>
            </ul>

            <h2>5. Responsabilidad</h2>
            <p>
              GIAN GESTIÓN 2015 S.L. no será responsable de las interrupciones, demoras o desconexiones en el servicio que puedan producirse por causas ajenas a su control.
            </p>
            <p>
              GIAN GESTIÓN 2015 S.L. excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que pudieran deberse a la falta de disponibilidad o de continuidad del funcionamiento del Sitio Web.
            </p>

            <h2>6. Enlaces</h2>
            <p>
              En el caso de que en el Sitio Web se incluyeran enlaces o hipervínculos hacia otros sitios de Internet, GIAN GESTIÓN 2015 S.L. no ejercerá ningún tipo de control sobre dichos sitios y contenidos.
            </p>

            <h2>7. Modificaciones</h2>
            <p>
              GIAN GESTIÓN 2015 S.L. se reserva el derecho a efectuar, en cualquier momento y sin necesidad de previo aviso, modificaciones y actualizaciones de la información contenida en el Sitio Web o en su configuración o presentación.
            </p>

            <h2>8. Legislación aplicable y jurisdicción</h2>
            <p>
              Las presentes condiciones se regirán por la legislación española. Para cualquier controversia derivada del acceso o uso del Sitio Web, las partes se someten expresamente a los Juzgados y Tribunales que correspondan según la legislación aplicable.
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

export default LegalNoticePage;