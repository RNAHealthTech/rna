import React, { useEffect } from 'react';
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
        <Link to={`/projects/${project.id}`} className={`block p-6 h-full rounded-xl transition-all duration-300 ${
          isLargeCard 
            ? 'bg-gradient-to-br from-purple-600 to-pink-500 text-white' 
            : 'bg-gradient-to-br from-gray-100 to-white shadow-md hover:shadow-lg'
        }`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
              <span>{project.date}</span>
              <span>👁 {project.views}</span>
            </div>
            <h3 className={`text-2xl font-bold mb-3 ${isLargeCard ? 'text-zinc-800' : 'text-gray-800'}`}>{project.title}</h3>
            <p className={`mb-4 ${isLargeCard ? 'text-black/80' : 'text-gray-600'}`}>{project.description}</p>
            <span className={`${isLargeCard ? 'text-purple' : 'text-purple'} hover:underline transition-colors`}>Read more →</span>
          </motion.div>
        </Link>
      </Card>
    );
  };
  
  const ProjectsGrid: React.FC = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First row: Large card and small card */}
        <ProjectCard project={projects[0]} index={0} className="md:col-span-2 lg:col-span-2" />
        <ProjectCard project={projects[1]} index={1} className="hidden md:block" />
        
        {/* Second row: Three equal-sized cards */}
        {projects.slice(2, 5).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index + 2} />
        ))}
        
        {/* Remaining cards */}
        {projects.slice(5).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index + 5} />
        ))}
      </div>
    );
  };

const HeaderCarousel: React.FC = () => {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
    >
      {projects.slice(0, 3).map((project) => (
        <div key={project.id} className="text-left p-8">
          <h2 className="text-3xl font-bold mb-12">{project.title}</h2>
          <p className="mb-4">{project.description}</p>
          <Link to={`/projects/${project.id}`} className="bg-white text-purple text-xl font-bold px-4 py-2 rounded-full">
            Learn More
          </Link>
        </div>
      ))}
    </Carousel>
  );
};

const ParallaxImages: React.FC = () => {
    return (
      <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
        <Parallax translateY={[-20, 20]}>
          <div className="relative aspect-[3/4] max-w-lg mx-auto lg:max-w-2xl xl:max-w-3xl">
            <motion.div
              className="absolute top-0 left-0 w-3/4 h-4/5 bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/images/1.gif"
                alt="Project 1"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-0 w-3/4 h-4/5 bg-white rounded-3xl overflow-hidden shadow-2xl"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="/images/2.gif"
                alt="Project 2"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </motion.div>
          </div>
        </Parallax>
      </div>
    );
  };


const ProjectsPage: React.FC = () => {
    
    useEffect(() => {
        window.scrollTo(0,0)
     //eslint-disable-next-line
    },[])

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <div className="absolute inset-0 bg-purple h-[650px] text-white py-20" />
        <div className="max-w-7xl mx-auto px-4 mt-56 text-white">
          <h1 className="absolute inset-0 text-4xl font-bold mt-36 text-center">Our Projects</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <HeaderCarousel />
            </div>
            <ParallaxImages />
          </div>
        </div>
      
      <div className="max-w-7xl mx-auto px-4 py-20 mt-20">
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default ProjectsPage;