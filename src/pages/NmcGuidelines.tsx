import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  FileText,
  BookOpen,
  Scale,
  Search,
  Lock,
  HelpCircle,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Award,
  PhoneCall,
  Check
} from 'lucide-react';
import AppointmentModal from '../components/utility/AppointmentModal';

interface MatrixItem {
  category: string;
  allowed: string[];
  restricted: string[];
}

const nmcMatrixData: MatrixItem[] = [
  {
    category: 'Doctor Identity & Credentials',
    allowed: [
      'State Medical Council / NMC registration number clearly displayed',
      'Accredited and recognized degrees (MBBS, MD, MS, DNB, MCh, DM)',
      'Verified physical clinic address and consulting hours',
      'Areas of clinical focus and institutional affiliations'
    ],
    restricted: [
      'Honorary, self-styled, or unrecognized specialty titles',
      'Inflated surgical counts without verifiable institutional records',
      'Misleading affiliations or unverified association logos',
      'Ambiguous super-specialty claims without requisite accreditation'
    ]
  },
  {
    category: 'Content & Social Media Communication',
    allowed: [
      'Science-backed public health education and disease prevention awareness',
      'Objective descriptions of treatments, procedures, and associated risks',
      'Health advisory infographics, lifestyle tips, and hygiene guidelines',
      'Doctor-led educational webinars, Q&As, and medical conference highlights'
    ],
    restricted: [
      'Patient video testimonials, reviews, and star ratings used for marketing',
      'Promotional before-and-after photographs intended to lure patients',
      'Paid influencer endorsements or non-medical celebrity testimonials',
      'Dramatized surgical videos or sensationalized medical reels'
    ]
  },
  {
    category: 'Marketing Language & Medical Claims',
    allowed: [
      'Factual, balanced explanations of medical science and treatment modalities',
      'Transparent disclosure of limitations, recovery variables, and potential complications',
      'Procedural availability and technological infrastructure details',
      'Clear, evidence-backed patient guidance in plain, accessible language'
    ],
    restricted: [
      'Superlative claims: "No. 1 Surgeon", "Best Doctor in Delhi", "Top Specialist"',
      'Outcome guarantees such as "100% cure", "Zero pain", or "Guaranteed recovery"',
      'Comparative claims denigrating other medical practitioners or systems',
      'Creating artificial urgency or fear-inducing medical advertisements'
    ]
  },
  {
    category: 'Commercial Pricing & Promotional Offers',
    allowed: [
      'Standard, transparent clinic consultation rates and published price schedules',
      'Legitimate public health screening camps organized with recognized non-profits',
      'Government-approved healthcare scheme empanelment notices',
      'Institutional service listings and diagnostic panel information'
    ],
    restricted: [
      'Commercial discounts, limited-period offers, or festive surgery packages',
      'Referral commissions, cut-practice incentives, or patient bounty schemes',
      'Pay-per-lead aggregator arrangements tied directly to patient booking revenue',
      'Lucky draws, free procedure giveaways, or commercial discount coupons'
    ]
  },
  {
    category: 'Artificial Intelligence & Synthetic Media',
    allowed: [
      'Automated appointment booking, scheduling, and clinic navigation tools',
      'Transparently labeled AI patient education chatbots with clinical disclaimers',
      'Digital prescription management and automated clinic workflow systems',
      'Assisted patient triage tools with clear practitioner oversight'
    ],
    restricted: [
      'Synthetic AI avatars impersonating real doctors without explicit disclosure',
      'AI-generated fictional patient stories or fabricated clinical outcomes',
      'Unsupervised AI bots providing clinical diagnosis or drug prescriptions',
      'Deepfake clinical demonstrations masquerading as genuine procedures'
    ]
  }
];

const complianceChecklist = [
  {
    id: 1,
    question: 'Is your State Medical Council / NMC registration number visible on all profiles?',
    tip: 'Mandatory across your website header/footer, Instagram bio, LinkedIn, and YouTube channels.'
  },
  {
    id: 2,
    question: 'Have you removed patient video testimonials and reviews from your promotional ads?',
    tip: 'NMC strictly bars commercial patient testimonials and reviews used for self-promotion.'
  },
  {
    id: 3,
    question: 'Are all before-and-after surgical photos removed from public promotional feeds?',
    tip: 'Before/after visuals used for promotional patient acquisition violate ethical guidelines.'
  },
  {
    id: 4,
    question: 'Is your copy free from superlatives like "Best Doctor", "Top Surgeon", or "No. 1"?',
    tip: 'Unverifiable superiority claims attract immediate scrutiny from regulatory medical bodies.'
  },
  {
    id: 5,
    question: 'Are your digital campaigns focused on patient education rather than commercial deals?',
    tip: 'High-value educational health awareness is compliant and builds long-term organic trust.'
  },
  {
    id: 6,
    question: 'Are consultation fees and procedures free of commercial discount banners?',
    tip: 'Festive discounts, referral commissions, and package discounts are prohibited under NMC rules.'
  }
];

const faqs = [
  {
    question: 'Can individual doctors run Google or Meta ads under NMC guidelines?',
    answer: 'Under NMC regulations, doctors must not engage in direct commercial solicitation or aggressive self-promotion. However, institutional communication and value-driven patient health awareness (such as clinic location, specialized facilities, and educational advisories) are permitted when conducted ethically without superlatives, discount schemes, or commercial claims. RNA HealthTech designs compliant institutional campaigns that respect medical ethics.'
  },
  {
    question: 'Are Google Business Profile (GBP) reviews considered patient testimonials?',
    answer: 'Public, unsolicited reviews left independently by patients on open third-party platforms like Google Maps are outside a doctor\'s direct control. However, taking those reviews and featuring them on your website, social media ads, or marketing brochures as promotional endorsements is considered a violation. We help clinics optimize their local presence ethically without repurposing reviews as promotional collateral.'
  },
  {
    question: 'Can a clinic showcase surgical results for educational purposes?',
    answer: 'Academic and scientific discourse within peer-reviewed medical forums is allowed. For public social media and websites, case studies must be strictly educational, anonymized, presented with documented patient consent, and free of commercial solicitation, promises of identical outcomes, or dramatic before-and-after promotional framing.'
  },
  {
    question: 'How do NMC guidelines apply to Hospitals vs. Individual Doctors (RMPs)?',
    answer: 'While Registered Medical Practitioners (RMPs) fall directly under the disciplinary jurisdiction of the NMC and State Medical Councils, recent directives emphasize institutional accountability as well. Hospitals and healthcare centers are strongly advised to adhere to ethical advertising standards, avoiding misleading technological superiority claims, patient poaching, or unauthorized doctor endorsements.'
  },
  {
    question: 'What is the penalty for non-compliance with NMC medical marketing regulations?',
    answer: 'Violations can lead to formal notices from State Medical Councils or the NMC Ethics Board, inquiries, mandatory withdrawal of advertising assets, formal reprimands, and in severe or repeated cases, temporary suspension of the medical practitioner\'s license to practice. RNA HealthTech ensures complete peace of mind through rigorous pre-publication compliance audits.'
  },
  {
    question: 'How does RNA HealthTech help my practice transition to 100% NMC compliance?',
    answer: 'We conduct a comprehensive digital audit of your existing website, social media, videos, and ads to identify compliance risks. We then scrub non-compliant claims, integrate required medical council credentials, and pivot your content strategy toward high-authority patient education and organic healthcare SEO that safely drives patient footfall.'
  }
];

const NmcGuidelines: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleCheck = (id: number) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;

  const toggleFaq = (index: number) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  return (
    <>
      <Helmet>
        <title>NMC Guidelines for Medical Advertising & Marketing | RNA HealthTech</title>
        <meta
          name="description"
          content="Complete guide and compliance framework on National Medical Commission (NMC) medical advertising regulations for doctors, clinics & hospitals in India. 100% ethical healthcare branding."
        />
        <meta
          name="keywords"
          content="ai digital, ai digital healthcare, nmc guidelines medical advertising, doctor marketing regulations india, nmc ethics guidelines, healthcare advertising rules, ethical doctor branding, rna healthtech compliance audit"
        />
        <link rel="canonical" href="https://rnahealthtech.com/nmc-guidelines" />

        {/* Open Graph */}
        <meta property="og:title" content="NMC Guidelines for Medical Marketing | Ethical Healthcare Branding" />
        <meta
          property="og:description"
          content="Safeguard your medical practice with 100% NMC-compliant digital marketing, educational branding, and legal risk audits."
        />
        <meta property="og:url" content="https://rnahealthtech.com/nmc-guidelines" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://rnahealthtech.com/og-home.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "NMC Guidelines for Medical Advertising & Ethical Healthcare Marketing",
            "url": "https://rnahealthtech.com/nmc-guidelines",
            "description": "Comprehensive compliance handbook and ethical framework for doctors and hospitals in India adhering to National Medical Commission standards.",
            "publisher": {
              "@type": "Organization",
              "name": "RNA HealthTech",
              "url": "https://rnahealthtech.com"
            }
          }
        `}</script>
      </Helmet>

      <div className="bg-verylight min-h-screen font-work-sans-slab text-gray-800">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-r from-purple via-purple/95 to-lightpurple text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20 text-sm font-semibold tracking-wide"
            >
              <ShieldCheck className="w-5 h-5 text-yellow-300" />
              <span>National Medical Commission (NMC) Regulatory Framework</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-fraunces-slab font-bold mb-6 max-w-5xl mx-auto leading-tight"
            >
              Ethical, 100% NMC-Compliant Healthcare Marketing for Doctors
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
            >
              Grow your clinical reputation and patient trust without risking medical council notices. RNA HealthTech
              provides strategic, legally aligned digital communication tailored for Registered Medical Practitioners
              (RMPs) and healthcare institutions across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-white text-purple hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-[40px] shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <ShieldCheck className="w-5 h-5 text-purple" />
                <span>Request Free NMC Compliance Audit</span>
              </button>

              <a
                href="#nmc-matrix"
                className="w-full sm:w-auto border-2 border-white/80 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-[40px] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Permitted vs. Prohibited Matrix</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://www.nmc.org.in/whats-new/download/1874"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-6 py-3.5 rounded-[40px] transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-yellow-300" />
                <span>Read the official PDF (14 pages) ↗</span>
              </a>
            </motion.div>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto text-left">
              {[
                { title: 'Registered Medical Code', desc: '100% aligned with NMC RMP ethical guidelines' },
                { title: 'Zero Superlatives', desc: 'Zero fake guarantees or misleading claim risks' },
                { title: 'Educational Authority', desc: 'Patient awareness that builds organic clinical trust' },
                { title: 'Clinical Pre-Screening', desc: 'Every post reviewed before publishing' }
              ].map((badge, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 transition-all hover:bg-white/15"
                >
                  <div className="text-yellow-300 font-bold text-sm mb-1">{badge.title}</div>
                  <div className="text-xs text-white/80 leading-snug">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Why NMC Compliance Matters Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-purple font-semibold text-sm mb-3">
                <Scale className="w-4 h-4" />
                <span>Regulatory Background</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-fraunces-slab font-bold text-gray-900 mb-6 leading-tight">
                Healthcare Is a Noble Profession, Not a Commercial Commodity
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The National Medical Commission (NMC) has instituted strict professional conduct and ethical
                guidelines regarding public communication and digital promotions by Registered Medical Practitioners
                (RMPs) and healthcare institutions in India.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The core intent is unambiguous: <strong>prevent commercial exploitation of patients</strong>, stop the
                spread of unsubstantiated claims, and preserve the dignity of the medical profession. For doctors,
                marketing can no longer follow standard consumer agency playbooks. An ethical, healthcare-first
                approach is now mandatory to avoid license suspension and legal notices.
              </p>

              <div className="space-y-3">
                {[
                  'Preserve clinical integrity and professional honor in the public domain',
                  'Eliminate patient exploitation through fake outcome guarantees and discounts',
                  'Mandate transparency in doctor qualifications, registrations, and specialties',
                  'Encourage scientific, evidence-based patient awareness over commercial hype'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-purple shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {/* Official NMC PDF Document Card */}
              <div className="mt-8 p-5 bg-gradient-to-r from-purple/10 to-lavender/30 border border-purple/20 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-purple text-white flex items-center justify-center shrink-0 shadow-sm">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-purple font-bold">NMC Public Notice & Directives</div>
                    <div className="text-sm font-semibold text-gray-900">Official Ethics, Advertising & Digital Communication Guidelines</div>
                  </div>
                </div>
                <a
                  href="https://www.nmc.org.in/whats-new/download/1874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-purple hover:bg-lightpurple text-white font-semibold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-sm transition-all hover:scale-105 shrink-0"
                >
                  <span>Read the official PDF (14 pages) ↗</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple/5 to-lavender/30 border border-purple/20 rounded-3xl p-8 shadow-sm">
              <div className="flex items-center space-x-3 text-red-600 mb-6">
                <AlertTriangle className="w-7 h-7" />
                <h3 className="text-2xl font-bold font-fraunces-slab text-gray-900">Risks of Non-Compliant Marketing</h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'State Medical Council Scrutiny',
                    desc: 'Formal show-cause notices issued upon public complaint or suo-motu monitoring.'
                  },
                  {
                    title: 'Practicing License Suspension',
                    desc: 'Repeated or serious ethical violations can trigger temporary or long-term bar from medical practice.'
                  },
                  {
                    title: 'Severe Reputational Damage',
                    desc: 'Being flagged publicly for unethical advertising permanently impairs patient trust and peer standing.'
                  },
                  {
                    title: 'Forced Asset Take-Downs',
                    desc: 'Sudden takedown of social media accounts, paid ad accounts, and website assets by authorities.'
                  }
                ].map((risk, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-red-100 shadow-sm flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{risk.title}</h4>
                      <p className="text-xs text-gray-600 mt-0.5">{risk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The NMC Matrix: Permitted vs Prohibited */}
        <section id="nmc-matrix" className="py-20 bg-white px-4 sm:px-6 lg:px-8 border-y border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center space-x-2 text-purple font-semibold text-sm mb-2">
                <BookOpen className="w-4 h-4" />
                <span>NMC Marketing Rules Breakdown</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-fraunces-slab font-bold text-gray-900 mb-4">
                What NMC Allows vs. What Is Strictly Restricted
              </h2>
              <p className="text-gray-600">
                A clear, practical guide designed to help doctors, clinic managers, and hospital administrators identify
                safe digital practices versus critical regulatory risks.
              </p>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {nmcMatrixData.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeTab === idx
                      ? 'bg-purple text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {item.category}
                </button>
              ))}
            </div>

            {/* Active Matrix Card */}
            <div className="bg-verylight rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-sm">
              <h3 className="text-2xl font-bold font-fraunces-slab text-gray-900 mb-6 text-center">
                {nmcMatrixData[activeTab].category}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Permitted (Green) */}
                <div className="bg-green-50/60 border border-green-200 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-green-200">
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-green-900 font-fraunces-slab">Permitted & Compliant</h4>
                      <p className="text-xs text-green-700">Encouraged by NMC for patient transparency</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {nmcMatrixData[activeTab].allowed.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-800 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Restricted (Red) */}
                <div className="bg-red-50/60 border border-red-200 rounded-2xl p-6 sm:p-8">
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-red-200">
                    <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                      <XCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-red-900 font-fraunces-slab">Prohibited & High Risk</h4>
                      <p className="text-xs text-red-700">Violates NMC Registered Practitioner regulations</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {nmcMatrixData[activeTab].restricted.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-800 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RNA HealthTech's 5-Pillar Compliance Framework */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-purple font-semibold text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>How RNA HealthTech Protects You</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-fraunces-slab font-bold text-gray-900 mb-4">
              Our 5-Stage NMC Compliance Blueprint
            </h2>
            <p className="text-gray-600">
              We eliminate regulatory anxiety by replacing fragile, aggressive marketing tactics with robust,
              high-authority medical awareness that patients and regulatory bodies respect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Historical Digital Audit',
                desc: 'We perform a forensic scan across your existing website, YouTube channel, Instagram reels, and Google profile to identify and scrub past non-compliant claims or testimonials.',
                icon: Search
              },
              {
                step: '02',
                title: 'Educational Content Pivot',
                desc: 'We transform promotional posts into evidence-backed medical awareness content, patient symptom guides, and hygiene advice that naturally position you as a thought leader.',
                icon: BookOpen
              },
              {
                step: '03',
                title: 'Mandatory Disclosures Setup',
                desc: 'We embed verified medical registration numbers, accredited qualifications, and transparent clinic operational timings across all digital headers, footers, and bios.',
                icon: FileText
              },
              {
                step: '04',
                title: 'Ethical Medical SEO',
                desc: 'Instead of buying commercial paid aggregator leads, we rank your clinic organically for treatments and symptoms so patients naturally discover you when searching.',
                icon: ShieldCheck
              },
              {
                step: '05',
                title: 'Pre-Publication Clinical Review',
                desc: 'Every caption, infographic, and video script is vetted by our healthcare editorial desk to guarantee zero superlative adjectives, discounts, or misleading assertions.',
                icon: Scale
              },
              {
                step: '06',
                title: 'Patient Privacy & Consent Standards',
                desc: 'Strict adherence to HIPAA-grade patient privacy protocols and Indian data protection norms, ensuring zero unauthorized image use or clinical record leaks.',
                icon: Lock
              }
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-purple/10 text-purple flex items-center justify-center group-hover:bg-purple group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-bold font-fraunces-slab text-gray-200 group-hover:text-purple/30 transition-colors">
                      {pillar.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-fraunces-slab text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Self-Audit Checklist */}
        <section className="py-20 bg-lavender/30 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 text-purple font-semibold text-sm mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Doctor Self-Assessment Tool</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-fraunces-slab font-bold text-gray-900 mb-3">
                Quick NMC Compliance Check
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
                Check each parameter to evaluate your current digital presence. See how prepared your clinic is
                against regulatory scrutiny.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-6 border-b border-gray-200 gap-4">
                <div>
                  <h3 className="text-xl font-bold font-fraunces-slab text-gray-900">Your Compliance Score</h3>
                  <p className="text-xs text-gray-500">Click items as you verify them on your channels</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl font-bold font-fraunces-slab text-purple">
                    {completedCount} / {complianceChecklist.length} Verified
                  </span>
                  <div className="w-28 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple transition-all duration-500"
                      style={{ width: `${(completedCount / complianceChecklist.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {complianceChecklist.map(item => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start space-x-4 ${isChecked
                          ? 'bg-green-50/50 border-green-300'
                          : 'bg-gray-50/50 border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => { }}
                        className="mt-1 h-5 w-5 rounded text-purple focus:ring-purple cursor-pointer"
                      />
                      <div className="flex-1">
                        <div className={`font-semibold text-sm sm:text-base ${isChecked ? 'text-green-950 line-through opacity-80' : 'text-gray-900'}`}>
                          {item.question}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{item.tip}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-600 text-center sm:text-left">
                  Unsure about your status? Our compliance officers review your entire digital portfolio for free.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-purple hover:bg-lightpurple text-white font-semibold px-6 py-2.5 rounded-[40px] text-sm transition-all shadow-md shrink-0"
                >
                  Book Complete Audit
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center space-x-2 text-purple font-semibold text-sm mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Clarity for Healthcare Leaders</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-fraunces-slab font-bold text-gray-900 mb-4">
              Frequently Asked Questions on NMC Compliance
            </h2>
            <p className="text-gray-600">
              Clear, practical answers to common ethical marketing dilemmas faced by doctors and hospital administrators.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between font-bold text-gray-900 hover:text-purple transition-colors text-base sm:text-lg font-fraunces-slab"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-purple shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-purple to-lightpurple text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
              <Award className="w-8 h-8 text-yellow-300" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-fraunces-slab font-bold mb-6">
              Protect Your Practice. Grow With Ethical Authority.
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Don’t let an aggressive or unaware marketing agency jeopardize your medical license. Partner with RNA
              HealthTech for 100% compliant, patient-centric healthcare growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-purple hover:bg-gray-100 font-bold px-8 py-3.5 rounded-[40px] shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <PhoneCall className="w-5 h-5 text-purple" />
                <span>Schedule Confidential Consultation</span>
              </button>

              <Link
                to="/contact"
                className="border-2 border-white/80 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-[40px] transition-all duration-300"
              >
                Contact Our Healthcare Team
              </Link>
            </div>
          </div>
        </section>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default NmcGuidelines;
