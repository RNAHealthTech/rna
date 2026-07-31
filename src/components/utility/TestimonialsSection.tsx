import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export interface GoogleReview {
    id: string;
    authorName: string;
    avatarInitial?: string;
    avatarBgColor?: string;
    avatarUrl?: string;
    rating: number;
    relativeTime: string;
    text: string;
    isLocalGuide?: boolean;
}

const GOOGLE_REVIEWS_URL =
    "https://www.google.com/maps/place/RNA+Healthtech/@28.6343265,77.2222169,17.18z/data=!4m6!3m5!1s0x390cfdf46ef99d0d:0x8a6a6a745d9bf5b7!8m2!3d28.634168!4d77.2223805!16s%2Fg%2F11wv58_xr3?entry=ttu&g_ep=EgoyMDI2MDcyOC4wIKXMDSoASAFQAw%3D%3D";

// Genuine customer reviews extracted directly from RNA HealthTech Google Maps listing
const googleReviewsData: GoogleReview[] = [
    {
        id: "1",
        authorName: "Bushra Zahoor",
        avatarInitial: "B",
        avatarBgColor: "bg-blue-600",
        rating: 5,
        relativeTime: "a year ago",
        text: "Folks at RNA HealthTech are very attentive to details and understand the requirements related to website and SEO carefully. They handle all the tasks down to the smallest detail by understanding local areas, speciality and the right audience to target. Easy to talk and reach out to. Definitely worth recommending."
    },
    {
        id: "2",
        authorName: "Aanya Wadhwani",
        avatarInitial: "A",
        avatarBgColor: "bg-emerald-600",
        rating: 5,
        relativeTime: "a year ago",
        text: "I've been working with Vinay and his team for the last 6 months, and he's shown exceptional expertise and sensitivity that we required from a Website developer of a Mental Health Platform - if you're a therapist planning to have a website/platform created, Vinay is your guy. No doubt."
    },
    {
        id: "3",
        authorName: "Karishma Baghel",
        avatarInitial: "K",
        avatarBgColor: "bg-purple-600",
        rating: 5,
        relativeTime: "a year ago",
        text: "RNA Healthtech Best Service Provider of a Digital Marketing Agency in Delhi. They understand your brand and work according of it. If you grow your business value recommended you go with it."
    },
    {
        id: "4",
        authorName: "Sumit Shrivastava",
        avatarInitial: "S",
        avatarBgColor: "bg-amber-600",
        rating: 5,
        relativeTime: "a year ago",
        text: "The way they understand the requirements and deliver the service is just perfect. If you're looking for a company that is reliable, dedicated, and truly cares about its clients, look no further than RNA Healthtech."
    },
    {
        id: "5",
        authorName: "Abhishek Kundra",
        avatarInitial: "A",
        avatarBgColor: "bg-indigo-600",
        rating: 5,
        relativeTime: "Edited a year ago",
        text: "The team's professionalism, creativity, and attention to detail are impressive. They are good with website designs. We've seen more customer engagement. Highly recommend."
    },
    {
        id: "6",
        authorName: "Mohit Mudgal",
        avatarInitial: "M",
        avatarBgColor: "bg-rose-600",
        rating: 5,
        relativeTime: "a year ago",
        text: "Their innovative ideas and understanding the requirements of the clients are appreciated. Exceeded our expectations. Great job..!!"
    },
    {
        id: "7",
        authorName: "Pankaj Singh",
        avatarInitial: "P",
        avatarBgColor: "bg-teal-600",
        rating: 5,
        relativeTime: "a year ago",
        isLocalGuide: true,
        text: "Great facilities and services at best budget...really recommend it for future business plans"
    },
    {
        id: "8",
        authorName: "Prince Kumar",
        avatarInitial: "P",
        avatarBgColor: "bg-cyan-600",
        rating: 5,
        relativeTime: "a year ago",
        text: "Facilities are good. Reliable team for healthcare digital marketing and web services."
    }
];

// Official Google "G" Icon Component
const GoogleGIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
        />
        <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.37 24 12 24z"
        />
        <path
            fill="#FBBC05"
            d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"
        />
        <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"
        />
    </svg>
);

// Gold Star Icon
const StarIcon: React.FC<{ filled?: boolean; className?: string }> = ({ filled = true, className = "w-4 h-4" }) => (
    <svg
        className={`${className} ${filled ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

// Quotation SVG Icon
const QuoteIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-purple/20" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
);

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [visibleCards, setVisibleCards] = useState<number>(3);
    const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
    const [isPaused, setIsPaused] = useState<boolean>(false);

    // Touch swipe handling
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Update visible cards based on screen viewport width
    const updateVisibleCards = useCallback(() => {
        const width = window.innerWidth;
        if (width < 768) {
            setVisibleCards(1);
        } else if (width < 1024) {
            setVisibleCards(2);
        } else {
            setVisibleCards(3);
        }
    }, []);

    useEffect(() => {
        updateVisibleCards();
        window.addEventListener("resize", updateVisibleCards);
        return () => window.removeEventListener("resize", updateVisibleCards);
    }, [updateVisibleCards]);

    const maxIndex = Math.max(0, googleReviewsData.length - visibleCards);

    // Ensure currentIndex stays valid when screen resizes
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [visibleCards, maxIndex, currentIndex]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, [maxIndex]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }, [maxIndex]);

    // Autoplay interval
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused, handleNext]);

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setIsPaused(true);
        setTouchStart(e.targetTouches[0].clientX);
        setTouchEnd(null);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) {
            handleNext();
        } else if (distance < -50) {
            handlePrev();
        }
        setTouchStart(null);
        setTouchEnd(null);
    };

    const toggleExpand = (id: string) => {
        setIsPaused(true);
        setExpandedCards((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Calculate total pagination pages
    const totalPages = Math.max(1, googleReviewsData.length - visibleCards + 1);

    return (
        <motion.section
            id="testimonials"
            className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Header Area */}
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                {/* Google Reviews Badge */}
                <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 shadow-sm rounded-full px-4 py-2 mb-4 hover:shadow-md transition-shadow">
                    <GoogleGIcon className="w-5 h-5" />
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-4 h-4" />
                        ))}
                    </div>
                    <span className="text-xs font-semibold text-gray-800 tracking-wide uppercase">
                        5.0 Rating on Google Reviews
                    </span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold font-fraunces-slab text-gray-900 mb-4 tracking-tight">
                    What Our Clients Say
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-work-sans-slab max-w-2xl mx-auto leading-relaxed">
                    Real experiences from clients who trust RNA HealthTech.
                </p>
            </div>

            {/* Slider Container */}
            <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Cards Viewport */}
                <div className="overflow-hidden py-4 px-1">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`
                        }}
                    >
                        {googleReviewsData.map((review) => {
                            const isExpanded = !!expandedCards[review.id];
                            const isLong = review.text.length > 130;
                            const displayText = isLong && !isExpanded
                                ? `${review.text.slice(0, 130)}...`
                                : review.text;

                            return (
                                <div
                                    key={review.id}
                                    className="w-full flex-shrink-0 px-2 sm:px-3"
                                    style={{ width: `${100 / visibleCards}%` }}
                                >
                                    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between h-full relative group">
                                        
                                        {/* Background Watermark Quote */}
                                        <div className="absolute top-4 right-4 pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity">
                                            <QuoteIcon className="w-9 h-9 text-purple-100" />
                                        </div>

                                        <div>
                                            {/* Card Top: Author Info & Google Brand */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center space-x-3">
                                                    {/* Avatar */}
                                                    {review.avatarUrl ? (
                                                        <img
                                                            src={review.avatarUrl}
                                                            alt={review.authorName}
                                                            className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100"
                                                        />
                                                    ) : (
                                                        <div
                                                            className={`w-12 h-12 rounded-full ${review.avatarBgColor || "bg-purple"} text-white font-bold text-lg flex items-center justify-center shadow-inner ring-2 ring-purple-100`}
                                                        >
                                                            {review.avatarInitial}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900 text-base sm:text-lg leading-snug">
                                                            {review.authorName}
                                                        </h3>
                                                        <div className="flex items-center gap-1.5 mt-0.5">
                                                            <span className="text-xs text-gray-500">
                                                                {review.relativeTime}
                                                            </span>
                                                            {review.isLocalGuide && (
                                                                <span className="text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded px-1.5 py-0.5">
                                                                    Local Guide
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Google G Badge */}
                                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 border border-gray-100 shadow-2xs">
                                                    <GoogleGIcon className="w-4 h-4" />
                                                </div>
                                            </div>

                                            {/* Star Rating */}
                                            <div className="flex items-center space-x-1 mb-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        filled={i < review.rating}
                                                        className="w-4 h-4"
                                                    />
                                                ))}
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-work-sans-slab">
                                                "{displayText}"
                                            </p>
                                        </div>

                                        {/* Read More / Show Less Toggle */}
                                        {isLong && (
                                            <div className="mt-4 pt-2 border-t border-gray-50">
                                                <button
                                                    onClick={() => toggleExpand(review.id)}
                                                    className="text-purple font-semibold text-xs sm:text-sm hover:underline focus:outline-none flex items-center gap-1 transition-colors"
                                                >
                                                    {isExpanded ? "Show Less" : "Read More"}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Left/Right Navigation Arrows */}
                <button
                    onClick={() => {
                        setIsPaused(true);
                        handlePrev();
                    }}
                    className="absolute top-1/2 -left-3 sm:-left-5 -translate-y-1/2 w-11 h-11 bg-white hover:bg-purple text-gray-800 hover:text-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 z-20 focus:outline-none hover:scale-110 active:scale-95"
                    aria-label="Previous testimonial"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={() => {
                        setIsPaused(true);
                        handleNext();
                    }}
                    className="absolute top-1/2 -right-3 sm:-right-5 -translate-y-1/2 w-11 h-11 bg-white hover:bg-purple text-gray-800 hover:text-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200 z-20 focus:outline-none hover:scale-110 active:scale-95"
                    aria-label="Next testimonial"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center justify-center space-x-2 mt-8">
                    {[...Array(totalPages)].map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setIsPaused(true);
                                setCurrentIndex(idx);
                            }}
                            className={`transition-all duration-300 focus:outline-none ${
                                currentIndex === idx
                                    ? "w-8 h-2.5 bg-purple rounded-full shadow-sm"
                                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 rounded-full"
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="mt-12 text-center">
                <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-purple text-white font-semibold py-3.5 px-8 rounded-full hover:bg-lavender hover:text-black transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                    <GoogleGIcon className="w-5 h-5 bg-white rounded-full p-0.5" />
                    <span>View All Reviews on Google</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection;
