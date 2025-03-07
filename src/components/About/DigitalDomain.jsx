import React from 'react';
import { 
  FaReact, FaJs, FaNodeJs, FaPython, FaFigma, FaGithub, FaChevronRight,
  FaCode, FaRobot, FaBug, FaTools, FaPaintBrush, FaBrain
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from 'react-icons/si';

const DigitalDomain = () => {
  const techStack = [
    { icon: <FaReact className="text-blue-500" />, name: "React", level: 90 },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS", level: 85 },
    { icon: <FaJs className="text-yellow-500" />, name: "JavaScript", level: 95 },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript", level: 80 },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js", level: 85 },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB", level: 75 },
    { icon: <SiFirebase className="text-yellow-600" />, name: "Firebase", level: 70 },
    { icon: <FaPython className="text-blue-700" />, name: "Python", level: 85 },
    { icon: <FaFigma className="text-purple-500" />, name: "Figma", level: 80 },
    { icon: <FaGithub className="text-gray-800" />, name: "Git/GitHub", level: 90 },
  ];

  const services = [
    {
      icon: <FaCode className="text-primary text-2xl" />,
      title: "Full-Stack Development",
      description: "From pixel-perfect frontends to robust backends. I'll build your web application faster than you can say 'JavaScript framework'.",
      technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
      specialNote: "Warning: May include dad jokes in code comments."
    },
    {
      icon: <FaPaintBrush className="text-secondary text-2xl" />,
      title: "UI/UX Design",
      description: "Creating interfaces so intuitive, even your grandma could use them. And yes, I'll make sure the buttons are big enough.",
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      specialNote: "Includes free design puns!"
    },
    {
      icon: <FaBrain className="text-accent text-2xl" />,
      title: "Machine Learning Solutions",
      description: "Teaching computers to think, predict, and occasionally sass back. From recommendation engines to computer vision, I make AI work for you.",
      technologies: ["TensorFlow", "PyTorch", "scikit-learn", "Neural Networks"],
      specialNote: "No robots were harmed during development."
    },
    
    
    {
      icon: <FaRobot className="text-purple-500 text-2xl" />,
      title: "Automation Magic",
      description: "If you're doing it more than twice, let's automate it. I'll turn your repetitive tasks into a well-oiled machine.",
      technologies: ["Process Automation", "Scripting", "Workflow Optimization", "CI/CD"],
      specialNote: "Warning: May cause excessive free time."
    }
  ];

  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "https://placehold.co/600x400/6366f1/ffffff?text=E-Commerce+Project",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "/portfolio"
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
      image: "https://placehold.co/600x400/ec4899/ffffff?text=Task+Management+App",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      link: "/portfolio"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex data sets with customizable charts and filters.",
      image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Data+Dashboard",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      link: "/portfolio"
    }
  ];

  return (
    <div>
      <h2 className="section-title">Tech Stack & Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
        {techStack.map((tech, index) => (
          <div key={index} className="card p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">{tech.icon}</div>
            <h3 className="font-bold mb-2">{tech.name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
              <div 
                className="bg-primary h-2.5 rounded-full" 
                style={{ width: `${tech.level}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500">{tech.level}%</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => (
          <div key={index} className="card group hover:shadow-lg transition-all">
            <div className="p-6">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
              </div>
            </div>
            <div className="border-t border-gray-100 p-4 bg-gray-50">
              <a href="mailto:kuzamayang@gmail.com" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm">
                Get a Quote <FaChevronRight size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>

      

      
    </div>
  );
};

export default DigitalDomain;