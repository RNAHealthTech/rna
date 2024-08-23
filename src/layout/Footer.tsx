import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import { XIcon, LinkedinIcon, FacebookIcon } from "../components/icons";
import { FaLocationArrow} from 'react-icons/fa6';


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
    <footer className="w-full bg-gradient-to-l from-black/70 to-black grid-pattern text-white rounded-t-[3rem] shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Column 1: About */}

          <div className="w-full md:w-1/4 mb-8 md:mb-0 flex flex-col items-start">
            <h3 className="text-3xl md:text-2xl lg:text-4xl font-semibold ml-2 mb-2">RNA HealthTech</h3>
            <p className="text-md md:text-md text-white/80 mt-2 mb-2 max-w-xs">Beyond the Pixels</p>
            <p className="text-sm md:text-lg text-white/80 mt-4 mb-6 max-w-xs">
              Providing exceptional healthcare services with a focus on patient well-being and advancing your medical practices.
            </p>


            <div className="flex space-x-4">
              <SocialLink href="" icon={LinkedinIcon} />
              <SocialLink href="" icon={FacebookIcon} />
              <SocialLink href="" icon={XIcon} />
            </div>

          </div>

          {/* Wrapper for Quick Links, Office Hours, and Contact Us */}
          <div className="w-full md:w-3/5 flex flex-col md:flex-row">
            <div className="flex flex-row md:flex-nowrap mb-8 md:mb-0">
              {/* Column 2: Quick Links */}

              <div className="w-1/2 md:w-2/5 pr-2">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Quick Links</h3>
                <ul className="space-y-1 text-xl md:space-y-2">
                  <li><FooterLink href="/">Home</FooterLink></li>
                  <li><FooterLink href="/services">Services</FooterLink></li>
                  <li><FooterLink href="/about">About</FooterLink></li>
                  <li><FooterLink href="/contact">Contact</FooterLink></li>

                </ul>
              </div>
            </div>



            {/* Column 5: CODE */}
            <div className="w-full md:w-4/5 mt-8 md:mt-0">
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">Contact</h3>
              <div className="space-y-1 md:space-y-2">
                {[
                  { icon: <FaPhoneAlt className="h-4 w-6 " href="tel:6306204612" />, content: "6306204612" }, //eslint-disable-line
                  { icon: <FaEnvelope className="h-4 w-6" href="mailto:rnahealthtech@gmail.com" />, content: "rnahealthtech@gmail.com" },
                  { icon: <FaLocationArrow className="h-4 w-6 " />, content: "Shastri Nagar, New Delhi-110002" },
                ].map((item, index) => (
                  <p key={index} className="flex items-center space-x-2">
                    <span className="material-icons text-lg">{item.icon}</span>
                    <span className="text-md md:text-xl text-white/80">{item.content}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t text-center border-white/20 items-center gap-4">
          <p className="text-md md:text-xl text-white/80">&copy; {new Date().getFullYear()} RNA HealthTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;