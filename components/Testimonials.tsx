import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María García",
    role: "Abogada",
    content: "Llevaba meses con vértigos y dolores cervicales. Después de dos sesiones de osteopatía craneal, me siento como nueva. ¡Increíble profesionalidad!",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Corredor Amateur",
    content: "Acudí por una fascitis plantar que no se curaba. El enfoque global del tratamiento no solo curó mi pie, sino que mejoró mi postura al correr.",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Martín",
    role: "Madre reciente",
    content: "Llevé a mi bebé por problemas de cólicos. El trato fue exquisito y muy suave. Mi hijo duerme mucho mejor desde entonces.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Lo que dicen mis pacientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-6">"{t.content}"</p>
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded-full bg-teal-200 flex items-center justify-center font-bold text-teal-800">
                    {t.name.charAt(0)}
                 </div>
                 <div>
                   <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                   <p className="text-slate-500 text-xs">{t.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;