import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <div className="relative flex items-center gap-2 group">
            {/* Globe Icon */}
            <Globe size={14} className="text-gray-500 group-hover:text-black transition-colors" />

            {/* Language Toggle */}
            <div className="relative flex items-center bg-canvas border border-black/10 sharp overflow-hidden">
                {/* Sliding Background Indicator */}
                <div
                    className={`absolute top-0 bottom-0 w-1/2 bg-black transition-transform duration-300 ease-out sharp ${language === 'en' ? 'translate-x-0' : 'translate-x-full'
                        }`}
                />

                {/* Buttons */}
                <button
                    onClick={() => changeLanguage('en')}
                    className={`relative z-10 px-3 py-1 text-[10px] font-mono uppercase tracking-widest transition-colors duration-300 ${language === 'en'
                        ? 'text-white'
                        : 'text-gray-500 hover:text-black'
                        }`}
                >
                    EN
                </button>
                <button
                    onClick={() => changeLanguage('fr')}
                    className={`relative z-10 px-3 py-1 text-[10px] font-mono uppercase tracking-widest transition-colors duration-300 ${language === 'fr'
                        ? 'text-white'
                        : 'text-gray-500 hover:text-black'
                        }`}
                >
                    FR
                </button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
