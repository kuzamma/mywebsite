import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaShare, FaHeart, FaComment, FaBookmark } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const MusingDetail = () => {
  const { id } = useParams(); // Get the musing ID from the URL

  const musings = [
    {
      id: 'entry-2',
      quote: "Don't be afraid of losing people. Be afraid of losing yourself.",
      interpretation: "This quote hits close to home. In a world that constantly demands us to conform, to fit in, to please others, it's so easy to lose sight of who we truly are. We chase external validation, mold ourselves to meet expectations, and silence our inner voice. But at what cost? Losing people is undoubtedly painful. But losing yourself in the process? That's a wound that festers, a void that can never truly be filled. It's like writing a program that runs flawlessly but has no purpose, no soul. \n\nI've learned (sometimes the hard way) that true connection comes from authenticity. It's about embracing our quirks, celebrating our individuality, and having the courage to stand out from the crowd. It's about setting boundaries, prioritizing self-care, and saying NO when necessary, even if it means disappointing others. Losing people along the way is inevitable. But losing yourself? That's a choice. And it's a choice I refuse to make.",
      date: "October 15, 2024",
      backgroundImage: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      tags: ["self-discovery", "relationships", "authenticity"]
    },
     
    
    {
      id: 'entry-1',
      quote:"The courage to be disliked is the courage to be free.",
      interpretation: "Reading 'The Courage to Be Disliked' was a revelation. It challenged so many of my deeply held beliefs about approval, validation, and the need to be liked by everyone. The book argues that much of our suffering comes from our obsession with how others perceive us. We twist ourselves into knots, trying to meet others' expectations, only to lose sight of who we truly are.\n\nAdlerian psychology teaches that we are not determined by our past or our circumstances. Instead, we have the power to choose how we interpret and respond to life. This is both liberating and terrifying. It means taking full responsibility for our lives, without blaming others or seeking excuses.\n\nOne of the most profound ideas in the book is the concept of 'separation of tasks.' We must distinguish between what is our responsibility and what belongs to others. For example, how others feel about us is their task, not ours. Our task is to live authentically, even if it means being disliked.\n\nThis doesn't mean being selfish or indifferent to others. It means living with integrity, staying true to our values, and letting go of the need for external validation. It's about finding freedom in authenticity, even if it comes at the cost of being misunderstood or disliked.\n\nI've started applying this in small ways—saying no when I need to, expressing my opinions even if they're unpopular, and letting go of the need to please everyone. It's uncomfortable at times, but it's also incredibly freeing. I feel more like myself, less like a puppet controlled by others' expectations.\n\nThis journey isn't easy, but it's worth it. As the book says, 'The courage to be happy also includes the courage to be disliked.' And I'm learning to embrace both.",
      date: "Janruary 10, 2025",
      backgroundImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      tags: ["courage", "authenticity", "psychology", "freedom", "Adler"]
    }
  ];

  const musing = musings.find(m => m.id === id); // Find the musing by ID

  if (!musing) {
    return <div>Musing not found.</div>;
  }

  return (
    <div className="page-container">
      <AnimatedSection>
        <Link to="/musings" className="text-primary hover:underline">
          &larr; Back to Musings
        </Link>
        <div className="card overflow-hidden mt-6">
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

           
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default MusingDetail;