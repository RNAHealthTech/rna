import React, {useEffect} from 'react';
import { motion } from 'framer-motion';

interface Service {
    name: string;
    description: string;
    icon: React.ReactNode;
}

const services: Service[] = [
    {
        name: 'SEO for Healthcare',
        description: 'Dominate search results and attract more patients with our healthcare-specific SEO strategies.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        name: 'Medical Web Design',
        description: 'Create stunning, user-friendly websites that inspire trust and convert visitors into patients.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        name: 'Doctor Branding',
        description: 'Build a powerful personal brand that sets you apart in the competitive healthcare landscape.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        ),
    },
    {
        name: 'Healthcare Marketing Strategies',
        description: 'Develop data-driven marketing plans tailored to your specific medical practice or healthcare business.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        name: 'Medical Social Media Management',
        description: 'Engage with patients, build trust, and grow your practice through expert social media management.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
        ),
    },
    {
        name: 'Medical Content Writing',
        description: 'Educate and attract patients with compelling, accurate, and SEO-optimized healthcare content.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        ),
    },
];

const Services: React.FC = () => {
 
    return (
        <div className="bg-verylight min-h-screen">
            <div className="absolute h-48 inset-0 bg-purple z-0 bg-opacity-0" />

            <motion.header
                className="bg-gradient-to-r from-purple to-lightpurple text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/api/placeholder/1200/800')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
                />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-fraunces-slab font-bold mb-4 shadow-text"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Revolutionize Your Healthcare Services
                    </motion.h1>
                    <motion.p
                        className="text-xl sm:text-2xl font-work-sans-slab max-w-3xl mx-auto"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Innovate. Transform. Elevate Your Practice with RNA HealthTech
                    </motion.p>
                </div>
            </motion.header>

            <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <motion.h2
                    className="text-3xl sm:text-4xl font-fraunces-slab font-bold mb-12 text-center text-purple"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Why Choose RNA HealthTech?
                </motion.h2>
                <motion.p
                    className="text-xl font-work-sans-slab mb-12 text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    In the complex world of healthcare, your online presence is your first impression. At RNA HealthTech, we combine deep healthcare industry knowledge with cutting-edge digital marketing expertise to elevate your practice above the competition.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="p-6">
                                <div className="flex items-center justify-center w-16 h-16 bg-purple rounded-full mb-4 text-white">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-fraunces-slab font-bold mb-2">{service.name}</h3>
                                <p className="text-gray-600 font-work-sans-slab">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <section className="bg-lavender py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-fraunces-slab font-bold mb-8 text-purple"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        The RNA HealthTech Advantage
                    </motion.h2>
                    <motion.p
                        className="text-xl font-work-sans-slab mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We don't just offer services; we deliver results. Our team of healthcare marketing experts understands the unique challenges and opportunities in your field. Here's why leading healthcare providers choose us:
                    </motion.p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { value: '1+ week', label: 'Rapid Strategy Implementation' },
                            { value: '20+', label: 'Cutting-Edge Technologies' },
                            { value: '99%', label: 'Patient Targeting Accuracy' },
                            { value: '100+', label: 'Satisfied Healthcare Clients' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="bg-white rounded-lg shadow-lg p-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-3xl font-fraunces-slab font-bold text-purple mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-work-sans-slab">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-3xl sm:text-4xl font-fraunces-slab font-bold mb-8 text-center text-purple"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Your Success Is Our Mission
                    </motion.h2>
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-between"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img src="/images/doctor-services.jpg" alt="Healthcare professionals" className="h-[90%] rounded-[30px] shadow-lg" />
                        </div>
                        <div className="md:w-1/2 md:pl-8">
                            <p className="text-lg font-work-sans-slab mb-6">
                                At RNA HealthTech, we understand that your success is measured in lives improved and patients helped. Our tailored digital marketing strategies are designed to:
                            </p>
                            <ul className="list-disc pl-6 text-lg font-work-sans-slab mb-6">
                                <li>Increase your online visibility to potential patients</li>
                                <li>Build trust and credibility in your medical expertise</li>
                                <li>Streamline patient acquisition and retention</li>
                                <li>Optimize your practice's operational efficiency</li>
                                <li>Stay ahead of healthcare marketing trends and regulations</li>
                            </ul>
                            <p className="text-lg font-work-sans-slab">
                                Choose RNA HealthTech and let us handle your digital presence while you focus on what matters most – providing exceptional care to your patients.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <motion.section
                className="bg-purple text-white py-16 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-fraunces-slab font-bold mb-8">Ready to Transform Your Healthcare Marketing?</h2>
                    <p className="text-xl font-work-sans-slab mb-12 max-w-3xl mx-auto">
                        Let's collaborate to create a digital strategy that sets your practice apart. Contact us today for a free consultation and take the first step towards revolutionizing your healthcare marketing.
                    </p>
                    <motion.a
                        href="/contact"
                        className="inline-block bg-white text-purple px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get Started Now
                    </motion.a>
                </div>
            </motion.section>
        </div>
    );
};

export default Services;