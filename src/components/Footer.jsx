import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const logoUrl = "https://horizons-cdn.hostinger.com/9831e720-e6b2-43cf-9769-a218c73a8580/dac7cae360710cb9c81da478d0b91119.png";

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/17ra8dRKN6/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/ahorraaislando/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/ahorraaislando?s=08", label: "Twitter/X" }
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-sky-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="bg-white p-3 rounded-lg w-fit inline-block">
              <img src={logoUrl} alt="Ahorraaislando" className="h-14 w-auto" />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Expertos en eficiencia energética y confort para tu hogar. Transformamos tu vivienda con soluciones de aislamiento de vanguardia en todo el País Vasco.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 p-2 rounded-full text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-yellow-500 pl-3">Navegación</h3>
            <nav className="space-y-3">
              {[
                { name: 'Inicio', path: '/' },
                { name: 'Sobre nosotros', path: '/sobre-nosotros' },
                { name: 'Servicios', path: '/servicios' },
                { name: 'Cómo funciona', path: '/como-funciona' },
                { name: 'Contacto', path: '/contacto' }
              ].map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="flex items-center text-slate-400 hover:text-orange-500 transition-colors group text-sm"
                >
                  <ArrowRight className="w-3 h-3 mr-2 text-sky-600 group-hover:text-orange-500 transition-colors" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-yellow-500 pl-3">Contacto</h3>
            <div className="space-y-4">
              <a href="tel:675893453" className="flex items-start gap-3 text-slate-400 hover:text-orange-500 transition-colors group">
                <div className="bg-slate-800 p-2 rounded-full group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase font-semibold">Llámanos</span>
                  <span className="text-white font-medium">675 893 453</span>
                </div>
              </a>
              
              <a href="mailto:info@ahorraaislando.es" className="flex items-start gap-3 text-slate-400 hover:text-orange-500 transition-colors group">
                <div className="bg-slate-800 p-2 rounded-full group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 uppercase font-semibold">Escríbenos</span>
                  <span className="text-white font-medium break-all">info@ahorraaislando.es</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-400">
                <div className="bg-slate-800 p-2 rounded-full">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                   <span className="block text-xs text-slate-500 uppercase font-semibold">Zona de servicio</span>
                  <span className="text-sm">Bilbao, Vitoria-Gasteiz, Donostia-San Sebastián y alrededores</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-yellow-500 pl-3">Legal</h3>
            <nav className="space-y-3">
              {[
                { name: 'Aviso Legal', path: '/aviso-legal' },
                { name: 'Política de Privacidad', path: '/politica-privacidad' },
                { name: 'Política de Cookies', path: '/politica-cookies' }
              ].map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="block text-sm text-slate-400 hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} GIAN GESTIÓN 2015 S.L. - <span className="text-sky-500 font-medium">Ahorraaislando</span>. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-sm text-center md:text-right">
            Creada y desarrollada por{' '}
            <a 
              href="https://www.iazti.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline hover:text-sky-400 transition-colors"
            >
              www.iazti.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;