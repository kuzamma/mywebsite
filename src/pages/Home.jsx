import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { FaArrowRight, FaLaughSquint, FaRegSurprise, FaFeatherAlt } from 'react-icons/fa';

const Home = () => {
  const [showJoke, setShowJoke] = useState(false);
  const [jokeIndex, setJokeIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [deviceMessage, setDeviceMessage] = useState("");

  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "What do you call a fake noodle? An impasta!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "I would tell you a chemistry joke, but I know I wouldn't get a reaction.",
  ];

  useEffect(() => {
    const updateDeviceMessage = () => {
      if (window.innerWidth > 768) {
        setDeviceMessage(
          "Ah, finally! Desktop mode! Now I can truly shine like the diva I am. ✨ Welcome, darling! 😌"
        );
      } else {
        setDeviceMessage(
          "Darling, mobile mode is cute and all, but desktop mode is where I *shine*. 💅 It’s like choosing between a tricycle and a Ferrari. Don’t make me cry. 😭"
        );
      }
    };

    updateDeviceMessage();
    window.addEventListener("resize", updateDeviceMessage);
    return () => window.removeEventListener("resize", updateDeviceMessage);
  }, []);

  const handlePhotoClick = () => {
    setShowJoke(true);
    setJokeIndex(Math.floor(Math.random() * jokes.length));
    setClickCount((prev) => prev + 1);

    setTimeout(() => {
      setShowJoke(false);
    }, 6000);
  };

  const getPhotoMessage = () => {
    if (clickCount >= 5) {
      return "Stop poking me! I'm ticklish! 🤣";
    }
    return jokes[jokeIndex];
  };

  return (
    <div className="page-container ">
      <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-dark font-handwriting">Hello, I'm</span>
            <br />
            <span className="text-primary ">Pysduck </span>
            <span className="text-xs align-top ml-1 text-secondary">*</span>
          </h1>
          <p className="text-sm text-gray-600 mb-4 text-justify font-mono" >
  Welcome to my little corner of the internet—where I dump all the random stuff I do, think about, and questionable life choices come to party.
  Like, this was supposed to be a just a <span className="font-semibold text-blue-600 italic">portfolio</span>, you know, all <span className="font-extrabold text-green-600">PROFESSIONAL</span> and stuff, then... it all mixed up like a washing machine full of <span className="text-pink-400">socks</span> and <span className="text-yellow-300">glitter</span>, <span className="text-red-500">huhu...</span> well, you see what happened.
  It’s basically a digital scrapbook, but with more <span className="font-bold text-yellow-700">chaos</span> and <span className="font-extrabold text-purple-600">ZERO RULES</span>. I’m just throwing stuff here—no rules, no regrets. Or maybe a few regrets, but we're ignoring those.
  When I’m not busy dodging <span className="font-bold text-yellow-700">responsibilities</span>, which, let's be honest, is most of the time hehe, I’m probably lost in a rabbit hole of cat videos, messing with <span className="font-bold text-yellow-700">code that probably won't compile</span>, or Googling “how to adult.” Spoiler: still figuring it out, and honestly, at this point, I'm starting to think 'adulting' is a myth, like <span className="font-bold text-yellow-700">unicorns</span> or a <span className="font-thin text-gray-500">perfectly organized sock drawer</span>.
  <br/><br/>
  Oh, and by the way, the content of this website always updates—like, delete, add, modify—depends on what mood I have when I visit it, hahaha. So, expect anything! You might find a heartfelt poem one day, and a rant about my toaster the next. It's a surprise, even for me.
</p>
           
         
          {/*
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="btn btn-primary flex items-center gap-2">
              About Me <FaArrowRight />
            </Link>
            <Link to="/portfolio" className="btn btn-secondary flex items-center gap-2">
              My Work <FaArrowRight />
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-4 italic">
            * If you’re questioning reality right now, good. You should be. 10% deception. 
          </p>*/} <br/><br/>
          <p className="text-lg text-gray-500 mt-4 font-handwriting">{deviceMessage}</p>
        </motion.div>
      

      <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div 
              className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-float cursor-pointer relative"
              onClick={handlePhotoClick}
            >
              <img 
                src="/images/psyduck.gif"
                alt="Profile" 
                className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-white transition-all duration-300 hover:scale-105"
              />
              {showJoke && (
                <motion.div 
                  className="absolute -top-16 left-0 right-0 bg-white p-3 rounded-lg shadow-lg text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p className="text-sm font-handwriting">{getPhotoMessage()}</p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                </motion.div>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
              <p className="font-handwriting text-lg">Biringan City, PH</p>
              <p className="text-xs text-gray-400">(where dreams come to procrastinate)</p>
            </div>
          </div>
        </motion.div>
      </div>

<AnimatedSection className="my-16" delay={0.2}>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  <div className="card hover:border-l-4 hover:border-primary group relative overflow-hidden">
    <div className="absolute -right-12 -top-12 bg-primary/10 w-24 h-24 rounded-full transition-all duration-300 group-hover:scale-150"></div>
    <h3 className="text-xl font-bold mb-3 text-primary relative z-10">About Me</h3>
    <p className="text-gray-700 mb-4 relative z-10 text-justify">Discover who I am, my quirks, and why I believe cereal is a soup. I'm weird.</p>
    <Link to="/about" className="text-primary hover:underline flex items-center gap-1 relative z-10">
      Learn more <FaArrowRight size={14} />
    </Link>
    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <FaLaughSquint className="text-primary/30" size={24} />
    </div>
  </div>
  
  <div className="card hover:border-l-4 hover:border-secondary group relative overflow-hidden">
    <div className="absolute -right-12 -top-12 bg-secondary/10 w-24 h-24 rounded-full transition-all duration-300 group-hover:scale-150"></div>
    <h3 className="text-xl font-bold mb-3 text-secondary relative z-10">My Portfolio</h3>
    <p className="text-gray-700 mb-4 relative z-10 text-justify">Projects I've worked on while pretending to know what I'm doing. They mostly work!</p>
    <Link to="/portfolio" className="text-secondary hover:underline flex items-center gap-1 relative z-10">
      See projects <FaArrowRight size={14} />
    </Link>
    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <FaRegSurprise className="text-secondary/30" size={24} />
    </div>
  </div>
  
  <div className="card hover:border-l-4 hover:border-primary group relative overflow-hidden">
    <div className="absolute -right-12 -top-12 bg-primary/10 w-24 h-24 rounded-full transition-all duration-300 group-hover:scale-150"></div>
    <h3 className="text-xl font-bold mb-3 text-primary relative z-10">My Musings</h3>
    <p className="text-gray-700 mb-4 relative z-10 ">Philosophical thoughts, reflections, and occasional epiphanies from my overactive mind.</p>
    <Link to="/musings" className="text-primary hover:underline flex items-center gap-1 relative z-10">
      Read musings <FaArrowRight size={14} />
    </Link>
    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <FaFeatherAlt className="text-primary/30" size={24} />
    </div>
  </div>
  
  <div className="card hover:border-l-4 hover:border-accent group relative overflow-hidden">
    <div className="absolute -right-12 -top-12 bg-accent/10 w-24 h-24 rounded-full transition-all duration-300 group-hover:scale-150"></div>
    <h3 className="text-xl font-bold mb-3 text-accent relative z-10">My Secrets</h3>
    <p className="text-gray-700 mb-4 relative z-10 ">Classified information that I'm somehow putting on the internet.</p>
    <Link to="/secret" className="text-accent hover:underline flex items-center gap-1 relative z-10">
      Uncover secrets <FaArrowRight size={14} />
    </Link>
    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-accent/30 text-xs">🤫</span>
    </div>
  </div>
</div>
</AnimatedSection>
</div>
);
};

export default Home;
