export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
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
        imageUrl: '/path/to/karuna-hospital-image.jpg',
        date: '25 May 2024',
        views: 23,
        gridArea: 'span 2 / span 2',
        subtitle: 'A modern healthcare platform',
        websiteUrl: 'https://karunahospital.com',
        overview: 'RNA HealthTech successfully designed and launched a new website for Karuna Hospital, significantly improving their digital presence and patient outreach. Karuna Hospital needed a website that would reflect their commitment to quality healthcare and make it easier for patients to access information and services. Our team took on this challenge, creating a responsive and intuitive website.',
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
        ],
        screenshots: [
            '/content/karuna-home.png',
            '/content/karuna-directory.png',
            '/content/karuna-services.png',
        ],
    },
    {
        id: '2',
        title: "Dr. Ajay Agarwal's Personal Brand",
        description: 'Developed a modern, responsive website for Dr. Ajay Agarwal using React and Tailwind CSS, significantly improving his online presence and patient outreach.',
        imageUrl: '/path/to/dr-ajay-image.jpg',
        date: '22 Jul 2024',
        views: 7,
        gridArea: 'span 1 / span 2',
        subtitle: 'Enhancing Digital Footprint for Healthcare Professionals',
        websiteUrl: 'https://drajayaggarwal.in',
        overview: 'RNA HealthTech successfully created and launched a cutting-edge website for Dr. Ajay Agarwal, enhancing his digital footprint and patient engagement. The project aimed to showcase his expertise, improve online visibility, and provide an easy way for patients to access information and services.',
        keyFeatures: [
            'React-based Frontend for smooth, app-like experience',
            'Tailwind CSS Styling for clean, modern, and responsive design',
            'SEO Optimization to boost search engine rankings',
            'Patient Resources with easy access to educational materials and appointment booking',
            'Google My Business Optimization for improved local search visibility',
            'Review Management system to encourage and manage patient reviews',
            'Content Strategy with regular blog updates',
        ],
        technologies: ['React', 'Tailwind CSS', 'Netlify', 'Google Analytics'],
        results: [
            '60% improvement in Google page ranking for relevant keywords',
            '80% increase in positive online reviews',
            '45% growth in new patient inquiries through the website',
            '30% reduction in appointment no-shows due to improved online scheduling',
        ],
        screenshots: [
            '/content/ajay-homepage.png',
            '/content/ajay-services.png',
            '/content/ajay-contact.png',
        ],
    },

    {
        id: '3',
        title: "Dr. Gangesh Gunjan",
        description: 'Crafted a specialized website for neurologist Dr. Gangesh Gunjan using React, enhancing his online presence and patient information dissemination.',
        imageUrl: '/path/to/dr-gangesh-image.jpg',
        date: '30 Jun 2024',
        views: 10,
        gridArea: 'span 1 / span 2',
        subtitle: 'Comprehensive Digital Platform for Neurology Expertise',
        websiteUrl: 'https://www.drgangeshgunjanneuro.com',
        overview: 'RNA HealthTech successfully developed and launched a comprehensive website for Dr. Gangesh Gunjan, a renowned neurologist, significantly improving his digital presence and patient outreach. The project aimed to create a professional website that would highlight Dr. Gunjan\'s expertise in neurology, provide valuable information to patients, and improve his online visibility.',
        keyFeatures: [
            'React-based Single Page Application for fast loading and smooth navigation',
            'Responsive Design optimized for all devices',
            'Neurology Resources with informative sections on various conditions and treatments',
            'Patient Testimonials showcasing experiences and success stories',
            'Keyword Optimization for improved search rankings',
            'Google My Business Enhancement for better local search results',
            'Content Marketing with regular blog updates on neurological topics',
            'Online Reputation Management with active response to patient reviews',
        ],
        technologies: ['React', 'CSS Modules', 'Netlify', 'Hotjar'],
        results: [
            '70% improvement in search engine rankings for targeted neurological keywords',
            '55% increase in website traffic within the first three months',
            '40% growth in new patient consultations attributed to the website',
            '90% positive feedback on the website\'s usability from patients',
        ],
        screenshots: [
            '/content/gunjan-homepage.png',
            '/content/gunjan-services.png',
            '/content/gunjan-resources.png',
        ],
    },
    {
        id: '4',
        title: "Dr. Setu Gupta Personal Website",
        description: 'Crafted a professional and personalized website for Dr. Setu Gupta, boosting his online presence and patient reach.',
        imageUrl: '/path/to/dr-setu-image.jpg',
        date: '28 Jul 2024',
        views: 0, // You may want to update this with actual view count
        gridArea: 'span 1 / span 2', // Adjust as needed to fit your grid layout
        subtitle: 'Bespoke Digital Platform for Medical Professional',
        websiteUrl: 'https://setugupta.com',
        overview: 'RNA HealthTech successfully developed a bespoke website for Dr. Setu Gupta, enhancing his professional online presence and facilitating better patient communication. The primary goal was to create a website that would showcase Dr. Gupta\'s expertise, provide valuable information to patients, and serve as a platform for professional networking.',
        keyFeatures: [
            'Professional Portfolio highlighting qualifications, experience, and areas of expertise',
            'Blog Section for sharing medical insights and health tips',
            'Appointment Booking System integrated for online consultations',
            'Responsive Design ensuring seamless experience across all devices',
            'Keyword Optimization for improved search rankings',
            'Google My Business Optimization for better local search visibility',
            'Content Strategy with regular blogging schedule',
        ],
        technologies: ['Next.js', 'Strapi', 'Tailwind CSS', 'Vercel'],
        results: [
            '70% increase in new patient inquiries through the website',
            'Improved search engine rankings for targeted keywords',
            '40% growth in Dr. Gupta\'s professional network connections',
        ],
        screenshots: [
            '/content/setu.png',
            '/content/setu-blog.png',
            '/content/setu-appointment.png',
        ],
    }

];