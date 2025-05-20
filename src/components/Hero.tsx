import React, { useEffect, useRef } from 'react';
import { GraduationCap, Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative mb-8 md:mb-0 w-64 h-64 mx-auto md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://i.postimg.cc/25TvFBF3/1666896794430.jpg" 
                alt="Abdelrahman Lotfy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className="block">Abdelrahman</span>
              <span className="block text-blue-600 dark:text-blue-400">Mahmoud Lotfy</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Computer Science Educator & Software Engineer
            </h2>
            
            <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:abdelrahmanm.lotfyy@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  abdelrahmanm.lotfyy@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Cairo, Egypt</span>
              </div>
              
              <div className="flex items-center gap-2">
                <GraduationCap size={18} />
                <span>Computer Science (Big Data)</span>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;