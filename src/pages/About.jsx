import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { 
  FaHiking, 
  FaGithub, FaLaptopCode, 
  FaUtensils, 
  FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, 
  FaLaughSquint, FaHeart
} from 'react-icons/fa';

import DigitalDomain from '../components/About/DigitalDomain';
import AnalogAdventures from '../components/About/AnalogAdventures';
import WanderlustFlavors from '../components/About/WanderlustFlavors';
import PersonalityMosaic from '../components/About/PersonalityMosaic';
import WhatILove from '../components/About/WhatILove'


const About = () => {
  const [activeTab, setActiveTab] = useState('digital');


const handleEmailClick = () => {
    const email = "kuzamayang@gmail.com";
    const subject = encodeURIComponent("Hello!");
    const body = encodeURIComponent("I wanted to reach out...");
  
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    const mailtoURL = `mailto:${email}?subject=${subject}&body=${body}`;
  
    console.log("Opening Gmail:", gmailURL);
  
    const newTab = window.open(gmailURL, "_blank");
  
    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      console.log("Gmail failed to open. Falling back to mailto.");
      window.location.href = mailtoURL;
    }
  };
  
  
  return (
    <div className="page-container">
      {/* Header Section */}
      <AnimatedSection>
        <h1 className="section-title">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1">
            <img 
              src="/images/me.jpg"   
              alt="About Me" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4 bg-primary/10 p-3 rounded-lg text-center">
              <p className="text-sm italic">This photo was taken on my good side. I don't have a bad side. My mom says I'm perfect.</p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
  {/* Social Media Buttons */}
  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors flex items-center justify-center w-12 h-12">
    <FaGithub size={24} />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors flex items-center justify-center w-12 h-12">
    <FaLinkedin size={24} />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-300 transition-colors flex items-center justify-center w-12 h-12">
    <FaTwitter size={24} />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-500 transition-colors flex items-center justify-center w-12 h-12">
    <FaInstagram size={24} />
  </a>

  {/* Email Button with Better Styling */}
  <button 
    onClick={handleEmailClick} 
    className="p-3 bg-red-500 text-white rounded-full hover:bg-red-400 transition-colors flex items-center justify-center w-12 h-12"
  >
    <FaEnvelope size={24} />
  </button>
</div>

          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-primary">Greetings, fellow h0mans!</h2>
            <p className="text-lg mb-4 text-justify">
            I am a self-certified 'Code Wizard’—a title bestowed upon me by a highly questionable online quiz (prestigious, I know)..  My current base of operations? Biringan City, a town so mythical that even Google refuses to acknowledge it.
            </p>
            <p className="text-lg mb-4 text-justify">
            I believe that the best code is written in pajamas... My ideal Friday night involves a steaming cup of coffee, a challenging coding project, and the blissful absence of human interaction. (Don't judge me, introverts need love too.) But don't mistake my love for solitude for a lack of personality. I'm a walking paradox: a social recluse with a passion for online communities, a quiet observer with a loud inner monologue, and a tech enthusiast with a surprisingly low tolerance for slow Internet.
            </p>
            <p className="text-lg mb-4 text-justify">
              When I'm not busy with work, you'll find me attempting to learn a local craft, which inevitably ends in a hilarious fail, or trying to find the best spot to watch the sunset, while my phone is at 2% battery, 
              or simply enjoying a good book with a cup of coffee (that I'll reheat in for at least three times before finishing).
            </p>

            <p className="text-lg mb-4 text-justify">
            Oh, and if you hear a series of increasingly frustrated keyboard clicks followed by a loud, dramatic sigh, it's just me. I'm having a perfectly normal day, I swear..
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary mt-6">
              <p className="italic text-gray-700">
              "You don’t have to be great to start, but you have to start to be great—or at least functional." <br/>
                — My mantra for overcoming procrastination and imposter syndrome.
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
            <FaHiking /> Analog
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
            <FaLaughSquint /> just hmm ಥ_ಥ
          </button>

          <button 
            onClick={() => setActiveTab('WhatILove')}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
              activeTab === 'WhatILove' 
                ? 'bg-dark text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-selected={activeTab === 'WhatILove'}
          >
            <FaLaughSquint /> I love 
          </button>

        </div>
      </AnimatedSection>

      {/* Render the active tab */}
      {activeTab === 'digital' && <DigitalDomain />}
      {activeTab === 'analog' && <AnalogAdventures />}
      {activeTab === 'travel' && <WanderlustFlavors />}
      {activeTab === 'personality' && <PersonalityMosaic />}
      {activeTab === 'WhatILove' && <WhatILove />}


  
      
    </div>
  );
};

export default About;