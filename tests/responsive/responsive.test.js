/**
 * Tests de responsive design pour la landing page QUAERA AI
 * Ces tests vérifient que les composants s'affichent correctement sur différentes tailles d'écran
 */

import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/sections/hero-section';
import { ProblemSection } from '@/components/sections/problem-section';
import { SolutionSection } from '@/components/sections/solution-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { ImpactSection } from '@/components/sections/impact-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { CtaSection } from '@/components/sections/cta-section';

// Mock framer-motion pour éviter les problèmes avec les animations dans les tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    ul: ({ children, ...props }) => <ul {...props}>{children}</ul>,
    li: ({ children, ...props }) => <li {...props}>{children}</li>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
  useInView: () => [null, true],
  useAnimation: () => ({ start: jest.fn() }),
}));

// Fonction utilitaire pour simuler différentes tailles d'écran
const setScreenSize = (width) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('Responsive Design Tests', () => {
  // Tailles d'écran à tester
  const screenSizes = {
    mobile: 375,
    tablet: 768,
    laptop: 1024,
    desktop: 1440,
  };

  describe('HeroSection Responsive Tests', () => {
    test('renders correctly on mobile', () => {
      setScreenSize(screenSizes.mobile);
      render(<HeroSection />);
      // Vérifier que les éléments clés sont présents
      expect(screen.getByTestId('hero-title')).toBeInTheDocument();
    });

    test('renders correctly on tablet', () => {
      setScreenSize(screenSizes.tablet);
      render(<HeroSection />);
      expect(screen.getByTestId('hero-title')).toBeInTheDocument();
    });

    test('renders correctly on desktop', () => {
      setScreenSize(screenSizes.desktop);
      render(<HeroSection />);
      expect(screen.getByTestId('hero-title')).toBeInTheDocument();
    });
  });

  describe('ProblemSection Responsive Tests', () => {
    test('renders correctly on mobile', () => {
      setScreenSize(screenSizes.mobile);
      render(<ProblemSection />);
      expect(screen.getByTestId('problem-title')).toBeInTheDocument();
    });

    test('renders correctly on tablet', () => {
      setScreenSize(screenSizes.tablet);
      render(<ProblemSection />);
      expect(screen.getByTestId('problem-title')).toBeInTheDocument();
    });

    test('renders correctly on desktop', () => {
      setScreenSize(screenSizes.desktop);
      render(<ProblemSection />);
      expect(screen.getByTestId('problem-title')).toBeInTheDocument();
    });
  });

  describe('SolutionSection Responsive Tests', () => {
    test('renders correctly on mobile', () => {
      setScreenSize(screenSizes.mobile);
      render(<SolutionSection />);
      expect(screen.getByText('Notre solution d\'IA souveraine')).toBeInTheDocument();
      expect(screen.getByTestId('solution-content')).toHaveClass('w-full');
    });

    test('renders correctly on tablet', () => {
      setScreenSize(screenSizes.tablet);
      render(<SolutionSection />);
      expect(screen.getByText('Notre solution d\'IA souveraine')).toBeInTheDocument();
      expect(screen.getByTestId('solution-content')).toHaveClass('w-full');
    });

    test('renders correctly on desktop', () => {
      setScreenSize(screenSizes.desktop);
      render(<SolutionSection />);
      expect(screen.getByText('Notre solution d\'IA souveraine')).toBeInTheDocument();
      expect(screen.getByTestId('solution-content')).toHaveClass('w-full');
      expect(screen.getByTestId('solution-content')).toHaveClass('lg:w-1/2');
    });
  });

  describe('FeaturesSection Responsive Tests', () => {
    test('renders correctly on mobile', () => {
      setScreenSize(screenSizes.mobile);
      render(<FeaturesSection />);
      expect(screen.getByTestId('features-title')).toBeInTheDocument();
      expect(screen.getByTestId('features-grid')).toHaveClass('grid-cols-1');
    });

    test('renders correctly on tablet', () => {
      setScreenSize(screenSizes.tablet);
      render(<FeaturesSection />);
      expect(screen.getByTestId('features-title')).toBeInTheDocument();
      expect(screen.getByTestId('features-grid')).toHaveClass('md:grid-cols-2');
    });

    test('renders correctly on desktop', () => {
      setScreenSize(screenSizes.desktop);
      render(<FeaturesSection />);
      expect(screen.getByTestId('features-title')).toBeInTheDocument();
      expect(screen.getByTestId('features-grid')).toHaveClass('lg:grid-cols-3');
    });
  });

  describe('ImpactSection Responsive Tests', () => {
    test('renders correctly on mobile', () => {
      setScreenSize(screenSizes.mobile);
      render(<ImpactSection />);
      expect(screen.getByTestId('impact-title')).toBeInTheDocument();
    });

    test('renders correctly on tablet', () => {
      setScreenSize(screenSizes.tablet);
      render(<ImpactSection />);
      expect(screen.getByTestId('impact-title')).toBeInTheDocument();
    });

    test('renders correctly on desktop', () => {
      setScreenSize(screenSizes.desktop);
      render(<ImpactSection />);
      expect(screen.getByTestId('impact-title')).toBeInTheDocument();
    });
  });

  describe('PricingSection Responsive Tests', () => {
    test('renders correctly on mobile', () => {
      setScreenSize(screenSizes.mobile);
      render(<PricingSection />);
      expect(screen.getByTestId('pricing-title')).toBeInTheDocument();
      expect(screen.getByTestId('pricing-plans')).toHaveClass('grid-cols-1');
      expect(screen.getByTestId('pricing-contact')).toBeInTheDocument();
    });

    test('renders correctly on tablet', () => {
      setScreenSize(screenSizes.tablet);
      render(<PricingSection />);
      expect(screen.getByTestId('pricing-title')).toBeInTheDocument();
      expect(screen.getByTestId('pricing-plans')).toHaveClass('md:grid-cols-3');
      expect(screen.getByTestId('pricing-contact')).toBeInTheDocument();
    });

    test('renders correctly on desktop', () => {
      setScreenSize(screenSizes.desktop);
      render(<PricingSection />);
      expect(screen.getByTestId('pricing-title')).toBeInTheDocument();
      expect(screen.getByTestId('pricing-plans')).toHaveClass('md:grid-cols-3');
      expect(screen.getByTestId('pricing-contact')).toBeInTheDocument();
    });
  });

  describe('CtaSection Responsive Tests', () => {
    test('renders correctly on mobile', () => {
      setScreenSize(screenSizes.mobile);
      render(<CtaSection />);
      expect(screen.getByTestId('cta-title')).toBeInTheDocument();
      expect(screen.getByTestId('cta-buttons')).toHaveClass('flex-col');
      expect(screen.getByTestId('cta-description')).toBeInTheDocument();
      expect(screen.getByTestId('cta-guarantee')).toBeInTheDocument();
    });

    test('renders correctly on tablet', () => {
      setScreenSize(screenSizes.tablet);
      render(<CtaSection />);
      expect(screen.getByTestId('cta-title')).toBeInTheDocument();
      expect(screen.getByTestId('cta-buttons')).toHaveClass('sm:flex-row');
      expect(screen.getByTestId('cta-description')).toBeInTheDocument();
      expect(screen.getByTestId('cta-guarantee')).toBeInTheDocument();
    });

    test('renders correctly on desktop', () => {
      setScreenSize(screenSizes.desktop);
      render(<CtaSection />);
      expect(screen.getByTestId('cta-title')).toBeInTheDocument();
      expect(screen.getByTestId('cta-buttons')).toHaveClass('sm:flex-row');
      expect(screen.getByTestId('cta-description')).toBeInTheDocument();
      expect(screen.getByTestId('cta-guarantee')).toBeInTheDocument();
    });
  });
});
