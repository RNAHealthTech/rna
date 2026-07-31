import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Calendar } from 'lucide-react';

export interface Partner {
  id: string;
  name: string;
  shortName: string;
  category: 'MedTech & Devices' | 'Super Speciality Hospital' | 'Multi-Speciality Hospital' | 'Specialist Healthcare';
  description: string;
  eventHighlight?: string;
  location: string;
  badge?: string;
}

export const partnersData: Partner[] = [
  {
    id: 'medtronic',
    name: 'Medtronic',
    shortName: 'Medtronic',
    category: 'MedTech & Devices',
    description: 'Global leader in medical technology, services, and solutions partnering on digital health awareness and innovation events.',
    eventHighlight: 'MedTech Digital Innovation Summit & Workshops',
    location: 'Global / India Operations',
    badge: 'Global MedTech Leader'
  },
  {
    id: 'sgrh',
    name: 'Sir Ganga Ram Hospital',
    shortName: 'SGRH',
    category: 'Multi-Speciality Hospital',
    description: 'Premier multi-speciality tertiary care hospital in New Delhi known for clinical excellence and patient care innovation.',
    eventHighlight: 'Healthcare Leadership & Clinical Tech Symposia',
    location: 'Rajinder Nagar, New Delhi',
    badge: 'Tertiary Care Partner'
  },
  {
    id: 'blk',
    name: 'BLK-Max Super Speciality Hospital',
    shortName: 'BLK-Max',
    category: 'Super Speciality Hospital',
    description: 'One of NCR’s largest stand-alone private hospitals with state-of-the-art diagnostic and digital patient connectivity solutions.',
    eventHighlight: 'Digital Healthcare Patient Engagement Summit',
    location: 'Pusa Road, New Delhi',
    badge: 'Super Speciality Leader'
  },
  {
    id: 'max',
    name: 'Max Healthcare',
    shortName: 'Max Healthcare',
    category: 'Super Speciality Hospital',
    description: 'Leading provider of comprehensive, seamless and integrated healthcare services across India.',
    eventHighlight: 'Medical Excellence & Brand Outreach Programs',
    location: 'PAN India',
    badge: 'Healthcare Giant'
  },
  {
    id: 'apollo',
    name: 'Apollo Hospitals',
    shortName: 'Apollo',
    category: 'Super Speciality Hospital',
    description: 'Asia’s trusted healthcare group driving futuristic medical solutions, telemedicine, and doctor digital branding.',
    eventHighlight: 'Digital Health Ecosystem & Specialist Roundtables',
    location: 'PAN India',
    badge: 'Pioneer Network'
  },
  {
    id: 'sarvodaya',
    name: 'Sarvodaya Healthcare',
    shortName: 'Sarvodaya',
    category: 'Multi-Speciality Hospital',
    description: 'Renowned healthcare delivery system providing advanced medical care and community health initiatives.',
    eventHighlight: 'Regional Health Awareness & Digital Drives',
    location: 'Faridabad & Delhi NCR',
    badge: 'Community & Clinical Care'
  },
  {
    id: 'kailash',
    name: 'Kailash Hospital',
    shortName: 'Kailash',
    category: 'Multi-Speciality Hospital',
    description: 'Trusted hospital group in NCR dedicated to high-quality patient care and technological healthcare integration.',
    eventHighlight: 'Clinical Tech & Patient Care Summits',
    location: 'Noida / Greater Noida',
    badge: 'NCR Excellence'
  },
  {
    id: 'karuna',
    name: 'Karuna Hospital',
    shortName: 'Karuna',
    category: 'Specialist Healthcare',
    description: 'Specialized healthcare facility focused on compassionate patient outcome strategies and digital practice elevation.',
    eventHighlight: 'Specialist Care & Community Outreach',
    location: 'Delhi NCR',
    badge: 'Specialist Partner'
  },
  {
    id: 'bharti',
    name: 'Bharti Healthcare',
    shortName: 'Bharti',
    category: 'Specialist Healthcare',
    description: 'Leading specialist healthcare institution focused on precision clinical care and patient empowerment.',
    eventHighlight: 'Precision Medicine & Patient Awareness Events',
    location: 'New Delhi',
    badge: 'Specialist Care'
  },
  {
    id: 'venkateshwar',
    name: 'Venkateshwar Hospital',
    shortName: 'Venkateshwar',
    category: 'Super Speciality Hospital',
    description: 'State-of-the-art super speciality hospital in Dwarka equipped with modern technology and digital clinical care.',
    eventHighlight: 'Advanced Clinical Digital Transformation Workshops',
    location: 'Dwarka, New Delhi',
    badge: 'Advanced Super Speciality'
  }
];

const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-20 bg-verylight text-black relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple/10 text-purple font-semibold text-sm mb-4">
            <Building2 className="w-4 h-4" />
            <span>Trusted Healthcare Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-fraunces-slab mb-6">
            Our Prestigious Events & Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-work-sans-slab">
            We collaborate with industry leaders, top multi-speciality hospitals, and global MedTech innovators to transform healthcare communications and patient engagement.
          </p>
        </motion.div>

        {/* Ticker / Marquee Banner */}
        <div className="mb-14 overflow-hidden rounded-2xl bg-gradient-to-r from-purple/90 via-purple to-purple/90 py-5 text-white shadow-xl">
          <div className="flex animate-marquee whitespace-nowrap gap-8 items-center font-bold text-lg md:text-xl tracking-wide">
            {partnersData.concat(partnersData).map((p, idx) => (
              <div key={idx} className="flex items-center gap-4 px-4">
                <span className="text-amber-300 font-extrabold">•</span>
                <span>{p.name}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-normal">
                  {p.shortName}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnersData.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl ring-1 ring-gray-100 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple/10 text-purple uppercase tracking-wider">
                    {partner.badge || partner.category}
                  </span>
                  <Award className="w-5 h-5 text-purple opacity-80 group-hover:scale-110 transition-transform" />
                </div>

                <h3 className="text-2xl font-bold font-fraunces-slab text-gray-900 mb-2 group-hover:text-purple transition-colors">
                  {partner.name}
                </h3>

                <p className="text-sm font-semibold text-gray-500 mb-4 flex items-center gap-1">
                  <span>📍 {partner.location}</span>
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-work-sans-slab">
                  {partner.description}
                </p>
              </div>

              {partner.eventHighlight && (
                <div className="pt-4 border-t border-gray-100 bg-purple/5 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="flex items-start gap-2 text-xs font-semibold text-purple">
                    <Calendar className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-gray-500">Key Event / Collaboration:</span>
                      <span>{partner.eventHighlight}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
