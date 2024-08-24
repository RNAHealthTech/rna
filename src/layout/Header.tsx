import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleServicesClick = (e: React.MouseEvent) => {
        if (window.innerWidth < 768) {
            e.preventDefault();
            setIsServicesOpen(!isServicesOpen);
        } else {
            navigate('/services');
        }
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
    };

    return (
        <header
            className={`font-pt-serif-regular sticky top-0 left-0 right-0 z-[9999] transition-all duration-300 backdrop-blur-xl ${isSticky ? 'bg-transparent' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <nav className="flex flex-wrap justify-between items-center">
                    <div className='flex flex-wrap justify-start'>
                        <Link to="/" className="flex items-center mt-4 mb-4">
                            <img src="/logo.png" alt="RNA Health Tech"
                                className={`transition-all duration-300 ${isScrolled
                                    ? 'h-12 w-18 md:h-12 md:w-28 lg:h-18 lg:w-72'
                                    : 'h-14 w-30 md:h-16 md:w-32 lg:h-18 lg:w-80'
                                    }`} />
                        </Link>


                        <button
                            className="hidden sm:hidden md:flex md:items-center md:ml-28 md:relative md:z-100"
                            onClick={toggleMenu}
                            aria-label='menu'

                        >
                            <svg
                                className="w-12 h-12"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 40 40"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 36L36 12M12 12l24 24"
                                    />
                                ) : (
                                    <g>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 8h28"
                                            className="origin-center"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18h20"
                                            className="origin-center"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 28h12"
                                            className="origin-center"
                                        />
                                    </g>
                                )}
                            </svg>
                        </button>
                    </div>

                    <button
                        className="fixed md:hidden relative z-20"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /> */}
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 36L36 12M12 12l24 24"
                                />
                            ) : (
                                <g>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 8h28"
                                        className="origin-center"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18h20"
                                        className="origin-center"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 28h12"
                                        className="origin-center"
                                    />
                                </g>
                            )}

                        </svg>
                    </button>


                    {/* Mobile menu */}

                    {isMenuOpen && (<div className="fixed inset-x-0 top-0 bg-gray-100 z-10 flex flex-col w-full md:w-1/2 transition-none min-h-screen overflow-y-auto">
                        <div className="p-4 pt-16 flex flex-col flex-grow">
                            <button
                                className="absolute top-4 right-4 text-gray-800 hover:text-foreground focus:outline-none"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <Link to="/" className="block py-2 text-gray-800 hover:text-foreground text-lg font-semibold" onClick={handleLinkClick}>Home</Link>
                            <Link to="/about" className="block py-2 text-gray-800 hover:text-foreground text-lg font-semibold" onClick={handleLinkClick}>Portfolio</Link>
                            <button
                                className="w-full text-left py-2 text-gray-800 hover:text-foreground text-lg font-semibold flex justify-between items-center"
                                onClick={handleServicesClick}
                            >
                                What We Do?
                            </button>
                        </div>
                        <div className="mt-12 p-4 lg:hidden">
                            <button onClick={handleLinkClick} className="w-full border-2 border-solid border-purple text-purple px-6 py-2 rounded-[40px] hover:bg-purple transition-colors text-lg font-semibold">
                                <Link to='/contact'>Get In Touch</Link>
                            </button>
                        </div>
                    </div>)}



                    <div className="hidden md:block">
                        <button className="border-2 border-solid border-black/80 text-black/80 px-6 py-2 rounded-[40px] hover:bg-gray-100 transition-colors text-lg font-semibold">
                            <Link to='/contact'>Get in Touch</Link>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
