import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlPlus } from 'react-icons/sl';

interface DropdownItemProps {
   title: string, 
   content: string,
}

const DropdownItem: React.FC<DropdownItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
       
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <SlPlus className="text-zinc-600 text-3xl" />
        </motion.div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            className="text-gray-600 mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {content}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};



export default DropdownItem;