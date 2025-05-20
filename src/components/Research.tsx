import React, { useRef, useEffect } from 'react';
import { BookOpen, Calendar, Award } from 'lucide-react';

const researchPrograms = [
  {
    title: 'Dell Envision The Future: Competition',
    organization: 'DELL Technologies',
    location: 'Cairo, Egypt',
    period: '05/2024 – 08/2024',
    description: [
      'Developed a Python-based system for disaster discovery, integrating semantic reasoning and weather forecasting patterns using LLMs.',
      'Leveraged Python libraries for data analysis and model development, contributing to innovative solutions.'
    ],
    achievement: 'Finalist in nationwide competition'
  },
  {
    title: 'Valeo GP Support Program',
    organization: 'Valeo',
    location: 'Cairo, Egypt',
    period: '11/2023 – 08/2024',
    description: [
      'Researched autonomous methodologies using Python, LLMs, and Knowledge Graphs for decision assistance in driving scenarios.',
      'Built a Python-driven pipeline integrated with a mobile app, enhancing accessibility for end-users.'
    ],
    achievement: 'Selected among top 10 research proposals'
  }
];

const Research: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      cardRefs.current.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section 
      id="research" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Competitive Research Programs
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {researchPrograms.map((program, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className="mb-12 opacity-0"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
                <div className="p-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-3 md:mb-0">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
                        <BookOpen size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{program.title}</h3>
                    </div>
                    
                    {program.achievement && (
                      <div className="flex items-center">
                        <Award size={16} className="text-yellow-500 mr-1" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {program.achievement}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <span className="font-medium text-gray-800 dark:text-gray-200 mr-2">{program.organization}</span>
                    <span>|</span>
                    <Calendar size={14} className="mx-2" />
                    <span>{program.period}</span>
                    <span className="mx-2">|</span>
                    <span>{program.location}</span>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {program.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;