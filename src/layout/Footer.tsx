import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from 'framer-motion';


const Footer: React.FC = () => {

  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
    //eslint-disable-next-line
  }, []);

  return (
    <footer className="bg-foreground text-background py-12 px-6 rounded-t-[40px] shadow-md">
     
        <motion.div className={`container mx-auto ${isMobile ? 'flex flex-col h-[70vh]' : ''}`}>
          <motion.div className={`${isMobile ? 'flex-shrink-0' : ''}`}>
            <h3 className="font-fraunces text-2xl mb-4">RNA HealthTech</h3>
            <p className="font-work-sans-slab text-sm mb-4">Beyond the Pixels</p>
          </motion.div>

          <motion.div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isMobile ? 'flex-grow overflow-y-auto' : ''
            }`}>
            <motion.div className="space-y-4">
              <h3 className="font-fraunces text-xl mb-4">Contact</h3>
              <motion.div className="flex items-center space-x-2">
                <FaPhone className="text-accent" />
                <p className="font-work-sans-slab text-sm">+91 XXXXXXXXXX</p>
              </motion.div>
              <motion.div className="flex items-center space-x-2">
                <FaEnvelope className="text-accent" />
                <p className="font-work-sans-slab text-sm">rnahealthtech@gmail.com</p>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-4">
              <h3 className="font-fraunces text-xl mb-4">Address</h3>
              <p className="font-work-sans-slab text-sm">XYZ</p>
              <p className="font-work-sans-slab text-sm">Shastri Nagar, New Delhi,</p>
              <p className="font-work-sans-slab text-sm">Delhi</p>
            </motion.div>
            
              
              <motion.div className="space-y-4">
                <h3 className="font-fraunces text-xl mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link onClick={(e) => {
                    e.preventDefault();
                    openModal();
                  }} to="#" className="font-work-sans-slab text-md text-accent hover:text-accent transition-colors">Book Appointment</Link></li>
                  <li><Link to="/about" className="font-work-sans-slab text-sm hover:text-accent transition-colors">Portfolio</Link></li>
                  <li><Link to="/services" className="font-work-sans-slab text-sm hover:text-accent transition-colors">What We Do?</Link></li>
                  <li><Link to="/contact" className="font-work-sans-slab text-sm hover:text-accent transition-colors">Contact</Link></li>
                </ul>
               

              </motion.div>
            
          </motion.div>

          <motion.div className={`mt-12 pt-8 border-t border-background flex flex-col md:flex-row justify-between items-center ${isMobile ? 'flex-shrink-0' : ''}`}>
            <motion.div className="font-work-sans-slab text-sm mb-4 md:mb-0">
              © {currentYear} RNA HealthTech. All rights reserved.
            </motion.div>
           
          </motion.div>
        </motion.div>
    </footer>
  );
};

export default Footer;