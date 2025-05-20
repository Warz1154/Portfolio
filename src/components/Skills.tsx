import React, { useRef, useEffect, useState } from 'react';
import { Code, Database, Server, BarChart, Monitor } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <Code size={24} />,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 75 },
      { name: 'Dart', level: 65 }
    ]
  },
  {
    title: 'Python Libraries/Frameworks',
    icon: <Monitor size={24} />,
    skills: [
      { name: 'NumPy', level: 90 },
      { name: 'Pandas', level: 90 },
      { name: 'TensorFlow', level: 85 },
      { name: 'PyTorch', level: 85 },
      { name: 'Scikit-learn', level: 80 },
      { name: 'Flask', level: 75 },
      { name: 'LangChain', level: 70 }
    ]
  },
  {
    title: 'Big Data Tools',
    icon: <Database size={24} />,
    skills: [
      { name: 'PySpark', level: 85 },
      { name: 'Apache Hadoop', level: 75 },
      { name: 'Apache NiFi', level: 70 },
      { name: 'AWS', level: 65 }
    ]
  },
  {
    title: 'Other Tools',
    icon: <Server size={24} />,
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'Git', level: 85 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'Node.js', level: 70 },
      { name: 'Flutter', level: 65 }
    ]
  },
  {
    title: 'Specializations',
    icon: <BarChart size={24} />,
    skills: [
      { name: 'Data Analysis', level: 90 },
      { name: 'Machine Learning', level: 85 },
      { name: 'NLP', level: 80 },
      { name: 'Automation', level: 85 },
      { name: 'Graph-based Systems', level: 75 }
    ]
  }
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          entries[0].target.classList.add('animate-fade-in');
        }
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
      id="skills" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;