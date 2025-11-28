import React from 'react';
import { Activity, Brain, HeartPulse, Accessibility, Baby, Laptop } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Osteopatía Estructural',
    description: 'Tratamiento manual enfocado en restablecer la movilidad de la columna y articulaciones. Ideal para lumbalgias, ciáticas y dolor de cuello.',
    iconName: 'Activity'
  },
  {
    id: 2,
    title: 'Osteopatía Craneal',
    description: 'Técnicas sutiles para liberar tensión en cabeza y cuello. Muy efectivo para migrañas, bruxismo (mandíbula), vértigos y estrés.',
    iconName: 'Brain'
  },
  {
    id: 3,
    title: 'Osteopatía Visceral',
    description: 'Mejora la movilidad de los órganos para aliviar problemas digestivos como reflujo, estreñimiento o dolores menstruales.',
    iconName: 'HeartPulse'
  },
  {
    id: 4,
    title: 'Osteopatía Deportiva',
    description: 'Recuperación de lesiones, esguinces y sobrecargas. Mejora tu rendimiento y previene futuras lesiones.',
    iconName: 'Accessibility'
  },
  {
    id: 5,
    title: 'Osteopatía Pediátrica',
    description: 'Cuidado suave para los más pequeños. Tratamiento de cólicos del lactante y deformidades craneales (plagiocefalia).',
    iconName: 'Baby'
  },
  {
    id: 6,
    title: 'Cérvico-braquialgias',
    description: 'Tratamiento específico para dolores que irradian desde el cuello hacia el brazo, hormigueos y falta de fuerza.',
    iconName: 'Laptop'
  }
];

const getIcon = (name: string) => {
  switch (name) {
    case 'Activity': return <Activity size={32} />;
    case 'Brain': return <Brain size={32} />;
    case 'HeartPulse': return <HeartPulse size={32} />;
    case 'Accessibility': return <Accessibility size={32} />;
    case 'Baby': return <Baby size={32} />;
    case 'Laptop': return <Laptop size={32} />;
    default: return <Activity size={32} />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Mis Tratamientos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Salud Integral y Terapia Manual</h3>
          <p className="text-slate-600 text-lg">
            Cada dolor tiene una historia y una causa. En mi consulta abordamos el problema de forma global para obtener resultados duraderos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl p-8 hover:bg-primary hover:text-white shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-2 cursor-default"
            >
              <div className="bg-green-50 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors shadow-inner">
                {getIcon(service.iconName)}
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3 font-serif">{service.title}</h4>
              <p className="text-slate-600 group-hover:text-green-50 leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;