import React from 'react';
import { render, screen } from '@testing-library/react';
import { CtaSection } from '@/components/sections/cta-section';

// Mock framer-motion pour éviter les problèmes avec les animations dans les tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
}));

describe('CtaSection Component', () => {
  test('renders CTA section with title', () => {
    render(<CtaSection />);
    
    // Vérifier que le titre est présent
    expect(screen.getByText('Prêt à transformer votre gestion documentaire ?')).toBeInTheDocument();
  });
  
  test('renders CTA description', () => {
    render(<CtaSection />);
    
    // Vérifier que la description est présente
    expect(screen.getByText(/Rejoignez les entreprises qui ont déjà adopté QUAERA AI/)).toBeInTheDocument();
  });
  
  test('renders CTA buttons', () => {
    render(<CtaSection />);
    
    // Vérifier que les boutons sont présents
    expect(screen.getByText('Demander une démo')).toBeInTheDocument();
    expect(screen.getByText('Contacter un expert')).toBeInTheDocument();
  });
  
  test('renders guarantee text', () => {
    render(<CtaSection />);
    
    // Vérifier que le texte de garantie est présent
    expect(screen.getByText('Aucun engagement. Essai gratuit de 14 jours pour les nouveaux clients.')).toBeInTheDocument();
  });
  
  test('renders with correct structure and test IDs', () => {
    render(<CtaSection />);
    
    // Vérifier que les éléments avec data-testid sont présents
    expect(screen.getByTestId('cta-container')).toBeInTheDocument();
    expect(screen.getByTestId('cta-title')).toBeInTheDocument();
    expect(screen.getByTestId('cta-description')).toBeInTheDocument();
    expect(screen.getByTestId('cta-buttons')).toBeInTheDocument();
    expect(screen.getByTestId('cta-guarantee')).toBeInTheDocument();
  });
});
