import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion'
import { XIcon, LinkedinIcon, FacebookIcon } from "../components/icons";
import { FaLocationArrow } from 'react-icons/fa6';
import AnimatedLogo from '../components/utility/AnimatedLogo';


const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link to="" className="hover:underline transition-all duration-300 text-white/80 hover:text-white">
    {children}
  </Link>
);

const SocialLink = ({ href, icon: Icon }: { href: string, icon: React.ElementType }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
    <Icon className="h-6 w-6" />
  </a>
);


const Footer: React.FC = () => {

  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

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
    <motion.footer className="w-full bg-gradient-to-l from-black/70 to-black grid-pattern text-white rounded-t-[3rem] shadow-2xl relative overflow-hidden">
      <motion.div className="absolute inset-0 bg-grid-pattern opacity-10"></motion.div>
      <motion.div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          className="flex flex-col md:flex-row justify-between"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Column 1: About */}

          <motion.div className="w-full md:w-1/4 mb-8 md:mb-0 flex flex-col items-start">
            {/* <h3 className="text-3xl md:text-2xl lg:text-4xl font-semibold ml-2 mb-2">RNA HealthTech</h3>
            <p className="text-md md:text-md text-white/80 mt-2 mb-2 max-w-xs">Beyond the Pixels</p> */}
            <AnimatedLogo color='#fff' />
            <p className="text-sm md:text-lg text-white/80 mt-4 mb-6 max-w-xs">
            We tailor strategies to manage your online reputation with the nuance and understanding it deserves.
            </p>


            <motion.div className="flex space-x-4">
              <SocialLink href="" icon={LinkedinIcon} />
              <SocialLink href="" icon={FacebookIcon} />
              <SocialLink href="" icon={XIcon} />
            </motion.div>

          </motion.div>

          {/* Wrapper for Quick Links, Office Hours, and Contact Us */}
          <motion.div className="w-full md:w-3/5 flex flex-col md:flex-row">
            <motion.div className="flex flex-row md:flex-nowrap mb-8 md:mb-0">
              {/* Column 2: Quick Links */}

              <motion.div className="w-1/2 md:w-2/5 pr-2">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Quick Links</h3>
                <ul className="space-y-1 text-xl md:space-y-2">
                  <li><FooterLink href="/">Home</FooterLink></li>
                  <li><FooterLink href="/services">Services</FooterLink></li>
                  <li><FooterLink href="/about">About</FooterLink></li>
                  <li><FooterLink href="/contact">Contact</FooterLink></li>

                </ul>
              </motion.div>
            </motion.div>



           
            <motion.div
              className="w-full md:w-4/5 mt-8 md:mt-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Contact</h3>
              <motion.div className="space-y-1 md:space-y-2">
                {[
                  { icon: <FaPhoneAlt className="h-4 w-6 " href="tel:9911349570" />, content: "9311666193" }, //eslint-disable-line
                  { icon: <FaPhoneAlt className="h-4 w-6 " href="tel:9599537559" />, content: "9311666194" }, 
                  { icon: <FaEnvelope className="h-4 w-6" href="mailto:contact@rnahealthtech.com" />, content: "contact@rnahealthtech.com" },
                  { icon: <FaLocationArrow className="h-4 w-6 " />, content: "Place L29 L34,First Floor, Connaught Place, New Delhi,India-110001" },
                ].map((item, index) => (
                  <p key={index} className="flex items-center space-x-2">
                    <span className="material-icons text-lg">{item.icon}</span>
                    <span className="text-md md:text-xl text-white/80">{item.content}</span>
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t text-center border-white/20 items-center gap-4">
          <p className="text-md md:text-xl text-white/80">&copy; {new Date().getFullYear()} RNA HealthTech. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;