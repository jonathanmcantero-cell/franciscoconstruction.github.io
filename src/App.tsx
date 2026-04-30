/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  MessageCircle, 
  Phone, 
  Paintbrush, 
  Hammer, 
  LayoutTemplate,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

type Lang = 'es' | 'en';

const CONTENT = {
  es: {
    nav: {
      about: 'Nosotros',
      services: 'Servicios',
      contact: 'Contacto',
      switchBg: 'Switch to English'
    },
    hero: {
      title: 'Francisco Construction',
      subtitle: 'Calidad y Confianza en Cada Detalle',
      cta: 'Nuestros Servicios'
    },
    about: {
      title: '¿Quiénes Somos?',
      description: 'En Francisco Construction, nos especializamos en transformar espacios en México. Con años de experiencia en el sector, nos enfocamos en ofrecer acabados de alta calidad que combinan durabilidad y estética.',
      styleTitle: 'Nuestro Estilo',
      colors: [
        { name: 'Blanco', desc: 'Para dar amplitud y luz.' },
        { name: 'Madera', desc: 'Para calidez y textura.' },
        { name: 'Gris', desc: 'Para un toque moderno y sofisticado.' }
      ]
    },
    services: {
      title: 'Nuestros Servicios',
      items: [
        { title: 'Instalación de Pisos', desc: 'Desde cerámicos hasta acabados modernos.', whatsappMsg: 'Hola, me gustaría recibir más información sobre el servicio de Instalación de Pisos.' },
        { title: 'Pintura Profesional', desc: 'Interiores y exteriores con acabados perfectos.', whatsappMsg: 'Hola, me gustaría recibir más información sobre el servicio de Pintura Profesional.' },
        { title: 'Tablaroca (Chirock)', desc: 'Divisiones, plafones y reparaciones estructurales.', whatsappMsg: 'Hola, me gustaría recibir más información sobre el servicio de Tablaroca (Chirock).' }
      ]
    },
    contact: {
      title: '¡Cotiza tu proyecto hoy mismo!',
      desc: 'Estamos listos para ayudarte a renovar tu hogar o negocio.',
      phone: 'Teléfono: 912 780 9786',
      cta: 'Envíanos un mensaje',
      whatsappMsg: 'Hola, me gustaría solicitar una cotización con Francisco Construction.'
    },
    footer: {
      rights: '© 2026 Francisco Construction. Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      contact: 'Contact',
      switchBg: 'Cambiar a Español'
    },
    hero: {
      title: 'Francisco Construction',
      subtitle: 'Quality and Trust in Every Detail',
      cta: 'Our Services'
    },
    about: {
      title: 'About Us',
      description: 'At Francisco Construction, we specialize in transforming spaces in Mexico. With years of experience in the industry, we focus on delivering high-quality finishes that combine durability and aesthetics.',
      styleTitle: 'Our Style',
      colors: [
        { name: 'White', desc: 'To create space and brightness.' },
        { name: 'Wood', desc: 'For warmth and texture.' },
        { name: 'Gray', desc: 'For a modern and sophisticated touch.' }
      ]
    },
    services: {
      title: 'Our Services',
      items: [
        { title: 'Flooring Installation', desc: 'From ceramic to modern finishes.', whatsappMsg: 'Hello, I would like to receive more information about the Flooring Installation service.' },
        { title: 'Professional Painting', desc: 'Interior and exterior with perfect finishes.', whatsappMsg: 'Hello, I would like to receive more information about the Professional Painting service.' },
        { title: 'Drywall (Sheetrock)', desc: 'Partitions, ceilings, and structural repairs.', whatsappMsg: 'Hello, I would like to receive more information about the Drywall (Sheetrock) service.' }
      ]
    },
    contact: {
      title: 'Request your quote today!',
      desc: 'We are ready to help you renovate your home or business.',
      phone: 'Phone: 912 780 9786',
      cta: 'Send us a message',
      whatsappMsg: 'Hello, I would like to request a quote from Francisco Construction.'
    },
    footer: {
      rights: '© 2026 Francisco Construction. All rights reserved.'
    }
  }
};

const WHATSAPP_BASE = 'https://wa.me/529127809786';

export default function App() {
  const [lang, setLang] = useState<Lang>('es');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = CONTENT[lang];
  const whatsappLink = `${WHATSAPP_BASE}?text=${encodeURIComponent(t.contact.whatsappMsg)}`;

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <div className="min-h-screen relative font-sans text-gray-900 bg-brand-gray-light selection:bg-brand-wood selection:text-white">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="w-10 h-10 bg-brand-wood rounded-lg flex items-center justify-center text-white">
                <Hammer className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-brand-gray">
                Francisco<span className="text-brand-wood font-normal">Construction</span>
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-brand-wood transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-6 w-px bg-gray-200"></div>
              <button 
                onClick={toggleLang}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-wood transition-colors group px-3 py-2 rounded-full hover:bg-gray-50"
                aria-label={t.nav.switchBg}
              >
                <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>{lang === 'es' ? 'EN' : 'ES'}</span>
              </button>
              <a 
                href="#contact" 
                className="bg-brand-gray text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm"
              >
                {t.nav.contact}
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={toggleLang}
                className="flex items-center gap-1 text-sm font-medium text-gray-600 p-2"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === 'es' ? 'EN' : 'ES'}</span>
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-brand-wood rounded-md border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern Construction Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-wood"></span>
              México
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] font-heading tracking-tight drop-shadow-sm">
              Francisco <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-wood-light to-brand-wood">
                Construction
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl font-light leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#services" 
                className="bg-brand-wood text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-brand-wood-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {t.hero.cta}
              </a>
              <a 
                href="#contact" 
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Construction work" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-gray-light rounded-full -z-10"></div>
              <div className="absolute top-8 -left-8 w-32 h-32 bg-brand-wood/10 rounded-full blur-2xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-sm font-bold text-brand-wood uppercase tracking-wider mb-2">{t.about.title}</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-heading text-brand-gray mb-6 leading-tight">
                {lang === 'es' ? 'Transformando Espacios en México' : 'Transforming Spaces in Mexico'}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.about.description}
              </p>
              
              <div className="mt-8 border-t border-gray-100 pt-8">
                <h4 className="font-heading font-semibold text-xl mb-6 flex items-center gap-2">
                  <Paintbrush className="w-5 h-5 text-brand-wood" />
                  {t.about.styleTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* White */}
                  <div className="group">
                    <div className="w-12 h-12 rounded-full border border-gray-200 bg-white mb-4 shadow-sm group-hover:scale-110 transition-transform"></div>
                    <h5 className="font-semibold text-gray-900 mb-1">{t.about.colors[0].name}</h5>
                    <p className="text-sm text-gray-500 leading-snug">{t.about.colors[0].desc}</p>
                  </div>
                  {/* Wood */}
                  <div className="group">
                    <div className="w-12 h-12 rounded-full bg-brand-wood mb-4 shadow-md group-hover:scale-110 transition-transform"></div>
                    <h5 className="font-semibold text-gray-900 mb-1">{t.about.colors[1].name}</h5>
                    <p className="text-sm text-gray-500 leading-snug">{t.about.colors[1].desc}</p>
                  </div>
                  {/* Gray */}
                  <div className="group">
                    <div className="w-12 h-12 rounded-full bg-brand-gray mb-4 shadow-md group-hover:scale-110 transition-transform"></div>
                    <h5 className="font-semibold text-gray-900 mb-1">{t.about.colors[2].name}</h5>
                    <p className="text-sm text-gray-500 leading-snug">{t.about.colors[2].desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-brand-wood uppercase tracking-wider mb-2">{t.services.title}</h2>
            <h3 className="text-3xl md:text-5xl font-bold font-heading text-brand-gray">
              {lang === 'es' ? 'Excelencia en Cada Proyecto' : 'Excellence in Every Project'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <LayoutTemplate className="w-8 h-8" />,
                title: t.services.items[0].title,
                desc: t.services.items[0].desc,
                whatsappMsg: t.services.items[0].whatsappMsg,
              },
              {
                icon: <Paintbrush className="w-8 h-8" />,
                title: t.services.items[1].title,
                desc: t.services.items[1].desc,
                whatsappMsg: t.services.items[1].whatsappMsg,
              },
              {
                icon: <Hammer className="w-8 h-8" />,
                title: t.services.items[2].title,
                desc: t.services.items[2].desc,
                whatsappMsg: t.services.items[2].whatsappMsg,
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow group border border-transparent hover:border-gray-100 flex flex-col"
              >
                <div className="w-16 h-16 bg-brand-gray-light rounded-2xl flex items-center justify-center text-brand-wood mb-6 group-hover:bg-brand-wood group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold font-heading text-gray-900 mb-3 group-hover:text-brand-wood transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <a 
                  href={`${WHATSAPP_BASE}?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center text-brand-wood font-medium text-sm gap-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                >
                   {lang === 'es' ? 'Saber más' : 'Learn more'} <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gray opacity-5 skew-x-12 transform origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-wood/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="bg-brand-gray rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 text-brand-wood-light">
              <Hammer className="w-32 h-32 transform rotate-12" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6 relative z-10">
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 relative z-10">
              {t.contact.desc}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-whatsapp hover:bg-brand-whatsapp-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:-translate-y-1 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                {t.contact.cta}
              </a>
              <a 
                href="tel:+529127809786"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                {t.contact.phone.replace('Teléfono: ', '').replace('Phone: ', '')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gray text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="flex items-center gap-2 mb-6 opacity-80">
            <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
               <Hammer className="w-4 h-4 text-brand-wood-light" />
            </div>
            <span className="font-heading font-semibold text-lg tracking-wider text-gray-300">
               FRANCISCO<span className="text-brand-wood-light">CONSTRUCTION</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">
            {t.footer.rights}
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-2xl z-50 transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulse effect */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        <MessageCircle className="w-8 h-8 relative z-10" />
      </motion.a>

    </div>
  );
}

