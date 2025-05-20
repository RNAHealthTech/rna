import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

interface Website {
  id: string;
  imageUrl: string;
  mobileImageUrl: string;
  liveUrl: string;
  detailsUrl?: string;
}

interface WebsiteCarouselProps {
  websites: Website[];
}

const WebsiteCarousel: React.FC<WebsiteCarouselProps> = ({ websites }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % websites.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [websites.length]);

  return (
    <div className="relative w-full min-h-screen sm:h-[calc(100vh-6rem)] overflow-hidden -mt-10 sm:-mt-20 rounded-b-[20px]">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
         
        >
          <div
            className="w-full h-full bg-cover bg-center brightness-75"
            style={{ 
              backgroundImage: `url(${isMobile ? websites[currentIndex].mobileImageUrl : websites[currentIndex].imageUrl})`,
              backgroundSize: isMobile ? 'cover' : 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 px-4 sm:px-0">
        <a
          href={websites[currentIndex].liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-purple-100 transition-colors duration-300 text-center"
        >
          Live Website
        </a>
        {/* <a
          href={websites[currentIndex].detailsUrl}
          className="w-full sm:w-auto px-6 py-3 bg-purple text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300 text-center"
        >
          Full Insights
        </a> */}
      </div>
    </div>
  );
};

export default WebsiteCarousel;
