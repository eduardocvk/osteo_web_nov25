import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">¿Hablamos?</h2>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto">
            Estoy disponible para resolver tus dudas. Puedes escribirme por WhatsApp para una respuesta más rápida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info Card */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-xl">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-white text-primary p-3 rounded-full shrink-0">
                   <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 font-serif">Dirección</h4>
                  <p className="text-teal-50">Plaza Santa Cristina 4<br/>28011 Madrid<br/>(Zona Puerta del Ángel)</p>
                  <a href="https://maps.google.com/?q=Plaza+Santa+Cristina+4+Madrid" target="_blank" className="text-accent hover:text-white text-sm mt-2 inline-block underline">Ver en Google Maps</a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-white text-primary p-3 rounded-full shrink-0">
                   <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 font-serif">Teléfono y WhatsApp</h4>
                  <a href="tel:676435634" className="block text-2xl font-bold text-white hover:text-accent transition-colors">676 435 634</a>
                  <p className="text-teal-50 text-sm mt-1">Atención preferente por WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-white text-primary p-3 rounded-full shrink-0">
                   <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 font-serif">Email</h4>
                  <a href="mailto:eduardocvk@gmail.com" className="text-teal-50 hover:text-white transition-colors text-lg break-all">eduardocvk@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-white text-primary p-3 rounded-full shrink-0">
                   <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 font-serif">Horario de Consulta</h4>
                  <div className="grid grid-cols-2 gap-4 text-teal-50">
                    <div>
                      <p className="font-bold text-white">Lunes - Viernes</p>
                      <p>16:00 - 21:00</p>
                    </div>
                    <div>
                      <p className="font-bold text-white">Sábados - Domingos</p>
                      <p>Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/20">
              <a href="https://wa.me/34676435634" className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition-all shadow-lg group">
                <MessageCircle className="group-hover:scale-110 transition-transform" />
                Abrir Chat de WhatsApp
              </a>
            </div>
          </div>

          {/* Map Image / Location Visual */}
          <div className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl relative bg-slate-200 group">
            {/* Simple static map representation or placeholder for embedding */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.643719124637!2d-3.7299126!3d40.4167325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287963777c5f%3A0x123456789!2sPlaza%20Santa%20Cristina%2C%204%2C%2028011%20Madrid!5e0!3m2!1ses!2ses!4v1625000000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={false} 
              loading="lazy"
              className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg pointer-events-none">
              <p className="text-primary font-bold text-center">Fácil aparcamiento en la zona</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;