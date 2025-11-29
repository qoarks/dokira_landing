import React from 'react';
import { Database, Search, ShieldCheck, Cpu, ScanLine, Globe, Layers } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const variantStyles = {
    default: {
        iconBg: "group-hover:bg-accent-deepBlue",
        title: "group-hover:text-accent-deepBlue"
    },
    orange: {
        iconBg: "group-hover:bg-accent-orange",
        title: "group-hover:text-accent-orange"
    },
    green: {
        iconBg: "group-hover:bg-accent-green",
        title: "group-hover:text-accent-green"
    },
    blue: {
        iconBg: "group-hover:bg-accent-blue",
        title: "group-hover:text-accent-blue"
    },
    white: {
        iconBg: "group-hover:bg-blue",
        title: "group-hover:text-white"

    }
};

const FeatureCard = ({
    title,
    number,
    children,
    icon: Icon,
    color = "bg-white",
    variant = "default"
}: {
    title: string,
    number: string,
    children?: React.ReactNode,
    icon?: any,
    color?: string,
    variant?: keyof typeof variantStyles
}) => {
    const styles = variantStyles[variant] || variantStyles.default;

    return (
        <div className={`relative p-8 border border-gray-200 sharp group transition-all duration-200 hover:shadow-xl hover:-translate-y-1 ${color} bg-noise`}>

            {/* Header */}
            <div className="flex justify-between items-start mb-6 border-b border-black/5 pb-4">
                <div className={`w-10 h-10 bg-black/5 flex items-center justify-center sharp text-black/60 ${styles.iconBg} group-hover:text-white transition-colors`}>
                    {Icon && <Icon size={18} className="group-hover:scale-90 transition-transform duration-300" />}
                </div>
                <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase user-select-none">File No.{number}</span>
            </div>

            {/* Content */}
            <h3 className={`font-serif text-3xl mb-4 text-black ${styles.title} transition-colors`}>{title}</h3>
            <div className="text-sm font-light text-gray-600 leading-relaxed font-sans">
                {children}
            </div>

            {/* Decorative Stamp */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="border-2 border-black px-2 py-1 -rotate-12 font-mono text-[10px] font-bold uppercase">
                    Approved
                </div>
            </div>
        </div>
    );
};

const Features: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="features" className="py-32 bg-white border-t border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">

                <div className="mb-20 text-center">
                    <h2 className="text-5xl md:text-6xl font-serif italic mb-4 text-black">{t('features.title')}</h2>
                    <p className="text-gray-600 font-mono text-sm">{t('features.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        number="01"
                        icon={Layers}
                        title={t('features.feature2')}
                        variant="orange"
                    >
                        <p className="text-sm text-gray-600 font-mono leading-relaxed">{t('features.feature2Desc')}</p>
                    </FeatureCard>
                    <FeatureCard
                        number="02"
                        icon={ShieldCheck}
                        title={t('features.feature1')}
                        variant="green"
                    >
                        <p className="text-sm text-gray-600 font-mono leading-relaxed">{t('features.feature1Desc')}</p>
                    </FeatureCard>
                    <FeatureCard
                        number="03"
                        icon={Database}
                        title={t('features.feature3')}
                        variant="blue"
                    >
                        <p className="text-sm text-gray-600 font-mono leading-relaxed">{t('features.feature3Desc')}</p>
                    </FeatureCard>
                    <FeatureCard
                        number="04"
                        icon={ScanLine}
                        title={t('features.feature4')}
                        variant="orange"
                    >
                        <p className="text-sm text-gray-600 font-mono leading-relaxed">{t('features.feature4Desc')}</p>
                    </FeatureCard>
                    <FeatureCard
                        number="05"
                        icon={Globe}
                        title={t('features.feature5')}
                        color="bg-accent-deepBlue"
                        variant="white"
                    >
                        <p className="text-sm text-gray-200/90 font-mono leading-relaxed">{t('features.feature5Desc')}</p>
                    </FeatureCard>
                    <FeatureCard
                        number="06"
                        icon={Cpu}
                        title={t('features.feature6')}
                    >
                        <p className="text-sm text-gray-600 font-mono leading-relaxed">{t('features.feature6Desc')}</p>
                    </FeatureCard>
                </div>

            </div>
        </section>
    );
};

export default Features;