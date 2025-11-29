import React from 'react';
import { render, screen } from '@testing-library/react';
import { SolutionSection } from '@/components/sections/solution-section';

// Mock framer-motion pour éviter les problèmes avec les animations dans les tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
    li: ({ children, ...props }) => <li {...props}>{children}</li>,
  },
}));

describe('SolutionSection Component', () => {
  test('renders solution section with title and subtitle', () => {
    render(<SolutionSection />);
    
    // Vérifier que le titre et le sous-titre sont présents
    expect(screen.getByText("Notre solution d'IA souveraine")).toBeInTheDocument();
    expect(screen.getByText(/Une plateforme d'intelligence artificielle 100% française/)).toBeInTheDocument();
  });
  
  test('renders all solution features', () => {
    render(<SolutionSection />);
    
    // Vérifier que les 4 fonctionnalités sont présentes
    expect(screen.getByText('Centralisation intelligente')).toBeInTheDocument();
    expect(screen.getByText('Souveraineté garantie')).toBeInTheDocument();
    expect(screen.getByText('Analyse contextuelle')).toBeInTheDocument();
    expect(screen.getByText('Conformité RGPD')).toBeInTheDocument();
    
    // Vérifier les descriptions
    expect(screen.getByText(/Tous vos documents accessibles depuis une interface unique/)).toBeInTheDocument();
    expect(screen.getByText(/Déployée sur votre infrastructure/)).toBeInTheDocument();
    expect(screen.getByText(/Extraction automatique d'informations pertinentes/)).toBeInTheDocument();
    expect(screen.getByText(/Solution entièrement conforme aux réglementations européennes/)).toBeInTheDocument();
  });
  
  test('renders CTA button', () => {
    render(<SolutionSection />);
    
    // Vérifier que le bouton CTA est présent
    const ctaButton = screen.getByText('Découvrir notre technologie');
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton.tagName).toBe('BUTTON');
  });
  
  test('renders with correct structure and test IDs', () => {
    render(<SolutionSection />);
    
    // Vérifier que les éléments avec data-testid sont présents
    expect(screen.getByTestId('solution-image-container')).toBeInTheDocument();
    expect(screen.getByTestId('solution-content')).toBeInTheDocument();
  });
});
