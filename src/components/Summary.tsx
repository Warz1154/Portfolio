import React, { useRef, useEffect } from 'react';

const Summary: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="summary" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Professional Summary
          </h2>
          
          <div className="relative px-6 md:px-10 py-8 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md">
            <div className="absolute top-0 left-0 h-full w-2 bg-blue-600 dark:bg-blue-400 rounded-l-lg"></div>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I am a passionate educator and Computer Science professional with a Bachelor's in Computer Science (Big Data) from Nile University, achieving a 3.76 GPA with High Honors. As a Teaching Assistant and Software Engineer, I specialize in delivering engaging, Python-focused instruction in data analysis, programming, and machine learning.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              My expertise in Python, coupled with hands-on experience in developing AI-driven applications and automated pipelines, enables me to inspire students and foster practical, industry-relevant skills.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              My teaching approach emphasizes clarity, real-world applications, and student mentorship, supported by proficiency in Python, PySpark, TensorFlow, PyTorch, and HuggingFace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;