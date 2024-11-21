describe('Trade Room Page Tests', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        // Visit the page before each test
        cy.visit('http://localhost:3000/en/trade-room');
    });

    it('should have the correct title and description', () => {
        // Set viewport size to 1280x720 for this test
        cy.viewport(1280, 720);

        cy.title().should('eq', 'Trade Room | Evest');
        cy.get('meta[name="description"]').should(
            'have.attr',
            'content',
            'Trade Room | Evest'
        );
    });

    it('should have a logo that navigates to the homepage', () => {
        // Set viewport size to 1024x768 for this test
        cy.viewport(1024, 768);

        cy.get('a.logo.hide-on-light-theme').should('have.attr', 'href', '/en');
        cy.get('a.logo.hide-on-dark-theme').should('have.attr', 'href', '/en');
    });

    it('should switch theme when theme switcher is clicked', () => {
        // Set viewport size to 1440x900 for this test
        cy.viewport(1440, 900);

        cy.get('#theme-color-switcher').click({ force: true });
        cy.get('body').then(($body) => {
            const theme = $body.hasClass('theme-white')
                ? 'theme-white'
                : 'theme-dark';
            expect(localStorage.getItem('panda-forex__theme')).to.eq(theme);
        });
    });

    it('should contain panda-forex elements', () => {
        // Set viewport size to 1280x720 for this test
        cy.viewport(1280, 720);

        cy.get('panda-forex-init').should('exist');
        cy.get('panda-forex-tour').should('exist');
        cy.get('panda-forex-personal-profile').should('exist');
        cy.get('panda-forex-client-area').should('exist');
    });

    it('should contain user action elements', () => {
        // Set viewport size to 1280x720 for this test
        cy.viewport(1280, 720);

        cy.get('.user-actions').within(() => {
            cy.get('panda-forex-social-switch').should('exist');
            cy.get('panda-forex-lang').should('exist');
            cy.get('panda-forex-theme-switch').should('exist');
            cy.get('#theme-switch').should('exist');
            cy.get('panda-forex-clock').should('exist');
            cy.get('panda-forex-menu').should('exist');
            cy.get('panda-forex-deposit-credit').should('exist');
            cy.get('panda-forex-login').should('exist');
            // cy.get('panda-forex-signup').should('exist');
        });
    });
});
