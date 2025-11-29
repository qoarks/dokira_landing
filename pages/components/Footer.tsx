import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const SocialLink = ({ icon }: { icon: React.ReactNode }) => (
    <a href="#" className="w-10 h-10 border border-black/10 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all sharp">
        {icon}
    </a>
);

interface FooterLinkProps {
    children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children }) => (
    <li>
        <a href="#" className="text-gray-500 hover:text-accent-deepBlue transition-colors text-xs font-mono uppercase tracking-wide flex items-center gap-1 group">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity mr-1">/</span> {children}
        </a>
    </li>
);

const Footer: React.FC = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-white text-black pt-24 pb-12 border-t border-black">
            <div className="max-w-[1400px] mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">End of File</div>
                            <h3 className="text-6xl font-serif italic mb-8 text-dokira-black leading-tight">
                                {t('footer.ctaTitle')} <br />
                                <span className="text-accent-deepBlue">{t('footer.ctaHighlight')}</span>
                            </h3>
                        </div>
                        <div className="flex gap-4">
                            <button className="bg-black text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-accent-deepBlue transition-colors sharp shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                                {t('footer.ctaButton')}
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-l border-black/5 pl-8 md:pl-16">
                        <div>
                            <h4 className="font-serif italic text-lg mb-6">{t('footer.section1Title')}</h4>
                            <ul className="space-y-3">
                                <FooterLink>{t('footer.section1Link1')}</FooterLink>
                                <FooterLink>{t('footer.section1Link2')}</FooterLink>
                                <FooterLink>{t('footer.section1Link3')}</FooterLink>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif italic text-lg mb-6">{t('footer.section2Title')}</h4>
                            <ul className="space-y-3">
                                <FooterLink>{t('footer.section2Link1')}</FooterLink>
                                <FooterLink>{t('footer.section2Link2')}</FooterLink>
                                <FooterLink>{t('footer.section2Link3')}</FooterLink>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-serif italic text-lg mb-6">{t('footer.section3Title')}</h4>
                            <div className="flex gap-3">
                                <SocialLink icon={<Twitter size={16} />} />
                                <SocialLink icon={<Linkedin size={16} />} />
                                <SocialLink icon={<Github size={16} />} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        {/* Logo Icon small */}
                        <div className="w-6 h-6 bg-black text-white flex items-center justify-center font-serif text-sm sharp italic">D</div>
                        <span className="font-serif font-bold text-lg text-dokira-black tracking-tight">Dokira<span className="text-accent-deepBlue">.ai</span></span>
                    </div>
                    <div className="text-gray-400 text-[10px] font-mono uppercase tracking-widest">
                        {t('footer.copyright')}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;