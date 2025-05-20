import React, { useRef, useEffect } from 'react';
import { BookOpen, Calendar, Link, Download } from 'lucide-react';

const publications = [
  {
    title: 'Beyond Sight: Distance-Aware LVMs for Smarter Navigation',
    conference: 'MVML Spain (Best paper Award)',
    date: 'June 2024',
    abstract: 'Developed an approach to enhance autonomous driving scene descriptions by integrating distance estimation techniques with Large and Vision Language Models, combining computer vision and natural language processing to provide detailed and accurate descriptions of driving conditions and object distances.',
    link: 'https://avestia.com/EECSS2024_Proceedings/files/paper/MVML/MVML_116.pdf',
    technologies: ['LLMs', 'Computer Vision', 'Distance Estimation', 'NLP']
  },
  {
    title: 'Knowledge Graphs: The Future of Data Integration and Insightful Discovery',
    conference: 'IGI-Global',
    date: 'May 2024',
    abstract: 'Explored Knowledge Graphs\' applications in integrating diverse data sources, examining construction methodologies for static and dynamic graphs, and investigating their practical uses in AI-driven decision-making, autonomous navigation, and multimedia analysis to enhance reasoning and contextual understanding.',
    link: 'https://avestia.com/EECSS2024_Proceedings/files/paper/MVML/MVML_116.pdf',
    technologies: ['Knowledge Graphs', 'Data Integration', 'AI Decision-Making']
  },
  {
    title: 'Sentiment Analysis for Arabic Product Reviews using LLMs and Knowledge Graphs',
    conference: 'IEEE Explore',
    date: 'April 2024',
    abstract: 'Analyzed Arabic product reviews using advanced language models and knowledge graphs to understand consumer sentiments.',
    link: 'https://www.arxiv.org/abs/2502.15689',
    technologies: ['LLMs', 'Knowledge Graphs', 'Sentiment Analysis', 'Arabic NLP']
  },
  {
    title: 'A Comparative Analysis of Large Language Models for Automated Course Content Generation from Books',
    conference: 'NILES',
    date: 'March 2024',
    abstract: 'Conducted comparative analysis of various LLMs for automated educational content generation, focusing on accuracy and pedagogical effectiveness.',
    link: 'https://ieeexplore.ieee.org/document/10753166',
    technologies: ['LLMs', 'Education Technology', 'Content Generation', 'NLP']
  }
];

const Publications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pubRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // For publication cards
            if (entry.target.classList.contains('publication-card')) {
              setTimeout(() => {
                entry.target.classList.add('expanded');
              }, 300);
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    pubRefs.current.forEach(pub => {
      if (pub) observer.observe(pub);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      pubRefs.current.forEach(pub => {
        if (pub) observer.unobserve(pub);
      });
    };
  }, []);

  return (
    <section 
      id="publications" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Publications
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <div 
              key={index}
              ref={el => pubRefs.current[index] = el}
              className="publication-card relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 opacity-0 transition-all duration-500 ease-in-out transform hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-blue-600 dark:bg-blue-400 rounded-l-lg"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-3 md:mb-0">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3">
                    <BookOpen size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{pub.title}</h3>
                </div>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>{pub.date}</span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic border-l-4 border-gray-200 dark:border-gray-700 pl-3">
                {pub.abstract}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {pub.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                {pub.link && (
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors duration-300"
                  >
                    <Link size={16} className="mr-2" />
                    View Publication
                  </a>
                )}
                
                {pub.link && (
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-md transition-colors duration-300"
                  >
                    <Download size={16} className="mr-2" />
                    Download PDF
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;