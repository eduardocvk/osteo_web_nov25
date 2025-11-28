import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Quién Soy', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-3 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img src="/image_10.png" alt="Osteopatía Eduardo Callejo Logo" className="h-12 md:h-14 object-contain" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/34676435634" 
              target="_blank"
              rel="noreferrer"
              className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <img src="/image_1.png" alt="Whatsapp" className="w-5 h-5 filter brightness-0 invert" />
              Cita WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <a href="tel:676435634" className="mr-4 text-primary bg-accent p-2 rounded-full">
                <Phone size={20} />
             </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-xl border-t border-slate-100">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/34676435634"
              target="_blank"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-4 bg-[#25D366] text-white px-4 py-3 rounded-lg font-bold flex justify-center items-center gap-2"
            >
              <img src="/image_1.png" alt="Whatsapp" className="w-6 h-6 filter brightness-0 invert" />
              Pedir Cita por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;