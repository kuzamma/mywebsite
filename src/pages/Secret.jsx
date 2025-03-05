import React, { useState, useEffect } from "react";
import AnimatedSection from '../components/AnimatedSection';
import { FaLock, FaUnlock, FaKey, FaEye, FaEyeSlash, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Secret = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [hint, setHint] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [secretsRevealed, setSecretsRevealed] = useState([]);
  const [showCrushModal, setShowCrushModal] = useState(false);
  const [crushStage, setCrushStage] = useState(0);
  const [complimentAttempts, setComplimentAttempts] = useState(0);
  const [showComplimentReveal, setShowComplimentReveal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const correctPassword = "ilovepizza";
  
  const secrets = [
    {
      id: 'secret-1',
      title: "My Biggest Fear",
      content: "I'm terrified of accidentally sending a text to the wrong person. I once sent 'Can't wait to see you tonight 😘' to my boss instead of my date. I still cringe thinking about it.",
    },
    {
      id: 'secret-2',
      title: "Childhood Confession",
      content: "When I was 8, I accidentally broke my mom's favorite vase and blamed it on our cat. The cat was innocent all along. Sorry, Whiskers.",
    },
    {
      id: 'secret-3',
      title: "My Guilty Pleasure",
      content: "I watch cheesy romantic comedies when no one's around and cry at the predictable happy endings. Every. Single. Time.",
    },
    {
      id: 'secret-4',
      title: "Hidden Talent",
      content: "I can recite all 50 U.S. states in alphabetical order in under 30 seconds. It's completely useless but I'm oddly proud of it.",
    },
    {
      id: 'secret-5',
      title: "Embarrassing Habit",
      content: "I talk to myself in different accents when I'm alone. My British accent is particularly terrible.",
    }
  ];

  const crushGifs = [
    "https://media.giphy.com/media/ZtB2l3jHiJsFa/giphy.gif",
    "https://media.giphy.com/media/blSTtZehjAZ8I/giphy.gif",
    "https://media.giphy.com/media/LxSFsOTa3ytEY/giphy.gif"
  ];

  const complimentResponses = [
    { gif: "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif", text: "Okay, suit yourself. More compliments for me!" },
    { gif: "https://media.giphy.com/media/3o7TKS6AWINqbg3FV6/giphy.gif", text: "Are you sure? I have some really good ones!" },
    { gif: "https://media.giphy.com/media/Y4WDXbagwPoepgfAqi/giphy.gif", text: "Last chance! These compliments are top-tier!" },
    { gif: "https://media.giphy.com/media/3o7TKS6AWINqbg3FV6/giphy.gif", text: "Okay, okay, I get it. You're too cool for compliments. 😉" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    if (password.toLowerCase() === correctPassword) {
      setIsUnlocked(true);
      if (attempts === 0) {
        setShowEasterEgg(true);
        setTimeout(() => {
          setShowEasterEgg(false);
        }, 3000);
      }
    } else {
      setAttempts(prev => prev + 1);
      setPassword('');
    }
  };
  
  const toggleSecretReveal = (secretId) => {
    if (secretsRevealed.includes(secretId)) {
      setSecretsRevealed(prev => prev.filter(id => id !== secretId));
    } else {
      setSecretsRevealed(prev => [...prev, secretId]);
    }
  };
  
  const handleHintClick = () => {
    setHint(true);
    setTimeout(() => {
      setHint(false);
    }, 5000);
  };
  
  const resetPage = () => {
    setIsUnlocked(false);
    setPassword('');
    setAttempts(0);
    setSecretsRevealed([]);
  };

  const handleCrushReveal = () => {
    if (crushStage < 3) {
      setCrushStage(prev => prev + 1);
    } else {
      setShowCrushModal(false);
      setCrushStage(0);
    }
  };

  const handleNoClick = () => {
    setComplimentAttempts(prev => {
      if (prev === 3) {
        setShowComplimentReveal(true);
        setTimeout(() => {
          setShowComplimentReveal(false);
          return 0;
        }, 3000);
        return 0;
      }
      return prev + 1;
    });
  };

  const calculateYesButtonPosition = () => {
    const angle = Date.now() / 1000;
    const radius = 100;
    return {
      position: 'absolute',
      left: `${Math.cos(angle) * radius + 150}px`,
      top: `${Math.sin(angle) * radius + 50}px`,
      transition: 'all 0.3s ease'
    };
  };

  return (
    <div className="page-container">
      <AnimatedSection>
        <h1 className="section-title">Secret Page</h1>
        <p className="text-lg text-gray-700 mb-8">
          This is where I keep thoughts and confessions 
          that are too embarrassing to share openly. Enter the password to unlock my secrets.
        </p>
      </AnimatedSection>

      {!isUnlocked ? (
        <AnimatedSection delay={0.2} className="max-w-md mx-auto">
          <div className="card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full -ml-16 -mb-16"></div>
            
            <div className="text-center mb-6 relative z-10">
              <FaLock className="text-4xl text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold">This Page is Locked</h2>
              <p className="text-gray-600 mt-2">Enter the password to reveal my secrets</p>
            </div>
            
            <form onSubmit={handlePasswordSubmit} className="relative z-10">
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter the secret password"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full btn btn-primary flex items-center justify-center gap-2"
              >
                <FaKey /> Unlock Secrets
              </button>
              
              {attempts > 0 && (
                <div className="mt-4 text-center">
                  <p className="text-red-500 text-sm">
                    {attempts === 1 ? "That's not right. Try again!" : 
                     attempts === 2 ? "Still not correct. One more try?" :
                     attempts >= 3 ? "Hmm, you seem to be struggling. Need a hint?" : ""}
                  </p>
                  
                  {attempts >= 3 && (
                    <button 
                      type="button"
                      onClick={handleHintClick}
                      className="text-primary text-sm underline mt-1"
                    >
                      Yes, give me a hint!
                    </button>
                  )}
                </div>
              )}
              
              {hint && (
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <p className="text-sm text-yellow-800">
                    <span className="font-bold">Hint:</span> It's a food I mentioned loving in the About page. And it's all lowercase.
                  </p>
                </div>
              )}
            </form>
            
            <div className="mt-6 pt-4 border-t border-gray-100 text-center text-xs text-gray-500 relative z-10">
              <p>This page contains real secrets. Or maybe they're made up. You'll never know unless you unlock it.</p>
            </div>
          </div>
        </AnimatedSection>
      ) : (
        <div>
          <AnimatedSection delay={0.2} className="mb-8">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-6 flex items-center justify-between">
              <div className="flex items-center">
                <FaUnlock className="text-2xl text-primary mr-4" />
                <div>
                  <h2 className="text-xl font-bold">Secrets Unlocked!</h2>
                  <p className="text-gray-700">You've successfully accessed my secret page.</p>
                </div>
              </div>
              <button 
                onClick={resetPage}
                className="btn btn-secondary"
              >
                Lock Again
              </button>
            </div>
            
            {showEasterEgg && (
              <div className="mt-4 p-4 bg-accent/10 rounded-lg text-center animate-pulse">
                <p className="text-accent font-bold">🎉 First try! Are you a mind reader? 🎉</p>
              </div>
            )}
          </AnimatedSection>

          {/* My Crush Section */}
          <AnimatedSection delay={0.3} className="mb-8">
            <div 
              className="card relative overflow-hidden cursor-pointer group"
              onClick={() => setShowCrushModal(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-red-500/20 transform group-hover:scale-105 transition-transform"></div>
              <div className="relative p-6 text-center">
                <FaHeart className="text-4xl text-red-500 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold mb-2">My Secret Crush</h3>
                <p className="text-gray-700">Click to discover who makes my heart skip a beat... 💕</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Compliment Section */}
          <AnimatedSection delay={0.4} className="mb-8">
            <div className="card p-6">
              <h3 className="text-2xl font-bold mb-4 text-center">Need an Ego Boost?</h3>
              <p className="text-center mb-6">Hey, you look great today! Want a compliment?</p>
              
              <div className="flex justify-center gap-4 relative h-32">
                <motion.button 
                  className="btn bg-primary text-white px-6 py-2 rounded-full"
                  style={calculateYesButtonPosition()}
                  animate={{
                    x: mousePosition.x > 0 ? -50 : 50,
                    y: mousePosition.y > 0 ? -30 : 30,
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  Yes please!
                </motion.button>
                <button 
                  className="btn bg-gray-500 text-white px-6 py-2 rounded-full"
                  onClick={handleNoClick}
                >
                  No thanks
                </button>
              </div>

              {complimentAttempts > 0 && !showComplimentReveal && (
                <div className="text-center mt-4">
                  <img 
                    src={complimentResponses[complimentAttempts - 1].gif} 
                    alt="Reaction" 
                    className="w-48 h-48 object-cover rounded-lg mx-auto mb-2"
                  />
                  <p className="text-lg font-medium">{complimentResponses[complimentAttempts - 1].text}</p>
                </div>
              )}

              {showComplimentReveal && (
                <div className="text-center mt-4 animate-bounce">
                  <p className="text-2xl font-bold text-primary">Just kidding! You're absolutely amazing! 🌟</p>
                </div>
              )}
            </div>
          </AnimatedSection>
          
          {/* Original Secrets */}
          <div className="space-y-6 mb-16">
            {secrets.map((secret, index) => (
              <AnimatedSection key={secret.id} delay={0.5 + (index * 0.1)}>
                <div className="card hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-primary">{secret.title}</h3>
                    <button 
                      onClick={() => toggleSecretReveal(secret.id)}
                      className="text-gray-500 hover:text-primary transition-colors"
                    >
                      {secretsRevealed.includes(secret.id) ? 
                        <FaEyeSlash className="text-lg" /> : 
                        <FaEye className="text-lg" />
                      }
                    </button>
                  </div>
                  
                  <div className={`transition-all duration-300 ${secretsRevealed.includes(secret.id) ? 'opacity-100' : 'opacity-0 blur-sm'}`}>
                    <p className="text-gray-700">{secret.content}</p>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    <p>Click the eye icon to {secretsRevealed.includes(secret.id) ? 'hide' : 'reveal'} this secret</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Crush Modal */}
          {showCrushModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <motion.div 
                className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {crushStage < 3 ? (
                  <>
                    <img 
                      src={crushGifs[crushStage]} 
                      alt="Crush reaction" 
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <button 
                      onClick={handleCrushReveal}
                      className="w-full btn btn-primary"
                    >
                      {crushStage === 0 ? "Tell me more!" : 
                       crushStage === 1 ? "I'm dying to know!" :
                       "Final reveal!"}
                    </button>
                  </>
                ) : (
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Got you! 😉</h3>
                    <p className="mb-4">Interested, huh? Maybe we should chat!</p>
                    <div className="flex justify-center gap-4">
                      <a href="/contact" className="btn btn-primary">Contact Me</a>
                      <button 
                        onClick={() => {
                          setShowCrushModal(false);
                          setCrushStage(0);
                        }}
                        className="btn btn-secondary"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
          
          <AnimatedSection delay={0.8}>
            <div className="card bg-primary/5 border-l-4 border-primary">
              <h3 className="text-xl font-bold mb-4">The Ultimate Secret</h3>
              <p className="text-gray-700 mb-4">
                The biggest secret of all? Most of these "secrets" are completely made up for entertainment. 
                Or are they? That's the real secret—you'll never know which ones are true and which ones are fiction.
              </p>
              <p className="text-sm text-gray-500 italic">
                P.S. The password is "ilovepizza" in case you want to share this page with friends. Or keep it to yourself. 
                I'm not the boss of you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      )}
    </div>
  );
};

export default Secret;