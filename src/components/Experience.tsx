import React, { useRef, useEffect } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer (Part-time)',
    company: 'AI4ALL',
    location: 'Giza, Egypt',
    period: '09/2024 – Present',
    responsibilities: [
      'Built automated AI workflows using Python and Large Language Models (LLMs), accelerating processes by 40% through optimized Python scripts and automation pipelines.',
      'Implemented automation testing frameworks with Selenium and Pytest, writing Python-based test scripts to ensure robust software performance.',
      'Applied Python\'s object-oriented programming (OOP) principles to design modular, reusable code for AI applications.'
    ]
  },
  {
    title: 'Junior Research Assistant',
    company: 'Nile University',
    location: 'Giza, Egypt',
    period: '08/2023 – 10/2023',
    responsibilities: [
      'Researched Large Language Models with Knowledge Graphs, using Python libraries like TensorFlow, PyTorch, and HuggingFace for model development and data curation.',
      'Wrote Python scripts for data collection, preprocessing, and graph construction, enabling advanced reasoning in AI systems.'
    ]
  },
  {
    title: 'FinTech Developer Intern',
    company: 'MOKALMAT',
    location: 'Cairo, Egypt',
    period: '08/2023 – 10/2023',
    responsibilities: [
      'Developed a FinTech application with a Python Flask backend, integrated with Node.js and PostgreSQL for efficient data management.',
      'Wrote Python scripts for RESTful API development, enabling seamless communication between frontend (Flutter) and backend services.',
      'Utilized Docker for containerization, with Python scripts to automate deployment processes.'
    ]
  },
  {
    title: 'Information Technology Intern',
    company: 'Shaker Consultancy Group',
    location: 'Cairo, Egypt',
    period: '08/2021 – 09/2021',
    responsibilities: [
      'Managed company devices, performing hardware maintenance, software updates, and troubleshooting, with Python scripts for task automation where applicable.'
    ]
  }
];

const Experience: React.FC = () => {
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
      id="experience" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-8">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>
            
            {experiences.map((job, index) => (
              <div 
                key={index}
                ref={el => cardRefs.current[index] = el}
                className="relative flex gap-6 opacity-0"
              >
                {/* Timeline bullet */}
                <div className="flex items-center justify-center w-16">
                  <div className="w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                </div>
                
                <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600 dark:border-blue-400 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                      {job.company}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{job.period}</span>
                    <MapPin size={16} className="ml-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;