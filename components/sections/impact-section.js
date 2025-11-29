"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../ui/section';
import { SectionTitle } from '../ui/section-title';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

/**
 * Composant ImpactSection pour présenter l'impact de Dokira
 * 
 * @returns {React.ReactElement} - Élément React
 */
const ImpactSection = () => {
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

  // Statistiques d'impact
  const stats = [
    {
      id: 1,
      value: '85%',
      label: 'Réduction du temps de recherche documentaire',
      description: 'Les utilisateurs trouvent l\'information pertinente en quelques secondes au lieu de plusieurs minutes.'
    },
    {
      id: 2,
      value: '60%',
      label: 'Amélioration de la productivité',
      description: 'Les équipes peuvent se concentrer sur leur expertise plutôt que sur la recherche d\'informations.'
    },
    {
      id: 3,
      value: '100%',
      label: 'Conformité RGPD',
      description: 'Toutes vos données restent sous votre contrôle, sans compromis sur la sécurité.'
    },
    {
      id: 4,
      value: '40%',
      label: 'Réduction des coûts opérationnels',
      description: 'Moins de temps perdu, moins d\'erreurs, plus d\'efficacité dans la gestion documentaire.'
    }
  ];

  // Témoignages clients
  const testimonials = [
    {
      id: 1,
      quote: "Dokira a transformé notre façon de gérer notre documentation technique. Nous avons gagné un temps précieux et amélioré la qualité de nos livrables.",
      author: "Marie Dupont",
      position: "Directrice R&D, TechCorp",
      rating: 5,
      avatarColor: "bg-primary-light"
    },
    {
      id: 2,
      quote: "La souveraineté des données était notre priorité absolue. Dokira est la seule solution qui répond à nos exigences de sécurité tout en offrant des performances remarquables.",
      author: "Thomas Martin",
      position: "RSSI, Groupe Financier Européen",
      rating: 5,
      avatarColor: "bg-accent-light"
    },
    {
      id: 3,
      quote: "L'interface intuitive et les résultats précis nous ont permis d'adopter Dokira dans toute notre organisation en un temps record.",
      author: "Sophie Legrand",
      position: "Directrice de l'Innovation, MediGroup",
      rating: 5,
      avatarColor: "bg-success"
    }
  ];

  return (
    <Section id="impact" className="relative overflow-hidden bg-gray-1">
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            data-testid="impact-title"
          >
            L'impact <span className="text-violet-9">concret</span> pour votre entreprise
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-11"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Des résultats mesurables et significatifs pour votre organisation.
          </motion.p>
        </div>

        {/* Statistiques d'impact */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          data-testid="impact-stats"
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={itemVariants}>
              <div className="glass-card h-full p-8 text-center">
                <div className="text-5xl font-bold mb-4 text-gray-12 tracking-tight">{stat.value}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-12">{stat.label}</h3>
                <p className="text-gray-11 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-12">Ce que nos clients disent</h3>
            <p className="text-xl text-gray-11">Des témoignages authentiques de nos utilisateurs.</p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            data-testid="impact-testimonials"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <div className="glass-card h-full p-8">
                  <p className="text-gray-12 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-violet-1 text-violet-9 flex items-center justify-center font-semibold mr-3">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-12">{testimonial.author}</p>
                      <p className="text-sm text-gray-9">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export { ImpactSection };
