import React from 'react';
import { ArrowDown, FileBarChart, Receipt, FileText } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section className="relative min-h-screen pt-30 pb-20 flex flex-col items-center justify-start overflow-hidden bg-noise">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid pointer-events-none"></div>

            <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 content-z">

                {/* Document Metadata Header */}
                <div className="flex justify-between items-start border-t-2 border-black pt-4 mb-20">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-gray-500 user-select-none">
                        Workspace / Project_Alpha / <span className="text-black">Financials_Q3</span>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-right hidden sm:block user-select-none">
                        <div>Security: <span className="text-green-600">Enforced</span></div>
                        <div>Last Sync: <span className="text-black">Just Now</span></div>
                    </div>
                </div>

                {/* Main Title Layout */}
                <div className="max-w-5xl">
                    <h1 className="text-8xl md:text-[10rem] font-serif italic font-normal text-dokira-ink tracking-tight mb-12">
                        {t('hero.title1').split(' ')[0]}<br />
                        <span className="not-italic">{t('hero.title1').split(' ')[1]}</span><br />
                        <span className="text-accent-deepBlue italic">{t('hero.title2')}</span>
                    </h1>
                </div>

                <div className="grid md:grid-cols-12 gap-12 items-start mt-12 border-black/10 pb-20">
                    <div className="md:col-span-4">
                        <p className="font-mono text-xs leading-relaxed text-gray-600 uppercase tracking-wide">
                            {t('hero.subtitle')}
                        </p>
                        <div className="mt-8 flex gap-4">
                            <button className="bg-black text-white px-8 py-3 font-mono text-xs hover:bg-accent-deepBlue transition-colors sharp flex items-center gap-2 uppercase tracking-widest shadow-lg">
                                {t('hero.cta1')} <ArrowDown size={14} />
                            </button>
                        </div>
                    </div>
                    <div className="md:col-span-8 relative h-[300px] hidden md:block">
                        {/* Decorative elements representing "Business Data" being organized */}

                        {/* Card 1: The Invoice */}
                        <div className="absolute top-0 right-[20%] w-48 bg-white p-4 shadow-lg transform rotate-3 sharp border border-black transition-transform hover:rotate-0 hover:scale-105 duration-200">
                            <div className="border-b border-black/10 pb-2 mb-2 flex justify-between items-center">
                                <span className="font-mono text-[9px] font-bold uppercase text-accent-orange">Invoice</span>
                                <Receipt size={12} className="text-gray-400" />
                            </div>
                            <div className="space-y-1 font-mono text-[9px] text-gray-600">
                                <div className="flex justify-between"><span>Vendor:</span><span className="text-accent-deepBlue">AWS_EMEA</span></div>
                                <div className="flex justify-between"><span>Date:</span><span>Oct 12</span></div>
                                <div className="flex justify-between font-bold mt-2 pt-2 border-t border-black/10 text-black"><span>Total:</span><span>€4,200.00</span></div>
                            </div>
                        </div>

                        {/* Card 2: The Chart/Report */}
                        <div className="absolute top-[30%] right-[40%] w-56 bg-accent-paper p-4 shadow-xl transform -rotate-2 sharp border border-black transition-transform hover:rotate-0 hover:scale-105 duration-200 hover:z-20">
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-mono text-[8px] tracking-widest uppercase text-accent-deepBlue">Q3 Performance</span>
                                <FileBarChart size={12} className="text-accent-deepBlue" />
                            </div>
                            {/* Fake Chart */}
                            <div className="flex items-end gap-1 h-16 mb-2 border-b border-black/10 pb-1">
                                <div className="w-1/5 h-[40%] bg-accent-manila"></div>
                                <div className="w-1/5 h-[60%] bg-accent-salmon"></div>
                                <div className="w-1/5 h-[30%] bg-accent-orange"></div>
                                <div className="w-1/5 h-[80%] bg-accent-green"></div>
                                <div className="w-1/5 h-[50%] bg-accent-deepBlue"></div>
                            </div>
                            <div className="flex justify-between items-center px-1">
                                <span className="font-serif italic text-xs">Growth detected</span>
                                <span className="font-mono text-[8px]">+12.4%</span>
                            </div>
                        </div>

                        {/* Card 3: The Contract */}
                        <div className="absolute bottom-0 right-[10%] w-64 bg-white p-6 shadow-md transform rotate-6 sharp border border-black transition-transform hover:rotate-0 hover:scale-105 duration-200 hover:z-20">
                            <div className="flex items-center gap-2 mb-3 border-b border-black/10 pb-2">
                                <FileText size={14} />
                                <span className="font-serif italic text-lg text-black">NDA_Mutual.pdf</span>
                            </div>
                            <div className="space-y-1.5 opacity-50">
                                <div className="w-full h-1 bg-black"></div>
                                <div className="w-3/4 h-1 bg-black"></div>
                                <div className="w-5/6 h-1 bg-black"></div>
                                <div className="w-full h-1 bg-black"></div>
                            </div>
                            <div className="mt-4 pt-2 border-t border-black/10 flex justify-between items-center">
                                <span className="font-mono text-[8px] text-red-600 bg-red-50 px-1">CONFIDENTIAL</span>
                                <span className="font-mono text-[8px]">Signatories: 2/2</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;