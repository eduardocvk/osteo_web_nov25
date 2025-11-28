import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "¿Qué es la osteopatía y cómo alivia el dolor de espalda?",
    excerpt: "Descubre cómo el enfoque holístico de la osteopatía trata el origen del dolor lumbar y cervical, no solo los síntomas.",
    image: "/image_5.jpg",
    date: "10 Oct, 2023",
    slug: "#"
  },
  {
    id: 2,
    title: "Osteopatía para el estrés: Liberando la tensión física",
    excerpt: "El estrés se acumula en el cuerpo causando rigidez. Aprende cómo la terapia manual ayuda a regular tu sistema nervioso.",
    image: "/image_6.jpg",
    date: "25 Sep, 2023",
    slug: "#"
  },
  {
    id: 3,
    title: "Prevención de lesiones en corredores y deportistas",
    excerpt: "La osteopatía deportiva no es solo para curar. Mejora tu biomecánica y previene esguinces y tendinitis recurrentes.",
    image: "/image_2.jpg",
    date: "15 Sep, 2023",
    slug: "#"
  },
  {
    id: 4,
    title: "Osteopatía Visceral: La conexión digestión-espalda",
    excerpt: "¿Sabías que un problema digestivo puede causar dolor lumbar? Explicamos la relación anatómica y su tratamiento.",
    image: "/image_3.jpg",
    date: "01 Sep, 2023",
    slug: "#"
  },
  {
    id: 5,
    title: "Bruxismo y dolor de mandíbula: Enfoque craneal",
    excerpt: "Apretar los dientes afecta a tu cuello y cabeza. La osteopatía craneal ofrece alivio efectivo para el bruxismo.",
    image: "/image_7.jpg",
    date: "20 Ago, 2023",
    slug: "#"
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Blog de Salud</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Consejos y Bienestar</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-3 leading-snug font-serif group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a href={post.slug} className="inline-flex items-center text-primary font-semibold text-sm hover:underline">
                  Leer más <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;