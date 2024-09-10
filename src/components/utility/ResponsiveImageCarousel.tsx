import React, { useRef, useEffect, useState } from 'react';

interface CarouselItem {
  src: string;
  alt: string;
  title: string;
}

interface ResponsiveImageCarouselProps {
  items: CarouselItem[];
}

const ResponsiveImageCarousel2: React.FC<ResponsiveImageCarouselProps> = ({ items }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth);
    }
  }, [items]);

  return (
    <div className="w-full overflow-hidden mt-12 mb-20 md:mb-12">
      {/* Mobile version (animated carousel) */}
      <div className="relative" ref={containerRef}>
        <div
          className="flex animate-marquee"
          style={{
            width: `${containerWidth}px`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col items-center mx-4 bg-rose-50/10">
              <div className="w-64 h-64 md:w-[900px] md:h-[500px] flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-center">{item.title}</p>
            </div>
          ))}
          {items.map((item, index) => (
            <div key={`repeat-${index}`} className="flex-shrink-0 flex flex-col items-center mx-4">
              <div className="w-32 h-32 flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveImageCarousel2;
