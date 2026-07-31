import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageCircleQuestion } from 'lucide-react';

export interface FaqItem {
  id: string;
  category: 'General' | 'Partners & Events' | 'Services & SEO' | 'Process & Growth';
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Partners & Events',
    question: 'Which healthcare institutions and MedTech partners does RNA HealthTech collaborate with?',
    answer: 'RNA HealthTech partners with leading healthcare organizations, super-speciality hospital networks, and MedTech innovators. Our key partner and event ecosystem includes Medtronic, Sir Ganga Ram Hospital (SGRH), BLK-Max Super Speciality Hospital, Max Healthcare, Apollo Hospitals, Sarvodaya Healthcare, Kailash Hospital, Karuna Hospital, Bharti Healthcare, and Venkateshwar Hospital. We collaborate on digital brand strategy, doctor outreach, patient awareness summits, and digital health technology rollouts.'
  },
  {
    id: 'faq-2',
    category: 'Partners & Events',
    question: 'How do you assist hospitals like SGRH, BLK, Max, and Apollo with event and brand marketing?',
    answer: 'We provide end-to-end digital solutions for medical symposia, health summits, and doctor branding. This includes targeted event landing pages, pre-event digital campaign management, doctor thought leadership content, patient testimonial showcases, and localized search optimization for specialized clinical departments.'
  },
  {
    id: 'faq-3',
    category: 'Services & SEO',
    question: 'What core services does RNA HealthTech offer to doctors and hospitals?',
    answer: 'We specialize exclusively in digital health growth solutions, including Healthcare Search Engine Optimization (SEO), High-Converting Website Design & Development, Personal Branding for Doctors, Social Media Management, Healthcare Content Marketing, and Digital Therapy Campaign Management.'
  },
  {
    id: 'faq-4',
    category: 'Services & SEO',
    question: 'Why is specialized Healthcare SEO different from generic digital marketing?',
    answer: 'Healthcare SEO requires deep knowledge of medical terminology, patient search intent, local healthcare intent (geotargeted hospital searches), and strict ethical compliance. Unlike generic marketing, our strategies focus on building patient trust, medical accuracy, Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines, and conversion-focused booking flows.'
  },
  {
    id: 'faq-5',
    category: 'Process & Growth',
    question: 'How quickly can a hospital or practice expect results from digital marketing campaigns?',
    answer: 'Fast prototyping and landing page setups are launched within 1+ week. Local SEO and organic rankings typically see substantial organic visibility increases within 60-90 days, while targeted digital marketing campaigns can drive immediate patient inquiries and appointment bookings.'
  },
  {
    id: 'faq-6',
    category: 'Process & Growth',
    question: 'How can a new hospital, clinic, or MedTech company partner with RNA HealthTech?',
    answer: 'Partnering with us is simple! You can schedule a strategy consultation directly through our contact form or call our team at +91-9311666193. We analyze your clinical strengths, target audience, and growth objectives to design a customized digital health roadmap.'
  },
  {
    id: 'faq-7',
    category: 'General',
    question: 'Does RNA HealthTech ensure compliance with medical advertising standards?',
    answer: 'Yes. All content, website copy, and promotional assets created by RNA HealthTech are crafted to align with medical ethics, patient privacy protocols, and digital compliance standards required in the healthcare industry.'
  }
];

const categories = ['All', 'Partners & Events', 'Services & SEO', 'Process & Growth', 'General'] as const;

const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = activeCategory === 'All'
    ? faqsData
    : faqsData.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-20 bg-white text-black relative">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple/10 text-purple font-semibold text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-fraunces-slab mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-work-sans-slab">
            Explore insights into our work with top healthcare partners like Medtronic, SGRH, BLK, Max, Apollo, Sarvodaya, Kailash, Karuna, Bharti, and Venkateshwar.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-purple text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openFaqId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-purple/40 bg-purple/5 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-semibold text-lg md:text-xl font-fraunces-slab text-gray-900"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <MessageCircleQuestion className={`w-5 h-5 shrink-0 ${isOpen ? 'text-purple' : 'text-gray-400'}`} />
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full transition-transform duration-300 ${
                      isOpen ? 'bg-purple text-white rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-700 text-base md:text-lg leading-relaxed font-work-sans-slab border-t border-purple/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA box at bottom of FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-purple/10 via-lavender/30 to-purple/10 text-center border border-purple/20 shadow-sm"
        >
          <div className="inline-flex items-center gap-1.5 text-purple font-semibold text-sm mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Have a specific query?</span>
          </div>
          <h3 className="text-2xl font-bold font-fraunces-slab mb-2">Want to partner with RNA HealthTech?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto font-work-sans-slab">
            Our experts are ready to assist MedTech firms, multi-speciality hospitals, and medical practitioners with customized growth plans.
          </p>
          <a
            href="#contact"
            className="inline-block bg-purple text-white font-semibold px-8 py-3.5 rounded-full hover:bg-lightpurple transition-all shadow-md hover:scale-105"
          >
            Get In Touch Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
