export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    mobileImageUrl: string;  
    date: string;
    views: number;
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
        views: 23,
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
        views: 7,
        gridArea: 'span 1 / span 2',
        subtitle: 'Enhancing Digital Footprint for Healthcare Professionals',
        websiteUrl: 'https://drajayaggarwal.in',
        overview: 'RNA HealthTech successfully created and launched a cutting-edge website for Dr. Ajay Agarwal, enhancing his digital footprint and patient engagement.',
        technologies: ['React', 'Tailwind CSS', 'Netlify', 'Google Analytics'],
        results: [
            '60% improvement in Google page ranking for relevant keywords',
            '80% increase in positive online reviews',
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
        views: 10,
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
        views: 0,
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
        views: 15,
        subtitle: 'Advanced Digital Platform for Mental Health Services',
        websiteUrl: 'https://delhimentalhealth.com',
        technologies: ['React', 'Next.js', 'Tailwind CSS', 'Strapi CMS', 'AWS'],
        results: [
            '80% increase in website traffic within the first quarter after launch',
            '65% growth in new patient consultations attributed to the website'
        ]
    }
];