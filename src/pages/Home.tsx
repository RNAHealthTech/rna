import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { FaCircleInfo, FaCirclePlay } from 'react-icons/fa6';
import TextCarousel from "../components/utility/TextCarousel";
import DropdownItem from "../components/utility/DropdownItem";
import TinderCard from "react-tinder-card";
import { ValidationError, useForm } from "@formspree/react";
import AvatarExample, { User } from "../components/utility/AvatarExample";
import TeamModal from "../components/utility/TeamModal";
import { Link, useNavigate } from "react-router-dom";
import LandingCarousel from "../components/utility/LandingCarousel";

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


const ServiceCard: React.FC<ServiceCardProps> = ({ title, image }) => (
    <div className="bg-gray-200 ring-1 ring-gray-200 rounded-lg lg:rounded-[40px] shadow-lg p-6 lg:p-4 w-full h-full flex flex-col">
        <img src={image} alt={title} className="w-full h-4/6 lg:h-5/6 object-cover rounded-[30px] mb-4" />
        <div className="flex flex-row justify-between items-center mt-12 lg:mt-4">
            <h3 className="text-lg lg:text-2xl font-semibold text-center">{title}</h3>
            <button className="text-black text-sm lg:text-xl font-semibold border-2 px-4 py-2 border-solid border-black/80 rounded-[40px]">Services</button>
        </div>
    </div>
);
// Add a slight tilt effect to the ServiceCard component by applying a rotation transform based on the index of the card


const Home: React.FC = () => {

    // const [scrollY, setScrollY] = useState(0);
    // const ref = useRef<HTMLDivElement>(null);
    // const el = useRef(null);
    const ref = useRef(null);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [state, handleSubmit] = useForm('xblrdjdp');
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


    const users: User[] = [

        {
            id: 1,
            name: "Rajat",
            avatar: "https://pyxis.nymag.com/v1/imgs/bc9/ccb/936534d0b82b77cf0ffbac92010ee38ea3-06-al-pacino.2x.rvertical.w512.jpg"
        },
        {
            id: 2,
            name: "Vinay",
            avatar: "https://s3.eu-central-1.amazonaws.com/datajournalismcom/userPhotos/profileDP.jpg"
        },
        {
            id: 3,
            name: "Adhrit",
            avatar: "https://static.wikia.nocookie.net/near_pure_evil/images/3/37/AlexTheLarge.jpg"
        },

    ];





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
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{gif?.title}</h3>
            </div>
        </motion.div>
    );

    const [texts2, setTexts2] = useState<ServiceCardProps[]>([
        {
            title: "Web Design",
            image: "/images/website.jpg",
        },
        {
            title: "SEO",
            image: "/images/seo.jpg",
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
            title: "Social Media",
            image: "/images/social.jpg"
        }
    ]);

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

    return (
        <main className="flex-grow px-4 py-8 sm:px-6 md:px-8 lg:px-12">
            <motion.div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple to-purple/80 rounded-br-[50%] z-0"></motion.div>
            <motion.section id="landing" className="mb-12  max-w-screen-xl mx-auto overflow-x-hidden">
                <LandingCarousel />
            </motion.section>

            <motion.div className="w-full bg-gray-100/80 backdrop-blur-md mb-12 rounded-t-[40px] p-6 lg:p-8 z-10 mt-18">
                <motion.div
                    className="flex flex-col items-center lg:flex-row lg:items-start"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:mr-8 text-center">
                        <motion.div className="text-5xl lg:text-6xl font-bold text-gray-800">10+</motion.div>
                        <motion.div className="text-sm text-gray-600">projects delivered</motion.div>
                    </motion.div>
                    <motion.div className="w-full lg:w-2/3 text-center lg:text-left">
                        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">About RNA HealthTech</h2>
                        <p className="text-gray-700 max-w-3xl text-sm lg:text-base">
                            RNA HealthTech combines the skills of tech wizards with experience of seasoned healthcare professionals. We tailor strategies to manage your online reputation with the nuance and understanding it deserves.

                            In the name of online directories, consulting platforms and healthcare portals, your online reputation is being mismanaged by others.

                            RNA gives back the control to you and helps you outshine competition with the right blend of digital and traditional marketing. We identify the right set of audience, analyse their online behavior, tailor strategies to connect and convert them into your patients.                        </p>
                    </motion.div>
                </motion.div>

            </motion.div>
            <motion.div className="container mx-auto px-4 mb-20">
                <TextCarousel texts={texts} speed={30} />
            </motion.div>



            {/* Overview section */}


            <motion.section
                id="overview"
                className="flex flex-col items-center"

            >
                <h2 className="text-5xl lg:text-6xl font-semibold text-center font-fraunces-slab mb-12">Our Mission</h2>

                <motion.div className="grid grid-cols-1 lg:grid-cols-4 items-start px-4 md:px-6 lg:px-8 lg:mt-32">
                    <motion.div
                        className="lg:col-span-2 bg-gray-100 w-full lg:w-[35vw] h-[75vh] md:h-[80vh] lg:h-[90vh] rounded-[20px] md:rounded-[60px] lg:rounded-[80px] relative overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <video
                            src="/images/gif.mp4"
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                        <motion.div
                            ref={ref}
                            className="absolute flex flex-row gap-4 top-20 right-4"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {[FaCircleInfo, FaCirclePlay].map((Icon, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Icon className="text-2xl sm:text-3xl md:text-4xl text-zinc-800" />
                                </motion.div>
                            ))}
                        </motion.div>
                        <motion.div
                            className="absolute flex flex-col sm:flex-row justify-end bottom-2 sm:bottom-4 md:bottom-6  lg:right-56 left-4 lg:left-4 text-center p-0 lg:p-2 rounded-[15px] md:rounded-[20px] lg:rounded-[40px] bg-white/30 ring-1 ring-zinc-100/50 backdrop-blur-md shadow-xl"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >


                            <div className="mb-2 sm:mb-0 sm:mr-4">
                                <AvatarExample users={users} max={3} />
                            </div>
                            <motion.div className="flex flex-col items-center">
                                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 text-white">Meet Our Team of Experts</h3>
                                <button
                                    className="text-xs sm:text-sm text-black font-semibold bg-white rounded-full px-3 lg:px-4 py-2 lg:py-2 mb-2 shadow-md hover:bg-gray-100 transition-colors duration-300"
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    Meet Team</button>

                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <TeamModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                    <motion.div
                        className="lg:col-span-1 mt-12 lg:mt-0 lg:mr-24 flex flex-col h-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.div className="text-center mb-12">
                            <h2 className="text-2xl font-bold mb-6">Driven by a rich history of expertise and a relentless pursuit of excellence</h2>
                            <button className="text-white text-lg font-semibold rounded-[40px] bg-black py-2 px-6 shadow-md">
                                LEARN MORE
                            </button>

                        </motion.div>
                        <motion.div className="mt-auto space-y-6">
                            {items.map((item, index) => (
                                <DropdownItem key={index} title={item.title} content={item.content} />
                            ))}
                        </motion.div>

                    </motion.div>

                    <motion.div
                        className="lg:col-span-1 bg-gray-100 w-full h-[60vh] sm:h-[50vh] lg:h-[40vh] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] relative overflow-visible mb-24 mt-24 lg:mb-32 lg:mt-0"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <img
                            src="/images/mol.jpg"
                            alt="Molecule Interaction"
                            className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] lg:rounded-[50px]"
                        />

                        {/* second div  */}
                        <motion.div className="absolute -bottom-20 sm:-bottom-24 lg:-bottom-20 left-0 right-24 mx-auto w-9/12  max-w-md text-center py-4 sm:p-6 rounded-[20px] lg:rounded-[40px] bg-gray-100/30 ring-1 ring-zinc-100 shadow-lg">

                            <h3 className="text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-black/90">Give Our Team of Experts a Brief</h3>
                            <button className="text-white text-sm sm:text-base font-semibold bg-purple rounded-[30px] px-4 sm:px-6 py-2 shadow-md hover:bg-purple-700 transition-colors duration-300">
                                Call Us Now!
                            </button>
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
                            ref={(ref) => cardRefs.current[index] = ref}
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





            <motion.section
                id="portfolio"
                className="flex flex-col items-center mt-12"

            >
                <h2 className="text-5xl lg:text-6xl font-semibold text-center font-fraunces-slab mb-12">Portfolio</h2>
                <motion.div className="grid grid-cols-1 gap-8 lg:grid-cols-4 items-start px-4 md:px-6 lg:px-8 lg:mt-32">

                    <motion.div className="lg:col-span-2 bg-gray-100 w-full lg:w-[35vw] h-[75vh] md:h-[80vh] lg:h-[90vh] rounded-[20px] md:rounded-[60px] lg:rounded-[80px] relative overflow-hidden shadow-md">
                        <motion.div className="relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <video
                                src="/images/projects1.mp4"
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <motion.div
                                className="absolute inset-0 bg-purple/60 backdrop-blur-sm rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] flex flex-col justify-center items-center p-4 cursor-pointer"
                                initial={{ opacity: 1 }}
                            >
                                <h3 className="text-xl font-bold text-white mb-2">Prominent Hospital in Delhi </h3>
                                <p className="text-md text-gray-100 text-center mb-4">We outbrusted a responsive website with modern technologies and top ranking in search index.</p>

                                <motion.div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
                                    <Link to="https://karunahospital.in" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-100 transition-colors duration-300 w-full sm:w-auto text-center">
                                        Visit Website
                                    </Link>
                                    <Link to="" className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 w-full sm:w-auto text-center">
                                        View Project Details
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div className="lg:col-span-1 space-y-8 flex flex-col h-full">
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <img
                                src="/images/projects2.jpg"
                                alt="Molecule Interaction"
                                className="w-full h-60 object-cover rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] shadow-md"
                            />

                            <motion.div
                                className="absolute inset-0 bg-purple/60 backdrop-blur-sm rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] flex flex-col justify-center items-center p-4 cursor-pointer"
                                initial={{ opacity: 1 }}

                            >
                                <h3 className="text-xl font-bold text-white mb-2">Endocrinologist in NCR </h3>
                                <p className="text-md text-gray-100 text-center mb-4">We crafted a cutting-edge, responsive website that dominate search rankings and captivate audience.</p>
                                <motion.div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
                                    <Link to="https://drajayaggarwal.in" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-100 transition-colors duration-300 w-full sm:w-auto text-center">
                                        Visit Website
                                    </Link>
                                    <Link to="" className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 w-full sm:w-auto text-center">
                                        View Project Details
                                    </Link>
                                </motion.div>

                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <img
                                src="/images/projects3.jpg"
                                alt="Molecule Interaction"
                                className="w-full h-60 object-cover rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] shadow-md"
                            />
                            <motion.div
                                className="absolute inset-0 bg-purple/60 backdrop-blur-sm rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] flex flex-col justify-center items-center p-4 cursor-pointer"
                                initial={{ opacity: 1 }}

                            >
                                <h3 className="text-xl font-bold text-white mb-2"> MENTAL HEALTH CLINIC </h3>
                                <p className="text-md text-gray-100 text-center mb-4">Discover our newly launched, user-friendly website designed to connect you with one of the best psychologist of India</p>
                                <motion.div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
                                    <Link to="https://delhimentalhealth.com" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-100 transition-colors duration-300 w-full sm:w-auto text-center">
                                        Visit Website
                                    </Link>
                                    <Link to="" className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 w-full sm:w-auto text-center">
                                        View Project Details
                                    </Link>
                                </motion.div>

                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="lg:col-span-1 bg-gray-100 w-full h-[60vh] sm:h-[50vh] lg:h-[40vh] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] relative overflow-visible"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.div className="relative">
                            <video
                                src="/images/projects4.mp4"
                                className="w-full h-full object-cover rounded-[40px] shadow-xl"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                            <motion.div
                                className="absolute inset-0 bg-purple/60 backdrop-blur-sm rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] flex flex-col justify-center items-center p-4 cursor-pointer"
                                initial={{ opacity: 1 }}
                            >
                                <h3 className="text-xl font-bold text-white mb-2">Nationally Recognized Neurosurgon's Site</h3>
                                <p className="text-md text-gray-100 text-center mb-4">Discover our expertly crafted website, showcasing cutting-edge care and seamless access to top-tier neurosurgical services.</p>
                                <motion.div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
                                    <Link to="https://drgangeshgunjanneuro.com" target="_blank" rel="noopener noreferrer" className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-100 transition-colors duration-300 w-full sm:w-auto text-center">
                                        Visit Website
                                    </Link>
                                    <Link to="" className="bg-transparent border border-white text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 w-full sm:w-auto text-center">
                                        View Project Details
                                    </Link>
                                </motion.div>

                            </motion.div>
                        </motion.div>
                        <motion.div className="mx-auto mt-12 space-y-6 text-center">
                            <h3 className="text-2xl font-bold text-gray-800">Design. Dazzle. Deliver</h3>
                            <p className="text-lg text-gray-600">
                                We think different. At RNA HealthTech, dedicated medical marketing professionals work with a three-dimensional approach so that you rise above the crowd.
                            </p>
                            <p className="text-md text-gray-700">
                                Our solutions have helped prolific hospitals, expert surgeons and experienced doctors in winning trust of thousands of patients. The custom strategies not only educate and impress but ensure attractive return-on-investment.
                            </p>
                            <motion.button
                                className="mt-4 px-6 py-3 border border-r border-solid border-purple text-lg font-semibold text-zinc-800 rounded-full hover:bg-purple hover:text-white transition duration-300 shadow-xl"
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

            {/* Contact section */}


            <motion.section id="contact"
                className="flex flex-col items-center text-center py-20 mt-[28rem] lg:mt-14"

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
                                    className="w-full h-full object-cover"
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

                                        <h3 className="text-3xl font-bold mb-8 text-center lg:text-left mt-8 lg:mt-0">Schedule Your Appointment</h3>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <motion.div className="mb-8">
                                                <label htmlFor="name" className="block text-oxford-blue text-sm font-semibold mb-2">Name </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    required
                                                    placeholder="Type Name"
                                                    className="border-b  bg-peacher  border-platinum py-2 text-lg w-full"
                                                />
                                            </motion.div>

                                            <motion.div className="mb-8">
                                                <label htmlFor="phone" className="block text-oxford-blue text-sm font-semibold mb-2">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    id="phone"
                                                    placeholder="Type Phone Number"
                                                    className="border-b  bg-peacher  border-platinum py-2 text-lg w-full"
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
                                                    className="border-b  bg-peacher  border-platinum py-2 text-lg w-full"
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
                                                    className="border-b bg-peacher border-platinum py-2 text-lg w-full"
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
                                                    className="border-b bg-peacher border-platinum py-2 text-lg w-full max-h-72 min-h-24 h-24 resize-vertical"
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
    )
}

export default Home;