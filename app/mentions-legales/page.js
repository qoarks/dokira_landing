"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

export default function MentionsLegalesPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-12">{t.legalNoticePage.title}</h1>

          <div className="glass-card p-8 space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.legalNoticePage.section1Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>
                  {t.legalNoticePage.section1Content}{' '}
                  <a href="https://quaera.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    https://quaera.ai
                  </a>{' '}
                  {t.legalNoticePage.section1IsSite}
                </p>
                <div className="mt-4 space-y-1">
                  <p><strong>{t.legalNoticePage.companyName}</strong></p>
                  <p>{t.legalNoticePage.companyType}</p>
                  <p>{t.legalNoticePage.companyRCS} <strong>982488199</strong></p>
                  <p>{t.legalNoticePage.companyAddress} <strong>79 rue des frères Lumières, 93330 Neuilly-sur-Marne</strong></p>
                  <p>{t.legalNoticePage.companyVAT} <strong>FR08982488199</strong></p>
                  <p>
                    {t.legalNoticePage.companyEmail}{' '}
                    <a href="mailto:direction@structura-talents.com" className="text-primary hover:underline">
                      direction@structura-talents.com
                    </a>
                  </p>
                  <p>{t.legalNoticePage.companyDirector} <strong>{t.legalNoticePage.directorName}</strong></p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.legalNoticePage.section2Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>{t.legalNoticePage.section2Content}</p>
                <div className="mt-4 space-y-1">
                  <p><strong>{t.legalNoticePage.hostName}</strong></p>
                  <p>{t.legalNoticePage.hostAddress}</p>
                  <p>
                    {t.legalNoticePage.hostWebsite}{' '}
                    <a href="https://quaera.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      https://quaera.ai
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.legalNoticePage.section3Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>
                  {t.legalNoticePage.section3Content}{' '}
                  <a href="https://quaera.ai" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    https://quaera.ai
                  </a>{' '}
                  {t.legalNoticePage.section3Content2}
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.legalNoticePage.section4Title}</h2>
              <div className="space-y-4 text-foreground-muted">
                <p>
                  {t.legalNoticePage.section4Content1} <strong>{t.legalNoticePage.companyName}</strong>{t.legalNoticePage.section4Content1b}
                </p>
                <p>
                  {t.legalNoticePage.section4Content2} <strong>{t.legalNoticePage.section4Content2b}</strong>.
                </p>
              </div>
            </section>

            {/* Section 5 - Données personnelles */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.legalNoticePage.section5Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>
                  {t.legalNoticePage.section5Content}{' '}
                  <a href="/privacy" className="text-primary hover:underline">
                    {t.legalNoticePage.section5Link}
                  </a>.
                </p>
              </div>
            </section>

            {/* Section 6 - Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{t.legalNoticePage.section6Title}</h2>
              <div className="space-y-2 text-foreground-muted">
                <p>
                  {t.legalNoticePage.section6Content}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    {t.legalNoticePage.section6Email}{' '}
                    <a href="mailto:direction@structura-talents.com" className="text-primary hover:underline">
                      direction@structura-talents.com
                    </a>
                  </li>
                  <li>
                    {t.legalNoticePage.section6Form}{' '}
                    <a href="/contact" className="text-primary hover:underline">
                      {t.legalNoticePage.section6FormLink}
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            {/* Date de dernière mise à jour */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-foreground-muted italic">
                {t.legalNoticePage.lastUpdate} {new Date().toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
