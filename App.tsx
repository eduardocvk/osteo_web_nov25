import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import WhatsappButton from './components/WhatsappButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-natural">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h5 className="text-white font-serif font-bold text-lg mb-4">Osteopatía Eduardo Callejo</h5>
            <p className="mb-4">Plaza Santa Cristina 4, 28011 Madrid</p>
            <p>Tel: 676 435 634</p>
          </div>
          <div>
            <h5 className="text-white font-serif font-bold text-lg mb-4">Enlaces</h5>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-primary transition-colors">Tratamientos</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Quién Soy</a></li>
              <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
             <h5 className="text-white font-serif font-bold text-lg mb-4">Legal</h5>
             <div className="space-y-2 flex flex-col">
                <a href="#" className="hover:text-white">Aviso Legal</a>
                <a href="#" className="hover:text-white">Política de Privacidad</a>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center mt-12 pt-8 border-t border-slate-800">
           <p>&copy; {new Date().getFullYear()} Eduardo Callejo. Todos los derechos reservados.</p>
        </div>
      </footer>

      <WhatsappButton />
      <ChatWidget />
    </div>
  );
};

export default App;