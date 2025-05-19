import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm('mnnakeoq');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    text: '',
  });

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose();
        setFormData({
          
          name: '',
          phone: '',
          email: '',
          date: '',

          text: '',
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
    sendWhatsAppMessage();
  };

  const sendWhatsAppMessage = () => {
    const message = `New Appointment Request:
    Name: ${formData.name}
    Phone: ${formData.phone}
    Email: ${formData.email}
    Date: ${formData.date}
    Message: ${formData.text}`;

    const whatsappNumber = '919311666193'; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-purple200 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-center font-fraunces-slab text-purple">Book Online Appointment</h2>

 

            {state.succeeded ? (
              <p className="text-purple text-center font-work-sans">Your appointment has been booked successfully!</p>
            ) : (
              <form onSubmit={handleFinalSubmit} className="space-y-4 font-work-sans">
               
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple">Name</label>
                  <input type="text" id="parent_name" name="parent_name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full border border-purple-300 rounded-md shadow-sm p-2 bg-white text-purple focus:ring-2 focus:ring-purple focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full border border-purple rounded-md shadow-sm p-2 bg-white text-purple focus:ring-2 focus:ring-purple focus:border-transparent" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-purple">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border border-purple300 rounded-md shadow-sm p-2 bg-white text-purple focus:ring-2 focus:ring-purple focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-purple">Preferred Date</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full border border-purple300 rounded-md shadow-sm p-2 bg-white text-purple900 focus:ring-2 focus:ring-purple400 focus:border-transparent" />
                </div>

                <div>
                  <label htmlFor="text" className="block text-sm font-medium text-purple">Message</label>
                  <textarea id="text" name="text" rows={4} value={formData.text} onChange={handleChange} className="mt-1 block w-full border border-purple300 rounded-md shadow-sm p-2 bg-white text-purple900 focus:ring-2 focus:ring-purple400 focus:border-transparent"></textarea>
                </div>
                <div className="flex justify-end space-x-2">
                  <button type="button" onClick={onClose} className="px-4 py-2 border border-purple rounded-md text-sm font-medium text-purple hover:bg-white/10 transition-colors duration-300">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple hover:bg-purple transition-colors duration-300">
                    Book Appointment
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default AppointmentModal;