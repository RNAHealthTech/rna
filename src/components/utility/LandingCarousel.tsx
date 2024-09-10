import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import { Parallax } from 'react-parallax';
import Typed from 'typed.js';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';


interface Slide {
  title: string;
  description: string;
  image1: string;
  image2: string;
  typedText: string[];
  prewrittenText: string;
}

const LandingCarousel: React.FC = () => {


  const typedRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const typedInstances = useRef<(Typed | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartY = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const contactIcons = [
    { icon: FaWhatsapp, link: 'https://wa.me/1234567890', label: 'WhatsApp', color: '#25D366' },
    { icon: FaEnvelope, link: 'mailto:rnahealthtech@gmail.com', label: 'Email', color: '#EA4335' },
    { icon: FaPhone, link: 'tel:+1234567890', label: 'Phone', color: '#4285F4' },
  ];


  const slides: Slide[] = useMemo(() => [
    {
      title: "Empowering Healthcare Providers",
      description: "We deliver digital recipes to reach patients online.",
      image1: "/images/healthcare-bg.jpg",
      image2: "/images/patient.png",
      typedText: ["Innovative", "Patient-centric", "Digital"],
      prewrittenText: "Let's cook something together!",

    },
    {
      title: "Healthcare Marketing Strategies",
      description: "A solid online presence means stronger word-of-mouth marketing",
      image1: "/images/marketing-bg.jpg",
      image2: "/images/money.gif",
      typedText: ["Search", "Consider", "Decide"],
      prewrittenText: "Connect with patients where they",

    },
    {
      title: "Digital Doctors",
      description: "RNA combines the experience of seasoned healthcare professionals with tech wizards.",
      image1: "/images/patient-bg.jpg",
      image2: "/images/rna.gif",
      typedText: ["Expertise", "Innovation", "Convenience"],
      prewrittenText: "We bring"
    },
    {
      title: "Crafting Brands",
      description: "Healthcare branding is complex. We create compelling brands that outshine competition.",
      image1: "/images/content-writing-bg.jpg",
      image2: "/images/content-writing.gif",
      typedText: ["Stories", "Identities", "Brands"],
      prewrittenText: "We create"
    },
    {
      title: "End-To-End Solutions",
      description: "Patients are seeking health services online. We enusre they find YOU.",
      image1: "/images/web-design-bg.jpg",
      image2: "/images/web-design.webp",
      typedText: ["Comprehensive", "Intuitive", "Effective"],
      prewrittenText: "Our solutions are"
    }
  ], []);


  useEffect(() => {
    // Clean up previous instances
    const currentInstances = typedInstances.current;

    // Clean up previous instances
    currentInstances.forEach((instance) => {
      if (instance) {
        instance.destroy();
      }
    });

    // Initialize new instances
    slides.forEach((slide, index) => {
      if (typedRefs.current[index]) {
        currentInstances[index] = new Typed(typedRefs.current[index]!, {
          strings: slide.typedText,
          typeSpeed: 50,
          backSpeed: 50,
          loop: true,
          showCursor: false,
        });
      }
    });

    // Clean up on component unmount
    return () => {
      currentInstances.forEach((instance) => {
        if (instance) {
          instance.destroy();
        }
      });
    };
  }, [currentSlide, slides]);


  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current === null || !carouselRef.current) return;

    const touchCurrentY = e.touches[0].clientY;
    const diff = touchStartY.current - touchCurrentY;

    // If the vertical swipe is significant, prevent default to allow scrolling
    if (Math.abs(diff) > 10) {
      e.preventDefault();
      window.scrollBy(0, diff);
    }
  };

  const handleTouchEnd = () => {
    touchStartY.current = null;
  };

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };


  return (
    <div
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={10000} // 10 seconds
        onChange={handleSlideChange}
        swipeable={true}
        emulateTouch={true}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[800px] lg:h-[800px]">
            <Parallax strength={500} className='h-full'>
              <div className="absolute inset-0 bg-purple bg-opacity-50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 md:p-12 mt-96 lg:mt-60">
                <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center">

                  <motion.div
                    className="text-white text-center lg:text-left w-full lg:w-1/2 mb-8 lg:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.h2
                      className="font-fraunces-slab text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 shadow-text"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      className="font-work-sans-slab text-lg sm:text-xl md:text-2xl mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      className="text-xl sm:text-2xl md:text-3xl font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      {slide.prewrittenText}{" "}
                      <span
                        ref={(el) => (typedRefs.current[index] = el)}
                        className="text-lavender min-w-[200px]"
                      />
                    </motion.div>
                    <motion.div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                      {contactIcons.map((item, i) => (
                        <motion.a
                          key={i}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-14 h-14 bg-white rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
                          style={{ backgroundColor: item.color }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <item.icon className="w-8 h-8 text-white" />
                          <span className="sr-only">{item.label}</span>
                        </motion.a>
                      ))}
                    </motion.div>
                  </motion.div>
                  <motion.div
                    className="w-full lg:w-1/2 mt-8 lg:mt-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <img src={slide.image2} alt={slide.title} className="max-w-full h-auto rounded-lg mx-auto" />
                  </motion.div>
                </div>
              </div>
            </Parallax>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default LandingCarousel;