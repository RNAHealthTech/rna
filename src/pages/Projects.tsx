import React, { useEffect } from 'react';
import WebsiteCarousel from '../components/utility/WebsiteCarousel';
import ProjectsShowcase from '../components/projects/ProjectsShowcase';


const websites = [
  {
    id: '1',
    imageUrl: '/content/karuna-home.png',
    mobileImageUrl: '/content/karuna-home-mobile.png',
    liveUrl: 'https://karunahospital.in',
    detailsUrl: '/projects/1',
  },
  {
    id: '2',
    imageUrl: '/content/ajay-homepage.png',
    mobileImageUrl: '/content/ajay-mobile.png',
    liveUrl: 'https://drajayaggarwal.in/',
    detailsUrl: '/projects/2'
  },
  {
    id: '3',
    imageUrl: '/content/gunjan-home.png',
    mobileImageUrl: '/content/gunjan-mobile.png',
    liveUrl: 'https://drajayaggarwal.in/',
    detailsUrl: '/projects/3'
  },
  {
    id: '4',
    imageUrl: '/content/setu-home.png',
    mobileImageUrl: '/content/setu-mobile.png',
    liveUrl: 'https://setugupta.com',
    detailsUrl: '/projects/4',
  },
  {
    id: '5',
    imageUrl: '/content/delhimentalhealth.png',
    mobileImageUrl: '/content/delhimentalhealth-mobile.png',
    liveUrl: 'https://delhimentalhealth.com',
    detailsUrl: '/projects/5'
  },
  {
    id: '6',
    imageUrl: '/content/bushra-homepage.png',
    mobileImageUrl: '/content/bushra-mobile.png',
    liveUrl: 'https://southdelhipsychiatrist.com/',
    detailsUrl: '/projects/6'
  },
  {
    id: '7',
    imageUrl: '/content/anivita-homepage.png',
    mobileImageUrl: '/content/anivita-mobile.png',
    liveUrl: 'https://www.dranivitaaggarwal.com/',
    detailsUrl: '/projects/7'
  },
 
];

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow">
      <WebsiteCarousel websites={websites} />
      <section className='min-h-screen'>
        <h1 className='text-center text-5xl md:text-7xl mt-10 text-purple font-fraunces-slab'>Our Projects</h1>
        <ProjectsShowcase />
      </section>
    </main>
  );
};

export default ProjectsPage;