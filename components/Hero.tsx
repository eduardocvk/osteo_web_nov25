import React from 'react';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-primary text-sm font-bold tracking-wide uppercase mb-6 shadow-sm border border-green-200">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Consulta en Plaza Santa Cristina 4
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 font-serif">
              Osteopatía Profesional <br/><span className="text-primary">Eduardo Callejo</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Encuentra el origen de tu dolor y recupera tu bienestar con un enfoque honesto y personalizado. Especialista en terapia manual y recuperación funcional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/34676435634" target="_blank" className="inline-flex justify-center items-center px-8 py-4 bg-[#25D366] text-white rounded-lg font-bold text-lg hover:bg-[#1da851] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <img src="/image_1.png" className="w-6 h-6 mr-2 brightness-0 invert" alt="Whatsapp" />
                Cita por WhatsApp
              </a>
              <a href="#services" className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold text-lg hover:bg-slate-50 transition-all">
                Ver Tratamientos
              </a>
            </div>

            <div className="mt-10 flex gap-6 text-sm text-slate-500 font-medium border-t border-slate-200 pt-6">
               <div className="flex items-center gap-1">
                 <Star className="text-yellow-400 fill-current w-5 h-5" />
                 <Star className="text-yellow-400 fill-current w-5 h-5" />
                 <Star className="text-yellow-400 fill-current w-5 h-5" />
                 <Star className="text-yellow-400 fill-current w-5 h-5" />
                 <Star className="text-yellow-400 fill-current w-5 h-5" />
                 <span className="ml-2 text-slate-700 font-bold">Excelente trato</span>
               </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-green-200/50 rounded-full blur-3xl opacity-50"></div>
            {/* Using image_5.jpg - Spine visualization for strong impact */}
            <img 
              src="/image_5.jpg" 
              alt="Tratamiento de Osteopatía en Madrid - Eduardo Callejo" 
              className="relative rounded-2xl shadow-2xl object-cover h-[550px] w-full transform hover:scale-[1.01] transition-transform duration-500"
            />
            
            {/* Float Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-bounce-slow hidden md:block">
              <p className="font-serif font-bold text-primary text-lg mb-1">Horario Flexible</p>
              <p className="text-slate-600 text-sm">Lunes a Viernes<br/>16:00 a 21:00</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;