"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

export default function PrivacyPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.privacyPage.title}</h1>
          <p className="text-foreground-muted mb-12">{t.privacyPage.lastUpdateDate}</p>

          <div className="glass-card p-8 space-y-8">
            {/* Section 1 - Introduction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.privacyPage.section1Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p dangerouslySetInnerHTML={{ __html: t.privacyPage.section1Para1 }} />
                <p dangerouslySetInnerHTML={{ __html: t.privacyPage.section1Para2 }} />
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    {t.privacyPage.section1List1}{' '}
                    <a href="https://quaera.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      https://quaera.ai
                    </a>{' '}
                    ;
                  </li>
                  <li>
                    {t.privacyPage.section1List2}
                  </li>
                </ul>
                <p dangerouslySetInnerHTML={{ __html: t.privacyPage.section1Para3 }} />
              </div>
            </section>

            {/* Section 2 - Responsable du traitement */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.privacyPage.section2Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <div className="space-y-1">
                  <p><strong>{t.legalNoticePage.companyName}</strong></p>
                  <p>{t.legalNoticePage.companyType}</p>
                  <p>{t.legalNoticePage.companyRCS} <strong>982488199</strong></p>
                  <p>{t.legalNoticePage.companyAddress} <strong>79 rue des frères Lumières, 93330 Neuilly-sur-Marne</strong></p>
                  <p>
                    {t.legalNoticePage.companyEmail}{' '}
                    <a href="mailto:direction@structura-talents.com" className="text-primary hover:underline">
                      direction@structura-talents.com
                    </a>
                  </p>
                </div>
                <p className="mt-4" dangerouslySetInnerHTML={{ __html: t.privacyPage.section2Para }} />
              </div>
            </section>

            {/* Section 3 - Données collectées */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.privacyPage.section3Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  {t.privacyPage.section3Intro}
                </p>

                <div>
                  <h3 className="text-lg font-semibold mb-3">{t.privacyPage.section3SubA}</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t.privacyPage.section3List1a}</li>
                    <li>{t.privacyPage.section3List2a}</li>
                    <li>{t.privacyPage.section3List3a}</li>
                    <li>{t.privacyPage.section3List4a}</li>
                    <li>{t.privacyPage.section3List5a}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">{t.privacyPage.section3SubB}</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t.privacyPage.section3List1b}</li>
                    <li>{t.privacyPage.section3List2b}</li>
                    <li>{t.privacyPage.section3List3b}</li>
                    <li>{t.privacyPage.section3List4b}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">{t.privacyPage.section3SubC}</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t.privacyPage.section3List1c}</li>
                    <li>{t.privacyPage.section3List2c}</li>
                    <li>{t.privacyPage.section3List3c}</li>
                    <li>{t.privacyPage.section3List4c}</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 - Finalités du traitement */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.privacyPage.section4Title}</h2>
              <div className="space-y-3 text-foreground-muted">
                <p>{t.privacyPage.section4Intro}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>{t.privacyPage.section4List1}</strong></li>
                  <li><strong>{t.privacyPage.section4List2}</strong></li>
                  <li><strong>{t.privacyPage.section4List3}</strong></li>
                  <li><strong>{t.privacyPage.section4List4}</strong></li>
                  <li><strong>{t.privacyPage.section4List5}</strong></li>
                  <li><strong>{t.privacyPage.section4List6}</strong></li>
                  <li><strong>{t.privacyPage.section4List7}</strong></li>
                </ul>
              </div>
            </section>

            {/* Section 5 - Base légale */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.privacyPage.section5Title}</h2>
              <div className="space-y-3 text-foreground-muted">
                <p>{t.privacyPage.section5Intro}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>{t.privacyPage.section5List1}</strong></li>
                  <li><strong>{t.privacyPage.section5List2}</strong></li>
                  <li><strong>{t.privacyPage.section5List3}</strong></li>
                  <li><strong>{t.privacyPage.section5List4}</strong></li>
                </ul>
              </div>
            </section>

            {/* Section 6 - Durée de conservation */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.privacyPage.section6Title}</h2>
              <div className="space-y-3 text-foreground-muted">
                <p>{t.privacyPage.section6Intro}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>{t.privacyPage.section6List1}</strong></li>
                  <li><strong>{t.privacyPage.section6List2}</strong></li>
                  <li><strong>{t.privacyPage.section6List3}</strong></li>
                  <li><strong>{t.privacyPage.section6List4}</strong></li>
                  <li><strong>{t.privacyPage.section6List5}</strong></li>
                </ul>
              </div>
            </section>

            {/* Section 7 - Vos droits */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.privacyPage.section7Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.privacyPage.section7Para1}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>{t.privacyPage.section7List1}</strong></li>
                  <li><strong>{t.privacyPage.section7List2}</strong></li>
                  <li><strong>{t.privacyPage.section7List3}</strong></li>
                  <li><strong>{t.privacyPage.section7List4}</strong></li>
                  <li><strong>{t.privacyPage.section7List5}</strong></li>
                  <li><strong>{t.privacyPage.section7List6}</strong></li>
                  <li><strong>{t.privacyPage.section7List7}</strong></li>
                </ul>
                <p className="mt-4">
                  {t.privacyPage.section7Para2}{' '}
                  <a href="mailto:direction@structura-talents.com" className="text-primary hover:underline">
                    direction@structura-talents.com
                  </a>
                </p>
                <p>
                  {t.privacyPage.section7Para3}{' '}
                  <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    CNIL
                  </a>.
                </p>
              </div>
            </section>

            {/* Section 8 - Sécurité */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.privacyPage.section8Title}</h2>
              <div className="space-y-3 text-foreground-muted">
                <p>
                  {t.privacyPage.section8Intro}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t.privacyPage.section8List1}</li>
                  <li>{t.privacyPage.section8List2}</li>
                  <li>{t.privacyPage.section8List3}</li>
                  <li>{t.privacyPage.section8List4}</li>
                  <li>{t.privacyPage.section8List5}</li>
                </ul>
              </div>
            </section>

            {/* Section 9 - Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.privacyPage.section9Title}</h2>
              <div className="space-y-3 text-foreground-muted">
                <p>
                  {t.privacyPage.section9Para1}
                </p>
                <p>
                  {t.privacyPage.section9Para2}
                </p>
              </div>
            </section>

            {/* Section 10 - Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.privacyPage.section10Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>{t.privacyPage.section10Intro}</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    {t.privacyPage.section10Email}{' '}
                    <a href="mailto:direction@structura-talents.com" className="text-primary hover:underline">
                      direction@structura-talents.com
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-primary hover:underline">
                      {t.privacyPage.section10Form}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Date de dernière mise à jour */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-foreground-muted italic">
                {t.privacyPage.finalUpdate}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
