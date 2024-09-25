import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react'

const ContactPage: React.FC = () => {

    const [state, handleSubmit] = useForm('mnnakeoq');
    console.log(state);


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
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        className="text-xl sm:text-2xl font-work-sans-slab max-w-3xl mx-auto"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Let's Revolutionize Your Healthcare Marketing Together
                    </motion.p>
                </div>
            </motion.header>

            <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-fraunces-slab font-bold mb-6 text-purple">Contact Information</h2>
                        <p className="text-lg font-work-sans-slab mb-8">
                            We're here to answer any questions you have about our services. Reach out to us and let's start a conversation about elevating your healthcare practice.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="font-work-sans-slab">9911349570,{' '} 9599537559</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="font-work-sans-slab">rnahealthtech@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="font-work-sans-slab">Place L29 L34, First Floor, Connaught Place, New Delhi, India - 110001</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {state.succeeded ? (
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left mt-4 sm:mt-6 lg:mt-0 px-4 lg:px-0">
                                Your Form has been sent successfully!
                            </h3>
                        ) : (
                            <motion.div>
                                <h2 className="text-3xl font-fraunces-slab font-bold mb-6 text-purple">Send Us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <motion.div className="mb-8">
                                        <label htmlFor="name" className="block text-oxford-blue text-sm font-semibold mb-2">Name </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            placeholder="Type Name"
                                            className="border-b border-platinum py-2 text-sm w-full p-4"
                                        />
                                    </motion.div>

                                    <motion.div className="mb-8">
                                        <label htmlFor="phone" className="block text-oxford-blue text-sm font-semibold mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            placeholder="Type Phone Number"
                                            className="border-b border-platinum py-2 text-sm w-full p-4"
                                        />
                                    </motion.div>
                                    <motion.div className="mb-8">
                                        <label htmlFor="email" className="block text-oxford-blue text-sm font-semibold mb-2">Email (optional)</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Type your Email"
                                            className="border-b border-platinum py-2 text-sm w-full p-4"
                                        />
                                    </motion.div>
                                    <motion.div className="mb-8">
                                        <label htmlFor="message" className="block text-oxford-blue text-sm font-semibold mb-2">How can I help? </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Type Description"
                                            required
                                            className="border-b border-platinum py-2 text-sm w-full max-h-72 min-h-24 h-24 resize-vertical p-4"
                                        ></textarea>
                                    </motion.div>

                                    <motion.button
                                        type="submit"
                                        className="w-full bg-purple text-white py-3 px-6 rounded-md font-semibold hover:bg-lightpurple transition-colors duration-300"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}>
                                        Schedule Appointment
                                    </motion.button>
                                </form>

                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </main>

            <motion.section
                className="bg-lavender py-16 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-fraunces-slab font-bold mb-8 text-purple">Visit Our Office</h2>
                    <div className="flex justify-center mb-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28021.314610183075!2d77.19809103376329!3d28.60984529331111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd374152412b%3A0x698d3a6416e511aa!2sAwfis%20Connaught%20Place!5e0!3m2!1sen!2sin!4v1726033078579!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0, maxWidth: "1000px" }}
                            allowFullScreen
                            loading="lazy"
                            title="Our Office"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <p className="text-lg font-work-sans-slab max-w-3xl mx-auto">
                        We're conveniently located in the heart of the Central Park Area. Stop by for a coffee and let's discuss how we can help your practice thrive in the digital world.
                    </p>
                </div>
            </motion.section>
        </div>
    );
};

export default ContactPage;