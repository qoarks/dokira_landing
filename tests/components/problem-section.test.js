import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProblemSection } from '@/components/sections/problem-section';

// Mock framer-motion pour éviter les problèmes avec les animations dans les tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

describe('ProblemSection Component', () => {
  test('renders problem section with title and subtitle', () => {
    render(<ProblemSection />);
    
    // Vérifier que le titre et le sous-titre sont présents
    expect(screen.getByText('Les défis de la gestion documentaire')).toBeInTheDocument();
    expect(screen.getByText(/Les entreprises font face à des problèmes critiques/)).toBeInTheDocument();
  });
  
  test('renders all problem cards', () => {
    render(<ProblemSection />);
    
    // Vérifier que les 4 problèmes sont présents
    expect(screen.getByText('Données dispersées et inaccessibles')).toBeInTheDocument();
    expect(screen.getByText('Confidentialité compromise')).toBeInTheDocument();
    expect(screen.getByText('Temps perdu en recherche')).toBeInTheDocument();
    expect(screen.getByText('Non-conformité réglementaire')).toBeInTheDocument();
    
    // Vérifier les descriptions
    expect(screen.getByText(/Les documents critiques sont éparpillés/)).toBeInTheDocument();
    expect(screen.getByText(/Les solutions d'IA actuelles envoient vos données sensibles/)).toBeInTheDocument();
    expect(screen.getByText(/Vos équipes passent des heures/)).toBeInTheDocument();
    expect(screen.getByText(/L'utilisation de solutions non-souveraines/)).toBeInTheDocument();
  });
  
  test('renders conclusion message', () => {
    render(<ProblemSection />);
    
    // Vérifier que la conclusion est présente
    expect(screen.getByText(/Ces défis nécessitent une solution d'IA souveraine/)).toBeInTheDocument();
  });
  
  test('renders with correct structure and test IDs', () => {
    render(<ProblemSection />);
    
    // Vérifier que les éléments avec data-testid sont présents
    expect(screen.getByTestId('problem-container')).toBeInTheDocument();
    expect(screen.getByTestId('problem-conclusion')).toBeInTheDocument();
  });
});
