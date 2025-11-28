import React from 'react';

const WhatsappButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/34676435634"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group border-4 border-white"
      aria-label="Contactar por WhatsApp"
    >
      <img src="/image_1.png" alt="WhatsApp" className="w-8 h-8 filter brightness-0 invert" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold pl-0 group-hover:pl-2">
        Pedir Cita
      </span>
    </a>
  );
};

export default WhatsappButton;