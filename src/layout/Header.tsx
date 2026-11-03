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
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
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
            className={`font-pt-serif-regular fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 w-full ${
                isMenuOpen
                    ? (isScrolled ? 'bg-white text-black shadow-md' : 'bg-purple text-white shadow-md')
                    : (isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white')
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <nav className="flex justify-between items-center w-full">
                    <div className='flex items-center shrink-0'>
                        <Link to="/" className="flex items-center mt-3 mb-3">
                            <AnimatedLogo color={isScrolled ? '#000' : '#FFF'} />
                        </Link>
                    </div>

                    {/* desktop menu button and appointment button */}
                    <div className="hidden md:flex items-center space-x-4 shrink-0">
                        <Link
                            to='#'
                            onClick={(e) => handleNavigation(e, 'contact')}
                            className={`border-2 border-solid ${
                                isScrolled
                                    ? 'text-black border-black hover:bg-black hover:text-white'
                                    : 'text-purple bg-white border-white hover:bg-gray-100'
                            } px-5 py-2 rounded-[40px] transition-all text-sm lg:text-base font-semibold whitespace-nowrap shrink-0 shadow-sm`}
                        >
                            Book Appointment
                        </Link>
                        <button
                            className={`flex items-center justify-center p-2 rounded-lg transition-colors ${
                                isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
                            }`}
                            onClick={toggleMenu}
                            aria-label='Toggle menu'
                        >
                            <svg
                                className="w-9 h-9"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2.5}
                                        d="M10 38L38 10M10 10l28 28"
                                    />
                                ) : (
                                    <g>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2.5}
                                            d="M6 12h36"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2.5}
                                            d="M10 24h28"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2.5}
                                            d="M14 36h20"
                                        />
                                    </g>
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* mobile menu button */}
                    <button
                        className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-black' : 'text-white'}`}
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
                <div className={`absolute top-full left-0 w-full shadow-xl border-t border-white/10 ${isScrolled ? 'bg-white text-black border-gray-200' : 'bg-purple text-white'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 items-center">
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
                                onClick={(e) => { e.preventDefault(); navigate('/services'); setIsMenuOpen(false); }}
                            >
                                Digital AI
                            </NavLink>
                            <NavLink
                                to="/healthtech-services-best-healthtech-company-in-delhi-ncr"
                                onClick={(e) => { e.preventDefault(); navigate('/healthtech-services-best-healthtech-company-in-delhi-ncr'); setIsMenuOpen(false); }}
                            >
                                Health Tech Services
                            </NavLink>
                            <NavLink
                                to="/contact"
                                onClick={(e) => { e.preventDefault(); navigate('/contact'); setIsMenuOpen(false); }}
                            >
                                Contact
                            </NavLink>
                        </div>
                        <div className="mt-4 md:hidden">
                            <Link
                                to="#"
                                onClick={(e) => { handleNavigation(e, 'contact'); setIsMenuOpen(false); }}
                                className="block w-full text-purple px-6 py-2.5 rounded-[40px] bg-white text-center font-semibold shadow-md"
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