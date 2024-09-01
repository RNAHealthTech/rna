import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import { Parallax } from 'react-parallax';
import Typed from 'typed.js';
import { FaWhatsapp, FaVirusCovid } from 'react-icons/fa6';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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


  const slides: Slide[] = useMemo(() => [
    {
      title: "Empowering Healthcare Providers",
      description: "We deliver digital recipe to reach patients online.",
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
      prewrittenText: "Connect with patients where they search",

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

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };






  return (

    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      onChange={handleSlideChange}
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
                  <motion.div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.div className="w-full sm:w-auto max-w-md">
                      <motion.div className="relative">
                        <motion.div className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaVirusCovid className="w-5 h-5 text-purple animate-spin" />
                        </motion.div>
                        <input
                          type="text"
                          className="w-full sm:w-64 md:w-80 p-3 sm:p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Search for health services..."
                        />
                      </motion.div>
                    </motion.div>
                    <motion.button
                      className="flex items-center justify-center text-center px-6 py-3 bg-white text-purple font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md cursor-pointer w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp className="mr-2" />
                      Contact Us
                    </motion.button>
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
  );
};

export default LandingCarousel;