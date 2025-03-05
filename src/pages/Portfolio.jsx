import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaFigma, FaSkull, FaFire, FaJava, FaDocker, FaRobot, FaDatabase, FaGamepad, FaCoffee, FaHeart } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiFirebase, SiPostgresql, SiRedis, SiKubernetes, SiRust, SiSwift, SiFlutter, SiUnity, SiSpring } from 'react-icons/si';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const [showFailedProjects, setShowFailedProjects] = useState(false);

  const professionalProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing. Only crashed during Black Friday sales, which I maintain was a feature to simulate the authentic in-store experience.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates. Ironically, I procrastinated for three months before finishing it.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex data sets with customizable charts and filters. The client asked for 'something that pops' so I added 37 animations. They meant visually engaging, not literally popping.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "Enterprise-level cloud resource management platform. Successfully migrated 100+ servers with only 3 heart attacks and 2 sleepless weeks. The documentation is longer than War and Peace.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaDocker />, name: "AWS" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "AI-Powered Analytics Platform",
      description: "Machine learning platform that predicts business trends. It's right 60% of the time, every time. The other 40% it's just making educated guesses, just like the rest of us.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaRobot />, name: "TensorFlow" },
        { icon: <SiPostgresql />, name: "PostgreSQL" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Real-time Communication Platform",
      description: "Video conferencing app that actually works (most of the time). Includes a 'fake bad connection' button for gracefully leaving awkward meetings.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiRedis />, name: "Redis" },
        { icon: <SiRedis />, name: "WebRTC" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Financial Management System",
      description: "Banking software that handles millions in transactions. The stress of building this aged me 10 years, but hey, at least the decimal points are in the right place now!",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaJava />, name: "Java" },
        { icon: <SiSpring />, name: "Spring" },
        { icon: <FaDatabase />, name: "Oracle" },
        { icon: <FaReact />, name: "React" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Healthcare Management Platform",
      description: "Patient management system used by actual doctors. No pressure, just people's lives depending on my ability to center a div.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiPostgresql />, name: "PostgreSQL" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    }
  ];

  const personalProjects = [
    {
      title: "Recipe Collection App",
      description: "A personal project to collect and organize family recipes with search and categorization features. Currently contains 157 variations of 'pasta with whatever was in the fridge'.",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Travel Journal",
      description: "A digital journal for documenting travel experiences with photo galleries and interactive maps. Most entries are about getting lost and finding unexpected bathrooms in emergency situations.",
      image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiMongodb />, name: "MongoDB" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Weather Visualization",
      description: "A creative visualization of weather data that transforms forecasts into artistic representations. It's wrong 60% of the time, but looks pretty 100% of the time.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaFigma />, name: "Figma" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Coffee Shop Finder",
      description: "App that locates nearby coffee shops and rates them based on WiFi stability and power outlet availability. Because let's be honest, that's what really matters.",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaCoffee />, name: "CoffeeScript" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Plant Care Companion",
      description: "An app to help keep plants alive. Includes a 'Last Words' feature to document your plant's final moments. RIP, Steve the Succulent (2023-2023).",
      image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiFlutter />, name: "Flutter" },
        { icon: <FaHeart />, name: "Love" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Retro Game Collection",
      description: "A collection of classic game remakes. Spent more time playing them than developing them. For research purposes, obviously.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaGamepad />, name: "Phaser.js" },
        { icon: <SiUnity />, name: "Unity" },
        { icon: <FaJava />, name: "Java" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Mood Tracker",
      description: "App that tracks your daily mood with emoji. Found out I'm mostly '😴' with occasional bursts of '🤔' and '🍕'. Very scientific.",
      image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiFirebase />, name: "Firebase" },
        { icon: <FaHeart />, name: "Emotions" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    },
    {
      title: "Developer Excuse Generator",
      description: "Generates professional-sounding excuses for missed deadlines. 'The code works on my machine' is now available in 12 languages!",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaCoffee />, name: "Coffee" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "GitHub" },
        { icon: <FaExternalLinkAlt />, url: "https://example.com", label: "Live Demo" }
      ]
    }
  ];
  
  const failedProjects = [
    {
      title: "Self-Watering Plant System",
      description: "An automated system to water my plants. Flooded my apartment on day 3. My landlord still brings it up at every opportunity.",
      image: "https://images.unsplash.com/photo-1530968033775-2c92736b131e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaFire />, name: "Arduino" },
        { icon: <FaSkull />, name: "Poor Judgment" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "Evidence of Failure" }
      ]
    },
    {
      title: "AI-Powered Cat Translator",
      description: "Attempted to create an app that translates cat meows into English. Turns out my cat was just saying 'feed me' in 37 different tones.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaSkull />, name: "Misplaced Optimism" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "Abandoned Repo" }
      ]
    },
    {
      title: "Dating App for Introverts",
      description: "A dating app where you never have to meet in person. Turns out this already exists and it's called 'Twitter'.",
      image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaSkull />, name: "Existential Dread" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "Code Graveyard" }
      ]
    },
    {
      title: "Quantum Bug Predictor",
      description: "AI system to predict where bugs would appear in code before writing it. Achieved 100% accuracy by declaring all code as potentially buggy.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaRobot />, name: "AI" },
        { icon: <FaSkull />, name: "Quantum Confusion" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "Quantum Remains" }
      ]
    },
    {
      title: "Time Management App",
      description: "App to help developers manage their time better. Development stopped when I lost track of time playing video games.",
      image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaSkull />, name: "Irony" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "Lost Time" }
      ]
    },
    {
      title: "Blockchain Everything",
      description: "Attempted to put everything on the blockchain. Even tried to put the blockchain on the blockchain. The recursion is still running somewhere.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <SiRust />, name: "Rust" },
        { icon: <FaSkull />, name: "Blockchain Fever" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "Chain of Fools" }
      ]
    },
    {
      title: "Mind Reading IDE",
      description: "IDE that writes code based on your thoughts. Produced nothing but 'coffee' and 'nap' in an infinite loop.",
      image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaPython />, name: "Python" },
        { icon: <FaSkull />, name: "Brain Fog" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "Mental Debris" }
      ]
    },
    {
      title: "Social Media for Plants",
      description: "Instagram for plants. Failed when we realized plants can't take selfies. Who knew photosynthesis doesn't include photography?",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        { icon: <FaReact />, name: "React" },
        { icon: <SiSwift />, name: "Swift" },
        { icon: <FaSkull />, name: "Green Thumb Failure" }
      ],
      links: [
        { icon: <FaGithub />, url: "https://github.com", label: "Wilted Dreams" }
      ]
    }
  ];

  const projects = activeTab === 'professional' ? professionalProjects : 
                  (showFailedProjects ? failedProjects : personalProjects);

  return (
    <div className="page-container">
      <AnimatedSection>
        <h1 className="section-title">My Portfolio</h1>
        <p className="text-lg text-gray-700 mb-8">
          Here's a collection of projects I've worked on. Each one represents a unique challenge, learning experience, 
          and at least three existential crises at 2 AM.
        </p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'professional'
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => {
                setActiveTab('professional');
                setShowFailedProjects(false);
              }}
            >
              Professional Projects
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'personal' && !showFailedProjects
                  ? 'bg-secondary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => {
                setActiveTab('personal');
                setShowFailedProjects(false);
              }}
            >
              Personal Projects
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                showFailedProjects
                  ? 'bg-red-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => {
                setActiveTab('personal');
                setShowFailedProjects(true);
              }}
            >
              Failed Experiments
            </button>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {projects.map((project, index) => (
          <AnimatedSection key={index} delay={index * 0.1}>
            <div className="card h-full flex flex-col overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {showFailedProjects && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    FAILED
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm"
                      >
                        <span className="text-primary">{tech.icon}</span> {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 p-4 mt-auto">
                <div className="flex justify-between">
                  {project.links.map((link, linkIndex) => (
                    <a 
                      key={linkIndex} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                    >
                      {link.icon} <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              {showFailedProjects && (
                <div className="bg-red-100 p-3 border-t border-red-200">
                  <p className="text-sm text-red-700 italic">Lesson learned: {
                    index === 0 ? "Water and electronics don't mix, neither do tears and keyboards." :
                    index === 1 ? "Cats are smarter than developers." :
                    index === 2 ? "Some problems are already solved by Twitter, unfortunately." :
                    index === 3 ? "Not everything needs AI, sometimes a Magic 8-Ball is enough." :
                    index === 4 ? "The irony of failing at time management isn't lost on me." :
                    index === 5 ? "Just because you can blockchain something, doesn't mean you should." :
                    index === 6 ? "Sometimes the best code is the code you don't write." :
                    "Plants are better at Instagram than we thought."
                  }</p>
                </div>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.3}>
        <div className="text-center bg-gray-50 p-8 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-lg text-gray-700 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Fair warning: I will probably overthink everything and ask too many questions.
          </p>
          <a 
            href="mailto:your.email@example.com" 
            className="btn btn-primary inline-block"
          >
            Get In Touch
          </a>
          <p className="text-xs text-gray-500 mt-4 italic">
            * Response times may vary based on coffee intake and whether Mercury is in retrograde.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Portfolio;