import React from 'react';
import { render, screen } from '@testing-library/react';
import { PricingSection } from '@/components/sections/pricing-section';

// Mock framer-motion pour éviter les problèmes avec les animations dans les tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

describe('PricingSection Component', () => {
  test('renders pricing section with title and subtitle', () => {
    render(<PricingSection />);
    
    // Vérifier que le titre et le sous-titre sont présents
    expect(screen.getByText('Nos offres')).toBeInTheDocument();
    expect(screen.getByText(/Des solutions adaptées à tous les besoins/)).toBeInTheDocument();
  });
  
  test('renders all pricing plans', () => {
    render(<PricingSection />);
    
    // Vérifier que les 3 plans sont présents
    expect(screen.getByText('Starter')).toBeInTheDocument();
    expect(screen.getByText('Business')).toBeInTheDocument();
    expect(screen.getByText('Enterprise')).toBeInTheDocument();
    
    // Vérifier les prix
    expect(screen.getByText('990€')).toBeInTheDocument();
    expect(screen.getByText('2 490€')).toBeInTheDocument();
    expect(screen.getByText('Sur mesure')).toBeInTheDocument();
  });
  
  test('renders features for each plan', () => {
    render(<PricingSection />);
    
    // Vérifier quelques fonctionnalités de chaque plan
    expect(screen.getByText('Jusqu\'à 10 000 documents')).toBeInTheDocument();
    expect(screen.getByText('Jusqu\'à 5 utilisateurs')).toBeInTheDocument();
    expect(screen.getByText('Jusqu\'à 100 000 documents')).toBeInTheDocument();
    expect(screen.getByText('Jusqu\'à 20 utilisateurs')).toBeInTheDocument();
    expect(screen.getByText('Volume illimité de documents')).toBeInTheDocument();
    expect(screen.getByText('Utilisateurs illimités')).toBeInTheDocument();
  });
  
  test('renders CTA buttons for each plan', () => {
    render(<PricingSection />);
    
    // Vérifier les boutons CTA
    expect(screen.getByText('Commencer l\'essai')).toBeInTheDocument();
    expect(screen.getByText('Contacter les ventes')).toBeInTheDocument();
    expect(screen.getByText('Demander un devis')).toBeInTheDocument();
  });
  
  test('renders popular tag for Business plan', () => {
    render(<PricingSection />);
    
    // Vérifier que le tag "Populaire" est présent
    expect(screen.getByText('Populaire')).toBeInTheDocument();
  });
  
  test('renders contact section', () => {
    render(<PricingSection />);
    
    // Vérifier la section de contact
    expect(screen.getByText('Besoin d\'une solution personnalisée ? Contactez notre équipe commerciale.')).toBeInTheDocument();
    expect(screen.getByText('Prendre rendez-vous')).toBeInTheDocument();
  });
  
  test('renders with correct structure and test IDs', () => {
    render(<PricingSection />);
    
    // Vérifier que les éléments avec data-testid sont présents
    expect(screen.getByTestId('pricing-title')).toBeInTheDocument();
    expect(screen.getByTestId('pricing-plans')).toBeInTheDocument();
    expect(screen.getByTestId('pricing-contact')).toBeInTheDocument();
  });
});
