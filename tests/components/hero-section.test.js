import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/sections/hero-section';

// Mock framer-motion pour éviter les problèmes avec les animations dans les tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
  },
}));

describe('HeroSection Component', () => {
  test('renders hero section with all elements', () => {
    render(<HeroSection />);
    
    // Vérifier que les éléments principaux sont présents
    const heroContainer = screen.getByTestId('hero-container');
    expect(heroContainer).toBeInTheDocument();
    
    const heroTitle = screen.getByTestId('hero-title');
    expect(heroTitle).toBeInTheDocument();
    expect(heroTitle.textContent).toContain("L'IA 100% française et sécurisée");
    
    const heroSubtitle = screen.getByTestId('hero-subtitle');
    expect(heroSubtitle).toBeInTheDocument();
    expect(heroSubtitle.textContent).toContain("QUAERA AI analyse");
    
    const heroCta = screen.getByTestId('hero-cta');
    expect(heroCta).toBeInTheDocument();
    
    const heroBadge = screen.getByTestId('hero-badge');
    expect(heroBadge).toBeInTheDocument();
    expect(heroBadge.textContent).toContain("Solution conforme RGPD");
  });
  
  test('renders primary and secondary CTA buttons', () => {
    render(<HeroSection />);
    
    const primaryButton = screen.getByText('Demander une démo');
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton.tagName).toBe('BUTTON');
    
    const secondaryButton = screen.getByText('En savoir plus');
    expect(secondaryButton).toBeInTheDocument();
    expect(secondaryButton.tagName).toBe('BUTTON');
  });
  
  test('renders the section with correct id and classes', () => {
    render(<HeroSection />);
    
    const section = screen.getByTestId('hero-container').closest('section');
    expect(section).toHaveAttribute('id', 'hero');
    expect(section).toHaveClass('pt-32');
    expect(section).toHaveClass('pb-20');
    expect(section).toHaveClass('md:pt-40');
    expect(section).toHaveClass('md:pb-28');
  });
});
