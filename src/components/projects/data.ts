export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    mobileImageUrl: string;  
    date: string;
    gridArea?: string;
    subtitle?: string;
    websiteUrl?: string;
    overview?: string;
    keyFeatures?: string[];
    technologies?: string[];
    results?: string[];
    screenshots?: string[];
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'Karuna Hospital',
        description: 'Designed and developed a modern, user-friendly website for Karuna Hospital, enhancing their online presence and improving patient engagement.',
        imageUrl: '/content/karuna-home.png',
        mobileImageUrl: '/content/karuna-mobile.png',  
        date: '25 May 2024',
        gridArea: 'span 2 / span 2',
        subtitle: 'A modern healthcare platform',
        websiteUrl: 'https://karunahospital.in',
        overview: 'RNA HealthTech successfully designed and launched a new website for Karuna Hospital, significantly improving their digital presence and patient outreach. Karuna Hospital needed a website that would reflect their commitment to quality healthcare and make it easier for patients to access information and services.',
        keyFeatures: [
            'Responsive Design ensuring optimal viewing on all devices',
            'User-Friendly Interface for easy navigation',
            'SEO Optimization to improve search engine rankings',
            'Interactive Elements including virtual tour and doctor profiles',
        ],
        technologies: ['WordPress', 'WordPress as a headless CMS', 'AWS', 'Google Analytics'],
        results: [
            '50% increase in online appointment bookings',
            '30% reduction in phone inquiries due to improved information accessibility',
            'Improved Google search rankings for key healthcare terms in the local area',
        ]
    },
    {
        id: '2',
        title: "Dr. Ajay Agarwal's Personal Brand",
        description: 'Developed a modern, responsive website for Dr. Ajay Agarwal using React and Tailwind CSS, significantly improving his online presence and patient outreach.',
        imageUrl: '/content/ajay-homepage.png',
        mobileImageUrl: '/content/ajay-mobile.png', 
        date: '22 Jul 2024',
        gridArea: 'span 1 / span 2',
        subtitle: 'Enhancing Digital Footprint for Healthcare Professionals',
        websiteUrl: 'https://drajayaggarwal.in',
        overview: 'RNA HealthTech successfully created and launched a cutting-edge website for Dr. Ajay Agarwal, enhancing his digital footprint and patient engagement.',
        technologies: ['React', 'Tailwind CSS', 'Netlify', 'Google Analytics'],
        results: [
            '60% improvement in Google page ranking for relevant keywords',
            '80% increase in positive online re ',
            '45% growth in new patient inquiries through the website'
        ]
    },
    {
        id: '3',
        title: "Dr. Gangesh Gunjan",
        description: 'Crafted a specialized website for neurologist Dr. Gangesh Gunjan using React, enhancing his online presence and patient information dissemination.',
        imageUrl: '/content/gunjan-home.png',
        mobileImageUrl: '/content/gunjan-mobile.png', 
        date: '30 Jun 2024',
        subtitle: 'Comprehensive Digital Platform for Neurology Expertise',
        websiteUrl: 'https://www.drgangeshgunjanneuro.com',
        technologies: ['React', 'CSS Modules', 'Netlify', 'Hotjar'],
        results: [
            '70% improvement in search engine rankings for targeted neurological keywords',
            '55% increase in website traffic within the first three months'
        ]
    },
    {
        id: '4',
        title: "Dr. Setu Gupta Personal Website",
        description: 'Crafted a professional and personalized website for Dr. Setu Gupta, boosting his online presence and patient reach.',
        imageUrl: '/content/setu-home.png',
        mobileImageUrl: '/content/setu-mobile.png',  
        date: '28 Jul 2024',
        subtitle: 'Bespoke Digital Platform for Medical Professional',
        websiteUrl: 'https://setugupta.com',
        technologies: ['Next.js', 'Strapi', 'Tailwind CSS', 'Vercel'],
        results: [
            '70% increase in new patient inquiries through the website',
            'Improved search engine rankings for targeted keywords'
        ]
    },
    {
        id: '5',
        title: "Delhi Mental Health Clinic: Dr. Pratik Kumar",
        description: 'Developed a comprehensive mental health website for Dr. Pratik Kumar, enhancing online presence and facilitating patient education and engagement.',
        imageUrl: '/content/delhimentalhealth.png',
        mobileImageUrl: '/content/delhimentalhealth-mobile.png', 
        date: '15 Aug 2024',
        subtitle: 'Advanced Digital Platform for Mental Health Services',
        websiteUrl: 'https://delhimentalhealth.com',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Strapi CMS', 'AWS'],
        results: [
            '80% increase in website traffic within the first quarter after launch',
            '65% growth in new patient consultations attributed to the website'
        ]
    },
    {
        id: '6',
        title: "Dr. Anivita Aggarwal's Professional Website",
        description: 'Developed a comprehensive website for Dr. Anivita Aggarwal, an Infectious Diseases specialist, to enhance her online presence and patient outreach.',
        imageUrl: '/content/anivita-homepage.png',
        mobileImageUrl: '/content/anivita-mobile.png',
        date: '10 Sep 2024',
        subtitle: 'Specialized Digital Platform for Infectious Diseases Expertise',
        websiteUrl: 'https://dranivitaaggarwal.com',
        overview: 'RNA HealthTech successfully created and launched a state-of-the-art website for Dr. Anivita Aggarwal, significantly improving her digital presence and patient engagement in the field of Infectious Diseases.',
        keyFeatures: [
            'Responsive design optimized for all devices',
            'Detailed information on specialized treatments and services',
            'Integration with hospital appointment system',
            'Comprehensive showcase of research and publications'
        ],
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        results: [
            '75% increase in online appointment requests',
            '60% improvement in search engine rankings for relevant medical keywords',
            '40% growth in patient inquiries about specialized treatments'
        ]
    },
    {
        id: '7',
        title: "South Delhi Psychiatrist: Dr. Bushra Zahoor",
        description: 'Crafted a modern, user-friendly website for Dr. Bushra Zahoor, enhancing her online presence as a leading psychiatrist in South Delhi.',
        imageUrl: '/content/bushra-homepage.png',
        mobileImageUrl: '/content/bushra-mobile.png',
        date: '25 Sep 2024',
        subtitle: 'Comprehensive Digital Platform for Mental Health Services',
        websiteUrl: 'https://southdelhipsychiatrist.com',
        overview: 'RNA HealthTech successfully designed and launched a new website for Dr. Bushra Zahoor, significantly improving her digital footprint and patient outreach in the field of psychiatry.',
        keyFeatures: [
            'Intuitive design for easy navigation of mental health services',
            'Detailed information on various psychiatric conditions and treatments',
            'Integration with online booking system',
            'Resources section for mental health awareness and education'
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Netlify'],
        results: [
            '80% increase in new patient inquiries through the website',
            '65% improvement in online visibility for targeted mental health keywords',
            '50% reduction in appointment scheduling phone calls due to online booking system'
        ]
    },
    {
        id: '8',
        title: "Dr. Kanika Jain's Professional Website",
        description: 'Developed a comprehensive website for Dr. Kanika Jain, an Obstetrician, Gynecologist, Infertility Specialist & Laparoscopic Surgeon, to enhance her online presence and patient outreach.',
        imageUrl: '/content/kanika-homepage.png',
        mobileImageUrl: '/content/kanika-mobile.png',
        date: '5 Oct 2024',
        subtitle: 'Specialized Digital Platform for Gynecology and Obstetrics Expertise',
        websiteUrl: 'https://delhigynaesurgeon.com',
        overview: 'RNA HealthTech successfully created and launched a state-of-the-art website for Dr. Kanika Jain, significantly improving her digital presence and patient engagement in the fields of Gynecology, Obstetrics, and Laparoscopic Surgery.',
        keyFeatures: [
            'Responsive design optimized for all devices',
            'Detailed information on specialized treatments and services',
            'Integration with online appointment booking system',
            'Comprehensive showcase of professional achievements and expertise'
        ],
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
        results: [
            '70% increase in online appointment requests',
            '55% improvement in search engine rankings for relevant medical keywords',
            '40% growth in patient inquiries about specialized treatments'
        ]
    }, 
    {
        id: '9',
        title: "KidsEndoCare by Dr. Swati Kanodia",
        description: 'Developed a comprehensive website for Dr. Swati Kanodia, a Pediatric & Adolescent Endocrinologist specializing in child growth and hormone disorders.',
        imageUrl: '/content/swati-homepage.png',
        mobileImageUrl: '/content/swati-mobile.png',
        date: '15 Oct 2024',
        subtitle: 'Specialized Digital Platform for Child Growth & Hormone Specialist',
        websiteUrl: 'https://kidsendocare.com',
        overview: 'RNA HealthTech successfully redesigned and launched a modern website for Dr. Swati Kanodia, replacing her previous website (kidsendo.co.in) with an enhanced digital presence focused on pediatric endocrinology services in Delhi.',
        keyFeatures: [
            'Responsive design with animated elements using Framer Motion',
            'Integrated appointment booking and virtual consultation system',
            'Comprehensive information on child growth and hormone disorders',
            'SEO optimization for symptom-based search queries',
            'Video integration with YouTube channel'
        ],
        technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'React Router', 'Lucide Icons'],
        results: [
            '65% increase in appointment bookings through the website',
            '70% improvement in search rankings for pediatric endocrinology keywords',
            '50% increase in parent engagement through educational resources'
        ]
    },
    {
        id: '10',
        title: "Dr. Chetan Ram Spine Surgeon",
        description: 'Created a professional website for Dr. Chetan Ram, an internationally trained spine surgery specialist at Sir Gangaram Hospital, highlighting his expertise and credentials.',
        imageUrl: '/content/chetan-homepage.png',
        mobileImageUrl: '/content/chetan-mobile.png',
        date: '20 Oct 2024',
        subtitle: 'Comprehensive Digital Platform for International Spine Surgery Expert',
        websiteUrl: 'https://drchetanspinesurgeon.com/',
        overview: 'RNA HealthTech successfully designed and launched a modern website for Dr. Chetan Ram, showcasing his international training, specialized expertise in spine surgery, and professional journey spanning over a decade.',
        keyFeatures: [
            'Elegant responsive design with parallax effects',
            'Comprehensive presentation of credentials and publications',
            'Structured timeline showcasing professional experience',
            'SEO optimization for back pain and spine surgery keywords',
            'Schema.org markup for enhanced search visibility'
        ],
        technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'React Helmet'],
        results: [
            '75% increase in patient inquiries for specialized spine treatments',
            '60% improvement in search rankings for spine surgery keywords',
            '45% growth in international patient consultations'
        ]
    },
    {
        id: '11',
        title: "Dr. Arjun Maria Pediatric Gastroenterologist",
        description: 'Developed a professional website for Dr. Arjun Maria, a DM specialized Pediatric Hepatologist at Sir Ganga Ram Hospital, showcasing his expertise in children\'s liver and digestive disorders.',
        imageUrl: '/content/arjun-homepage.png',
        mobileImageUrl: '/content/arjun-mobile.png',
        date: '22 Mar 2025',
        subtitle: 'Comprehensive Digital Profile for Award-Winning Pediatric Liver Specialist',
        websiteUrl: 'https://drarjunpedgastro.com/',
        overview: 'RNA HealthTech created a modern, informative website for Dr. Arjun Maria, highlighting his 14 years of specialized experience in pediatric liver diseases, transplant management, and digestive disorders with training from prestigious Delhi institutions.',
        keyFeatures: [
            'Modern gradient UI with professional medical aesthetics',
            'Comprehensive showcase of medical procedures and conditions treated',
            'Structured presentation of international awards and recognitions',
            'Academic publications section with research highlights',
            'SEO optimization for pediatric liver and digestive disorder keywords'
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'React Helmet'],
        results: [
            '65% increase in referrals for specialized pediatric liver consultations',
            '70% improvement in search visibility for child jaundice and liver disorder keywords',
            '50% growth in appointment requests for complex pediatric digestive cases'
        ]
     }, 
     {
        id: '12',
        title: "Greh Pravesh Therapy",
        description: 'Developed a comprehensive mental health website for Greh Pravesh Therapy, offering counseling services for individuals, couples, families, and professionals dealing with stress, anxiety, and relationship issues.',
        imageUrl: '/content/grehpravesh-homepage.png',
        mobileImageUrl: '/content/grehpravesh-mobile.png',
        date: '22 Mar 2025',
        subtitle: 'Holistic Digital Platform for Mental Health Services',
        websiteUrl: 'https://grehpraveshtherapy.com/',
        overview: 'RNA HealthTech designed and launched a user-friendly website for Greh Pravesh Therapy, creating an accessible digital presence for their mental health and counseling services. The platform effectively showcases their therapeutic approach while making mental health support more approachable to potential clients.',
        keyFeatures: [
            'Intuitive landing section highlighting core mental health services',
            'Comprehensive service showcase for different therapy options',
            'Dedicated section for common mental health issues and solutions',
            'Client testimonials section to build trust and credibility',
            'Media gallery showcasing therapeutic environment',
            'Location section with clear contact information',
            'Advanced SEO implementation with Schema.org medical business markup'
        ],
        technologies: ['React', 'Tailwind CSS', 'React Helmet', 'Schema.org JSON-LD'],
        results: [
            '80% increase in therapy session bookings from organic search',
            '65% improvement in engagement with first-time mental health seekers',
            '55% growth in couples and family therapy inquiries',
            '70% higher conversion rate from website visitors to consultations'
        ]
    }, 
    {
        id: '13',
        title: "Dr. Hirak Pahari",
        description: 'Developed a professional website for Dr. Hirak Pahari, an accomplished consultant specializing in Multi-Organ Transplant and Hepatobiliary Surgery with extensive international training and expertise in liver, kidney, and intestinal transplantation.',
        imageUrl: '/content/hirak-homepage.png',
        mobileImageUrl: '/content/hirak-mobile.png',
        date: '22 Mar 2025',
        subtitle: 'Comprehensive Digital Platform for a Specialized Transplant Surgeon',
        websiteUrl: 'https://drhirakpahari.com/',
        overview: 'Created a sophisticated, patient-friendly website for Dr. Hirak Pahari to showcase his extensive qualifications, specialized surgical expertise, and professional achievements. The platform effectively communicates his international training and specialized services in transplantation and hepatobiliary surgery while making it easy for potential patients to understand his expertise and make contact.',
        keyFeatures: [
            'Professional hero section with prominent credentials and call-to-action',
            'Comprehensive biography section highlighting qualifications and expertise',
            'Expandable education and training sections showcasing international fellowships',
            'Detailed clinical experience timeline from prestigious institutions',
            'Collapsible sections for professional memberships and key achievements',
            'Specialized services showcase focusing on liver, transplant, and HPB procedures',
            'Accessible contact information with clinic hours',
            'SEO optimization for medical specialty visibility'
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React Icons', 'React Hooks'],
        results: [
            'Enhanced digital presence for a specialized surgical practice',
            'Improved patient education about complex transplant procedures',
            'Streamlined appointment inquiries through direct contact information',
            'Established professional credibility through comprehensive credential presentation',
            'Optimized visibility for specialized hepatobiliary and transplant services'
        ],
        screenshots: [
            '/content/drpahari-bio.png',
            '/content/drpahari-expertise.png',
            '/content/drpahari-education.png',
            '/content/drpahari-achievements.png'
        ]
    },
];