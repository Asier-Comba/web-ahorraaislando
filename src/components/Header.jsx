import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre nosotros', path: '/sobre-nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Cómo funciona', path: '/como-funciona' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const logoUrl = "https://horizons-cdn.hostinger.com/9831e720-e6b2-43cf-9769-a218c73a8580/dac7cae360710cb9c81da478d0b91119.png";

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/17ra8dRKN6/", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/ahorraaislando/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/ahorraaislando?s=08", label: "Twitter/X" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logoUrl} 
              alt="Ahorraaislando Logo" 
              className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                    location.pathname === link.path 
                      ? 'text-sky-600' 
                      : 'text-slate-600 hover:text-orange-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-orange-500 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              
              <a href="tel:675893453">
                <Button className="bg-sky-600 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>675 893 453</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-orange-500 transition-colors"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 border-t border-slate-100"
            >
              <div className="flex flex-col py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      location.pathname === link.path 
                        ? 'bg-sky-50 text-sky-600' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-orange-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="flex items-center justify-center gap-6 py-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-orange-500 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>

                <div className="pt-2 px-4">
                  <a
                    href="tel:675893453"
                    className="flex items-center justify-center gap-2 bg-sky-600 text-white px-4 py-3 rounded-xl hover:bg-orange-500 transition-colors w-full font-bold shadow-md"
                  >
                    <Phone className="w-5 h-5" />
                    <span>675 893 453</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;