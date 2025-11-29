import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Collaboration: React.FC = () => {
    const { t } = useLanguage();
    return (
        <section id="collaboration" className="relative bg-[#111] text-white overflow-hidden py-32 border-y border-black">

            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10 items-center">

                {/* Left: Text Content */}
                <div className="flex flex-col justify-center">
                    <div className="pl-6 mb-8 border-l border-white/20">
                        <div className="font-mono text-xs text-accent-orange mb-2 uppercase tracking-widest">{t('collaboration.title')}</div>
                        <h2 className="text-6xl md:text-7xl font-serif italic text-white mb-6">
                            {t('collaboration.heading')}<br />{t('collaboration.headingLine2')}
                        </h2>
                        <p className="text-white/60 text-lg font-light leading-relaxed max-w-md font-sans">
                            {t('collaboration.description')}
                        </p>
                    </div>

                    <div className="flex items-center gap-6 mt-8">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 bg-accent-blue border border-black flex items-center justify-center font-mono text-xs text-white">JD</div>
                            <div className="w-10 h-10 bg-accent-orange border border-black flex items-center justify-center font-mono text-xs text-black">AS</div>
                            <div className="w-10 h-10 bg-white border border-black flex items-center justify-center font-mono text-xs text-black">ME</div>
                        </div>
                        <div className="h-px w-12 bg-white/20"></div>
                        <div className="font-mono text-xs uppercase tracking-widest text-white/50 user-select-none">{t('collaboration.sessionActive')}</div>
                    </div>
                </div>

                {/* Right: The Digital Desk UI */}
                <div className="relative h-[500px] w-full perspective-1000">

                    {/* Folder Tab Label */}
                    <div className="absolute -top-10 right-0 bg-white text-black font-mono text-[10px] px-3 py-1 sharp uppercase tracking-widest transform rotate-0 z-0">
                        {t('collaboration.projectLabel')}
                    </div>

                    {/* Document 1: Legal Brief (Base) */}
                    <div className="absolute top-0 right-[5%] w-[85%] h-full bg-[#f0f0f0] text-black p-8 shadow-2xl sharp rotate-2 origin-bottom-right transition-transform hover:rotate-1 border border-white/10">
                        <div className="flex justify-between items-start border-b border-black/10 pb-4 mb-6">
                            <h3 className="font-serif text-3xl">{t('collaboration.mergerAgreement')}</h3>
                            <div className="border border-black px-2 py-0.5 font-mono text-[10px]">{t('collaboration.draftLabel')}</div>
                        </div>

                        <div className="space-y-4 font-serif text-lg leading-relaxed text-gray-800 opacity-80">
                            <p>
                                <strong>{t('collaboration.clause')}</strong> {t('collaboration.clauseText')} <em>{t('collaboration.addendum')}</em>.
                            </p>
                            <p className="pl-4 border-l-2 border-accent-blue text-accent-blue italic text-base">
                                "{t('collaboration.comment')}"
                            </p>
                        </div>
                    </div>

                    {/* Document 2: Financial Audit (Overlay) */}
                    <div className="absolute top-[15%] -left-[2%] w-[60%] bg-white p-6 shadow-xl sharp -rotate-2 hover:rotate-0 transition-transform duration-200 border border-gray-300">
                        <h4 className="font-serif italic text-2xl mb-4 text-black">{t('collaboration.financialAudit')}</h4>

                        {/* Fake Table */}
                        <div className="w-full border border-black/10 mb-4">
                            <div className="flex border-b border-black/10 bg-gray-50 p-2 font-mono text-[8px] uppercase text-gray-500">
                                <span className="w-1/2">{t('collaboration.metricLabel')}</span>
                                <span className="w-1/2 text-right">{t('collaboration.valueLabel')}</span>
                            </div>
                            <div className="p-2 font-mono text-[9px] flex justify-between border-b border-black/5">
                                <span className="user-select-none text-black">{t('collaboration.ebitda')}</span>
                                <span className="font-bold user-select-none text-black">2.4M</span>
                            </div>
                            <div className="p-2 font-mono text-[9px] flex justify-between">
                                <span className="user-select-none text-black">{t('collaboration.liabilities')}</span>
                                <span className="user-select-none text-black">0.8M</span>
                            </div>
                        </div>

                        <div className="flex justify-between font-mono text-[9px] uppercase tracking-widest opacity-60 mt-4">
                            <span className="user-select-none text-black">{t('collaboration.approved')}</span>
                            <span className="user-select-none text-black">{t('collaboration.approvedBy')}</span>
                        </div>

                        {/* Sticker */}
                        <div className="absolute -top-3 -right-3 w-12 h-12 bg-accent-green rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                            <span className="font-mono text-[8px] font-bold text-white">{t('collaboration.okSticker')}</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Collaboration;