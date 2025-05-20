import React, { useRef, useEffect } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'AutoVision App',
    subtitle: 'Graduation Project',
    description: 'An autonomous driving decision-assistance system using Python-based LLMs and Knowledge Graphs for enhanced reasoning.',
    achievements: [
      'Built a Flask-based backend in Python to integrate with a Flutter mobile app',
      'Developed reasoning algorithms using LangChain and Neo4j',
      'Achieved 1st Place for the graduation project',
    ],
    technologies: ['Python', 'LangChain', 'Flask', 'HuggingFace', 'Neo4j', 'RESTful API'],
    imageUrl: 'https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    title: 'Graph-Based Recommendation System',
    subtitle: 'Research Project',
    description: 'A personalized recommendation system for electronic products using Python and Graph Neural Networks to predict user ratings.',
    achievements: [
      'Processed user-product interaction data with Pandas and NumPy',
      'Trained models with PyTorch for accurate predictions',
      'Improved recommendation accuracy by 27%'
    ],
    technologies: ['Python', 'Graph Neural Networks', 'PyTorch', 'Pandas', 'NumPy'],
    imageUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    title: 'Plant Leaf Classification',
    subtitle: 'Machine Learning Project',
    description: 'A deep learning system in Python using DenseNet architecture to classify plant species from leaf images.',
    achievements: [
      'Preprocessed image data with Python\'s OpenCV',
      'Trained models with TensorFlow for high classification accuracy',
      'Achieved 94% classification accuracy'
    ],
    technologies: ['Python', 'DenseNet', 'TensorFlow', 'OpenCV'],
    imageUrl: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    title: 'Course Content Generation Using LLMs',
    subtitle: 'Research Project',
    description: 'Using Python to collect and analyze textbook data, generating educational content with advanced LLMs.',
    achievements: [
      'Published a research paper detailing the Python-based pipeline',
      'Showcased automation and content creation efficiency',
      'Improved content generation efficiency by 40%'
    ],
    technologies: ['Python', 'GPT-2', 'LLaMA 2', 'Falcon 7B', 'HuggingFace'],
    imageUrl: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    links: {
      github: '#',
      paper: '#'
    }
  },
  {
    title: 'Age Capturing and Gender Detection',
    subtitle: 'Computer Vision Project',
    description: 'Implementation of Python-based Long Short-Term Memory (LSTM) and Convolutional Neural Networks (CNN) for age estimation and gender detection.',
    achievements: [
      'Trained models on diverse demographics using Python',
      'Achieved high accuracy in demographic identification',
      'Optimized neural network architecture for real-time processing'
    ],
    technologies: ['Python', 'LSTM', 'CNN', 'TensorFlow', 'OpenCV'],
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    links: {
      github: '#',
      demo: '#'
    }
  }
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            
            // Add staggered animation delay for projects
            if (entry.target.classList.contains('project-card')) {
              entry.target.style.transitionDelay = `${index * 150}ms`;
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    projectRefs.current.forEach(project => {
      if (project) observer.observe(project);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      projectRefs.current.forEach(project => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300 opacity-0"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="project-card bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 opacity-0"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="px-2 py-1 bg-blue-600 dark:bg-blue-500 text-white text-xs font-medium rounded">
                    {project.subtitle}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 dark:text-gray-400 text-xs flex items-start">
                        <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1 mr-2"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center text-sm"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                  
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center text-sm"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                  
                  {project.links.paper && (
                    <a 
                      href={project.links.paper}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center text-sm"
                    >
                      <Code size={16} className="mr-1" />
                      Paper
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;