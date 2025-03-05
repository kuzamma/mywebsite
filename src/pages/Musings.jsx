import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { FaShare, FaHeart, FaComment, FaBookmark } from 'react-icons/fa';

const Musings = () => {
  const [reactions, setReactions] = useState({
    'entry-1': { likes: 0, comments: 0, bookmarks: 0 },
    'entry-2': { likes: 0, comments: 0, bookmarks: 0 },
    'entry-3': { likes: 0, comments: 0, bookmarks: 0 },
    'entry-4': { likes: 0, comments: 0, bookmarks: 0 }
  });
  
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [activeEntry, setActiveEntry] = useState(null);
  
  const handleReaction = (entryId, type) => {
    setReactions(prev => ({
      ...prev,
      [entryId]: {
        ...prev[entryId],
        [type]: prev[entryId][type] + 1
      }
    }));
  };
  
  const handleShare = (entryId) => {
    setActiveEntry(entryId);
    setShowShareOptions(!showShareOptions);
  };
  
  const musings = [
    {
      id: 'entry-1',
      quote: "Don't be afraid of losing people. Be afraid of losing yourself.",
      interpretation: "This quote hits close to home. In a world that constantly demands us to conform, to fit in, to please others, it's so easy to lose sight of who we truly are. We chase external validation, mold ourselves to meet expectations, and silence our inner voice. But at what cost? Losing people is undoubtedly painful. But losing yourself in the process? That's a wound that festers, a void that can never truly be filled. It's like writing a program that runs flawlessly but has no purpose, no soul. \n\nI've learned (sometimes the hard way) that true connection comes from authenticity. It's about embracing our quirks, celebrating our individuality, and having the courage to stand out from the crowd. It's about setting boundaries, prioritizing self-care, and saying NO when necessary, even if it means disappointing others. Losing people along the way is inevitable. But losing yourself? That's a choice. And it's a choice I refuse to make.",
      date: "April 15, 2025",
      backgroundImage: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      tags: ["self-discovery", "relationships", "authenticity"]
    },
    {
      id: 'entry-2',
      quote: "The most beautiful things in life are not things. They are people, places, memories, and feelings.",
      interpretation: "I've been thinking about this a lot lately. In our hyper-materialistic world, we're constantly bombarded with messages telling us that happiness comes from the next purchase, the newest gadget, or the trendiest outfit. But when I reflect on my happiest moments, they're never about things I owned.\n\nThey're about that spontaneous road trip with friends where we got lost and found the most amazing hidden beach. They're about late-night conversations with my sister that turned into impromptu dance parties in the kitchen. They're about the feeling of accomplishment after completing a challenging project, or the warmth of reconnecting with an old friend.\n\nI remember saving for months to buy an expensive watch I thought would make me happy. Two weeks later, I barely noticed it on my wrist. But I still vividly remember the sunset I watched from a mountaintop three years ago, the colors painting the sky in hues I didn't even know existed.\n\nMaterial things provide fleeting joy at best. But experiences? They become part of our story, woven into the fabric of who we are. They shape our perspectives, challenge our assumptions, and connect us to others in meaningful ways.\n\nSo I'm trying to invest less in things and more in experiences. Less in possessions and more in connections. Because at the end of the day, our lives are measured not by what we owned, but by what we lived.",
      date: "March 28, 2025",
      backgroundImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      tags: ["materialism", "happiness", "experiences", "mindfulness"]
    },
    {
      id: 'entry-3',
      quote: "Technology is a good servant but a bad master.",
      interpretation: "As someone who works with technology daily, this quote resonates deeply with me. Technology has given us incredible gifts—instant communication across continents, access to the world's knowledge at our fingertips, medical advances that save countless lives. When technology serves us, it enhances our capabilities and expands our horizons in ways our ancestors could never have imagined.\n\nBut I've also experienced the darker side when technology becomes the master. Those nights when I meant to check one email and found myself still scrolling through social media two hours later. The anxiety I feel when I forget my phone at home, as if I've lost a limb. The way conversations at dinner tables have been replaced by the glow of screens.\n\nI've been experimenting with setting boundaries lately. No phone for the first hour after waking up. No screens after 10 PM. One day a week completely offline. It was uncomfortable at first—I felt twitchy, anxious, disconnected. But gradually, something shifted. I started noticing details around me that I'd been missing. I had deeper conversations. I rediscovered the joy of being fully present.\n\nI don't think the answer is rejecting technology—it's too integrated into our lives, and honestly, I love much of what it brings. The key is mindfulness and intention. Using technology as a tool that serves our values and goals, rather than letting it dictate how we spend our precious time and attention.\n\nIn the end, technology should enhance our humanity, not diminish it. It should connect us more deeply to each other and to ourselves, not create distance and distraction. And that requires conscious choice about when to engage and when to disconnect.",
      date: "February 17, 2025",
      backgroundImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      tags: ["technology", "digital-wellbeing", "mindfulness", "balance"]
    },
    {
      id: 'entry-4',
      quote: "The universe is under no obligation to make sense to you.",
      interpretation: "I stumbled across this quote from Neil deGrasse Tyson recently, and it knocked me sideways. As humans, we're hardwired to seek patterns, explanations, and meaning. We want things to make sense. We crave narrative and order. When something doesn't fit our understanding, we feel uncomfortable, even threatened.\n\nBut the universe doesn't care about our comfort. It operates according to laws that often defy our intuition. Quantum physics tells us that particles can exist in multiple places simultaneously. Black holes warp the very fabric of space and time. The vast majority of the universe is made up of dark matter and dark energy that we can't directly observe.\n\nOn a more personal level, this quote reminds me of all the times I've asked 'Why?' when faced with loss, disappointment, or unexpected change. Why did this relationship end? Why didn't I get that job? Why do bad things happen to good people? Sometimes there are no satisfying answers.\n\nI'm learning to make peace with mystery and uncertainty. To accept that some questions will remain unanswered. To find wonder in the incomprehensible vastness of existence rather than fear.\n\nThis doesn't mean giving up on understanding—science continues to expand our knowledge in remarkable ways. But it does mean approaching life with humility. Recognizing that our perspective is limited, our knowledge is incomplete, and some things may forever remain beyond our grasp.\n\nAnd somehow, there's freedom in that. When I release the need for everything to make sense according to my limited understanding, I can more fully embrace the beautiful, chaotic, mysterious reality of being alive in this unfathomable universe.",
      date: "January 5, 2025",
      backgroundImage: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      tags: ["philosophy", "cosmos", "uncertainty", "perspective"]
    }
  ];

  return (
    <div className="page-container">
      <AnimatedSection>
        <h1 className="section-title">Musings</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to my corner of introspection. Here, I share thoughts, reflections, and occasional epiphanies 
          that cross my mind. Some profound, some peculiar, all authentically me.
        </p>
      </AnimatedSection>

      {musings.map((musing, index) => (
        <AnimatedSection key={musing.id} delay={index * 0.2} className="mb-16">
          <div className="card overflow-hidden">
            <div 
              className="h-48 bg-cover bg-center relative" 
              style={{ backgroundImage: `url(${musing.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm font-handwriting mb-2">{musing.date}</p>
                  <h2 className="text-2xl font-bold">{musing.quote}</h2>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-6">
                <img 
                  src="https://placehold.co/100x100/6366f1/ffffff?text=Me" 
                  alt="Author" 
                  className="w-12 h-12 rounded-full border-2 border-primary"
                />
                <div className="ml-4">
                  <p className="font-bold">Yours Truly</p>
                  <p className="text-sm text-gray-500">Overthinking since birth</p>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="whitespace-pre-line text-gray-700">{musing.interpretation}</p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {musing.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between">
                <div className="flex space-x-4">
                  <button 
                    className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors"
                    onClick={() => handleReaction(musing.id, 'likes')}
                  >
                    <FaHeart className={reactions[musing.id].likes > 0 ? "text-red-500" : ""} />
                    <span>{reactions[musing.id].likes}</span>
                  </button>
                  <button 
                    className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors"
                    onClick={() => handleReaction(musing.id, 'comments')}
                  >
                    <FaComment />
                    <span>{reactions[musing.id].comments}</span>
                  </button>
                  <button 
                    className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors"
                    onClick={() => handleReaction(musing.id, 'bookmarks')}
                  >
                    <FaBookmark className={reactions[musing.id].bookmarks > 0 ? "text-yellow-500" : ""} />
                    <span>{reactions[musing.id].bookmarks}</span>
                  </button>
                </div>
                
                <div className="relative">
                  <button 
                    className="flex items-center gap-1 text-gray-500 hover:text-primary transition-colors"
                    onClick={() => handleShare(musing.id)}
                  >
                    <FaShare />
                    <span>Share</span>
                  </button>
                  
                  {showShareOptions && activeEntry === musing.id && (
                    <div className="absolute right-0 bottom-full mb-2 bg-white shadow-md rounded-lg p-3 w-48">
                      <p className="text-sm font-bold mb-2">Share this musing:</p>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="text-sm p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                          Twitter
                        </button>
                        <button className="text-sm p-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors">
                          Facebook
                        </button>
                        <button className="text-sm p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                          WhatsApp
                        </button>
                        <button className="text-sm p-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors">
                          Copy Link
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      ))}
      
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