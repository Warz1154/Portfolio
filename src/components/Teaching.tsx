import React, { useRef, useEffect } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const teachingExperience = [
  {
    title: 'Teaching Assistant',
    company: 'Nile University',
    location: 'Giza, Egypt',
    period: '08/2023 – 01/2024',
    responsibilities: [
      'Courses Taught: Discrete Math, Data Analysis, Optimization Techniques, Reinforcement Learning',
      'Delivered Python-based instruction, guiding students through hands-on coding exercises using real-world datasets.',
      'Mentored students on Python programming assignments, providing feedback to enhance their coding and problem-solving skills.',
      'Developed Python-based labs using Jupyter Notebooks to teach data analysis and machine learning concepts, leveraging libraries like NumPy, Pandas, and Scikit-learn.',
      'Reviewed assignments, ensuring students mastered Python for data manipulation and algorithmic problem-solving.'
    ]
  },
  {
    title: 'Big Data Facilitator',
    company: 'Samsung (SIC)',
    location: 'Giza, Egypt',
    period: '08/2023 – 10/2023',
    responsibilities: [
      'Led hands-on labs in Big Data and data pipeline automation, teaching students to build scalable solutions using Python, PySpark, Apache Hadoop, NiFi, and AWS.',
      'Created Python-based tutorials to demonstrate data processing workflows, enabling students to handle large datasets efficiently.',
      'Guided students in writing clean, efficient Python code, emphasizing best practices and PEP 8 standards.',
      'Facilitated practical sessions on distributed computing, using PySpark for real-time data analysis.'
    ]
  },
  {
    title: 'Junior Teaching Assistant',
    company: 'Nile University',
    location: 'Giza, Egypt',
    period: '08/2022 – 2023',
    responsibilities: [
      'Explained programming concepts with a focus on Python, demonstrating tasks like algorithm implementation and data visualization using Matplotlib and Seaborn.',
      'Provided feedback on student assignments, emphasizing Python code optimization and debugging techniques.',
      'Supported students in applying Python to solve problems in data structures and statistical analysis, enhancing their technical skills.'
    ]
  }
];

const Teaching: React.FC = () => {
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
      id="teaching" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Teaching Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {teachingExperience.map((job, index) => (
              <div 
                key={index}
                ref={el => cardRefs.current[index] = el}
                className={`flex flex-col md:flex-row gap-8 opacity-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 flex justify-center items-start">
                  <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600 dark:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-5px]">
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
                
                {/* Timeline dot */}
                <div className="hidden md:flex justify-center items-center">
                  <div className="w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-800 z-10 animate-pulse-slow"></div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;