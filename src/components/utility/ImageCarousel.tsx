import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


interface CarouselItem {
  src: string;
  alt: string;
  title: string;
}

interface ResponsiveImageCarouselProps {
  items: CarouselItem[];
}


interface CarouselItem {
  src: string;
  alt: string;
  title: string;
}

interface DesktopImageCarouselProps {
  items: CarouselItem[];
  autoChangeInterval?: number;
}


export const DesktopImageCarousel: React.FC<DesktopImageCarouselProps> = ({
  items,
  autoChangeInterval = 1000 // Default to 5 seconds
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoChangeInterval);

    return () => clearInterval(intervalId);
  }, [nextSlide, autoChangeInterval]);

  return (
    <div className="hidden md:block relative mt-24">
      <div className="flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft className="w-12 h-12 text-gray-600" />
        </button>
        <div className="w-[900px] h-[500px] flex items-center justify-center">
          <img
            src={items[currentIndex].src}
            alt={items[currentIndex].alt}
            className="max-w-full max-h-full object-contain rounded-lg transition-opacity duration-500"
          />
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRight className="w-12 h-12 text-gray-600" />
        </button>
      </div>
      <p className="mt-4 text-lg font-semibold text-center">{items[currentIndex].title}</p>
    </div>
  );
};


export const ResponsiveImageCarousel: React.FC<ResponsiveImageCarouselProps> = ({ items }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth);
    }
  }, [items]);

 

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.scrollWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [items]);

  return (
    <div className="w-full overflow-hidden mt-12 mb-20">
      <div className="relative" ref={containerRef}>
        <div
          className="flex animate-marquee"
          style={{
            width: `${containerWidth}px`,
            animation: 'marquee 30s linear infinite',
          }}
        >
          {items.concat(items).map((item, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col items-center mx-4 bg-rose-50/10">
              <div className="h-48 w-48 md:w-[300px] md:h-[200px] flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop version (manual navigation) */}
      
    </div>

  );
};

