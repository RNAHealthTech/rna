import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects, Project } from './data';

const ProjectDetailPage: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
        //eslint-disable-next-line
    }, [])


    const { id } = useParams<{ id: string }>();
    const project = projects.find(p => p.id === id) as Project;

    if (!project) {
        return <div>Project not found</div>;
    }



    return (
        <div className="bg-white text-zinc-800 min-h-screen ">
            <div className="absolute inset-0 h-[450px] lg:h-[350px] bg-purple" />
            <header className="absolute text-white mt-12 inset-0 pt-20 pb-12 px-4 max-w-4xl mx-auto text-center">
                <motion.h1
                    className="text-3xl lg:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {project.title}
                </motion.h1>
                <motion.p
                    className="text-xl mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {project.subtitle}
                </motion.p>
                {project.websiteUrl && (
                    <motion.a
                        href={project.websiteUrl}
                        className="bg-white text-purple px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Website →
                    </motion.a>
                )}
            </header>

            <main className="max-w-4xl mx-auto px-4 mt-96 lg:mt-96">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                    <p className="text-lg">{project.overview}</p>
                </section>

                {project.keyFeatures && (
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                        <ul className="list-disc pl-6">
                            {project.keyFeatures.map((feature, index) => (
                                <li key={index} className="text-lg mb-2">{feature}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {project.technologies && (
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="bg-purple font-bold text-white px-3 py-1 rounded-full text-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {project.results && (
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Results</h2>
                        <ul className="list-disc pl-6">
                            {project.results.map((result, index) => (
                                <li key={index} className="text-lg mb-2">{result}</li>
                            ))}
                        </ul>
                    </section>
                )}

                {project.screenshots && (
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Screenshots</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.screenshots.map((screenshot, index) => (
                                <img key={index} src={screenshot} alt={`Project screenshot ${index + 1}`} className="w-full h-auto rounded-lg" />
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
};

export default ProjectDetailPage;
