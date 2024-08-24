import React from 'react';
import { motion } from 'framer-motion';
import {  FaLinkedin } from 'react-icons/fa';
import { FaXTwitter
 } from 'react-icons/fa6'

interface TeamCardProps {
    name: string, 
    role: string, 
    image: string
}

interface TeamModalProps {
    isOpen:  boolean;
    onClose: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image }) => (

  <motion.div 
    className="flex flex-col text-zinc-900 bg-white/70 shadow-md rounded-[40px] w-full sm:w-80 lg:w-96"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl h-64 sm:h-72 lg:h-80">
      <img src={image} alt={`${name} profile`} className="w-full h-full object-cover" />
    </div>
    <div className="p-6 text-center">
      <h4 className="block mb-2 font-sans text-xl sm:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
        {name}
      </h4>
      <p className="block font-sans text-sm sm:text-base font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
        {role}
      </p>
    </div>
    <div className="flex justify-center p-6 pt-2 gap-7">
      <a href="#facebook" className="text-blue-600 hover:text-blue-800">
        <FaLinkedin className="text-xl sm:text-2xl" />
      </a>
      <a href="#twitter" className="">
        <FaXTwitter className="text-xl sm:text-2xl" />
      </a>
    </div>
  </motion.div>
);

const TeamModal: React.FC<TeamModalProps> = ({ isOpen, onClose }) => {
  const teamMembers: TeamCardProps[] = [
    { name: "Rajat", 
    role: "CEO / Co-Founder",
    image: "https://pyxis.nymag.com/v1/imgs/bc9/ccb/936534d0b82b77cf0ffbac92010ee38ea3-06-al-pacino.2x.rvertical.w512.jpg" },
    { name: "Vinay", role: "CTO", image: "https://s3.eu-central-1.amazonaws.com/datajournalismcom/userPhotos/profileDP.jpg" },
    { name: "Little Alex", role: "Lead Designer", image: "https://static.wikia.nocookie.net/near_pure_evil/images/3/37/AlexTheLarge.jpg" },
  ];

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 ring-1 ring-zinc-100 backdrop-blur-sm flex items-center justify-center p-8 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        
      <motion.div 
        className="bg-purple/50 rounded-lg p-6 w-full max-w-7xl max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
         <button 
          onClick={onClose}
          className="mt-6 px-4 py-2 text-xl text-white rounded hover:bg-indigo-700 transition-colors"
        >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
       
      </motion.div>
    </motion.div>
  );
};

export default TeamModal;