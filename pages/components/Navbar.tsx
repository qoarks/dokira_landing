import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t } = useLanguage();

    const navItems = [
        { label: t('navbar.solution'), href: '#collaboration' },
        { label: t('navbar.features'), href: '#features' },
        { label: t('navbar.pricing'), href: '#pricing' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
                ? 'bg-canvas/50 backdrop-blur-md py-3 border-black/5'
                : 'bg-transparent py-6 border-transparent'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer select-none group">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-serif font-italic text-xl sharp">
                        D
                    </div>
                    <span className="text-xl font-serif font-medium tracking-tight text-black group-hover:text-accent-deepBlue transition-colors">
                        Dokira<span className="text-accent">.ai</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-xs font-mono font-medium text-black/60 hover:text-black transition-colors uppercase tracking-widest relative group"
                        >
                            <span className="relative z-10">{item.label}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-deepBlue group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <LanguageSwitcher />
                    <button className="px-6 py-2.5 font-mono text-xs border border-black/10 hover:border-black transition-all hover:bg-black hover:text-white sharp uppercase tracking-widest">
                        Log-In
                    </button>
                    <button className="bg-black text-white px-6 py-2.5 font-mono text-xs border border-black hover:bg-accent-deepBlue hover:border-accent-deepBlue transition-all sharp uppercase tracking-widest shadow-lg">
                        Sign-Up
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-black p-2"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-canvas border-b border-black/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5 shadow-xl">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-lg font-serif italic text-black/80"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div className="h-px bg-black/10 my-2"></div>
                    <button className="w-full bg-black text-white py-4 font-bold font-mono sharp">
                        GET STARTED
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;