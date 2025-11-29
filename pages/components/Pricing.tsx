import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const PricingCard = ({
    title,
    price,
    features,
    isEnterprise = false
}: {
    title: string,
    price: string,
    features: string[],
    isEnterprise?: boolean
}) => (
    <div className={`p-8 border sharp flex flex-col h-full bg-noise ${isEnterprise ? 'bg-accent-deepBlue text-white border-accent-deepBlue' : 'bg-white border-black hover:border-black'} hover:-translate-y-1 transition-all duration-200`}>

        <div className="mb-8 border-b border-current pb-4 flex justify-between items-start">
            <div>
                <h3 className="font-serif text-3xl italic mb-1">{title}</h3>
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-60">Contract Type A</div>
            </div>
            <div className="font-display font-bold text-2xl">{price}</div>
        </div>

        <ul className="space-y-4 mb-12 flex-1">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-light">
                    <span className="mt-1 opacity-50">•</span>
                    <span className="opacity-90">{feature}</span>
                </li>
            ))}
        </ul>

        <button className={`w-full py-4 font-mono text-xs uppercase tracking-widest sharp transition-colors border ${isEnterprise
            ? 'bg-white text-black hover:bg-gray-200 border-white'
            : 'bg-black text-white hover:bg-accent-deepBlue border-black'
            }`}>
            {isEnterprise ? 'Contact Sales' : 'Begin Contract'}
        </button>
    </div>
);

const Pricing: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="pricing" className="py-32 bg-white border-t border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">

                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-serif italic mb-4 text-black">{t('pricing.title')}</h2>
                    <p className="text-gray-600 font-mono text-sm">{t('pricing.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    <PricingCard
                        title={t('pricing.offerPro')}
                        price={t('pricing.proPrice')}
                        features={[
                            t('pricing.proFeature1'),
                            t('pricing.proFeature2'),
                            t('pricing.proFeature3'),
                            t('pricing.proFeature4'),
                            t('pricing.proFeature5'),
                            t('pricing.proFeature6'),
                        ]}
                    />
                    <PricingCard
                        title={t('pricing.offerEnterprise')}
                        price={t('pricing.customPrice')}
                        isEnterprise={true}
                        features={[
                            t('pricing.enterpriseFeature1'),
                            t('pricing.enterpriseFeature2'),
                            t('pricing.enterpriseFeature3'),
                            t('pricing.enterpriseFeature4'),
                            t('pricing.enterpriseFeature5'),
                            t('pricing.enterpriseFeature6'),
                            t('pricing.enterpriseFeature7'),
                            t('pricing.enterpriseFeature8'),
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;