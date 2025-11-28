import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-natural">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative group">
             <div className="absolute inset-0 bg-primary rounded-3xl transform -rotate-3 translate-x-2 translate-y-2 opacity-10 group-hover:rotate-0 transition-all duration-500"></div>
             {/* Using image_12.jpg - Portrait of Eduardo */}
             <img 
               src="/image_12.jpg" 
               alt="Eduardo Callejo Osteópata" 
               className="relative rounded-3xl shadow-lg w-full object-cover h-[600px] grayscale hover:grayscale-0 transition-all duration-500"
             />
          </div>

          <div className="order-1 lg:order-2 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 font-serif">
              Hola, soy <span className="text-primary">Eduardo Callejo</span>
            </h2>
            <h3 className="text-xl text-slate-600 font-medium mb-6 border-b-2 border-accent inline-block pb-1">
              Tu Osteópata en Madrid (Cerca de Príncipe Pío - Madrid Río)
            </h3>
            
            <div className="space-y-4 text-slate-600 leading-relaxed mb-8 text-lg">
              <p>
                Bienvenidos a mi consulta. Entiendo la salud como un equilibrio. Mi trabajo consiste en escuchar a tu cuerpo, identificar las restricciones que causan dolor y devolverle la movilidad necesaria para que se cure a sí mismo.
              </p>
              <p>
                En mi clínica en <strong>Puerta del Ángel</strong>, ofrezco un espacio tranquilo y profesional. Cada sesión es única, combinando técnicas estructurales, viscerales y craneales según lo que tú necesites en ese momento.
              </p>
              <p>
                Mi compromiso es ofrecerte un trato cercano y honesto. Si buscas aliviar dolores crónicos, recuperarte de una lesión o simplemente mejorar tu bienestar general, estoy aquí para ayudarte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                 <p className="font-bold text-primary mb-1">Enfoque Personal</p>
                 <p className="text-sm text-slate-500">Tratamientos 100% manuales adaptados a ti.</p>
               </div>
               <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                 <p className="font-bold text-primary mb-1">Ubicación Céntrica</p>
                 <p className="text-sm text-slate-500">Fácil acceso en Madrid, Puerta del Ángel.</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;