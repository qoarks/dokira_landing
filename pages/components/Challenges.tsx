import React from 'react';
import { Clock, ShieldAlert, FileQuestion, Shuffle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ChallengeItem = ({ icon: Icon, title, description, index }: { icon: any, title: string, description: string, index: number }) => (
    <div className="group p-8 border border-black/10 bg-white hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 sharp relative overflow-hidden">

        <div className="flex items-start justify-between mb-6">
            <div className={`w-12 h-12 bg-canvas border border-black/10 flex items-center justify-center sharp text-black group-hover:bg-black group-hover:text-white transition-colors`}>
                <Icon size={24} className="group-hover:scale-90 transition-transform duration-300" />
            </div>
            <div className="font-mono text-[10px] uppercase text-gray-400 group-hover:text-black user-select-none">{`Ref_${index + 1}`}</div>
        </div>

        <h3 className="text-xl font-serif italic font-bold mb-3 text-dokira-black group-hover:text-accent-deepBlue transition-colors">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed font-light font-mono">{description}</p>
    </div>
);

const Challenges: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-canvas border-t border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">

                <div className="mb-16 max-w-3xl border-l-2 border-black pl-8">
                    <h2 className="text-4xl md:text-5xl font-serif italic mb-6 text-dokira-black">{t('problem.title')}</h2>
                    <p className="text-gray-600 font-mono text-sm">{t('problem.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ChallengeItem
                        index={0}
                        icon={Clock}
                        title={t('problem.problem3')}
                        description={t('problem.problem3Desc')}
                    />
                    <ChallengeItem
                        index={1}
                        icon={ShieldAlert}
                        title={t('problem.problem2')}
                        description={t('problem.problem2Desc')}
                    />
                    <ChallengeItem
                        index={2}
                        icon={Shuffle}
                        title={t('problem.problem1')}
                        description={t('problem.problem1Desc')}
                    />
                    <ChallengeItem
                        index={3}
                        icon={FileQuestion}
                        title={t('problem.problem4')}
                        description={t('problem.problem4Desc')}
                    />
                </div>

            </div>
        </section>
    );
};

export default Challenges;