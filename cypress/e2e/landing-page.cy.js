// Test end-to-end pour la landing page QUAERA AI

describe('QUAERA AI Landing Page', () => {
  beforeEach(() => {
    // Visiter la page d'accueil avant chaque test
    cy.visit('/');
    // Attendre que la page soit complètement chargée
    cy.get('body').should('be.visible');
  });

  it('devrait charger la page d\'accueil correctement', () => {
    // Vérifier que le titre principal est visible
    cy.get('[data-testid="hero-title"]').should('be.visible');
    // Vérifier que le logo est visible
    cy.get('[data-testid="hero-logo"]').should('be.visible');
  });

  it('devrait afficher toutes les sections principales', () => {
    // Vérifier que toutes les sections sont présentes
    cy.get('[data-testid="hero-section"]').should('be.visible');
    cy.get('[data-testid="problem-section"]').should('be.visible');
    cy.get('[data-testid="solution-section"]').should('be.visible');
    cy.get('[data-testid="features-section"]').should('be.visible');
    cy.get('[data-testid="impact-section"]').should('be.visible');
    cy.get('[data-testid="pricing-section"]').should('be.visible');
    cy.get('[data-testid="cta-section"]').should('be.visible');
  });

  it('devrait avoir des boutons CTA fonctionnels', () => {
    // Vérifier que les boutons CTA sont cliquables
    cy.get('[data-testid="hero-cta"]').should('be.visible').and('not.be.disabled');
    cy.get('[data-testid="cta-buttons"]').find('button').should('have.length.at.least', 1);
  });

  it('devrait être responsive sur différentes tailles d\'écran', () => {
    // Test sur mobile
    cy.viewport('iphone-6');
    cy.get('[data-testid="hero-title"]').should('be.visible');
    cy.get('[data-testid="solution-content"]').should('have.class', 'w-full');
    
    // Test sur tablette
    cy.viewport('ipad-2');
    cy.get('[data-testid="hero-title"]').should('be.visible');
    
    // Test sur desktop
    cy.viewport(1280, 800);
    cy.get('[data-testid="hero-title"]').should('be.visible');
  });

  it('devrait afficher correctement les cartes de prix', () => {
    cy.get('[data-testid="pricing-plans"]').should('be.visible');
    cy.get('[data-testid="pricing-plans"]').find('.card').should('have.length.at.least', 2);
  });

  it('devrait permettre la navigation entre les sections', () => {
    // Cliquer sur un lien de navigation et vérifier le défilement
    cy.get('a[href="#features"]').first().click();
    cy.get('[data-testid="features-section"]').should('be.visible');
    
    cy.get('a[href="#pricing"]').first().click();
    cy.get('[data-testid="pricing-section"]').should('be.visible');
  });
});
