"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

export default function CGVPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.cgvPage.title}
          </h1>
          <p className="text-foreground-muted mb-12">{t.cgvPage.lastUpdateDate}</p>

          <div className="glass-card p-8 space-y-8">
            {/* Section 1 - Objet et champ d'application */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section1Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p dangerouslySetInnerHTML={{ __html: t.cgvPage.section1Content }} />
              </div>
            </section>

            {/* Section 2 - Acceptation des CGV */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section2Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cgvPage.section2Content}</p>
              </div>
            </section>

            {/* Section 3 - Description des services */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section3Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cgvPage.section3Content}</p>
              </div>
            </section>

            {/* Section 4 - Inscription et accès */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section4Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <h3 className="text-lg font-semibold">{t.cgvPage.section4SubA}</h3>
                <p>{t.cgvPage.section4ContentA}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section4SubB}</h3>
                <p>{t.cgvPage.section4ContentB}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section4SubC}</h3>
                <p>{t.cgvPage.section4ContentC}</p>
              </div>
            </section>

            {/* Section 5 - Offres et tarifs */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section5Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <h3 className="text-lg font-semibold">{t.cgvPage.section5SubA}</h3>
                <p dangerouslySetInnerHTML={{ __html: t.cgvPage.section5ContentA }} />

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section5SubB}</h3>
                <p>{t.cgvPage.section5ContentB}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section5SubC}</h3>
                <p>{t.cgvPage.section5ContentC}</p>
              </div>
            </section>

            {/* Section 6 - Commande et souscription */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section6Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cgvPage.section6Content}</p>
              </div>
            </section>

            {/* Section 7 - Paiement */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section7Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <h3 className="text-lg font-semibold">{t.cgvPage.section7SubA}</h3>
                <p>{t.cgvPage.section7ContentA}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section7SubB}</h3>
                <p>{t.cgvPage.section7ContentB}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section7SubC}</h3>
                <p>{t.cgvPage.section7ContentC}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section7SubD}</h3>
                <p>{t.cgvPage.section7ContentD}</p>
              </div>
            </section>

            {/* Section 8 - Droit de rétractation */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section8Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cgvPage.section8Content}</p>
              </div>
            </section>

            {/* Section 9 - Durée et résiliation */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section9Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <h3 className="text-lg font-semibold">{t.cgvPage.section9SubA}</h3>
                <p>{t.cgvPage.section9ContentA}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section9SubB}</h3>
                <p>{t.cgvPage.section9ContentB}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section9SubC}</h3>
                <p>{t.cgvPage.section9ContentC}</p>
              </div>
            </section>

            {/* Section 10 - Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section10Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cgvPage.section10Content}</p>
              </div>
            </section>

            {/* Section 11 - Données et confidentialité */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section11Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <h3 className="text-lg font-semibold">{t.cgvPage.section11SubA}</h3>
                <p>{t.cgvPage.section11ContentA}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section11SubB}</h3>
                <p>{t.cgvPage.section11ContentB}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section11SubC}</h3>
                <p>
                  {t.cgvPage.section11ContentC.split('Privacy Policy')[0]}{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    {t.privacyPage.title}
                  </a>.
                </p>
              </div>
            </section>

            {/* Section 12 - Garanties et responsabilité */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section12Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <h3 className="text-lg font-semibold">{t.cgvPage.section12SubA}</h3>
                <p>{t.cgvPage.section12ContentA}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section12SubB}</h3>
                <p>{t.cgvPage.section12ContentB}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cgvPage.section12SubC}</h3>
                <p>{t.cgvPage.section12ContentC}</p>
              </div>
            </section>

            {/* Section 13 - Force majeure */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section13Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>{t.cgvPage.section13Content}</p>
              </div>
            </section>

            {/* Section 14 - Droit applicable et litiges */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section14Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cgvPage.section14Content}</p>
              </div>
            </section>

            {/* Section 15 - Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cgvPage.section15Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>{t.cgvPage.section15Intro}</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    {t.cgvPage.section15Email}{' '}
                    <a href="mailto:direction@structura-talents.com" className="text-primary hover:underline">
                      direction@structura-talents.com
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-primary hover:underline">
                      {t.cgvPage.section15Form}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Date de dernière mise à jour */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-foreground-muted italic">
                {t.cgvPage.finalUpdate}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
