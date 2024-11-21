describe('Mobile View Tests', () => {
    beforeEach(() => {
        cy.setMobileUserAgentAndReload();
        cy.wait(2000); // Wait for the page to load
    });

    it('should display mobile navigation bar', () => {
        // Check if the mobile navigation bar is visible
        cy.get('.mobileNavBar').should('be.visible');
    });

    it('should not have overflow x ', () => {
        cy.document().then((doc) => {
            const hasHorizontalOverflow =
                doc.documentElement.scrollWidth >
                doc.documentElement.clientWidth;
            expect(hasHorizontalOverflow).to.be.false;
        });
    });

    it('should redirect to mobile version on smaller screens', () => {
        // Set the viewport to simulate a smaller screen (e.g., iPhone 14 dimensions)
        cy.viewport(390, 844);

        // Visit the page
        cy.visit('http://localhost:3000/trade-room');
        cy.origin('https://mobile.evest.com', () => {
            cy.contains('New to Evest?').should('be.visible');
            cy.contains('Live account').should('be.visible');
        });
    });

    it('should redirect to mobile verison of signup', () => {
        cy.viewport(390, 844);

        // Visit the page
        cy.visit('http://localhost:3000/sign-up');
        cy.origin('https://mobile.evest.com', () => {
            cy.contains('Accept Promotions').should('be.visible');
            cy.contains('Already have an account?').should('be.visible');
        });
    });
});
