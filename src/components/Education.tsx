import React, { useRef, useEffect } from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const educationData = [
  {
    degree: "Master's of Informatics",
    institution: "Nile University",
    location: "Giza, Egypt",
    status: "Pursuing",
    period: "2024 - Present",
    details: [
      "Focus on Advanced Machine Learning and Artificial Intelligence",
      "Research in Knowledge Graphs and Large Language Models"
    ],
    awards: []
  },
  {
    degree: "Bachelor's in Computer Science (Big Data)",
    institution: "Nile University",
    location: "Giza, Egypt",
    status: "Completed",
    period: "2019 - 2023",
    gpa: "3.76 (High Honors)",
    details: [
      "Specialized in Data Science and Machine Learning",
      "Graduation Project: AutoVision App - An autonomous driving decision-assistance system"
    ],
    awards: [
      "3x Dean's Honor List",
      "1x President's Honor List",
      "1st Place Graduation Project"
    ]
  }
];

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Add staggered delay for awards
            const awards = entry.target.querySelectorAll('.award-item');
            awards.forEach((award, i) => {
              (award as HTMLElement).style.transitionDelay = `${(index + 1) * 100 + i * 100}ms`;
              setTimeout(() => {
                award.classList.add('animate-fade-in');
              }, 100);
            });
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
      id="education" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-12">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 transform md:-translate-x-1/2"></div>
            
            {educationData.map((edu, index) => (
              <div 
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`flex flex-col md:flex-row items-center opacity-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline bullet */}
                <div className="order-1 md:w-1/2 flex justify-center md:justify-end md:pr-8 pb-8 md:pb-0">
                  <div className={`education-card w-full max-w-md bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 border-t-4 ${
                    index % 2 === 0 ? 'border-blue-600 dark:border-blue-400' : 'border-indigo-600 dark:border-indigo-400'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{edu.status}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
                      <span className="font-medium text-gray-800 dark:text-gray-200 mr-2">{edu.institution}</span>
                      <span>|</span>
                      <Calendar size={14} className="mx-2" />
                      <span>{edu.period}</span>
                    </div>
                    
                    {edu.gpa && (
                      <div className="mb-4 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm inline-block rounded-full">
                        GPA: {edu.gpa}
                      </div>
                    )}
                    
                    <ul className="space-y-2 mt-4">
                      {edu.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {edu.awards.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                          <Award size={16} className="mr-2 text-yellow-500" />
                          Awards & Achievements
                        </h4>
                        
                        <ul className="space-y-2">
                          {edu.awards.map((award, awardIndex) => (
                            <li 
                              key={awardIndex} 
                              className="award-item flex items-center p-2 bg-white dark:bg-gray-800 rounded-md shadow-sm opacity-0 transition-opacity duration-500"
                            >
                              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{award}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Timeline center */}
                <div className="order-0 md:order-2 z-10 flex items-center justify-center w-8 h-8">
                  <div className="w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800"></div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="order-2 md:order-3 md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;