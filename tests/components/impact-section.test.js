import React from 'react';
import { render, screen } from '@testing-library/react';
import { ImpactSection } from '@/components/sections/impact-section';

// Mock framer-motion pour éviter les problèmes avec les animations dans les tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

describe('ImpactSection Component', () => {
  test('renders impact section with title and subtitle', () => {
    render(<ImpactSection />);
    
    // Vérifier que le titre et le sous-titre sont présents
    expect(screen.getByText("L'impact concret pour votre entreprise")).toBeInTheDocument();
    expect(screen.getByText(/Des résultats mesurables et significatifs/)).toBeInTheDocument();
  });
  
  test('renders all impact statistics', () => {
    render(<ImpactSection />);
    
    // Vérifier que les statistiques sont présentes
    expect(screen.getByText('85%')).toBeInTheDocument();
    expect(screen.getByText('60%')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('40%')).toBeInTheDocument();
    
    // Vérifier les labels des statistiques
    expect(screen.getByText('Réduction du temps de recherche documentaire')).toBeInTheDocument();
    expect(screen.getByText('Amélioration de la productivité')).toBeInTheDocument();
    expect(screen.getByText('Conformité RGPD')).toBeInTheDocument();
    expect(screen.getByText('Réduction des coûts opérationnels')).toBeInTheDocument();
    
    // Vérifier les descriptions
    expect(screen.getByText(/Les utilisateurs trouvent l'information pertinente/)).toBeInTheDocument();
    expect(screen.getByText(/Les équipes peuvent se concentrer sur leur expertise/)).toBeInTheDocument();
    expect(screen.getByText(/Toutes vos données restent sous votre contrôle/)).toBeInTheDocument();
    expect(screen.getByText(/Moins de temps perdu, moins d'erreurs/)).toBeInTheDocument();
  });
  
  test('renders testimonials section', () => {
    render(<ImpactSection />);
    
    // Vérifier que le titre des témoignages est présent
    expect(screen.getByText('Ce que nos clients disent')).toBeInTheDocument();
    
    // Vérifier que les témoignages sont présents
    expect(screen.getByText(/QUAERA AI a transformé notre façon de gérer/)).toBeInTheDocument();
    expect(screen.getByText(/La souveraineté des données était notre priorité/)).toBeInTheDocument();
    
    // Vérifier les auteurs des témoignages
    expect(screen.getByText('Marie Dupont')).toBeInTheDocument();
    expect(screen.getByText('Thomas Martin')).toBeInTheDocument();
    
    // Vérifier les postes des auteurs
    expect(screen.getByText('Directrice R&D, TechCorp')).toBeInTheDocument();
    expect(screen.getByText('RSSI, Groupe Financier Européen')).toBeInTheDocument();
  });
  
  test('renders with correct structure and test IDs', () => {
    render(<ImpactSection />);
    
    // Vérifier que les éléments avec data-testid sont présents
    expect(screen.getByTestId('impact-title')).toBeInTheDocument();
    expect(screen.getByTestId('impact-stats')).toBeInTheDocument();
    expect(screen.getByTestId('impact-testimonials')).toBeInTheDocument();
  });
});
