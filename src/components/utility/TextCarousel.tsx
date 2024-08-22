import React from 'react';
import { FaCircle, FaPlusCircle } from 'react-icons/fa';

interface TextCarouselProps {
  texts: string[];
  speed: number;
}

const TextCarousel: React.FC<TextCarouselProps> = ({ texts, speed = 30 }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className="inline-block animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {texts.map((text, index) => (
          <span
            key={index}
            className="mx-4 sm:mx-8 text-4xl sm:text-4xl lg:text-6xl font-bold font-work-sans-slab"
          >
            {text}
            {' /'}
          </span>
        ))}
        {texts.map((text, index) => (
          <span
            key={index + texts.length}
            className="mx-4 sm:mx-8 text-4xl sm:text-4xl lg:text-6xl font-bold font-work-sans-slab"
          >
            {text}
            {' /'}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;