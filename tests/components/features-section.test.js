import React from 'react';
import { render, screen } from '@testing-library/react';
import { FeaturesSection } from '@/components/sections/features-section';

// Mock framer-motion pour éviter les problèmes avec les animations dans les tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

// Mock FeatureIcon pour simplifier les tests
jest.mock('@/components/ui/feature-icon', () => ({
  FeatureIcon: ({ icon }) => <div data-testid={`icon-${icon}`}>Icon: {icon}</div>,
}));

describe('FeaturesSection Component', () => {
  test('renders features section with title and subtitle', () => {
    render(<FeaturesSection />);
    
    // Vérifier que le titre et le sous-titre sont présents
    expect(screen.getByText('Nos points forts')).toBeInTheDocument();
    expect(screen.getByText(/Découvrez ce qui fait de QUAERA AI la solution idéale/)).toBeInTheDocument();
  });
  
  test('renders all feature cards with correct content', () => {
    render(<FeaturesSection />);
    
    // Vérifier que les 6 fonctionnalités sont présentes
    expect(screen.getByText('Sécurité maximale')).toBeInTheDocument();
    expect(screen.getByText('Performance optimale')).toBeInTheDocument();
    expect(screen.getByText('Recherche sémantique')).toBeInTheDocument();
    expect(screen.getByText('Multi-formats')).toBeInTheDocument();
    expect(screen.getByText('Mise à jour continue')).toBeInTheDocument();
    expect(screen.getByText('Collaboration facilitée')).toBeInTheDocument();
    
    // Vérifier les descriptions
    expect(screen.getByText(/Chiffrement de bout en bout/)).toBeInTheDocument();
    expect(screen.getByText(/Traitement rapide même pour les documents/)).toBeInTheDocument();
    expect(screen.getByText(/Trouvez l'information pertinente/)).toBeInTheDocument();
    expect(screen.getByText(/Support de tous types de documents/)).toBeInTheDocument();
    expect(screen.getByText(/Modèles d'IA régulièrement améliorés/)).toBeInTheDocument();
    expect(screen.getByText(/Partagez les insights et travaillez ensemble/)).toBeInTheDocument();
  });
  
  test('renders all feature icons', () => {
    render(<FeaturesSection />);
    
    // Vérifier que les icônes sont présentes
    expect(screen.getByTestId('icon-shield-check')).toBeInTheDocument();
    expect(screen.getByTestId('icon-zap')).toBeInTheDocument();
    expect(screen.getByTestId('icon-search')).toBeInTheDocument();
    expect(screen.getByTestId('icon-layers')).toBeInTheDocument();
    expect(screen.getByTestId('icon-refresh-cw')).toBeInTheDocument();
    expect(screen.getByTestId('icon-users')).toBeInTheDocument();
  });
  
  test('renders with correct structure and test IDs', () => {
    render(<FeaturesSection />);
    
    // Vérifier que les éléments avec data-testid sont présents
    expect(screen.getByTestId('features-title')).toBeInTheDocument();
    expect(screen.getByTestId('features-grid')).toBeInTheDocument();
  });
});
