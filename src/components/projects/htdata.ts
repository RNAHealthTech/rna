export interface HealthTechService {
  id: string;
  title: string;
  description: string;
  keyFeatures: string[];
  benefits: string[];
  useCases: string[];
  icon: string;
  slug: string;
}

export interface ServiceDetails {
  overview: string;
  challenges: string[];
  solutions: string[];
  implementation: string[];
  outcomes: string[];
}

export const healthTechServices: HealthTechService[] = [
  {
    id: 'appointment-system',
    title: 'Smart Appointment Management System',
    description: 'Automated scheduling platform that eliminates double bookings, reduces no-shows, and optimizes healthcare provider availability through intelligent calendar management.',
    keyFeatures: [
      'Real-time availability tracking across multiple providers',
      'Automated appointment reminders via SMS and email',
      'Patient self-scheduling portal with 24/7 access',
      'Waitlist management with automatic rebooking',
      'Multi-location and multi-specialty support',
      'Calendar synchronization with existing systems',
      'Mobile-responsive booking interface'
    ],
    benefits: [
      'Reduces no-show rates by up to 40% through smart reminders',
      'Increases staff efficiency by automating scheduling tasks',
      'Improves patient satisfaction with convenient online booking',
      'Maximizes provider utilization through optimized scheduling',
      'Eliminates scheduling conflicts and double bookings',
      'Provides detailed analytics on appointment patterns'
    ],
    useCases: [
      'Multi-specialty clinics managing hundreds of appointments daily',
      'Individual practitioners looking to streamline patient flow',
      'Hospital systems coordinating complex surgical schedules',
      'Telemedicine platforms requiring flexible time slots',
      'Diagnostic centers managing equipment and technician availability'
    ],
    icon: 'calendar',
    slug: 'appointment-management-system'
  },
  {
    id: 'emr-systems',
    title: 'Electronic Medical Records (EMR) Solutions',
    description: 'Comprehensive digital health record system that centralizes patient information, streamlines clinical workflows, and ensures HIPAA-compliant data management.',
    keyFeatures: [
      'Complete patient medical history digitization',
      'Prescription management with drug interaction alerts',
      'Clinical decision support tools and templates',
      'Laboratory and imaging results integration',
      'E-prescribing with pharmacy network connectivity',
      'Customizable forms and clinical documentation',
      'Audit trails for regulatory compliance'
    ],
    benefits: [
      'Eliminates paper-based records and reduces storage costs',
      'Improves care coordination between healthcare providers',
      'Reduces medical errors through automated alerts',
      'Enhances productivity with quick access to patient data',
      'Facilitates evidence-based treatment decisions',
      'Ensures regulatory compliance and data security'
    ],
    useCases: [
      'Primary care practices transitioning from paper records',
      'Specialist clinics requiring detailed treatment histories',
      'Multi-location healthcare networks needing unified records',
      'Hospitals implementing integrated care workflows',
      'Rehabilitation centers tracking long-term patient progress'
    ],
    icon: 'file-medical',
    slug: 'electronic-medical-records'
  },
  {
    id: 'clinic-management',
    title: 'Comprehensive Clinic Management System',
    description: 'All-in-one practice management solution that handles operations from patient registration to billing, inventory management, and staff coordination.',
    keyFeatures: [
      'Patient registration and demographic management',
      'Insurance verification and claim processing',
      'Inventory tracking for medical supplies and medications',
      'Staff scheduling and payroll management',
      'Financial reporting and revenue cycle management',
      'Automated billing and payment processing',
      'Compliance monitoring and documentation'
    ],
    benefits: [
      'Streamlines all clinic operations in one platform',
      'Reduces administrative overhead by 50%',
      'Improves revenue cycle through faster billing',
      'Enhances inventory control and cost management',
      'Provides comprehensive business intelligence',
      'Ensures regulatory compliance across operations'
    ],
    useCases: [
      'Independent medical practices managing daily operations',
      'Dental and specialty clinics tracking procedures',
      'Urgent care centers handling high patient volumes',
      'Physical therapy clinics managing treatment plans',
      'Veterinary practices adapting healthcare technology'
    ],
    icon: 'building',
    slug: 'clinic-management-system'
  },
  {
    id: 'patient-lead-generation',
    title: 'Patient Lead Generation & Acquisition',
    description: 'Digital marketing and patient acquisition platform that attracts, engages, and converts potential patients through targeted healthcare marketing strategies.',
    keyFeatures: [
      'SEO-optimized healthcare website development',
      'Social media marketing for medical practices',
      'Google Ads campaigns for healthcare services',
      'Patient referral tracking and management',
      'Online reputation management and reviews',
      'Email marketing campaigns for health education',
      'Landing page optimization for specific treatments'
    ],
    benefits: [
      'Increases new patient acquisition by 75%',
      'Builds strong online presence for healthcare brands',
      'Generates qualified leads through targeted marketing',
      'Improves patient engagement and retention',
      'Provides measurable ROI on marketing spend',
      'Enhances community awareness of services'
    ],
    useCases: [
      'New medical practices building patient base',
      'Established clinics expanding to new specialties',
      'Healthcare startups launching innovative services',
      'Practices in competitive markets needing differentiation',
      'Telemedicine platforms acquiring remote patients'
    ],
    icon: 'users',
    slug: 'patient-lead-generation'
  },
  {
    id: 'telemedicine-platform',
    title: 'Telemedicine & Virtual Care Platform',
    description: 'Secure video consultation platform enabling remote healthcare delivery with integrated EMR, prescription management, and patient monitoring capabilities.',
    keyFeatures: [
      'HIPAA-compliant video consultations',
      'Remote patient monitoring integration',
      'Digital prescription and medication management',
      'Virtual waiting rooms and queue management',
      'Multi-device compatibility for patients and providers',
      'Session recording and documentation',
      'Integrated payment processing for consultations'
    ],
    benefits: [
      'Expands healthcare access to remote patients',
      'Reduces overhead costs by 40%',
      'Improves patient convenience and satisfaction',
      'Enables continuous care monitoring',
      'Increases provider reach beyond geographical limits',
      'Provides safe healthcare during emergencies'
    ],
    useCases: [
      'Rural healthcare providers serving remote communities',
      'Specialists offering consultations across regions',
      'Mental health practitioners conducting therapy sessions',
      'Chronic disease management and follow-ups',
      'Corporate wellness programs for employee health'
    ],
    icon: 'video',
    slug: 'telemedicine-platform'
  },
  {
    id: 'medical-billing',
    title: 'Medical Billing & Revenue Cycle Management',
    description: 'Automated billing system that handles claims processing, insurance verification, payment collection, and revenue optimization for healthcare practices.',
    keyFeatures: [
      'Automated insurance claim generation and submission',
      'Real-time eligibility verification',
      'Denial management and resubmission workflows',
      'Patient billing and payment plan management',
      'Revenue analytics and financial reporting',
      'Compliance monitoring for billing regulations',
      'Integration with popular EMR systems'
    ],
    benefits: [
      'Reduces billing errors by 90%',
      'Accelerates payment collection by 60%',
      'Decreases claim denial rates',
      'Improves cash flow predictability',
      'Reduces administrative staff requirements',
      'Ensures compliance with healthcare regulations'
    ],
    useCases: [
      'Small practices struggling with billing complexity',
      'Large hospital systems optimizing revenue cycles',
      'Specialty clinics with complex billing requirements',
      'Practices transitioning to value-based care',
      'Healthcare organizations reducing operational costs'
    ],
    icon: 'dollar-sign',
    slug: 'medical-billing-revenue-cycle'
  },
  {
    id: 'patient-portal',
    title: 'Patient Engagement & Portal Solutions',
    description: 'Comprehensive patient portal that empowers patients to access their health information, communicate with providers, and manage their healthcare journey.',
    keyFeatures: [
      'Secure access to medical records and test results',
      'Direct messaging with healthcare providers',
      'Prescription refill requests and medication tracking',
      'Appointment scheduling and health reminders',
      'Educational resources and wellness tracking',
      'Bill payment and insurance information management',
      'Mobile app for on-the-go access'
    ],
    benefits: [
      'Increases patient engagement by 80%',
      'Reduces administrative phone calls by 50%',
      'Improves medication adherence and health outcomes',
      'Enhances patient satisfaction scores',
      'Streamlines provider-patient communication',
      'Empowers patients in their healthcare decisions'
    ],
    useCases: [
      'Primary care practices improving patient communication',
      'Chronic disease management programs',
      'Specialty clinics providing ongoing care coordination',
      'Healthcare systems implementing patient-centered care',
      'Wellness programs tracking patient progress'
    ],
    icon: 'user-circle',
    slug: 'patient-portal-engagement'
  },
  {
    id: 'health-analytics',
    title: 'Healthcare Analytics & Business Intelligence',
    description: 'Advanced analytics platform that transforms healthcare data into actionable insights for improved patient outcomes and operational efficiency.',
    keyFeatures: [
      'Population health management and risk stratification',
      'Clinical quality metrics and performance dashboards',
      'Financial analytics and cost optimization',
      'Predictive modeling for patient outcomes',
      'Operational efficiency metrics and benchmarking',
      'Compliance reporting and audit trails',
      'Real-time alerts and automated notifications'
    ],
    benefits: [
      'Improves patient outcomes through data-driven decisions',
      'Reduces healthcare costs by identifying inefficiencies',
      'Enhances quality of care metrics',
      'Enables proactive population health management',
      'Facilitates regulatory compliance reporting',
      'Supports evidence-based clinical decisions'
    ],
    useCases: [
      'Health systems monitoring population health',
      'Quality improvement initiatives in hospitals',
      'Value-based care organizations tracking outcomes',
      'Research institutions analyzing clinical data',
      'Insurance companies assessing risk profiles'
    ],
    icon: 'bar-chart',
    slug: 'healthcare-analytics'
  }
];

export const serviceCategories = {
  'Practice Management': ['appointment-system', 'clinic-management', 'medical-billing'],
  'Clinical Solutions': ['emr-systems', 'telemedicine-platform', 'patient-portal'],
  'Business Growth': ['patient-lead-generation', 'health-analytics']
};

export const getServiceById = (id: string): HealthTechService | undefined => {
  return healthTechServices.find(service => service.id === id);
};

export const getServiceBySlug = (slug: string): HealthTechService | undefined => {
  return healthTechServices.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: string): HealthTechService[] => {
  const serviceIds = serviceCategories[category as keyof typeof serviceCategories] || [];
  return serviceIds.map(id => getServiceById(id)).filter(Boolean) as HealthTechService[];
};

// Export data for easy import
export default healthTechServices;