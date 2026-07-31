import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import TextCarousel from "../components/utility/TextCarousel";
import DropdownItem from "../components/utility/DropdownItem";
import TinderCard from "react-tinder-card";
import { ValidationError, useForm } from "@formspree/react";
import { Link, useNavigate } from "react-router-dom";
import LandingCarousel from "../components/utility/LandingCarousel";
import AnimatedText from "../components/utility/AnimatedText";
import { DesktopImageCarousel, ResponsiveImageCarousel } from "../components/utility/ImageCarousel";
import TestimonialsSection from "../components/utility/TestimonialsSection";
import { Helmet } from "react-helmet";
// import TypeformFlow from "../components/utility/PackageBuilder";

interface Gif {
    image: string,
    title: string,
}

interface ServiceCardProps {
    image: string,
    title: string,
}


const gifs = [
    {
        image: '/images/seo.gif',
        title: 'SEO'
    },
    {
        image: '/images/content-writing.gif',
        title: 'Content Writing'
    },
    {
        image: '/images/website-development.gif',
        title: 'Website Desiging'
    },
    {
        image: '/images/marketing.gif',
        title: 'Marketing Strategies'
    }
]

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}


const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => {
    const navigate = useNavigate();

    return (<div className="bg-gray-200 ring-1 ring-gray-200 rounded-lg lg:rounded-[40px] shadow-lg p-6 lg:p-4 w-full h-full flex flex-col">
        <img src={image} alt={title} className="w-full h-4/6 lg:h-5/6 object-cover rounded-[30px] mb-4" />
        <div className="flex flex-row justify-between items-center mt-12 lg:mt-4">
            <h3 className="text-lg lg:text-2xl font-semibold text-center">{title}</h3>
            <button onClick={() => navigate('/services')} className="text-black text-sm lg:text-xl font-semibold border-2 px-4 py-2 border-solid border-black/80 rounded-[40px]">Services</button>
        </div>
    </div>
    )
};
// Add a slight tilt effect to the ServiceCard component by applying a rotation transform based on the index of the card


const Home: React.FC = () => {

    const navigate = useNavigate();
    const [state, handleSubmit] = useForm('mnnakeoq');
    console.log(state);

    const isMobile = useIsMobile();


    const [currentGifIndex, setCurrentGifIndex] = useState<number>(0);

    const handleGifNavigation = (index: number) => {
        setCurrentGifIndex(index);
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isMobile) {
            intervalId = setInterval(() => {
                setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
            }, 3000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isMobile]);


    const texts: string[] = [
        "Web Design ",
        "SEO",
        "Social Media Management",
        "Content Writing",
        "RNA Health Tech"
    ]

    const items = [
        {
            title: 'Tailored Digital Solutions',
            content: 'RNA HealthTech provides customized digital strategies that resonate with your target audience, ensuring your brand stands out in the competitive health tech space.'
        },
        {
            title: 'Expanding Your Reach',
            content: "Our expertise in digital marketing extends your brand's reach, connecting you with healthcare professionals and patients worldwide."
        },
        {
            title: 'Innovative Health Solutions',
            content: 'At RNA HealthTech, we combine cutting-edge technology with deep industry knowledge to deliver health solutions that transform patient care and improve outcomes.'
        }
    ];


    const renderCard = (gif: Gif, index: number) => (
        <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-sm mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative aspect-square w-full ring-1 ring-zinc-100/50 backdrop-blur-md">
                <img
                    src={gif?.image}
                    alt={gif?.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{gif?.title}</h3>
            </div>
        </motion.div>
    );

    const [texts2, setTexts2] = useState<ServiceCardProps[]>([



        {
            title: "Social Media",
            image: "/images/social.jpg"
        },
        {
            title: "Content Writing",
            image: "/images/results.jpg",
        },

        {
            title: "Marketing",
            image: "/images/marketing.jpg",
        },
        {
            title: "SEO",
            image: "/images/seo.jpg",
        },
        {
            title: "Web Design",
            image: "/images/website.jpg",
        },

    ]);



    const imageCarousel = [
        { src: "/content/ajay-homepage.png", alt: "Dr. Ajay Aggarwal", title: "Dr. Ajay Aggarwal" },
        { src: "/content/setu-home.png", alt: "Dr. Setu Gupta", title: "Dr. Setu Gupta" },
        { src: "/content/karuna-home.png", alt: "Kaurna Hospital", title: "Karuna Hospital" },
        { src: "/content/kanika-home.png", alt: "Dr. Kainka Jain", title: "Dr. Kanika Jain" },
        { src: "/content/bushra-homepage.png", alt: "Dr. Bushra Zahoor", title: "Dr. Bushra Zahoor" },
        { src: "/content/gunjan-home.png", alt: "Dr. Gangesh Gunjan", title: "Dr. Gangesh Gunjan" },
        { src: "/content/neuropoint-desktop.png", alt: "Neuropoint Medical Centre", title: "Neuropoint Medical Centre" }
    ]


    const initialCards = useRef(texts2);
    const [lastInteraction, setLastInteraction] = useState(Date.now());
    console.log(lastInteraction);
    const cardRefs = useRef<any[]>([]);

    const onSwipe = (direction: string, title: string) => {
        console.log('You swiped: ' + direction + ' on ' + title);
        setLastInteraction(Date.now());
    }

    const onCardLeftScreen = (title: string) => {
        console.log(title + ' left the screen');
        setTexts2(prev => prev.filter(card => card.title !== title));
    }

    useEffect(() => {
        if (texts2.length === 0) {
            setTimeout(() => {
                setTexts2(initialCards.current);

            }, 1000);
        }
    }, [texts2]);

    return (
        <>
            <Helmet>
                <title>RNA HealthTech | Digital Marketing for Doctors & Hospitals | Healthcare SEO | Medical SEO | SEO for Doctors Services India</title>
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
        "priceRange": "$500"
      }
    `}</script>
            </Helmet>
            <main className="flex-grow px-4 py-8 sm:px-6 md:px-8 lg:px-12">
                <motion.div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple to-purple/80 rounded-br-[50%] z-0"></motion.div>
                <motion.section id="landing" className="mb-12  max-w-screen-xl mx-auto overflow-x-hidden">
                    <LandingCarousel />
                </motion.section>

                <motion.div
                    className="w-full bg-gradient-to-br from-gray-100/50 to-gray-200/100 backdrop-blur-md mb-12 rounded-t-[40px] p-6 sm:p-8 lg:p-12 z-10 mt-18 shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            className="flex flex-col lg:flex-row lg:items-start lg:space-x-12"
                        >
                            <motion.div className="w-full lg:w-1/3 mb-8 lg:mb-0 mt-2 lg:mt-12 space-y-4 text-center flex items-center justify-center">
                                <AnimatedText />
                            </motion.div>
                            <motion.div
                                className="w-full lg:w-2/3 text-center lg:text-left"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-fraunces-slab text-purple-600 mb-6">About RNA HealthTech</h2>
                                <div className="text-gray-700 max-w-3xl text-sm sm:text-base lg:text-lg space-y-6">
                                    <p className="leading-relaxed">
                                        RNA HealthTech combines the skills of tech wizards with the experience of seasoned healthcare professionals. We tailor strategies to manage your online reputation with the nuance and understanding it deserves.
                                    </p>
                                    <p className="leading-relaxed">
                                        In the world of online directories, consulting platforms, and healthcare portals, your online reputation is often mismanaged by others. RNA HealthTech steps in to change that narrative.
                                    </p>
                                    <p className="leading-relaxed">
                                        We give you back control and help you outshine the competition with the perfect blend of digital and traditional marketing. Our approach is simple yet effective: we identify the right audience, analyze their online behavior, and tailor strategies to connect with them, ultimately converting them into your patients.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.section
                    id="portfolio"
                    className="flex flex-col items-center mt-20"
                >
                    <h2 className="text-5xl lg:text-6xl font-semibold text-center font-fraunces-slab mb-12">Portfolio</h2>
                    <motion.div className="flex justify-center w-full px-4 md:px-6 lg:px-8 lg:mt-32">
                        <motion.div className="w-full max-w-4xl bg-gray-100 rounded-[20px] md:rounded-[60px] lg:rounded-[80px] relative overflow-hidden shadow-md">
                            <motion.div className="py-12 space-y-8 text-center px-6 lg:px-12">
                                <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">Design. Dazzle. Deliver</h3>
                                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                                    We think different.
                                </p>
                                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                                    At RNA HealthTech, dedicated medical marketing professionals work with a three-dimensional approach so that you rise above the crowd.
                                </p>
                                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                                    Our solutions have helped prolific hospitals, expert surgeons and experienced doctors in winning the trust of thousands of patients. The custom strategies not only educate and impress but ensure an attractive return on investment.
                                </p>
                                <motion.button
                                    className="mt-6 px-8 py-4 border border-r border-solid border-purple text-lg lg:text-xl font-semibold text-zinc-800 rounded-full hover:bg-purple hover:text-white transition duration-300 shadow-xl"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate("/projects")}
                                >
                                    View All Projects
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.section>




                <motion.div className="container mx-auto px-4 mt-[10vh] md:mt-40 mb-10 md:mb-28">

                    <div className="md:hidden">
                        <ResponsiveImageCarousel items={imageCarousel} />
                    </div>
                    <div className="hidden md:block">
                        <DesktopImageCarousel items={imageCarousel} autoChangeInterval={3000} />
                    </div>
                    <motion.div className="mt-24 mb-24">
                        <div className="text-center">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                                Our Clients Are Some of the Most Prominent Doctors of the Nation
                            </h2>
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8">
                                You could be the next. Join our network of esteemed medical professionals.
                            </p>
                            <Link to='/contact' className="bg-purple hover:bg-lavender text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                                Join Our Network
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                 {/* Overview section */}
                <motion.section
                    id="overview"
                    className="flex flex-col items-center mt-50 md:mt-20">
                    <h2 className="text-5xl lg:text-6xl font-semibold text-center font-fraunces-slab mb-12">Our Mission</h2>

                    <motion.div className="grid grid-cols-1 lg:grid-cols-1 items-start px-4 md:px-6 lg:px-8 lg:mt-32">


                        <motion.div
                            className="lg:col-span-1 mt-12 lg:mt-0 lg:mr-24 flex flex-col h-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <motion.div className="text-center mb-12">
                                <h2 className="text-2xl font-bold mb-6">Driven by a rich history of expertise and a relentless pursuit of excellence</h2>
                                <button onClick={() => navigate('/about-us')} className="text-white text-lg font-semibold rounded-[40px] bg-black py-2 px-6 shadow-md">
                                    LEARN MORE
                                </button>

                            </motion.div>
                            <motion.div className="mt-auto space-y-6">
                                {items.map((item, index) => (
                                    <DropdownItem key={index} title={item.title} content={item.content} />
                                ))}
                            </motion.div>

                        </motion.div>


                    </motion.div>
                </motion.section>

                {/*  Service cards section */}


                <motion.section
                    id="services"
                    className="px-6 py-20 lg:py-28 relative overflow-hidden z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-5xl lg:text-6xl font-semibold text-center font-fraunces-slab">Our Services</h2>

                    {/* TextCarousel positioned as a background  */}
                    <motion.div className="text-purple text-2xl absolute top-0 left-0 right-0 bottom-0 flex items-center">
                        <TextCarousel texts={texts} speed={30} />
                    </motion.div>

                    <motion.div className="relative min-h-screen w-full max-w-2xl mx-auto flex items-center justify-center">
                        {texts2.length > 0 && texts2.map((text, index) => (
                            <TinderCard
                                ref={(ref) => (cardRefs.current[index] = ref)}
                                key={text.title}
                                onSwipe={(dir) => onSwipe(dir, text.title)}
                                onCardLeftScreen={() => onCardLeftScreen(text.title)}
                                preventSwipe={['up', 'down']}
                                className="absolute w-[90%] h-[55%] lg:h-[70%]"
                            >
                                <ServiceCard
                                    title={text.title}
                                    image={text.image}
                                />
                            </TinderCard>
                        ))}
                    </motion.div>


                </motion.section>

                {/* about section */}


                <motion.section
                    id="mission"
                    className="flex flex-col items-center justify-center">
                    <motion.div className="bg-white text-black p-12 flex flex-col md:flex-row">

                        <motion.div

                            className="w-full md:w-1/2 pr-0 lg:pr-12 mb-12 md:mb-0"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                Empowering the Future of Digital Health
                                <span className="text-gray-400"> with Innovative Solutions</span>
                            </h1>
                            <p className="text-lg md:text-xl mb-8">
                                At RNA HealthTech, our mission is to revolutionize the digital health landscape by bridging the gap between cutting-edge medical innovations and their target audience. We are dedicated to creating impactful, compliant, and user-centric digital experiences that accelerate the growth and adoption of transformative health tech solutions.
                            </p>

                            <motion.div className="grid grid-cols-2 gap-8 mt-16">
                                <motion.div
                                    onClick={() => handleGifNavigation(0)}
                                    className="cursor-pointer"
                                >

                                    <h2 className="text-4xl md:text-6xl font-bold">1+ week</h2>
                                    <p className="text-lg md:text-xl mt-2">Fast Prototyping</p>
                                </motion.div>
                                <motion.div
                                    onClick={() => handleGifNavigation(1)}
                                    className="cursor-pointer"
                                >
                                    <h2 className="text-4xl md:text-6xl font-bold">20+</h2>
                                    <p className="text-lg md:text-xl mt-2">Technologies Used In Services</p>
                                </motion.div>
                                <motion.div onClick={() => handleGifNavigation(2)}
                                    className="cursor-pointer">
                                    <h2 className="text-4xl md:text-6xl font-bold">99%</h2>
                                    <p className="text-lg md:text-xl mt-2">Accuracy Rate in Generating Targets</p>
                                </motion.div>
                                <motion.div onClick={() => handleGifNavigation(3)}
                                    className="cursor-pointer">
                                    <h2 className="text-4xl md:text-6xl font-bold">N+</h2>
                                    <p className="text-lg md:text-xl mt-2">Growing Satisfied Customers</p>
                                </motion.div>
                            </motion.div>

                        </motion.div>

                        {/* right side content */}

                        <motion.div className="w-full md:w-1/2 relative px-4 md:px-0">
                            <motion.div className="relative w-full h-[400px] md:h-[600px]">
                                <motion.div className="h-full flex items-center justify-center">
                                    {renderCard(gifs[currentGifIndex], currentGifIndex)}
                                </motion.div>
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </motion.section>

                {/* Testimonials / Google Reviews section */}
                <TestimonialsSection />

                {/* Contact section */}


                <motion.section id="contact"
                    className="flex flex-col items-center text-center py-20  lg:mt-14"

                >

                    <h2 className="text-5xl lg:text-6xl font-semibold font-fraunces-slab ">Contact Us</h2>

                    <motion.div className="container mx-auto px-4 mt-20 lg:mt-28 p-6 rounded-[30px] bg-lavender/50">
                        <motion.div

                            className="max-w-6xl mx-auto">
                            <motion.div className="flex flex-col lg:flex-row items-center">
                                {/* Image section */}
                                <motion.div className="w-full h-5/6 lg:w-1/2 lg:pl-8 mb-8 mt-12 lg:mt-0 lg:mb-0 order-2">
                                    <img
                                        src="/images/contact.gif"
                                        alt="Doctor consultation"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                </motion.div>
                                {/* Form section */}
                                <motion.div
                                    className="w-full lg:w-1/2 lg:pr-8 order-1"
                                >
                                    {state.succeeded ? (
                                        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center lg:text-left mt-4 sm:mt-6 lg:mt-0 px-4 lg:px-0">
                                            Your Form has been sent successfully!
                                        </h3>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false, amount: 0.3 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >

                                            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left mt-8 lg:mt-0">Consult for Digital Therapy</h3>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <motion.div className="mb-8">
                                                    <label htmlFor="name" className="block text-oxford-blue text-sm font-semibold mb-2">Name </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        required
                                                        placeholder="Type Name"
                                                        className="border-b bg-peacher  border-platinum py-2 text-lg w-full p-4 rounded-lg"
                                                    />
                                                </motion.div>

                                                <motion.div className="mb-8">
                                                    <label htmlFor="phone" className="block text-oxford-blue text-sm font-semibold mb-2">Phone</label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        id="phone"
                                                        placeholder="Type Phone Number"
                                                        className="border-b  bg-peacher  border-platinum py-2 text-lg w-full p-4 rounded-lg"
                                                    />
                                                </motion.div>

                                                <motion.div className="mb-8">
                                                    <label htmlFor="email" className="block text-oxford-blue text-sm font-semibold mb-2">Email Address </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        required
                                                        placeholder="Type Email Address"
                                                        className="border-b bg-peacher border-platinum py-2 text-lg w-full p-4 rounded-lg"
                                                    />
                                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                                </motion.div>
                                                <motion.div className="mb-8">
                                                    <label htmlFor="date" className="block text-oxford-blue text-sm font-semibold mb-2">Date</label>
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        id="date"
                                                        required
                                                        placeholder="Select Date"
                                                        className="border-b bg-peacher border-platinum py-2 text-lg w-full p-4 rounded-lg"
                                                    />
                                                    <ValidationError prefix="Date" field="date" errors={state.errors} />
                                                </motion.div>

                                                <motion.div className="mb-8">
                                                    <label htmlFor="message" className="block text-oxford-blue text-sm font-semibold mb-2">How can I help You?</label>
                                                    <textarea
                                                        name="message"
                                                        id="message"
                                                        placeholder="Type Description"
                                                        required
                                                        className="border-b bg-peacher border-platinum py-2 text-lg w-full max-h-72 min-h-24 h-24 resize-vertical p-4 rounded-lg"
                                                    ></textarea>
                                                </motion.div>

                                                <button
                                                    type="submit"
                                                    className="w-full bg-purple text-white font-semibold py-3 px-6 rounded-md hover:text-black/90 hover:bg-lavender transition duration-300 ease-in-out transform hover:scale-105"
                                                >
                                                    Schedule Appointment
                                                </button>
                                            </form>

                                        </motion.div>)}
                                </motion.div>


                            </motion.div>
                        </motion.div>
                    </motion.div>

                </motion.section>
            </main >
        </>
    )
}

export default Home;