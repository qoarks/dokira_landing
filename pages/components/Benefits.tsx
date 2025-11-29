import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const BenefitItem = ({ label, value, desc, hoverColor = "text-accent-deepBlue" }: { label: string, value: string, desc: string, hoverColor?: string }) => (
    <div className="border-t border-black py-8 group">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 md:mb-0">{label}</h3>
            <span className={`font-serif text-5xl md:text-6xl text-black group-hover:${hoverColor} transition-colors`}>{value}</span>
        </div>
        <p className="max-w-md ml-auto text-gray-600 font-light leading-relaxed" style={{
            textAlign: 'right',
        }}>
            {desc}
        </p>
    </div>
)

const Benefits: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-32 bg-canvas border-t border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">

                <div className="max-w-5xl mx-auto">
                    <BenefitItem
                        label={t('impact.impact3Label')}
                        value={t('impact.impact3Value')}
                        desc={t('impact.impact3Desc')}
                        hoverColor="text-accent-green"
                    />
                    <BenefitItem
                        label={t('impact.impact1Label')}
                        value={t('impact.impact1Value')}
                        desc={t('impact.impact1Desc')}
                        hoverColor="text-accent-orange"
                    />
                    <BenefitItem
                        label={t('impact.impact2Label')}
                        value={t('impact.impact2Value')}
                        desc={t('impact.impact2Desc')}
                    />
                    <BenefitItem
                        label={t('impact.impact4Label')}
                        value={t('impact.impact4Value')}
                        desc={t('impact.impact4Desc')}
                        hoverColor="text-accent-salmon"
                    />
                </div>

            </div>
        </section>
    );
};

export default Benefits;