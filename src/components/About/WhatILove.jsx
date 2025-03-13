import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { FaHeart, FaCloudRain, FaCoffee, FaBook, FaMusic, FaSmile } from 'react-icons/fa';

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
          <button onClick={handlePrevious} className="text-blue-500">Previous</button>
          <button onClick={handleNext} className="text-blue-500">Next</button>
        </div>
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
        { content: "There’s something about rain that feels like a warm hug from the sky.", media: 'images/ilove/raining.gif', mediaType: 'gif' },
        { content: "The way it taps on the roof? ASMR levels of perfection." },
        { content: "Some people stay inside, wrapped in blankets, sipping coffee."},
        { content: "Me? I dramatically step outside like I’m in a coming-of-age movie." },
        { content: "Here’s me, dancing in the rain—main character energy at full power.", media: 'images/ilove/dramatic_dance.gif', mediaType: 'gif' },
        { content: "Of course, five minutes later, I’m freezing, regretting my life choices, and sprinting back inside.", media: 'images/ilove/freez.gif', mediaType: 'gif' },
        { content: "But hey, totally worth it. 10/10 would do it again.", media: 'dramatic_dance.mp4', mediaType: 'video' },
      ],
    },
    {
      id: 2,
      icon: <FaCoffee className="text-brown-500 text-3xl" aria-label="Coffee" />,
      title: "Coffee",
      sections: [
        { content: "Coffee is my liquid motivation." },
        { content: "Whether it’s a perfectly brewed cup or a questionable instant mix.", media: 'coffee.gif', mediaType: 'gif' },
        { content: "It’s the fuel that powers my coding marathons." },
        { content: "And my ability to pretend I’m a morning person.", media: 'morning.mp4', mediaType: 'video' },
      ],
    },
    // Add more loves with similar structure...
  ];

  return (
    <div className="page-container">
      <AnimatedSection>
        <h2 className="section-title">What I Love</h2>
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

      <AnimatedSection delay={0.4}>
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">What Do You Love?</h3>
          <p className="text-lg mb-6">
            Life’s better when we share the things that make us happy. What’s something you love? Let me know—I’m always up for new reasons to smile!
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <FaHeart className="text-red-500 animate-pulse" aria-label="Spread the love" />
              <span className="text-sm font-medium">Spread the love!</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default WhatILove;
