'use client'
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import { AnimatePresence, motion } from 'framer-motion';

const coreValues = [
  {
    letter: 'A',
    title: 'Accountability',
    description:
      'Upholding transparency, trust, and responsibility in every interaction with farmers, partners, and stakeholders.',
  },
  {
    letter: 'G',
    title: 'Growth',
    description:
      'Enabling sustainable growth for farmers and agribusinesses through access to finance, technology, and data-driven insights.',
  },
  {
    letter: 'R',
    title: 'Resilience',
    description:
      'Strengthening farmers’ ability to withstand climate, market, and operational risks through insurance and risk-mitigation solutions.',
  },
  {
    letter: 'I',
    title: 'Innovation',
    description:
      'Leveraging digital platforms, AI, and smart agricultural practices to modernize farming and financial inclusion.',
  },
  {
    letter: 'C',
    title: 'Collaboration',
    description:
      'Building strong partnerships across farmers, insurers, financial institutions, and policymakers to create a unified agricultural ecosystem.',
  },
  {
    letter: 'O',
    title: 'Opportunity',
    description:
      'Unlocking inclusive economic opportunities by connecting farmers to capital, protection, and market access.',
  },
  {
    letter: 'R',
    title: 'Responsibility',
    description:
      'Championing ethical practices, environmental stewardship, and long-term food security for future generations.',
  },
  {
    letter: 'E',
    title: 'Empowerment',
    description:
      'Empowering farmers with knowledge, technology, and financial tools to make informed decisions and secure sustainable livelihoods.',
  },
];


function CoreValueSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-swiping logic every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % coreValues.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    // Container:
    // - By default (below 650px): flex-row (letters on left, description on right)
    // - For devices with minimum width of 650px: flex-col (letters on top, description below)
    <div>
      <div className="text-center mb-8 min-[650px]:block">
          <h2 className="text-3xl font-bold text-green-800 mb-2">Our Core Values</h2>
          <p className="text-gray-700 text-2xl">The principles that guide everything we do</p>
        </div>
    <div className="container mx-auto py-10 px-4 flex flex-row min-[650px]:flex-col items-center gap-8">
      
      <div className="flex flex-col min-[650px]:flex-row gap-2">
      
      {/* Letters Container:
          - Default: flex-col (vertical) for narrow screens.
          // For minimum width of 650px, switch to flex-row */}
          
        {coreValues.map((item, index) => (
          <motion.div
            key={item.letter}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer rounded-full text-white font-bold flex items-center justify-center transition-all duration-300"
            animate={{
              scale: index === activeIndex ? 1.5 : 1,
              backgroundColor: index === activeIndex ? '#166534' : '#052e16',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              width: 48,
              height: 48,
              fontSize: '1.5rem',
            }}
          >
            {item.letter}
          </motion.div>
        ))}
      </div>

      {/* Description Card */}
      <div className="w-full max-w-3xl bg-white border border-green-100 shadow-lg rounded-2xl p-6 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={coreValues[activeIndex].title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <h2 className="text-2xl min-[650px]:text-3xl font-bold text-green-800 mb-4">
              {coreValues[activeIndex].title}
            </h2>
            <p className="text-gray-700 text-md min-[650px]:text-lg leading-relaxed">
              {coreValues[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </div>
  );
}

export default CoreValueSection;
