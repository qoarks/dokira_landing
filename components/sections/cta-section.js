"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/section';
import { Button } from '../ui/button';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';

/**
 * Composant CtaSection pour le call-to-action final de la landing page
 * 
 * @returns {React.ReactElement} - Élément React
 */
const CtaSection = () => {
  const { t } = useTranslation();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.02,
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <Section id="cta" className="relative overflow-hidden bg-violet-1">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          data-testid="cta-container"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-12"
            variants={itemVariants}
            data-testid="cta-title"
          >
            {t.cta.title}
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-12 text-gray-11"
            variants={itemVariants}
          >
            {t.cta.subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
            data-testid="cta-buttons"
          >
            <Link href="/contact">
              <button className="px-8 py-4 text-base bg-violet-3 text-gray-12 border border-violet-5 hover:bg-violet-4 hover:border-violet-8 font-medium transition-all duration-200" style={{ borderRadius: '6px' }}>
                {t.cta.button1}
              </button>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-4 text-base bg-white text-gray-12 border border-gray-3 hover:bg-gray-1 font-medium transition-all duration-200" style={{ borderRadius: '6px' }}>
                {t.cta.button2}
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export { CtaSection };
