import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { useAdmin } from '../contexts/AdminContext';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { incrementCount, isAdmin } = useAdmin();

    return (
        <>
            <header className="sticky top-0 z-40 bg-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo and Company Name */}
                        <Link
                            to="/"
                            className="flex items-center space-x-3"
                            onClick={() => !isAdmin && incrementCount()}
                        >
                            <span className="text-2xl font-bold text-primary">RNS Solutions</span>
                        </Link>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden text-primary hover:bg-gray-100 p-2 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMenuOpen ? (
                                <HiX className="h-6 w-6" />
                            ) : (
                                <HiMenu className="h-6 w-6" />
                            )}
                        </button>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:block">
                            <ul className="flex space-x-8">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/solutions">Solutions</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <div 
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Navigation Menu */}
            <nav 
                className={`fixed bottom-0 left-0 right-0 bg-white z-50 transform transition-transform duration-300 ease-out md:hidden rounded-t-3xl shadow-lg ${
                    isMenuOpen ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <div className="relative">
                    {/* Pull indicator */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-1.5 bg-gray-300 rounded-full" />
                    
                    {/* Navigation items */}
                    <ul className="px-4 py-6 space-y-2">
                        <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </MobileNavLink>
                        <MobileNavLink to="/solutions" onClick={() => setIsMenuOpen(false)}>
                            Solutions
                        </MobileNavLink>
                        <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                            About
                        </MobileNavLink>
                        <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </MobileNavLink>
                    </ul>
                </div>
            </nav>
        </>
    );
};

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
    <li>
        <Link
            to={to}
            className="text-gray-600 hover:text-primary font-medium transition-colors duration-200"
        >
            {children}
        </Link>
    </li>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => (
    <li>
        <Link
            to={to}
            className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-colors duration-200 rounded-xl"
            onClick={onClick}
        >
            {children}
        </Link>
    </li>
);

export default Header;