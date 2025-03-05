import React, { useState, useEffect } from 'react';
import { FaRegSurprise, FaQuoteLeft, FaHeart } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection'; // Import AnimatedSection
import { useInView } from 'react-intersection-observer';

// Define the LazyImage component
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

const PersonalityMosaic = () => {
  const [activeQuote, setActiveQuote] = useState(0);

   // Auto-rotate quotes
  useEffect(() => {
      const quoteInterval = setInterval(() => {
        setActiveQuote(prev => (prev + 1) % quotes.length);
      }, 8000);
      
      return () => clearInterval(quoteInterval);
    }, []);
    
    

  

  const quotes = [
    { text: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" }
  ];

  const quirks = [
    { title: "Morning Ritual", description: "I can't start my day without checking social media in bed for at least 20 minutes, even when I'm running late." },
    { title: "Food Peculiarity", description: "I eat M&Ms in a specific color order (brown, red, orange, yellow, green, blue) and get genuinely distressed if I accidentally eat them out of sequence." },
    { title: "Secret Collection", description: "I have an extensive collection of hotel toiletries that I never use but can't bring myself to throw away." },
    { title: "Shower Concerts", description: "I perform elaborate concerts in the shower, complete with emotional ballads, acceptance speeches, and interviews about my musical journey." },
    { title: "Talking to Objects", description: "I apologize to furniture when I bump into it and thank my electronics for their service." }
  ];

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

  return (
    <>
      <AnimatedSection>
        <h2 className="section-title">Quirks & Quips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {quirks.map((quirk, index) => (
            <div key={index} className="card hover:shadow-md transition-shadow">
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{quirk.title}</h3>
                <p className="text-sm text-gray-700">{quirk.description}</p>
              </div>
            </div>
          ))}
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

  );
};

export default PersonalityMosaic;