import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card } from '../components/utility/card';
import { Project, projects } from '../components/projects/data';
import { Parallax } from 'react-scroll-parallax';

const ProjectCard: React.FC<{ project: Project; index: number; className?: string }> = ({ project, index, className }) => {
  const isLargeCard = index === 0;

  return (
    <Card className={className}>
      <Link to={`/projects/${project.id}`} className={`block h-full rounded-xl transition-all duration-300 overflow-hidden ${isLargeCard
        ? 'bg-gradient-to-br from-purple-600 to-pink-500 text-white'
        : 'bg-gradient-to-br from-gray-100 to-white shadow-md hover:shadow-lg'
        }`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.imageUrl})` }} />
          <div className="relative z-10 p-6 bg-gradient-to-t from-black/70 to-transparent h-full flex flex-col justify-end">
            <div className="flex justify-between items-center mb-2 text-sm text-gray-300">
              <span>{project.date}</span>
              <span>👁 {project.views}</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
            {project.subtitle && <p className="text-sm text-gray-200 mb-3">{project.subtitle}</p>}
            <p className="mb-4 text-gray-200">{project.description}</p>
            <span className="text-purple-300 hover:text-purple-100 transition-colors">Read more →</span>
          </div>
        </motion.div>
      </Link>
    </Card>
  );
};

const ProjectsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index}
          className={index === 0 ? "sm:col-span-2 lg:col-span-2 aspect-video" : "aspect-square"}
        />
      ))}
    </div>
  );
};

const HeaderCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);
  const touchStartY = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      className="h-full  md:mt-24"
    >
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={10000}
        onChange={handleSlideChange}
        swipeable={true}
        emulateTouch={true}
        className="h-full"
      >
        {projects.slice(0, 3).map((project) => (
          <div key={project.id} className="text-center p-4 md:p-8 h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">{project.title}</h2>
              {project.subtitle && <h3 className="text-lg md:text-xl mb-12 md:mb-24 text-purple-200">{project.subtitle}</h3>}
              <div className="space-x-2 md:space-x-4 mb-12">
                <Link to={`/projects/${project.id}`} className="bg-white text-purple text-sm md:text-base font-bold px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-purple hover:text-white transition-colors">
                  Learn More
                </Link>
                {project.websiteUrl && (
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white text-sm md:text-base font-bold px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-purple-700 transition-colors">
                    Visit Website
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const ParallaxImages: React.FC = () => {
  return (
    <Parallax translateY={[-20, 20]}>
      <div className="relative aspect-square md:aspect-[4/3] h-full">
        <motion.div
          className="absolute top-0 left-0 w-2/3 h-3/4 bg-white rounded-3xl overflow-hidden shadow-2xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/images/projects-hero1.png"
            alt="Project 1"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-2/3 h-3/4 bg-white rounded-3xl overflow-hidden shadow-2xl"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src="/images/projects-hero2.png"
            alt="Project 2"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </motion.div>
      </div>
    </Parallax>
  )
}

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="absolute inset-0 bg-purple h-[80vh] text-white" />
      <div className="max-w-7xl mx-auto px-4 pt-20 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-[60vh] md:h-[70vh]">
          <div className="h-full">
            <HeaderCarousel />
          </div>
          <div className="h-full mt-24 md:mt-0">
            <ParallaxImages />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 mt-64 md:mt-2">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Projects
        </motion.h2>
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default ProjectsPage;