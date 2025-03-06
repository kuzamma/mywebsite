import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Musings = () => {
  const musings = [

    {
      id: 'entry-1',
      quote: "The courage to be disliked is the courage to be free.",
      date: "Janruary 10, 2025",
      backgroundImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      tags: ["courage", "authenticity", "psychology", "freedom", "Adler"]
    },
    
    {
      id: 'entry-2',
      quote: "Don't be afraid of losing people. Be afraid of losing yourself.",
      date: "October 15, 2024",
      backgroundImage: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      tags: ["self-discovery", "relationships", "authenticity"]
    },
    
    
    
  ];

  return (
    <div className="page-container">
      <AnimatedSection>
        <h1 className="section-title">Musings</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 px-6 py-4 border-l-4 bg-gray-100 rounded-lg shadow-sm">
  <span className="font-semibold text-primary">Welcome</span> to my collection of thoughts—some deep, some weird, and some just me questioning why we call it 
  <span className="italic">‘fast food’</span> when I’m still waiting 15 minutes.
</p>


      </AnimatedSection>

      <div className="space-y-6">
        {musings.map((musing, index) => (
          <AnimatedSection key={musing.id} delay={index * 0.2}>
            <Link to={`/musings/${musing.id}`} className="block">
              <div className="card overflow-hidden hover:shadow-lg transition-shadow">
                <div 
                  className="h-48 bg-cover bg-center relative" 
                  style={{ backgroundImage: `url(${musing.backgroundImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6">
                    <div className="flex justify-between items-end w-full">
                      <div className="text-white">
                        <p className="text-sm font-handwriting mb-2">{musing.date}</p>
                        <h2 className="text-2xl font-bold">{musing.quote}</h2>
                      </div>
                      <p className="text-blue-600 hover:text-pink-800 font-semibold cursor-pointer">
                        Read me
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
      <br/>
      <AnimatedSection delay={0.4} className="mb-16">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">More Musings Coming Soon</h3>
          <p className="text-lg mb-6">
            My brain is constantly brewing new thoughts. Check back soon for more philosophical ramblings and existential crises.
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Thoughts in progress...</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>

    
  );
};

export default Musings;