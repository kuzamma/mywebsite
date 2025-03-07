import React, { useState } from 'react';
import { FaCode, FaCamera, FaBookOpen, FaMusic, FaHiking, FaQuestionCircle, FaFilm, FaGamepad, FaUtensils } from 'react-icons/fa';
import AnimatedSection from '../AnimatedSection';
import { useInView } from 'react-intersection-observer';

import Modal from '../Modal'; // Import the Modal component

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
const AnalogAdventures = () => {
  const [showSecretHobby, setShowSecretHobby] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedHobby, setSelectedHobby] = useState(null); // State to store the selected hobby

  const handleSecretClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 2) {
      setShowSecretHobby(true);
    }
  };

  const handleHobbyClick = (hobby) => {
    setSelectedHobby(hobby); // Set the selected hobby
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const hobbies = [
    {
      icon: <FaCode />,
      name: "Coding",
      description: "Typing random words until the error messages stop.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: `My coding story really started when I was stuck building an HR system in college for an internship. Super exciting stuff, right? Turns out, my group was clueless. Like, completely clueless about coding. So, it was all on me to figure it out. I basically lived on Google and those online coding guides. "Learn or sink" was definitely the motto.
    
    And somehow, I actually made a system. It was supposed to handle vacation requests. But, uh, it had a slight problem. Let's just say it was a bit too generous with vacation. Instead of just giving people the vacation days they asked for, it started giving out, like, centuries of vacation. One time, it gave someone leave until the year 3000! We started calling it the "eternal vacation" mode.
    
    The hilarious part? It was all just on my laptop! Imagine if that thing had gone live to the real HR department. They would have had a heart attack! The whole company would be on holiday forever. Chaos!
    
    But since it was just local, we could laugh. It taught me a lot about coding, sure. But mostly it taught me that even when you mess up really badly in coding, sometimes it can be accidentally hilarious – especially if nobody important ever sees your mistakes!`
    },

    { 
      icon: <FaCamera />,  
      name: "Photography", 
      description: "Taking 500 photos to get one that's Instagram-worthy.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "My photography style? Let's call it 'impressionistic blur.'  It's very… abstract.  Basically, I take a million photos with my phone and about five of them are sort of in focus.  I once spent an afternoon trying to photograph a flower, and every single shot was blurry.  Turns out, my phone camera thinks my finger is more interesting than the actual flower.  I posted the blurriest one online anyway, captioned 'Ode to a Petal."
    },
    { 
      icon: <FaBookOpen />, 
      name: "Reading", 
      description: "Buying books I'll never finish but look good on my shelf.",
      image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "I once bought a 1,000-page fantasy novel because the cover looked cool. I’ve read exactly 47 pages in three years. The bookmark is still there, taunting me. I’ve started telling people it’s a 'decorative piece' for my coffee table."
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
      icon: <FaUtensils  />, 
      name: "Cooking", 
      description: "Turning simple ingredients into questionable masterpieces.",
      image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: `Cooking for me is an adventure. Sometimes I make something amazing, and other times, I create an unintentional chemistry experiment. The real secret ingredient? Denial. If it looks questionable but smells good. I start out excited, and by the end, I’m either victorious or standing in my kitchen, staring at a burnt mess, wondering where it all went wrong. Either way, I still eat it.`
    },

    {
      icon: <FaGamepad />,
      name: "Online Gaming",
      description: "Trying to unwind with online games, but somehow accumulating more stress than I started with. And yes, still losing to 12-year-olds.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "I logged in hoping to de-stress with a quick online match. Instead, I spent the next three hours in a lag-filled nightmare, arguing with teammates who blame me for everything, and facing opponents with suspiciously perfect aim. My blood pressure is through the roof, and I'm pretty sure I've aged a decade. Turns out, 'relaxing' online is a myth, and my stress levels are now a competitive esport in themselves."
  },
    
    
    { 
      icon: <FaFilm />, 
      name: "Movies", 
      description: "Watching the same three comfort films on repeat forever.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      story: "I once cried so hard during a movie that the theater staff asked if I needed medical attention. It was a comedy. I’ve since learned to watch emotional films at home, where I can sob into a pint of ice cream in peace."
    },
  ];



  const secretHobby = { 
    icon: <FaQuestionCircle />, 
    name: "Professional Napping", 
    description: "I've developed the ability to fall asleep anywhere, anytime. My personal record is 17 seconds after sitting down in a meeting.",
    image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    story: "I once fell asleep during a job interview and somehow got the job. Apparently, my 'power nap demonstration' showed excellent time management skills. I've also perfected the art of sleeping with my eyes open during long meetings, complete with occasional nodding."
  };

  return (
    <>
   <div>
        <h2 className="section-title" onClick={handleSecretClick}>My Hobbies & Interests</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="card overflow-hidden group hover:shadow-lg transition-all cursor-pointer"
              onClick={() => handleHobbyClick(hobby)} // Open modal with the hobby
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={hobby.image}
                  alt={hobby.name}
                  className="w-full h-full object-cover"
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

                <p onClick={() => setShowStoryIndex(index)} 
                className="text-blue-600 hover:text-pink-800 font-semibold cursor-pointer">
                Read Anecdotes
              </p>

              </div>
            </div>
          ))}

          {showSecretHobby && (
            <div className="card bg-gradient-to-r from-primary/20 to-secondary/20 overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={secretHobby.image}
                  alt={secretHobby.name}
                  className="w-full h-full object-cover"
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
      </div>

      {/* Modal for displaying the story */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedHobby ? `My ${selectedHobby.name} Story` : "Story"}
      >
        <p className="text-sm text-gray-700 text-justify">{selectedHobby?.story}</p>
      </Modal>




    
    <AnimatedSection delay={0.3}>
        <h2 className="section-title">Reading List</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {[
             { title: "Atomic Habits", author: "James Clear", 
              cover: "/images/books/ah.jfif",
              status: "Read",
              rating: 5 },
           { title: "Th Courage to be Disliked", author: "Fumitake Koga and Ichiro Kishimi", 
                cover: "/images/books/tctbd.jfif",
                status: "Read",
                rating: 5, 
                review: "True freedom comes when you stop seeking approval and accept that some people may dislike or disapprove of you." },
                { title: "A Flicker in the Dark", author: "Stacy Willingham", 
                  cover: "/images/books/fliker.jfif",
            status: "Read",
                  rating: 5
                  },

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
                  className="w-full h-full" />
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

              <div className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full text-white ${book.status === "Read" ? "bg-green-500" :
                  book.status === "Reading" ? "bg-blue-500" :
                    "bg-gray-500"}`}>
                {book.status}
              </div>

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white p-3 text-sm">
                  <p className="font-bold mb-1">{book.title}</p>
                  <p className="text-xs mb-2">by {book.author}</p>
                  {book.status === "Read" ? (
                    <p className="italic text-xs">" "</p>
                  ) : (
                    <p className="italic text-xs">On my {book.status === "Reading" ? "currently reading" : "to-read"} list</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection></>
  );
};

export default AnalogAdventures;