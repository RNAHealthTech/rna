import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Loader2 } from 'lucide-react';

const SecurityCheck = () => {
  const [isVerified, setIsVerified] = useState(true);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem('rna_security_verified');
    if (!verified) {
      setIsVerified(false);
      
      const timer1 = setTimeout(() => {
        setShowCheckbox(true);
      }, 1000);
      
      return () => clearTimeout(timer1);
    }
  }, []);

  const handleVerify = () => {
    if (isChecked) return;
    setIsChecked(true);
    setTimeout(() => {
      sessionStorage.setItem('rna_security_verified', 'true');
      setIsVerified(true);
    }, 1500);
  };

  if (isVerified) return null;

  return (
    <AnimatePresence>
      {!isVerified && (
        <motion.div
          key="security-check"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-gray-800"
        >
          <div className="bg-white border border-gray-200 rounded-xl p-8 max-w-md w-full shadow-xl flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
              Security Check
            </h2>
            <p className="text-gray-500 text-center text-sm mb-8">
              Please verify that you are not a robot to continue.
            </p>
            
            <div className="h-20 flex items-center justify-center w-full">
              {!showCheckbox ? (
                <div className="flex flex-col items-center text-blue-600">
                  <Loader2 className="w-6 h-6 animate-spin mb-3" />
                  <span className="text-xs font-medium uppercase tracking-wider">Checking connection...</span>
                </div>
              ) : (
                <button
                  onClick={handleVerify}
                  disabled={isChecked}
                  className={`w-full max-w-[280px] h-16 rounded border ${
                    isChecked 
                      ? 'border-green-500/50 bg-green-50' 
                      : 'border-gray-300 bg-white hover:bg-gray-50 hover:border-blue-400'
                  } flex items-center px-4 transition-all duration-300 shadow-sm`}
                >
                  <div className={`w-7 h-7 rounded-[4px] border mr-4 flex items-center justify-center transition-colors ${
                    isChecked 
                      ? 'bg-green-500 border-green-500' 
                      : 'bg-white border-gray-400'
                  }`}>
                    {isChecked && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </motion.svg>
                    )}
                  </div>
                  <span className={`font-medium ${isChecked ? 'text-green-600' : 'text-gray-700'}`}>
                    {isChecked ? 'Verification complete' : 'I am not a robot'}
                  </span>
                  
                  {isChecked && <Loader2 className="w-5 h-5 animate-spin text-green-500 ml-auto" />}
                </button>
              )}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 w-full flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-wider">
              <span>Secure Connection</span>
              <div className="flex space-x-3">
                <span className="hover:text-gray-900 cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-gray-900 cursor-pointer transition-colors">Terms & Conditions</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SecurityCheck;
