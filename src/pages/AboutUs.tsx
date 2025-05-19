import React from 'react';
import { ArrowRight, Search, Palette, Users, MessageSquare, PenTool, MessageCircle, Award, Target, Briefcase } from 'lucide-react';
import Helmet from 'react-helmet';

const AboutUs: React.FC = () => {
    const services = [
        { icon: <Search size={24} />, name: "SEO" },
        { icon: <Palette size={24} />, name: "Web Design" },
        { icon: <Users size={24} />, name: "Personal Branding" },
        { icon: <MessageSquare size={24} />, name: "Marketing Strategies" },
        { icon: <MessageCircle size={24} />, name: "Social Media Management" },
        { icon: <PenTool size={24} />, name: "Content Writing" },
    ];

    const values = [
        { icon: <Award size={32} />, title: "Excellence", description: "We strive for excellence in every project we undertake." },
        { icon: <Target size={32} />, title: "Innovation", description: "We constantly innovate to stay ahead in the digital landscape." },
        { icon: <Briefcase size={32} />, title: "Integrity", description: "We maintain the highest standards of integrity in all our dealings." },
    ];

    return (
        <>
         <Helmet>
                <title>About RNA HealthTech | Digital Marketing for Doctors & Hospitals | Healthcare SEO | Medical SEO | SEO for Doctors Services India</title>
                <meta name="description" content="Best health marketing & seo for hospitals, doctors, and clinics in India, US, UK, UAE, Australia. Call now 9311666193" />
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
        <div className="min-h-screen bg-verylight text-black">
            <div className="absolute h-28 inset-0 bg-purple z-0 bg-opacity-0" />

            <header className="bg-purple text-white py-20 mt-20">
                <div className="container mx-auto px-4">
                    <h1 className="font-fraunces-slab text-4xl md:text-5xl font-bold mb-2">About RNA HealthTech</h1>
                    <p className="font-work-sans-slab text-xl">Revolutionizing Healthcare Marketing</p>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section className="mb-16">
                    <h2 className="font-fraunces-slab text-3xl font-bold mb-6">Our Story</h2>
                    <p className="font-pt-serif-regular text-lg mb-4">
                        Founded at the intersection of healthcare and technology, RNA HealthTech emerged from a vision to transform how healthcare professionals connect with their patients in the digital age. Our journey began when a group of tech enthusiasts and healthcare veterans recognized a critical gap in the market: the need for specialized digital marketing tailored to the unique challenges of the healthcare industry.
                    </p>
                    <p className="font-pt-serif-regular text-lg mb-4">
                        Since our inception, we've been on a mission to empower healthcare providers with the digital tools and strategies they need to thrive in an increasingly online world. We understand that in healthcare, trust is paramount, and online reputation can make or break a practice. That's why we've dedicated ourselves to mastering the art and science of digital marketing for healthcare professionals.
                    </p>
                    <p className="font-pt-serif-regular text-lg">
                        Today, RNA HealthTech stands as a beacon of innovation in healthcare marketing, continuously evolving to meet the changing needs of our clients and the dynamic digital landscape.
                    </p>
                </section>

                <section className="mb-16">
                    <h2 className="font-fraunces-slab text-3xl font-bold mb-6">Our Expertise</h2>
                    <p className="font-pt-serif-regular text-lg mb-6">
                        At RNA HealthTech, we offer a comprehensive suite of digital marketing services tailored specifically for healthcare professionals. Our team of experts specializes in:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                                <div className="text-purple mr-3">{service.icon}</div>
                                <span className="font-work-sans-slab">{service.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="font-fraunces-slab text-3xl font-bold mb-6">Our Approach</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-fraunces-slab text-2xl font-semibold mb-4">Innovate. Transform. Elevate.</h3>
                        <p className="font-pt-serif-regular text-lg mb-4">
                            Our approach is rooted in the belief that effective healthcare marketing requires a deep understanding of both the digital landscape and the healthcare industry. We don't just apply generic marketing strategies to healthcare; we develop tailored solutions that respect the unique ethical considerations and regulatory requirements of the medical field.
                        </p>
                        <p className="font-pt-serif-regular text-lg">
                            By combining cutting-edge technology with healthcare expertise, we create marketing strategies that not only attract patients but also educate and empower them. Our goal is to elevate your practice's online presence while maintaining the trust and credibility that is crucial in healthcare.
                        </p>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="font-fraunces-slab text-3xl font-bold mb-6">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="text-purple mb-4 flex justify-center">{value.icon}</div>
                                <h3 className="font-fraunces-slab text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="font-work-sans-slab">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="font-fraunces-slab text-3xl font-bold mb-6">Join Our Journey</h2>
                    <p className="font-pt-serif-regular text-lg mb-4">
                        At RNA HealthTech, we're always looking for passionate individuals who share our vision of revolutionizing healthcare marketing. Whether you're a digital marketing guru, a healthcare industry expert, or a tech enthusiast, we'd love to hear from you.
                    </p>
                    <a href="/services" className="inline-flex items-center text-xl mb-8 font-work-sans-slab text-purple hover:text-lightpurple transition-colors">
                        Explore Our Services <ArrowRight className="ml-2" />
                    </a>
                    <br />
                    <a href="/contact" className="inline-flex items-center text-xl font-work-sans-slab text-purple hover:text-lightpurple transition-colors">
                        Contact Us Now<ArrowRight className="ml-2" />
                    </a>
                </section>
            </main>
        </div>
        </>
    );
};

export default AboutUs;