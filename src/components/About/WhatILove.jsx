import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { FaHeart, FaCloudRain, FaCoffee, FaBook, FaMusic, FaSmile, FaFlushed, FaCat, FaGamepad, FaLaugh, FaHandsHelping, FaEnvelope } from 'react-icons/fa';

const LoveCard = ({ icon, title, sections }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const handleNext = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  const handlePrevious = () => {
    setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
  };

  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
        <div className="text-sm text-gray-700 text-justify mb-4">
          {sections[currentSection].content}
          {sections[currentSection].media && (
            <div className="mt-4 flex justify-center items-center">
              {sections[currentSection].mediaType === 'gif' ? (
                <img src={sections[currentSection].media} alt={title} className="max-w-full h-auto" />
              ) : (
                <video controls className="max-w-full h-auto">
                  <source src={sections[currentSection].media} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <button onClick={handlePrevious} className="text-blue-500">Pre</button>
          <button onClick={handleNext} className="text-blue-500">Next</button>
        </div>
      </div>
    </div>
  );
};

const SecretEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="relative">
        {!isOpen ? (
          <div
            className="cursor-pointer transform transition-transform hover:scale-105"
            onClick={handleOpen}
          >
            {/* Bigger Envelope */}
            <FaEnvelope className="text-9xl text-red-500 animate-bounce" />
            <p className="text-center mt-4 text-lg text-gray-600 font-handwriting font-bold ">
              Click this, you stupid human...
            </p>
          </div>
        ) : (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={handleClose}
            ></div>

            {/* Floating Card */}
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4 relative">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  &times;
                </button>

                {/* Handwritten title */}
                <h3 className="text-3xl font-bold mb-4 font-handwriting text-yellow-700">
                  To You, Beautiful Human
                </h3>

                {/* Handwritten message */}
                <div className="text-gray-700 text-justify font-handwriting text-lg leading-relaxed">
                <p>
  Life is a journey filled with ups and downs, mostly downs if you're like me, but hey, who's counting? And sometimes it feels like the world is against you, especially when you try to parallel park. But I want you to know something: <span className="font-bold text-yellow-700">you are enough</span>. Just as you are. Even if you accidentally sent a meme to your boss instead of your friend. You are loved, you are valued, and you matter more than you realize... even if your dance moves look like a confused octopus.
</p>
<br />
<p>
  There will be days when you feel like giving up, like when you realize you've been wearing your shirt inside out all day. But please don’t. The world needs your light, your laughter, and your unique perspective. Especially your perspective on how to perfectly burn toast. You are stronger than you think, braver than you believe, and more capable than you know. You can even survive a day without WiFi, probably.
</p>
<br />
<p>
  So take a deep breath, hold your head high, and keep going. You’ve got this. And if no one has told you today, <span className="font-bold text-yellow-700">I’m proud of you</span>. 💖 Even if you still don't know the difference between a GIF and a JPEG. We're all works in progress, after all.
</p>
                </div>

                {/* Hand-drawn heart */}
                <div className="mt-4">
                  <FaHeart className="text-red-500 text-3xl mx-auto animate-pulse" />
                </div>

                {/* Scribbled doodles */}
                <div className="absolute -top-4 -left-4 text-yellow-400 text-4xl transform rotate-12">
                  ✏️
                </div>
                <div className="absolute -bottom-4 -right-4 text-yellow-400 text-4xl transform -rotate-12">
                  🎨
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const WhatILove = () => {
  const loves = [
    {
      id: 1,
      icon: <FaCloudRain className="text-blue-500 text-3xl" aria-label="Rainy Days" />,
      title: "Rainy Days",
      sections: [
        { content: "There’s something about rain that feels like a warm hug from the sky. The way it taps on the roof? ASMR levels of perfection.", media: 'images/ilove/raining.gif', mediaType: 'gif' },
        
        { content: "Some people stay inside, wrapped in blankets, sipping coffee. Me? I dramatically step outside like I’m in a coming-of-age movie."},
        { content: "Here’s me, dancing in the rain—main character energy at full power.", media: 'images/ilove/dramatic_dance.gif', mediaType: 'gif' },
        { content: "Of course, five minutes later, I’m freezing, regretting my life choices, and sprinting back inside.", media: 'images/ilove/freez.gif', mediaType: 'gif' },
        { content: "But hey, totally worth it. 10/10 would do it again.", media: 'dramatic_dance.mp4', mediaType: 'video' },
      ],
    },
    {
      id: 2,
      icon: <FaFlushed className="text-pink-500 text-3xl" aria-label="Awkward Situations" />,
      title: "Awkward Situations",
      sections: [
        { content: "I have a weird love for awkward situations. They’re like free comedy shows. Awkward moments are my superpower. I collect them like Pokémon.", media: 'images/ilove/wr.gif', mediaType: 'gif' },
        { content: "Like that time I waved back at someone who wasn’t waving at me. My soul dignity took a permanent leave of absence", media: 'images/ilove/gone.gif', mediaType: 'gif' },
        { content: "And that time my friend and I tried to step on the mall escalator, and it suddenly started moving. We thought it wasn't working, so we took the stairs instead. It was so awkward, but we got a good laugh out of it in the end." },
        { content: "And who can forget the classic 'walking into a glass door' moment?", media: 'images/ilove/glass_door.gif', mediaType: 'gif' },
        { content: "Yung moment na nag-order me ng 'to go' pero kinain ko rin sa loob ng restaurant. 'To go' pero 'to stay' pala, nakakahiya!" },
      ],
    },
    {
      id: 3,
      icon: <FaHandsHelping className="text-purple-500 text-3xl" aria-label="Random Acts of Kindness" />,
      title: "Random Acts of Kindness", 
      sections: [
        { content: "I believe small acts of kindness can change the world. 🌍",  media: 'images/ilove/blah.gif', mediaType: 'gif' },
      ],
    },
  ];

  return (
    <div className="page-container">
      <AnimatedSection>
        <h2 className="section-title font-handwriting">What I Love</h2>
        <p className="text-lg text-gray-700 mb-8 text-justify">
          Life’s too short not to celebrate the little things that bring joy. Here are a few things I absolutely adore, along with why they make my heart skip a beat (or at least do a happy dance).
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {loves.map((love) => (
          <LoveCard
            key={love.id}
            icon={love.icon}
            title={love.title}
            sections={love.sections}
          />
        ))}
      </div>

      {/* Secret Envelope */}
      <SecretEnvelope />

      
    </div>
  );
};

export default WhatILove;