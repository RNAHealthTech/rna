import React, { useEffect } from 'react';
import WebsiteCarousel from '../components/utility/WebsiteCarousel';
import ProjectsShowcase from '../components/projects/ProjectsShowcase';
import { Helmet } from 'react-helmet';


interface Website {
  id: string;
  imageUrl: string;
  mobileImageUrl: string;
  liveUrl: string;
  detailsUrl?: string; 
}

const websites: Website[] = [
  {
    id: '1',
    imageUrl: '/content/karuna-home.png',
    mobileImageUrl: '/content/karuna-mobile.png',
    liveUrl: 'https://karunahospital.in',
    detailsUrl: '/projects/1',
  },
  // {
  //   id: '2',
  //   imageUrl: '/content/ajay-homepage.png',
  //   mobileImageUrl: '/content/ajay-mobile.png',
  //   liveUrl: 'https://drajayaggarwal.in/',
  //   detailsUrl: '/projects/2'
  // },
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
    imageUrl: '/content/anivita-homepage.png',
    mobileImageUrl: '/content/anivita-mobile.png',
    liveUrl: 'https://www.dranivitaaggarwal.com/',
    detailsUrl: '/projects/6'
  },
  {
    id: '7',    
    imageUrl: '/content/bushra-homepage.png',
    mobileImageUrl: '/content/bushra-mobile.png',
    liveUrl: 'https://southdelhipsychiatrist.com/',
    detailsUrl: '/projects/7'
  },
  {
    id: '8', 
    imageUrl: '/content/kanika-home.png', 
    mobileImageUrl: '/content/kanika-mobile.png', 
    liveUrl: 'https://delhigynaesurgeon.com/', 
    detailsUrl: '/projects/8'
  }, 
  {
    id: '9', 
    imageUrl: '/content/swati-homepage.png', 
    mobileImageUrl: '/content/swati-mobile.png',
    liveUrl: 'https://kidsendocare.com',
     
  },
  {
    id: '10', 
    imageUrl: "/content/besturologist-desktop.png", 
    mobileImageUrl: "/content/besturologist-mobile.png", 
    liveUrl: "https://drrajdebsaha.com"
  }
 
];

const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
     <Helmet>
                <title>See Our Projects | Work Across Websites, SEO, Google Profiles</title>
                <meta name="description" content="Checkout our work for most prominent hospitals, doctors & clinics across the country. Take your practice online with our customized & automated solutions." />
                <meta name="keywords" content="digital marketing for doctors, healthcare seo, hospital digital marketing, rna healthcare, digital agency for healthcare, SEO for doctors, health tech companies" />

                <link rel="canonical" href="https://rnahealthtech.com" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="RNA HealthTech | Digital Marketing for Doctors & Hospitals" />
                <meta property="og:description" content="Transform your healthcare practice with expert digital marketing. SEO for doctors, hospital marketing & health tech services." />
                <meta property="og:url" content="https://rnahealthtech.com" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://rnahealthtech.com/og-home.jpg" />

                {/* Organization Schema */}
                <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RNA HealthTech",
        "url": "https://rnahealthtech.com",
        "logo": "https://rnahealthtech.com/logo.png",
        "description": "",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Place L29 L34, First Floor, Connaught Place",
          "addressLocality": "New Delhi",
          "addressRegion": "New Delhi",
          "postalCode": "110001",
          "addressCountry": "India"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-9311666193",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-9311666194",
            "contactType": "sales",
            "availableLanguage": ["English", "Hindi"]
          }
        ],
        "email": "contact@rnahealthtech.com",
        "founder": {
          "@type": "Person",
          "name": "RNA HealthTech Team"
        },
        "foundingDate": "2020",
        "areaServed": [
          {
            "@type": "Country",
            "name": "India"
          },
          {
            "@type": "Country",
            "name": "United States"
          },
          {
            "@type": "Country",
            "name": "Canada"
          }
        ],
        "serviceArea": [
          "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata", "Ahmedabad", "Surat", "Jaipur",
          "New York", "Los Angeles", "Chicago", "Houston", "Toronto", "Vancouver", "Montreal"
        ],
        "knowsAbout": [
          "Digital Marketing for Doctors",
          "Healthcare SEO",
          "Hospital Digital Marketing",
          "Health Tech Marketing",
          "Medical Practice Marketing",
          "Healthcare Content Marketing"
        ]
      }
    `}</script>

                {/* Website Schema */}
                <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "RNA HealthTech",
        "alternateName": "RNA Healthcare",
        "url": "https://rnahealthtech.com",
        "description": "Premier healthcare digital marketing agency providing SEO services for doctors, hospitals and health tech companies",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://rnahealthtech.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        },
        "about": {
          "@type": "Thing",
          "name": "Healthcare Digital Marketing"
        }
      }
    `}</script>

                {/* Local Business Schema */}
                <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "RNA HealthTech",
        "image": "https://rnahealthtech.com/office.jpg",
        "telephone": "+91-9311666193",
        "email": "contact@rnahealthtech.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Place L29 L34, First Floor, Connaught Place",
          "addressLocality": "New Delhi",
          "addressRegion": "New Delhi",
          "postalCode": "110001",
          "addressCountry": "India"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.6328",
          "longitude": "77.2197"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$"
      }
    `}</script>
            </Helmet>
    <main className="flex-grow">
      <WebsiteCarousel websites={websites} />
      <section className='min-h-screen'>
        <h1 className='text-center text-5xl md:text-7xl mt-10 text-purple font-fraunces-slab'>Our Projects</h1>
        <ProjectsShowcase />
      </section>
    </main>
    </>
  );
};

export default ProjectsPage;