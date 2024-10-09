import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from './data';

const ProjectsShowcase: React.FC = () => {
    const [showMobile, setShowMobile] = useState(false);

    return (
        <section className="relative bg-gray-50 py-10 md:py-20">
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10" />

            <div className="container mx-auto px-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="mb-20 last:mb-0"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
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
                                        src={project.imageUrl}
                                        alt={`${project.title} desktop view`}
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
                                >
                                    {showMobile && (
                                        <img
                                            src={project.mobileImageUrl}
                                            alt={`${project.title} mobile view`}
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
                                        {project.title}
                                    </h2>
                                    <span className="text-xs md:text-sm text-gray-500">
                                        {project.date}
                                    </span>
                                </div>
                                
                                {project.subtitle && (
                                    <p className="text-base md:text-xl text-gray-600 mb-3 md:mb-4">
                                        {project.subtitle}
                                    </p>
                                )}
                                
                                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6">
                                    {project.description}
                                </p>

                                {project.technologies && project.technologies.length > 0 && (
                                    <div className="mb-4 md:mb-6">
                                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                                            {project.technologies.map((tech, idx) => (
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

                                {project.websiteUrl && (
                                    <a 
                                        href={project.websiteUrl}
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
                    </motion.div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
};

export default ProjectsShowcase;

