import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, ArrowUp, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const FloatingDock: React.FC = () => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        setIsOpen(true);
    };

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (inputValue.trim().length > 0) {
            setIsSubmitted(true);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setIsSubmitted(false);
        setInputValue('');
    };

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    return (
        <div className="fixed bottom-8 inset-x-0 mx-auto z-50 w-full max-w-lg px-4 pointer-events-none">

            {/* Popup Dialog */}
            <div
                className={`absolute bottom-full left-4 right-4 mb-4 bg-white shadow-2xl sharp border border-black p-6 bg-noise transition-all duration-300 ease-out origin-bottom ${isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
                    }`}

                style={{
                    position: "absolute"
                }}
            >
                <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-serif italic text-lg sharp">
                            D
                        </div>
                        <div>
                            <h3 className="font-serif font-bold text-lg text-black italic">Dokira Assistant</h3>
                            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Awaiting Query...</p>
                        </div>
                    </div>
                    <button onClick={handleClose} className="text-gray-400 hover:text-black">
                        <X size={18} />
                    </button>
                </div>

                <div className="bg-canvas border border-black/10 p-4 min-h-[100px] flex flex-col justify-center sharp">
                    {!isSubmitted ? (
                        <div className="text-gray-400 text-xs text-center font-mono uppercase tracking-wider">
                    // Enter search parameters...
                        </div>
                    ) : (
                        <div className="animate-in fade-in duration-500">
                            <div className="text-sm text-black mb-4 font-mono">
                                {t('floatingDock.placeholder')}
                            </div>
                            <button className="w-full py-3 bg-accent-deepBlue text-white font-mono text-xs uppercase tracking-widest sharp hover:bg-blue-800 transition-colors">
                                Authenticate to View Results
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Input Bar */}
            <div
                className={`bg-white border border-black shadow-xl p-2 flex items-center gap-3 transition-all duration-300 sharp bg-noise pointer-events-auto ${isOpen ? 'translate-y-[-4px] shadow-2xl' : 'hover:-translate-y-1'}`}
            >

                <div className="w-10 h-10 bg-canvas border border-black/10 flex items-center justify-center text-gray-400 shrink-0 sharp">
                    {isSubmitted ? <Sparkles size={18} className="text-accent-deepBlue animate-pulse" /> : <Search size={18} />}
                </div>

                <form onSubmit={handleSubmit} className="flex-1 flex items-center h-10 m-0 p-0">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onFocus={handleFocus}
                        placeholder="Ask me anything..."
                        className="w-full bg-transparent border-none outline-none text-sm font-mono text-gray-800 placeholder-gray-400 h-full py-0 m-0 leading-normal"
                    />
                </form>

                {inputValue.length > 0 && !isSubmitted ? (
                    <button onClick={() => handleSubmit()} className="w-8 h-8 bg-black text-white sharp flex items-center justify-center hover:bg-accent-deepBlue transition-colors animate-in fade-in zoom-in">
                        <ArrowUp size={16} />
                    </button>
                ) : (
                    <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-canvas sharp border border-black/10 shrink-0 h-8">
                        <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1 font-mono">
                            CMD+K
                        </span>
                    </div>
                )}

            </div>

        </div>
    );
};

export default FloatingDock;