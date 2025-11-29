// Tests d'intégration pour la landing page QUAERA AI

describe('QUAERA AI Landing Page - Tests d\'intégration', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('body').should('be.visible');
  });

  it('devrait permettre un parcours utilisateur complet', () => {
    // Vérifier que l'utilisateur peut voir la section hero
    cy.get('[data-testid="hero-title"]').should('be.visible');
    
    // Faire défiler jusqu'à la section problème
    cy.get('[data-testid="problem-section"]').scrollIntoView();
    cy.get('[data-testid="problem-title"]').should('be.visible');
    
    // Faire défiler jusqu'à la section solution
    cy.get('[data-testid="solution-section"]').scrollIntoView();
    cy.get('[data-testid="solution-title"]').should('be.visible');
    
    // Faire défiler jusqu'à la section fonctionnalités
    cy.get('[data-testid="features-section"]').scrollIntoView();
    cy.get('[data-testid="features-title"]').should('be.visible');
    
    // Faire défiler jusqu'à la section impact
    cy.get('[data-testid="impact-section"]').scrollIntoView();
    cy.get('[data-testid="impact-title"]').should('be.visible');
    
    // Faire défiler jusqu'à la section tarification
    cy.get('[data-testid="pricing-section"]').scrollIntoView();
    cy.get('[data-testid="pricing-title"]').should('be.visible');
    
    // Faire défiler jusqu'à la section CTA finale
    cy.get('[data-testid="cta-section"]').scrollIntoView();
    cy.get('[data-testid="cta-title"]').should('be.visible');
    
    // Vérifier que les boutons CTA sont cliquables
    cy.get('[data-testid="cta-buttons"]').find('button').first().should('not.be.disabled');
  });

  it('devrait vérifier l\'intégration des animations au défilement', () => {
    // Vérifier que les animations se déclenchent au défilement
    cy.get('[data-testid="solution-section"]').scrollIntoView();
    // Attendre que l'animation soit terminée (les éléments devraient être visibles)
    cy.get('[data-testid="solution-content"]').should('be.visible');
    
    cy.get('[data-testid="features-section"]').scrollIntoView();
    // Vérifier que la grille de fonctionnalités est visible après l'animation
    cy.get('[data-testid="features-grid"]').should('be.visible');
  });

  it('devrait vérifier l\'intégration responsive entre les sections', () => {
    // Test sur mobile
    cy.viewport('iphone-6');
    
    // Vérifier la cohérence du design responsive entre les sections
    cy.get('[data-testid="hero-section"]').should('be.visible');
    cy.get('[data-testid="solution-section"]').scrollIntoView();
    cy.get('[data-testid="solution-content"]').should('have.class', 'w-full');
    
    cy.get('[data-testid="features-section"]').scrollIntoView();
    cy.get('[data-testid="features-grid"]').should('have.class', 'grid-cols-1');
    
    // Test sur tablette
    cy.viewport('ipad-2');
    cy.get('[data-testid="features-section"]').scrollIntoView();
    cy.get('[data-testid="features-grid"]').should('have.class', 'md:grid-cols-2');
    
    // Test sur desktop
    cy.viewport(1280, 800);
    cy.get('[data-testid="features-section"]').scrollIntoView();
    cy.get('[data-testid="features-grid"]').should('have.class', 'lg:grid-cols-3');
  });
});
