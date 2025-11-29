"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

export default function CGUPage() {
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
            {t.cguPage.title}
          </h1>
          <p className="text-foreground-muted mb-12">{t.cguPage.lastUpdateDate}</p>

          <div className="glass-card p-8 space-y-8">
            {/* Section 1 - Objet */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section1Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p dangerouslySetInnerHTML={{ __html: t.cguPage.section1Content }} />
              </div>
            </section>

            {/* Section 2 - Présentation du service */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section2Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p dangerouslySetInnerHTML={{ __html: t.cguPage.section2Content }} />
              </div>
            </section>

            {/* Section 3 - Accès au service */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section3Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section3SubA}</h3>
                <p>{t.cguPage.section3ContentA}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section3SubB}</h3>
                <p>{t.cguPage.section3ContentB}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section3SubC}</h3>
                <p>{t.cguPage.section3ContentC}</p>
              </div>
            </section>

            {/* Section 4 - Description des fonctionnalités */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section4Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cguPage.section4Intro}</p>
                <ul className="list-disc list-inside space-y-2 ml-4" dangerouslySetInnerHTML={{ __html: t.cguPage.section4List }} />
              </div>
            </section>

            {/* Section 5 - Obligations de l'Utilisateur */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section5Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cguPage.section5Intro}</p>
                <ul className="list-disc list-inside space-y-2 ml-4" dangerouslySetInnerHTML={{ __html: t.cguPage.section5List }} />
              </div>
            </section>

            {/* Section 6 - Données et contenu */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section6Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <h3 className="text-lg font-semibold">{t.cguPage.section6SubA}</h3>
                <p>{t.cguPage.section6ContentA}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section6SubB}</h3>
                <p>{t.cguPage.section6ContentB}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section6SubC}</h3>
                <p>{t.cguPage.section6ContentC}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section6SubD}</h3>
                <p>
                  {t.cguPage.section6ContentD.split('Politique de confidentialité')[0]}
                  <a href="/privacy" className="text-primary hover:underline">
                    {t.privacyPage.title}
                  </a>.
                </p>
              </div>
            </section>

            {/* Section 7 - Tarifs et paiement */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section7Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <h3 className="text-lg font-semibold">{t.cguPage.section7SubA}</h3>
                <p>{t.cguPage.section7ContentA}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section7SubB}</h3>
                <p>{t.cguPage.section7ContentB}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section7SubC}</h3>
                <p>{t.cguPage.section7ContentC}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section7SubD}</h3>
                <p>{t.cguPage.section7ContentD}</p>
              </div>
            </section>

            {/* Section 8 - Durée et résiliation */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section8Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <h3 className="text-lg font-semibold">{t.cguPage.section8SubA}</h3>
                <p>{t.cguPage.section8ContentA}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section8SubB}</h3>
                <p>{t.cguPage.section8ContentB}</p>

                <h3 className="text-lg font-semibold mt-4">{t.cguPage.section8SubC}</h3>
                <p>{t.cguPage.section8ContentC}</p>
                <ul className="list-disc list-inside space-y-1 ml-4" dangerouslySetInnerHTML={{ __html: t.cguPage.section8List }} />
              </div>
            </section>

            {/* Section 9 - Disponibilité et maintenance */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section9Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cguPage.section9Content}</p>
              </div>
            </section>

            {/* Section 10 - Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section10Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cguPage.section10Content}</p>
              </div>
            </section>

            {/* Section 11 - Limitation de responsabilité */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section11Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>{t.cguPage.section11Intro}</p>
                <ul className="list-disc list-inside space-y-2 ml-4" dangerouslySetInnerHTML={{ __html: t.cguPage.section11List }} />
                <p>{t.cguPage.section11Conclusion}</p>
              </div>
            </section>

            {/* Section 12 - Données personnelles */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section12Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>
                  {t.cguPage.section12Content.split('Politique de confidentialité')[0]}{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    {t.privacyPage.title}
                  </a>, conforme au RGPD.
                </p>
              </div>
            </section>

            {/* Section 13 - Droit applicable et juridiction */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section13Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>{t.cguPage.section13Content}</p>
              </div>
            </section>

            {/* Section 14 - Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.cguPage.section14Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>{t.cguPage.section14Intro}</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    {t.cguPage.section14Email}{' '}
                    <a href="mailto:direction@structura-talents.com" className="text-primary hover:underline">
                      direction@structura-talents.com
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-primary hover:underline">
                      {t.cguPage.section14Form}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Date de dernière mise à jour */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-foreground-muted italic">
                {t.cguPage.finalUpdate}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
