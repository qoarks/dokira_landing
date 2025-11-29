// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Commande personnalisée pour vérifier si une animation est terminée
Cypress.Commands.add('waitForAnimation', (selector) => {
  cy.get(selector).should('have.css', 'opacity', '1');
});

// Commande pour tester le responsive design
Cypress.Commands.add('testResponsive', (selector, mobileClass, tabletClass, desktopClass) => {
  // Test sur mobile
  cy.viewport('iphone-6');
  cy.get(selector).should('have.class', mobileClass);
  
  // Test sur tablette
  cy.viewport('ipad-2');
  if (tabletClass) {
    cy.get(selector).should('have.class', tabletClass);
  }
  
  // Test sur desktop
  cy.viewport(1280, 800);
  if (desktopClass) {
    cy.get(selector).should('have.class', desktopClass);
  }
});
