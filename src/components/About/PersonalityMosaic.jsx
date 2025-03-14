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
    { text: "When you change the way you look at things, the things you look at change." , author: "Wayne Dyer"},
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "We do not see things as they are, we see them as we are." , author: "Anaïs Nin"},
    { text: "Character is how you treat those who can do nothing for you." , author: "Johann Wolfgang von Goethe"}
     
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
      "Curiosity didn’t kill the cat—it just made it Google things at 2 a.m.  Never stop asking questions, even if the answers make you question your life choices.",
      "Life’s too short to take yourself seriously. Laugh at your mistakes, your awkward moments, and that time you waved back at someone who wasn’t waving at you. 😂",
      "Spread kindness like confetti, but don’t let anyone sweep you under the rug.  You’re a human, not a welcome mat. ",
      "Perfect is boring. Progress is messy, chaotic, and beautiful—like a toddler finger-painting.  Celebrate the mess; it means you’re moving forward. ",
      "You’re not a to-do list. Your value isn’t measured by how much you accomplish in a day. Sometimes, just existing is enough. ",
      "If you’re going to fail, do it with style. Wear a cape, blast some music, and own it. Failure is just success in a funny costume. ",
      "You’re not a finished product; you’re a masterpiece in the making. 🎨 Embrace the imperfections—they’re what make you, you."
    ]
  };

  const mediaFavorites = {
    books: [
      { title: "Atomic Habits", author: "James Clear", 
        cover: "/images/books/ah.jfif",
        rating: 5, 
        review: "Life-changing approach to building good habits and breaking bad ones." },
     { title: "Th Courage to be Disliked", author: "Fumitake Koga and Ichiro Kishimi", 
          cover: "/images/books/tctbd.jfif",
          rating: 5, 
          review: "True freedom comes when you stop seeking approval and accept that some people may dislike or disapprove of you." },
          { title: "The Seat of the Soul", author: "Gary Zukav", 
            cover: "/images/books/tsots.jfif",
            rating: 5, 
            review: "The book emphasizes the importance of living with intention, compassion, and awareness, and it provides a framework for understanding life's deeper purpose." }
          
    ],
    
    movies: [
      { title: "The 100", year:" 2014-2020", poster: "/images/movies/100.webp", rating: 5 },
      { title: "The Age of Adaline", year: 2015, poster: "/images/movies/adaline.jfif", rating: 5 },
      { title: "Lucy", year: 2014, poster: "/images/movies/lucy.jfif", rating: 5 },
      { title: "The Hunger Games", year: "2012-2015", poster: "/images/movies/thg.jfif", rating: 5 }, 
      { title: "The Gorge", year: "2025", poster: "/images/movies/tg.jfif", rating: 5 }, 
      { title: "Cleaner", year: "2025", poster: "/images/movies/cleaner.jfif", rating: 5 }, 
    ],


    music: [
      { artist: "Bruno Major", genre: "Alternative/Indie, Rock", album: "To Let A Good Thing Die", cover: "/images/music/bruno.webp" },
      { artist: "Chase Atlantic", genre: "Alternative/Indie", album: "Phases, and Chase Atlantic", cover: "/images/music/ca.jfif" },
      { artist: "NIKI", genre: "Pop music, Folk-pop, Alternative rock", album: "Nicole", cover: "/images/music/niki.jfif" }
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



      <AnimatedSection delay={0.3}>
        <h2 className="section-title">Reading List</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-12">
          {[
             

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
      </AnimatedSection>

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
  <h3 className="text-xl font-bold mb-4 text-secondary">That One Time I Accidentally Joined a Parade</h3>
  <p className="mb-4">
    I was minding my own business, walking through town, when I found myself in the middle of what I assumed was just 
    a particularly enthusiastic crowd. Turns out, I had seamlessly merged into an actual parade. People cheered, 
    someone handed me a flag, and for a solid ten minutes, I waved at strangers like I was supposed to be there. 
    A local newspaper even snapped a photo. To this day, I have no idea what event I proudly marched in.
  </p>
  
  <h3 className="text-xl font-bold mb-4 text-secondary mt-6">My Unusual Talent</h3>
  <p className="mb-4">
    I can recite the alphabet backwards in under 10 seconds while balancing a spoon on my nose. It's a completely 
    useless talent that I perfected during long commutes and power outages. So far, it has impressed exactly zero 
    people at parties. 
  </p>
  
  <h3 className="text-xl font-bold mb-4 text-secondary mt-6">The Career That Never Was</h3>
  <p>
    As a child, I was absolutely convinced I was destined to be a professional namer of things. Products, planets, 
    exotic fish—you name it (or rather, I would). I even practiced by renaming everyday objects just for fun. 
    Chairs became “sit platforms.” Lollipops? “Flavor sticks.” Unfortunately, society didn’t seem to recognize 
    this as a real career path, so here I am. But I still stand by my belief that we should call microwaves “snack zappers.”
  </p>


  
  <div className="mt-8 p-4 bg-gray-100 rounded-lg">
  <h4 className="font-bold text-lg mb-2">Fun Facts That May or May Not Be True</h4>
  <ul className="list-disc pl-5 space-y-2">
    <li>I can type 120 words per minute, but 80% of them are typos.</li>
    <li>If you’re flirting with me, make it obvious. I’m great at many things, but detecting romantic interest isn’t one of them. 😅</li>
    <li>I once tried to high-five a mime. It was the most awkward silence of my life.</li>
    <li>I’m convinced that socks are secretly plotting to escape. That’s why they always go missing.</li>
    <li>I’ve mastered the art of pretending to listen while mentally planning my next meal.</li>
    <li>I once Googled “how to Google” because I forgot how to spell “Google.”</li>
    <li>I believe that pineapple on pizza is a hill worth dying on. 🍍🍕</li>
    <li>I’ve accidentally waved back at strangers who weren’t waving at me more times than I’d like to admit.</li>
    <li>I’m convinced that Wi-Fi has a personal vendetta against me.</li>
  </ul>
</div>
</div>
</AnimatedSection>

{/* Final CTA */}
<AnimatedSection delay={0.7}>
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4"> Roses are red, violets are blue, if you’re still here, I think you’re into me too. 💕 kimii</h3>
          <p className="text-lg mb-6">
           Nice. 😎 I mean, I’m not saying you have a crush on me or anything, but... you’re definitely into my vibe.
          </p>
          {/*v className="flex justify-center gap-4 flex-wrap">
            <a href="/portfolio" className="btn btn-primary">
              View My Portfolio
            </a>
            <a href="/musings" className="btn btn-secondary">
              Read My Musings
            </a>
          </div>*/}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 text-gray-600">
              <FaHeart className="text-red-500 animate-pulse" />
             { /*<p className="text-sm">Made with love in Davao City, Philippines</p>*/}
            </div>
          </div>
        </div>
      </AnimatedSection>
</>

  );
};

export default PersonalityMosaic;