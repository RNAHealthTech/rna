import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AnimatedLogo from '../components/utility/AnimatedLogo';


interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to || (location.pathname === '/' && to.startsWith('/#'));

    return (
        <a
            href={to}
            className={`block py-2 hover:text-foreground text-lg font-semibold
            ${isActive ? 'underline underline-offset-8 decoration-2'
                    : 'hover:underline hover:underline-offset-8 hover:decoration-2'}
                  transition-all duration-300`}
            onClick={onClick}
        >
            {children}
        </a>
    );
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    console.log(isSticky)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMenuOpen]);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetSection: string) => {
        e.preventDefault();
        if (location.pathname === '/') {
            handleSmoothScroll(e, targetSection);
        } else {
            navigate(`/#${targetSection}`);
        }
        setIsMenuOpen(false);
    }

    return (
        <header
            className={`font-pt-serif-regular fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 w-full ${isScrolled ? 'bg-white' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 w-full">
                <nav className="flex justify-between items-center w-full">
                    <div className='flex items-center'>
                        <Link to="/" className="flex items-center mt-4 mb-4">
                            <AnimatedLogo color={isScrolled ? '#000' : '#FFF'} />
                        </Link>
                    </div>

                    {/* desktop menu button and appointment button */}
                    <div className="hidden md:flex items-center">
                        <button
                            className={`flex items-center mr-4 ${isScrolled ? 'text-black' : 'text-white'}`}
                            onClick={toggleMenu}
                            aria-label='menu'
                        >
                            <svg
                                className="w-12 h-12"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 40L40 8M8 8l32 32"
                                    />
                                ) : (
                                    <g>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 12h36"
                                            className="origin-center"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 24h28"
                                            className="origin-center"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 36h20"
                                            className="origin-center"
                                        />
                                    </g>
                                )}
                            </svg>
                        </button>
                        <Link
                            to='#'
                            onClick={(e) => handleNavigation(e, 'contact')}
                            className={`border-2 border-solid ${isScrolled
                                    ? 'text-black border-black hover:bg-black hover:text-white'
                                    : 'text-purple bg-white'
                                } px-6 py-2 rounded-[40px] transition-colors text-lg font-semibold`}
                        >
                            Book Appointment
                        </Link>
                    </div>

                    {/* mobile menu button */}
                    <button
                        className={`md:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 30L30 6M6 6l24 24"
                                />
                            ) : (
                                <g>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 9h28"
                                        className="origin-center"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 18h28"
                                        className="origin-center"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 27h28"
                                        className="origin-center"
                                    />
                                </g>
                            )}
                        </svg>
                    </button>
                </nav>
            </div>

            {/* Dropdown Menu */}
            {isMenuOpen && (
                <div className={`absolute top-full left-0 w-full shadow-lg ${isScrolled ? 'bg-white text-black' : 'bg-purple text-white'}`}>
                    <div className="container mx-auto px-4 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <NavLink
                                to="/"
                                onClick={(e) => { e.preventDefault(); navigate('/'); setIsMenuOpen(false); }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about-us"
                                onClick={(e) => { e.preventDefault(); navigate('/about-us'); setIsMenuOpen(false); }}
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                to="/projects"
                                onClick={(e) => { e.preventDefault(); navigate('/projects'); setIsMenuOpen(false); }}
                            >
                                Our Work & Projects
                            </NavLink>
                            <NavLink
                                to="/services"
                                onClick={() => { console.log('services'); setIsMenuOpen(false); }}
                            >
                                Digital Services
                            </NavLink>

                            <NavLink
                                to="/healthtech-services-best-healthtech-company-in-delhi-ncr"
                                onClick={() => { console.log('services'); setIsMenuOpen(false); }}
                            >
                              Health Tech Services
                            </NavLink>
                            <NavLink
                                to="/contact"
                                onClick={() => { console.log('contact'); setIsMenuOpen(false); }}
                            >
                                Contact
                            </NavLink>

                        </div>
                        <div className="mt-4 md:hidden">
                            <Link
                                to="#"
                                onClick={(e) => { handleNavigation(e, 'contact'); setIsMenuOpen(false); }}
                                className="block w-full text-purple px-6 py-2 rounded-[40px] bg-white text-center transition-colors text-lg font-semibold"
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;