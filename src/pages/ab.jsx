import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../components/AnimatedSection';
import { 
  FaCode, FaCamera, FaBookOpen, FaMusic, FaHiking, FaCookieBite, FaQuestionCircle,
  FaReact, FaNodeJs, FaFigma, FaGithub, FaJs, FaPython, FaLaptopCode, FaGamepad,
  FaUtensils, FaGlobeAmericas, FaPlane, FaMapMarkedAlt, FaSuitcase, FaQuoteLeft,
  FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaChevronRight, FaInfoCircle,
  FaLaughSquint, FaRegSurprise, FaFeatherAlt, FaHeart
} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from 'react-icons/si';

const About = () => {
  // State for interactive elements
  const [activeTab, setActiveTab] = useState('digital');
  const [showSecretHobby, setShowSecretHobby] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeQuote, setActiveQuote] = useState(0);
  const [showTooltip, setShowTooltip] = useState(null);
  const [activeFact, setActiveFact] = useState(0);
  
  // Handle secret hobby reveal
  const handleSecretClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 2) {
      setShowSecretHobby(true);
    }
  };
  
  // Auto-rotate quotes
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setActiveQuote(prev => (prev + 1) % quotes.length);
    }, 8000);
    
    return () => clearInterval(quoteInterval);
  }, []);
  
  // Auto-rotate facts
  useEffect(() => {
    const factInterval = setInterval(() => {
      setActiveFact(prev => (prev + 1) % funFacts.length);
    }, 5000);
    
    return () => clearInterval(factInterval);
  }, []);
  
  // Hobbies data
  const hobbies = [
    { 
      icon: <FaCode />, 
      name: "Coding", 
      description: "Typing random words until the error messages stop.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "My coding journey began when I accidentally deleted my university's entire database. Just kidding! But I did once debug a critical issue at 3 AM while sleepwalking. Fixed the bug, went back to bed, and had no memory of it the next day. My commit message was just 'zzzzzz'."
    },
    { 
      icon: <FaCamera />, 
      name: "Photography", 
      description: "Taking 500 photos to get one that's Instagram-worthy.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "I once spent three hours waiting for the 'perfect sunset shot' only to realize my lens cap was still on. The next day, I accidentally took an amazing photo while my camera was hanging around my neck. It won a local photography contest. I've never admitted it was an accident."
    },
    { 
      icon: <FaBookOpen />, 
      name: "Reading", 
      description: "Buying books I'll never finish but look good on my shelf.",
      image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "My reading habit costs me a fortune because I have a strict 'never dog-ear pages' policy, which means I buy bookmarks almost weekly after losing them. I also have a 'to-read' shelf that's now expanded to two full bookcases. At my current reading pace, I'll finish them all by approximately 2087."
    },
    { 
      icon: <FaMusic />, 
      name: "Music", 
      description: "Playing guitar at a level that makes cats leave the room.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "I've been playing guitar for 10 years and still only know four chords. But those four chords have served me well at campfires where everyone is too polite to ask me to stop. My signature move is confidently starting songs I don't know how to finish."
    },
    { 
      icon: <FaHiking />, 
      name: "Hiking", 
      description: "Walking uphill voluntarily while complaining the entire time.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "I once got lost on a 'beginner-friendly' trail and ended up accidentally crossing a provincial border. Called my friend in a panic only to discover I was 50 meters from the parking lot, just in the wrong direction. I still maintain I was exploring an 'alternate route'."
    },
    { 
      icon: <FaCookieBite />, 
      name: "Baking", 
      description: "Creating fire hazards that occasionally taste delicious.",
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "My signature baking move is forgetting a crucial ingredient and discovering it only after the item is in the oven. I've become an expert at creative rebranding: 'No, these aren't failed macarons, they're rustic almond cookies with character!'"
    },
  ];
  
  const secretHobby = { 
    icon: <FaQuestionCircle />, 
    name: "Professional Napping", 
    description: "I've developed the ability to fall asleep anywhere, anytime. My personal record is 17 seconds after sitting down in a meeting.",
    image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    story: "I once fell asleep during a job interview and somehow got the job. Apparently, my 'power nap demonstration' showed excellent time management skills. I've also perfected the art of sleeping with my eyes open during long meetings, complete with occasional nodding."
  };
  
  // Tech stack data
  const techStack = [
    { icon: <FaReact className="text-blue-500" />, name: "React", level: 90 },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS", level: 85 },
    { icon: <FaJs className="text-yellow-500" />, name: "JavaScript", level: 95 },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript", level: 80 },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js", level: 85 },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB", level: 75 },
    { icon: <SiFirebase className="text-yellow-600" />, name: "Firebase", level: 70 },
    { icon: <FaPython className="text-blue-700" />, name: "Python", level: 65 },
    { icon: <FaFigma className="text-purple-500" />, name: "Figma", level: 80 },
    { icon: <FaGithub className="text-gray-800" />, name: "Git/GitHub", level: 90 },
  ];
  
  // Featured projects
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
  
  // Media favorites
  const mediaFavorites = {
    books: [
      { title: "Atomic Habits", author: "James Clear", 
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
        rating: 5, 
        review: "Life-changing approach to building good habits and breaking bad ones." },
      { title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
        rating: 5, 
        review: "Essential reading for any software developer." },
      { title: "Dune", author: "Frank Herbert", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      rating: 4, 
      review: "Epic sci-fi masterpiece with incredible world-building.  " }
    ],
    movies: [
      { title: "The Matrix", year: 1999, poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 5 },
      { title: "Inception", year: 2010, poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 5 },
      { title: "The Lord of the Rings", year: 2001, poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: 5 }
    ],
    music: [
      { artist: "Radiohead", genre: "Alternative Rock", album: "OK Computer", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { artist: "Daft Punk", genre: "Electronic", album: "Random Access Memories", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
      { artist: "Kendrick Lamar", genre: "Hip Hop", album: "To Pimp a Butterfly", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ]
  };
  
  // Travel data
  const travelSpots = [
    { 
      location: "Davao City, Philippines", 
      coordinates: [125.6, 7.1], 
      image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      description: "My hometown, where the durian is plentiful and the traffic laws are merely suggestions.",
      favorite: "Durian fruit and local seafood"
    },
    { 
      location: "Siargao Island, Philippines", 
      coordinates: [126.0, 9.8], 
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      description: "Where I pretend to be a surfer but mostly just fall dramatically while tourists take photos.",
      favorite: "Fresh coconut and grilled fish"
    },
    { 
      location: "Tokyo, Japan", 
      coordinates: [139.7, 35.7], 
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      description: "Visited once and now I'm insufferable about Japanese culture. I say 'arigatou' to sushi chefs in Manila.",
      favorite: "Authentic ramen and takoyaki"
    },
    { 
      location: "Palawan, Philippines", 
      coordinates: [118.7, 9.8], 
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      description: "Spent three days trying to recreate this Instagram photo. Worth it for the likes.",
      favorite: "Fresh seafood and tropical fruits"
    }
  ];
  
  // Recipes
  const recipes = [
    {
      name: "Adobo with a Twist",
      ingredients: ["Chicken", "Soy sauce", "Vinegar", "Garlic", "Bay leaves", "Secret ingredient"],
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "My version of adobo has a secret ingredient that I'll never reveal. It's either cinnamon or spite, depending on my mood that day."
    },
    {
      name: "Procrastinator's Pasta",
      ingredients: ["Pasta", "Whatever is in the fridge", "Desperation", "Deadline pressure"],
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "Created during a late-night coding session when I realized I hadn't eaten in 8 hours. Now it's my signature dish for impressing dates with my 'creativity'."
    }
  ];
  
  // Quirks and fun facts
  const quirks = [
    { title: "Morning Ritual", description: "I can't start my day without checking social media in bed for at least 20 minutes, even when I'm running late." },
    { title: "Food Peculiarity", description: "I eat M&Ms in a specific color order (brown, red, orange, yellow, green, blue) and get genuinely distressed if I accidentally eat them out of sequence." },
    { title: "Secret Collection", description: "I have an extensive collection of hotel toiletries that I never use but can't bring myself to throw away." },
    { title: "Shower Concerts", description: "I perform elaborate concerts in the shower, complete with emotional ballads, acceptance speeches, and interviews about my musical journey." },
    { title: "Talking to Objects", description: "I apologize to furniture when I bump into it and thank my electronics for their service." }
  ];
  
  const funFacts = [
    "I once won a staring contest with my own reflection. It took 3 hours.",
    "My houseplants have names and backstories. Gerald the fern is going through a mid-life crisis.",
    "I can type 120 words per minute, but 80% of them are typos.",
    "I've never seen my elbows directly. Neither have you. Think about it.",
    "I believe that dinosaurs aren't extinct—they just got really good at hiding."
  ];
  
  // Favorite quotes
  const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" }
  ];
  
  // Personal philosophy
  const philosophy = {
    title: "My Personal Philosophy",
    principles: [
      "Curiosity is the foundation of growth. Never stop asking questions.",
      "Balance technical excellence with human connection. Code for people, not just machines.",
      "Embrace failure as the best teacher. Perfect success teaches you nothing.",
      "Share knowledge freely. Your success is measured by how many people you help succeed.",
      "Find joy in the journey, not just the destination."
    ]
  };
  
  // Lazy load image component
  const LazyImage = ({ src, alt, className }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
    
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        {inView ? (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transition-opacity duration-500 opacity-0 animate-fadeIn"
            onLoad={(e) => e.target.classList.remove('opacity-0')}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
        )}
      </div>
    );
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <AnimatedSection>
        <h1 className="section-title">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <img 
              src="https://placehold.co/400x600/6366f1/ffffff?text=About+Me" 
              alt="About Me" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4 bg-primary/10 p-3 rounded-lg text-center">
              <p className="text-sm italic">This photo was taken on my good side. I don't have a bad side. My mom says I'm perfect.</p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-300 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="mailto:example@email.com" className="p-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-primary">Greetings, fellow humans!</h2>
            <p className="text-lg mb-4">
              I am a self-proclaimed PROgrammer (emphasis on the 'PRO,' obviously) currently stationed in the digital hub of Biringan City, Philippines. My days are spent wrestling with code, debugging the mysteries of the universe (or at least my own programs), and occasionally Googling the syntax for a simple 'for' loop.
            </p>
            <p className="text-lg mb-4">
            I believe that the best code is written in pajamas, and I'm a firm advocate for the "work-from-home" lifestyle.  My ideal Friday night involves a steaming cup of coffee, a challenging coding project, and the blissful absence of human interaction. (Don't judge me, introverts need love too.) But don't mistake my love for solitude for a lack of personality. I'm a walking paradox: a social recluse with a passion for online communities, a quiet observer with a loud inner monologue, and a tech enthusiast with a surprisingly low tolerance for slow Internet.
            </p>
            <p className="text-lg mb-4">
              When I'm not busy with work, you'll find me exploring the hidden gems of Davao City, 
              trying out new recipes that my smoke detector inevitably disapproves of, or simply enjoying a good book 
              with a cup of coffee (that I'll reheat in the microwave at least three times before finishing).
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary mt-6">
              <p className="italic text-gray-700">
                "The best way to predict the future is to create it. The best way to avoid the future is to take a nap." 
                — This quote guides my approach to life and work.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tab navigation for main sections */}
      <AnimatedSection delay={0.1} className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <button 
            onClick={() => setActiveTab('digital')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
              activeTab === 'digital' 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-selected={activeTab === 'digital'}
          >
            <FaLaptopCode /> Digital Domain
          </button>
          <button 
            onClick={() => setActiveTab('analog')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
              activeTab === 'analog' 
                ? 'bg-secondary text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-selected={activeTab === 'analog'}
          >
            <FaHiking /> Analog Adventures
          </button>
          <button 
            onClick={() => setActiveTab('travel')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
              activeTab === 'travel' 
                ? 'bg-accent text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-selected={activeTab === 'travel'}
          >
            <FaUtensils /> Wanderlust & Flavors
          </button>
          <button 
            onClick={() => setActiveTab('personality')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
              activeTab === 'personality' 
                ? 'bg-dark text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-selected={activeTab === 'personality'}
          >
            <FaLaughSquint /> Personality Mosaic
          </button>
        </div>
      </AnimatedSection>

      {/* Digital Domain Section */}
      {activeTab === 'digital' && (
        <>
          <AnimatedSection delay={0.2}>
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
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="section-title">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {featuredProjects.map((project, index) => (
                <div key={index} className="card overflow-hidden group hover:shadow-lg transition-all">
                  <div className="relative overflow-hidden h-48">
                    <LazyImage 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white">
                        <p className="font-bold">{project.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="text-primary hover:underline flex items-center gap-1 text-sm">
                      View details <FaChevronRight size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          

          
        </>
      )}

      {/* Analog Adventures Section */}
      {activeTab === 'analog' && (
        <>
          <AnimatedSection delay={0.2}>
            <h2 className="section-title" onClick={handleSecretClick}>My Hobbies & Interests</h2>
            <p className="text-lg mb-6 italic">Click the section title three times for a secret hobby reveal!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
              {hobbies.map((hobby, index) => (
                <div key={index} className="card overflow-hidden group hover:shadow-lg transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <LazyImage 
                      src={hobby.image} 
                      alt={hobby.name} 
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white">
                        <div className="text-2xl mb-1">{hobby.icon}</div>
                        <p className="font-bold">{hobby.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-primary text-xl">{hobby.icon}</div>
                      <h3 className="text-lg font-bold">{hobby.name}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{hobby.description}</p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">{hobby.story}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {showSecretHobby && (
                <div className="card bg-gradient-to-r from-primary/20 to-secondary/20 overflow-hidden group hover:shadow-xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <LazyImage 
                      src={secretHobby.image} 
                      alt={secretHobby.name} 
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white">
                        <div className="text-2xl mb-1">{secretHobby.icon}</div>
                        <p className="font-bold">{secretHobby.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-secondary text-xl">{secretHobby.icon}</div>
                      <h3 className="text-lg font-bold">{secretHobby.name}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{secretHobby.description}</p>
                    <div className="bg-white/50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">{secretHobby.story}</p>
                    </div>
                    <p className="text-xs mt-2 text-gray-500">You found a secret hobby! Achievement unlocked: Curiosity Cat 🏆</p>
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="section-title">Reading List</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
              {[
                { title: "Atomic Habits", author: "James Clear", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", status: "Read", rating: 5 },
                { title: "The Pragmatic Programmer", author: "Andrew Hunt", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", status: "Read", rating: 5 },
                { title: "Dune", author: "Frank Herbert", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", status: "Read", rating: 4 },
                { title: "Project Hail Mary", author: "Andy Weir", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", status: "Reading", rating: null },
                { title: "The Psychology of Money", author: "Morgan Housel", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", status: "To Read", rating: null },
                { title: "The Design of Everyday Things", author: "Don Norman", cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", status: "To Read", rating: null }
              ].map((book, index) => (
                <div key={index} className="card p-3 text-center hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="h-40 mb-2 bg-gray-200 rounded overflow-hidden">
                    <LazyImage 
                      src={book.cover} 
                      alt={book.title} 
                      className="w-full h-full"
                    />
                  </div>
                  <h4 className="font-bold text-sm line-clamp-1">{book.title}</h4>
                  <p className="text-xs text-gray-600 mb-1 line-clamp-1">{book.author}</p>
                  
                  {book.status === "Read" && (
                    <div className="flex justify-center text-yellow-500 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < book.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                      ))}
                    </div>
                  )}
                  
                  <div className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full text-white ${
                    book.status === "Read" ? "bg-green-500" : 
                    book.status === "Reading" ? "bg-blue-500" : 
                    "bg-gray-500"
                  }`}>
                    {book.status}
                  </div>
                  
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white p-3 text-sm">
                      <p className="font-bold mb-1">{book.title}</p>
                      <p className="text-xs mb-2">by {book.author}</p>
                      {book.status === "Read" ? (
                        <p className="italic text-xs">"Great read about building better habits through small changes."</p>
                      ) : (
                        <p className="italic text-xs">On my {book.status === "Reading" ? "currently reading" : "to-read"} list</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h2 className="section-title">Board Game Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { name: "Settlers of Catan", type: "Strategy", players: "3-4", time: "60-120 min", image: "https://images.unsplash.com/photo-1606503153255-59d8b2e4739e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", story: "I've never won a single game, but I'm the designated rule explainer." },
                { name: "Ticket to Ride", type: "Strategy", players: "2-5", time: "30-60 min", image: "https://images.unsplash.com/photo-1606503153255-59d8b2e4739e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", story: "My go-to game for introducing friends to board games beyond Monopoly." },
                { name: "Pandemic", type: "Cooperative", players: "2-4", time: "45 min", image: "https://images.unsplash.com/photo-1606503153255-59d8b2e4739e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", story: "Became eerily relevant in 2020. We stopped playing for a while." },
                { name: "Codenames", type: "Party", players: "4+", time: "15 min", image: "https://images.unsplash.com/photo-1606503153255-59d8b2e4739e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", story: "I'm terrible at giving clues but excellent at making wild guesses." }
              ].map((game, index) => (
                <div key={index} className="card hover:shadow-md transition-shadow overflow-hidden">
                  <div className="h-40 bg-gray-200">
                    <LazyImage 
                      src={game.image} 
                      alt={game.name} 
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-1">{game.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {game.type}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {game.players} players
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {game.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 italic">{game.story}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </>
      )}

      {/* Wanderlust & Flavors Section */}
      {activeTab === 'travel' && (
        <>
          <AnimatedSection delay={0.2}>
            <h2 className="section-title">Travel Adventures</h2>
            <div className="mb-12">
              <div className="card p-0 overflow-hidden mb-8">
                <div className="h-64 md:h-80 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <p className="text-white text-center p-4">
                      Interactive map would be displayed here, showing visited locations with pins
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {travelSpots.map((spot, index) => (
                  <div key={index} className="card overflow-hidden hover:shadow-lg transition-all">
                    <div className="h-48 relative">
                      <LazyImage 
                        src={spot.image} 
                        alt={spot.location} 
                        className="w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                        <div className="p-4 text-white">
                          <h3 className="font-bold text-xl">{spot.location}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 mb-3">{spot.description}</p>
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <FaUtensils />
                        <p>Favorite food: {spot.favorite}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="section-title">Signature Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {recipes.map((recipe, index) => (
                <div key={index} className="card overflow-hidden hover:shadow-lg transition-all">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto bg-gray-200">
                      <LazyImage 
                        src={recipe.image} 
                        alt={recipe.name} 
                        className="w-full h-full"
                      />
                    </div>
                    <div className="p-4 md:w-2/3">
                      <h3 className="font-bold text-xl mb-2">{recipe.name}</h3>
                      <div className="mb-3">
                        <h4 className="font-medium text-sm text-gray-700 mb-1">Ingredients:</h4>
                        <ul className="grid grid-cols-2 gap-1">
                          {recipe.ingredients.map((ingredient, i) => (
                            <li key={i} className="text-sm flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              {ingredient}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm italic">{recipe.story}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h2 className="section-title">Food Adventures</h2>
            <div className="card p-6 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-xl mb-4 text-primary">The Great Durian Challenge</h3>
                  <p className="text-gray-700 mb-3">
                    My first encounter with durian was both a cultural initiation and a test of courage. Known as the "king of fruits" in Southeast Asia and infamous for its pungent smell, durian is a polarizing delicacy that divides people into passionate lovers and vehement haters.
                  </p>
                  <p className="text-gray-700 mb-3">
                    Growing up in Davao City, the durian capital of the Philippines, avoiding this spiky fruit was impossible. My friends finally convinced me to try it on my 12th birthday, building it up as a coming-of-age ritual. The moment of truth arrived with a freshly opened durian, its distinctive aroma filling the room.
                  </p>
                  <p className="text-gray-700">
                    That first taste was... confusing. My brain couldn't reconcile the custard-like texture with the complex flavor that somehow combined sweetness, creaminess, and hints of what I can only describe as "garlicky ice cream." But by the third bite, something clicked. Now I'm a proud durian enthusiast who will defend its honor against all critics!
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-4 text-secondary">The Tokyo Ramen Quest</h3>
                  <p className="text-gray-700 mb-3">
                    During my trip to Tokyo, I made it my mission to find the best ramen in the city. Armed with a list of recommendations and a very patient travel companion, I embarked on what became known as "The Great Ramen Marathon of 2023."
                  </p>
                  <p className="text-gray-700 mb-3">
                    Over five days, I tried 8 different ramen shops, from famous chains to tiny hole-in-the-wall spots with just six seats. I kept detailed notes on broth richness, noodle texture, and chashu tenderness like a serious food critic (much to my friend's amusement).
                  </p>
                  <p className="text-gray-700">
                    The winner? A tiny shop in Shimokitazawa where the chef had been perfecting his tonkotsu broth for 25 years. When I told him in broken Japanese that his ramen was the best I'd ever had, he simply nodded and said, "Of course." That confidence was well-earned. I still dream about that bowl of ramen.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <h2 className="section-title">Local Favorites</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { name: "Café Demitasse", type: "Coffee Shop", location: "Davao City", specialty: "Pour-over coffee and homemade pastries", why: "My second office where the baristas know my order before I reach the counter." },
                { name: "Lola Mia's Eatery", type: "Local Restaurant", location: "Davao City", specialty: "Traditional Filipino breakfast", why: "Best tapsilog in town, and Lola Mia still remembers my name even though I only visit twice a year." },
                { name: "Baywalk Sunset Spot", type: "Outdoor Space", location: "Davao City", specialty: "Fresh seafood from nearby vendors", why: "Perfect place to watch the sunset while enjoying grilled fish and cold beer." }
              ].map((place, index) => (
                <div key={index} className="card hover:shadow-md transition-shadow">
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{place.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {place.type}
                      </span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {place.location}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="font-medium">Known for:</span> {place.specialty}
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm italic">{place.why}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </>
      )}

      {/* Personality Mosaic Section */}
      {activeTab === 'personality' && (
        <>
          <AnimatedSection delay={0.2}>
            <h2 className="section-title">Quirks & Quips</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {quirks.map((quirk, index) => (
                <div 
                  key={index} 
                  className="card hover:shadow-md transition-shadow relative"
                  onMouseEnter={() => setShowTooltip(index)}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-lg mb-2">{quirk.title}</h3>
                      <FaInfoCircle 
                        className="text-primary cursor-help" 
                        aria-label="More information"
                      />
                    </div>
                    {showTooltip === index && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-10 bg-white p-3 rounded-lg shadow-lg right-0 top-12 w-full"
                      >
                        <p className="text-sm">{quirk.description}</p>
                        <div className="absolute -top-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
                      </motion.div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <h2 className="section-title">Did You Know?</h2>
            <div className="card p-6 mb-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -ml-16 -mb-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <FaRegSurprise size={24} />
                  </div>
                </div>
                
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold mb-4">Fun Fact #{activeFact + 1}</h3>
                  <p className="text-lg text-gray-700">{funFacts[activeFact]}</p>
                  
                  <div className="flex justify-center mt-6">
                    <div className="flex gap-1">
                      {funFacts.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setActiveFact(index)}
                          className={`w-2 h-2 rounded-full ${activeFact === index ? 'bg-primary' : 'bg-gray-300'}`}
                          aria-label={`Fact ${index + 1}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h2 className="section-title">Favorite Quotes</h2>
            <div className="card p-6 mb-12">
              <div className="relative">
                <FaQuoteLeft className="text-6xl text-primary/10 absolute top-0 left-0" />
                <div className="pt-8 pl-8">
                  <p className="text-xl font-handwriting mb-4">{quotes[activeQuote].text}</p>
                  <p className="text-right text-gray-600">— {quotes[activeQuote].author}</p>
                  
                  <div className="flex justify-center mt-6">
                    <div className="flex gap-1">
                      {quotes.map((_, index) => (
                        <button 
                          key={index}
                          onClick={() => setActiveQuote(index)}
                          className={`w-2 h-2 rounded-full ${activeQuote === index ? 'bg-primary' : 'bg-gray-300'}`}
                          aria-label={`Quote ${index + 1}`}
                        ></button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h2 className="section-title">Media Favorites</h2>
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 text-primary">Books I Recommend</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                {mediaFavorites.books.map((book, index) => (
                  <div key={index} className="card p-4 flex gap-4 hover:shadow-md transition-shadow">
                    <div className="w-20 h-28 flex-shrink-0 bg-gray-200 rounded overflow-hidden">
                      <LazyImage 
                        src={book.cover} 
                        alt={book.title} 
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{book.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">by {book.author}</p>
                      <div className="flex text-yellow-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < book.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-700">{book.review}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 text-secondary">Movies & Shows</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                {mediaFavorites.movies.map((movie, index) => (
                  <div key={index} className="card p-3 text-center hover:shadow-md transition-shadow">
                    <div className="h-36 mb-2 bg-gray-200 rounded overflow-hidden">
                      <LazyImage 
                        src={movie.poster} 
                        alt={movie.title} 
                        className="w-full h-full"
                      />
                    </div>
                    <h4 className="font-bold text-sm">{movie.title}</h4>
                    <p className="text-xs text-gray-600">{movie.year}</p>
                    <div className="flex justify-center text-yellow-500 text-xs mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < movie.rating ? "text-yellow-500" : "text-gray-300"}>★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold mb-4 text-accent">Music I Enjoy</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {mediaFavorites.music.map((item, index) => (
                  <div key={index} className="card p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                      <LazyImage 
                        src={item.cover} 
                        alt={item.artist} 
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.artist}</h4>
                      <p className="text-sm text-gray-600">{item.genre}</p>
                      <p className="text-xs text-gray-500">Favorite album: {item.album}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <h2 className="section-title">Personal Philosophy</h2>
            <div className="card p-6 mb-12">
              <h3 className="text-xl font-bold mb-6 text-center">{philosophy.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {philosophy.principles.map((principle, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-gray-700">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
         

      
        <h2 className="section-title">Personal Anecdotes & Nonsense</h2>
        <div className="card mb-16">
          <h3 className="text-xl font-bold mb-4 text-secondary">The Time I Almost Became Famous</h3>
          <p className="mb-4">
            Once upon a time, I was hiking in the mountains near Davao when I stumbled upon what I thought was a shortcut. 
            Three hours later, I found myself in a completely different barangay, having accidentally crashed a local wedding! 
            The bride thought I was the photographer's assistant, and I spent the next two hours taking photos with someone's 
            iPhone. They loved my "artistic vision" (aka my shaky hands) so much that they invited me to their family reunion. 
            I still get Christmas cards from them addressed to "Camera Guy."
          </p>
          
          <h3 className="text-xl font-bold mb-4 text-secondary mt-6">My Unusual Talent</h3>
          <p className="mb-4">
            I can recite the alphabet backwards in under 10 seconds while balancing a spoon on my nose. It's a completely 
            useless talent that I perfected during long commutes and power outages. So far, it has impressed exactly zero 
            people at parties, but my dog seems mildly entertained. My dating profile lists it as my most marketable skill.
          </p>
          
          <h3 className="text-xl font-bold mb-4 text-secondary mt-6">A Philosophical Thought</h3>
          <p className="mb-4">
            What if socks are actually foot hats, and we've been thinking about them all wrong this entire time? 
            And if that's true, are shoes just foot houses? Does that make shoelaces the door locks? This is the kind of 
            nonsense that keeps me up at night, along with wondering if my refrigerator feels disappointed when I open it 
            for the fifth time hoping food has magically appeared.
          </p>
          
          <h3 className="text-xl font-bold mb-4 text-secondary mt-6">My Childhood Dream</h3>
          <p>
            As a child, I was convinced I would grow up to be a professional bubble wrap popper. I had a five-year plan and 
            everything: start with small packaging, work my way up to industrial-sized rolls, eventually open my own bubble 
            wrap popping meditation studio. Sadly, the industry wasn't as lucrative as I had hoped, so I pivoted to web development 
            instead. But I still pop bubble wrap with professional-level enthusiasm whenever I get the chance. My neighbors have 
            filed noise complaints.
          </p>
          
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h4 className="font-bold text-lg mb-2">Fun Facts That May or May Not Be True</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>I once won a staring contest with my own reflection. It took 3 hours.</li>
              <li>My houseplants have names and backstories. Gerald the fern is going through a mid-life crisis.</li>
              <li>I can type 120 words per minute, but 80% of them are typos.</li>
              <li>I've never seen my elbows directly. Neither have you. Think about it.</li>
              <li>I believe that dinosaurs aren't extinct—they just got really good at hiding.</li>
            </ul>
          </div>
        </div>
       </AnimatedSection>
        </>
      )}

      {/* Contact Section */}
      <AnimatedSection delay={0.6}>
        <h2 className="section-title">Get In Touch</h2>
        <div className="card mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-700 mb-6">
                Whether you want to discuss a project, share thoughts on my latest blog post, or just say hello, I'd love to hear from you! 
                I promise to respond within 48 hours, unless I'm camping in a remote location with no signal, in which case I'll respond 
                when I return to civilization.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:example@email.com" className="text-primary hover:underline">example@email.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <FaLinkedin />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/yourname</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <FaTwitter />
                  </div>
                  <div>
                    <p className="font-medium">Twitter</p>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@yourhandle</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection delay={0.7}>
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Thanks for getting to know me!</h3>
          <p className="text-lg mb-6">
            If you've made it this far, you deserve a medal for patience! Feel free to explore the rest of my website
            to see my work, read my blog, or discover more about my projects.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/portfolio" className="btn btn-primary">
              View My Portfolio
            </a>
            <a href="/musings" className="btn btn-secondary">
              Read My Musings
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 text-gray-600">
              <FaHeart className="text-red-500 animate-pulse" />
              <p className="text-sm">Made with love in Davao City, Philippines</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;