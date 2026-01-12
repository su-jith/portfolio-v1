import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // 1. Get the current theme and the toggle function from your hook
    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-main-bg/80 text-main-text border-1 border-slate-200 dark:border-slate-800 backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-blue-800 dark:text-blue-700">
                            Sujith S
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-main-text hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200">
                                {link.name}
                            </a>
                        ))}

                        {/* 3. The Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-500 transition-all "
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button onClick={toggleTheme} className="p-2">
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X size={28}
                            /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Links */}
            {/* Mobile Links */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-main-bg border-t border-slate-200 dark:border-slate-800 transition-colors duration-300`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-2 text-main-text hover:bg-slate-200 dark:hover:bg-slate-400 rounded-md transition-colors"
                            onClick={() => setIsOpen(false)} // Closes menu when a link is clicked
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;