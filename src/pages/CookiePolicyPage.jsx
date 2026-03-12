import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const CookiePolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies - Ahorraaislando</title>
        <meta name="description" content="Política de cookies de Ahorraaislando. Información sobre el uso de cookies en nuestro sitio web." />
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
              Política de Cookies
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>1. ¿Qué son las cookies?</h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>

            <h2>2. ¿Qué tipos de cookies utiliza este sitio web?</h2>
            <p>
              Este sitio web utiliza los siguientes tipos de cookies:
            </p>
            
            <h3>Cookies técnicas</h3>
            <p>
              Son aquellas que permiten al usuario la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en ella existan, como por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido o compartir contenidos a través de redes sociales.
            </p>

            <h3>Cookies de preferencias</h3>
            <p>
              Son aquellas que permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios, como, por ejemplo, el idioma, el número de resultados a mostrar cuando el usuario realiza una búsqueda o el aspecto o contenido del servicio en función del tipo de navegador a través del cual el usuario accede al servicio.
            </p>

            <h2>3. Cookies de terceros</h2>
            <p>
              Este sitio web puede utilizar servicios de terceros que, por cuenta de GIAN GESTIÓN 2015 S.L., recopilarán información con fines estadísticos y de uso del sitio web por parte del usuario.
            </p>

            <h2>4. Desactivar las cookies</h2>
            <p>
              Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
            </p>
            <p>
              A continuación, puede acceder a la configuración de los navegadores webs más frecuentes para aceptar, instalar o desactivar las cookies:
            </p>
            <ul>
              <li>
                <strong>Google Chrome:</strong>{' '}
                <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">
                  Configurar cookies en Chrome
                </a>
              </li>
              <li>
                <strong>Mozilla Firefox:</strong>{' '}
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">
                  Configurar cookies en Firefox
                </a>
              </li>
              <li>
                <strong>Safari:</strong>{' '}
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                  Configurar cookies en Safari
                </a>
              </li>
              <li>
                <strong>Microsoft Edge:</strong>{' '}
                <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
                  Configurar cookies en Edge
                </a>
              </li>
            </ul>

            <h2>5. Cookies utilizadas en ahorraaislando.es</h2>
            <p>
              A continuación se identifican las cookies que están siendo utilizadas en este portal así como su tipología y función:
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cookie</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Finalidad</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duración</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">cookieConsent</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Técnica</td>
                    <td className="px-6 py-4 text-sm text-gray-900">Recordar la aceptación de cookies</td>
                    <td className="px-6 py-4 text-sm text-gray-900">1 año</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>6. Aceptación de la política de cookies</h2>
            <p>
              Al aceptar el banner de cookies que aparece al acceder al sitio web, usted acepta expresamente el uso de las cookies descritas en la presente política.
            </p>

            <h2>7. Actualización de la política de cookies</h2>
            <p>
              GIAN GESTIÓN 2015 S.L. puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
            </p>
            <p>
              Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicarán a los usuarios mediante un aviso informativo en el sitio web.
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

export default CookiePolicyPage;