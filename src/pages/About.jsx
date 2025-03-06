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

const About = () => {
  const [activeTab, setActiveTab] = useState('digital');

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
              <a href="mailto:kuzamayang@gmail.com" className="p-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-primary">Greetings, fellow h0mans!</h2>
            <p className="text-lg mb-4 text-justify">
            I am a self-certified 'Code Wizard' (the certification came from a free online quiz, but details, details). I currently haunt the digital back alleys of Biringan City, Philippines—a 
            place so legendary, even Google Maps gets lost.
             My days are a thrilling rollercoaster of debugging, which is basically like trying to find a specific grain of sand on a beach at night while wearing oven mitts.</p>
            <p className="text-lg mb-4 text-justify">
            I believe that the best code is written in pajamas, and I'm a firm advocate for the "work-from-home" lifestyle.  My ideal Friday night involves a steaming cup of coffee, a challenging coding project, and the blissful absence of human interaction. (Don't judge me, introverts need love too.) But don't mistake my love for solitude for a lack of personality. I'm a walking paradox: a social recluse with a passion for online communities, a quiet observer with a loud inner monologue, and a tech enthusiast with a surprisingly low tolerance for slow Internet.
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
            <FaLaughSquint /> just hmm ಥ_ಥ
          </button>
        </div>
      </AnimatedSection>

      {/* Render the active tab */}
      {activeTab === 'digital' && <DigitalDomain />}
      {activeTab === 'analog' && <AnalogAdventures />}
      {activeTab === 'travel' && <WanderlustFlavors />}
      {activeTab === 'personality' && <PersonalityMosaic />}


  {/*
      Contact Section
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
      </AnimatedSection> */}

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
             { /*<p className="text-sm">Made with love in Davao City, Philippines</p>*/}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;