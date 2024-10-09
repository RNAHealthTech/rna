import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, projects } from './data';

const ProjectsShowcase: React.FC = () => {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [showMobile, setShowMobile] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const sectionRect = sectionRef.current.getBoundingClientRect();
            const sectionHeight = sectionRect.height;
            const sectionTop = sectionRect.top;
            const windowHeight = window.innerHeight;

            const headerHeight = 80; // Adjust if your header height is different
            const scrollProgress = (windowHeight - sectionTop - headerHeight) / (sectionHeight - windowHeight);
            const newIndex = Math.min(
                Math.max(0, Math.floor(scrollProgress * projects.length)),
                projects.length - 1
            );

            setCurrentProjectIndex(newIndex);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentProject: Project = projects[currentProjectIndex];

    return (
        <section 
            ref={sectionRef} 
            className="relative bg-gray-50 py-10 md:py-20"
        >
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10" />

            <div className='mb-10' style={{ height: `${projects.length * 100}vh` }}>
                <div className="sticky top-0 md:top-20 min-h-[calc(100vh-80px)] md:h-[calc(100vh-160px)] flex items-center justify-center p-2 md:p-4 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentProjectIndex}
                            className="w-full max-w-6xl mx-auto"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                            <div className="relative w-full h-[40vh] md:h-[60vh] flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 p-2 md:p-8 bg-gray-900">                                   
                            <motion.div 
    className={`relative ${
        showMobile 
            ? 'hidden md:block md:w-1/2 lg:w-1/3' 
            : 'w-full md:w-2/3'
    } h-full transition-all duration-500 ease-in-out ${
        !showMobile && 'md:max-w-3xl'
    }`}
>
                                       <img
  src={currentProject.imageUrl}
  alt={`${currentProject.title} desktop view`}
  className={`w-full h-full object-contain md:object-contain rounded-lg shadow-lg ${
    showMobile ? 'hidden md:block' : ''
  }`}
/>
                                    </motion.div>
                                    
                                    <motion.div 
    className={`absolute inset-0 md:relative md:inset-auto ${
        showMobile 
            ? 'block md:w-1/2 lg:w-1/3 h-full' 
            : 'hidden'
    } transition-all duration-500 ease-in-out overflow-hidden`}
>                                     {showMobile && (
                                            <img
                                                src={currentProject.mobileImageUrl}
                                                alt={`${currentProject.title} mobile view`}
                                                className="w-full h-full object-contain md:object-contain rounded-lg shadow-lg"
                                            />
                                        )}
                                    </motion.div>

                                    <button
                                        onClick={() => setShowMobile(!showMobile)}
                                        className="absolute bottom-2 md:bottom-4 right-2 md:right-4 px-3 md:px-4 py-1.5 md:py-2 
                                        bg-white/10 backdrop-blur-sm text-white rounded-full text-sm md:text-base
                                        hover:bg-white/20 transition-all duration-300"
                                    >
                                        {showMobile ? 'Hide Mobile' : 'Show Mobile'}
                                    </button>
                                </div>

                                <div className="p-3 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4 gap-1 md:gap-2">
                                        <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                                            {currentProject.title}
                                        </h2>
                                        <span className="text-xs md:text-sm text-gray-500">
                                            {currentProject.date}
                                        </span>
                                    </div>
                                    
                                    {currentProject.subtitle && (
                                        <p className="text-base md:text-xl text-gray-600 mb-3 md:mb-4">
                                            {currentProject.subtitle}
                                        </p>
                                    )}
                                    
                                    <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                                        {currentProject.description}
                                    </p>

                                    {currentProject.technologies && currentProject.technologies.length > 0 && (
                                        <div className="mb-4 md:mb-6">
                                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                                                {currentProject.technologies.map((tech, idx) => (
                                                    <span 
                                                        key={idx}
                                                        className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 text-gray-700 
                                                        rounded-full text-xs md:text-sm"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {currentProject.websiteUrl && (
                                        <a 
                                            href={currentProject.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center px-4 md:px-6 py-2 md:py-3 
                                            text-xs md:text-sm font-semibold rounded-md text-white 
                                            bg-gradient-to-r from-[#6e5e5d] to-[#3b2e2d] 
                                            hover:from-[#5f4a49] hover:to-[#4b3e3d] 
                                            transition duration-300 ease-in-out transform hover:scale-105"
                                        >
                                            Visit Website
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4 md:mt-8 flex justify-center gap-1.5 md:gap-2">
                                {projects.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                                            idx === currentProjectIndex
                                                ? 'bg-gray-800 w-3 md:w-4'
                                                : 'w-1.5 md:w-2 bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
};

export default ProjectsShowcase;

