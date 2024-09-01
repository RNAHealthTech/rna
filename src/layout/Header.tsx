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
      className={`block py-2 text-white hover:text-foreground text-lg font-semibold
                  underline underline-offset-8 decoration-2
                  ${isActive ? 'decoration-white' : 'decoration-white/50 hover:decoration-white'}
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
            className={`font-pt-serif-regular sticky top-0 left-0 right-0 z-[9999] transition-all duration-300 backdrop-blur-xl ${isSticky ? 'bg-transparent' : 'bg-transparent'}`}
        >
            <div className="container mx-auto px-4">
                <nav className="flex flex-wrap justify-between items-center">
                    <div className='flex flex-wrap justify-start'>
                        <Link to="/" className="flex items-center mt-4 mb-4">
                            <AnimatedLogo color={isScrolled ? '#000' : '#FFF'} />
                        </Link>

                        {/* desktop toggle */}
                        <button
                            className={`hidden md:flex md:items-center md:ml-28 md:relative md:z-100 ${isScrolled ? `text-[#000]` : 'text-[#FFF]'}`}
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
                    </div>
                    {/* mobile toggle */}
                    <button
                        className={`md:hidden fixed ${isScrolled ? 'text-black' : 'text-white'} top-4 right-4 z-20`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                             {isMenuOpen ? (
                                ''
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

                    {/* Mobile menu */}
                    {isMenuOpen && (
                        <div className="fixed inset-x-0 top-0 bg-purple z-10 flex flex-col w-full md:w-1/2 transition-none min-h-[90vh] lg:min-h-screen overflow-y-auto">
                            <div className="p-4 pt-16 flex flex-col flex-grow">
                                <button
                                    className="absolute top-4 right-4 text-white hover:text-foreground focus:outline-none"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <NavLink to="/" onClick={(e) => { e.preventDefault(); navigate('/'); setIsMenuOpen(false); }}>Home</NavLink>
                                <NavLink to="/projects" onClick={(e) => { e.preventDefault(); navigate('/projects'); setIsMenuOpen(false); }}>Our Work & Projects</NavLink>
                                <NavLink to="#" onClick={(e) => handleNavigation(e, 'services')}>Services</NavLink>
                                <NavLink to="#" onClick={(e) => handleNavigation(e, 'contact')}>Contact</NavLink>
                            </div>
                            <div className="p-4 flex flex-col items-center">
                                <Link to="#" onClick={(e) => handleNavigation(e, 'contact')} className="w-1/2 text-purple px-6 py-2 rounded-[40px] bg-white transition-colors text-lg font-semibold">
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    )}

                    <div className="hidden md:block">
                        <Link to='#' onClick={(e) => handleNavigation(e, 'contact')} className={`border-2 border-solid ${isScrolled ? 'text-white/80 border-white' : 'text-white border-white'} px-6 py-2 rounded-[40px] hover:bg-purple transition-colors text-lg font-semibold`}>
                            Get in Touch / Book Appointment
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
