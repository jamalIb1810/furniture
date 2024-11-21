/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

declare namespace Cypress {
    interface Chainable<Subject = any> {
        /**
         * Custom command to set the viewport to mobile size and reload the page.
         * @example cy.setMobileViewportAndReload()
         */
        setMobileUserAgentAndReload(): Chainable<Subject>;
    }
}

// cypress/support/commands.js

Cypress.Commands.add('setMobileUserAgentAndReload', () => {
    cy.intercept('GET', '**/*', (req) => {
        req.headers['x-is-mobile'] = 'true';
        req.headers['user-agent'] =
            'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14E5239e';
    }).as('setMobileHeader');

    cy.visit('http://localhost:3000/', {
        onBeforeLoad(win) {
            Object.defineProperty(win.navigator, 'userAgent', {
                value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14E5239e',
            });
        },
    });
    cy.viewport(390, 844); // iPhone 14 dimensions in CSS pixels
    cy.wait('@setMobileHeader');
});
