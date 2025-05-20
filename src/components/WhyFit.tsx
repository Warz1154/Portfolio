import React, { useRef, useEffect } from 'react';
import { CheckCircle, Target, BookOpen, Users, Stars } from 'lucide-react';

const WhyFit: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<(HTMLLIElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Add staggered animation for points
            if (entry.target.classList.contains('fit-point')) {
              const index = pointsRef.current.indexOf(entry.target as HTMLLIElement);
              if (index !== -1) {
                entry.target.style.transitionDelay = `${index * 150}ms`;
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    pointsRef.current.forEach(point => {
      if (point) observer.observe(point);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
      
      pointsRef.current.forEach(point => {
        if (point) observer.unobserve(point);
      });
    };
  }, []);

  const whyFitPoints = [
    {
      title: "Teaching Experience",
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      description: "Extensive experience teaching technical subjects including Data Analysis, Optimization Techniques, and Reinforcement Learning."
    },
    {
      title: "Python Expertise",
      icon: <Stars className="w-6 h-6 text-blue-500" />,
      description: "Strong command of Python for data science, machine learning, and automation, enabling me to deliver practical, industry-relevant instruction."
    },
    {
      title: "Curriculum Development",
      icon: <Target className="w-6 h-6 text-blue-500" />,
      description: "Skilled in designing Python-based labs, creating Jupyter Notebooks, and developing hands-on learning materials using real-world datasets."
    },
    {
      title: "Student Mentorship",
      icon: <Users className="w-6 h-6 text-blue-500" />,
      description: "Experience mentoring students on programming assignments, providing feedback, and enhancing their coding and problem-solving skills."
    }
  ];

  return (
    <section 
      id="whyfit" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Why I'm the Right Fit
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div 
            ref={textRef}
            className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg border border-blue-100 dark:border-blue-800 opacity-0"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center italic">
              "My combination of educational background, teaching experience, and technical expertise makes me an ideal candidate for this teaching position. I bring both theoretical knowledge and practical skills that enable me to connect classroom concepts with real-world applications."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyFitPoints.map((point, index) => (
              <li 
                key={index}
                ref={el => pointsRef.current[index] = el}
                className="fit-point flex bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 opacity-0 list-none"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    {point.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{point.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{point.description}</p>
                </div>
              </li>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My Python-driven projects in autonomous systems, recommendation engines, and educational content generation allow me to connect theoretical concepts with practical applications, preparing students for success in both academia and industry.
            </p>
            
            <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg">
              <CheckCircle size={20} className="mr-2" />
              Ready to Make an Impact
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFit;