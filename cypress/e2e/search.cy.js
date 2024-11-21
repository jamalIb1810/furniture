describe('search input', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.wait(2000);
        cy.get('.searchBtn').click();
    });

    it('check if search icon is visible', () => {
        cy.get('#searchInput').should('be.visible');
    });

    it('click on the x icon should close the search bar', () => {
        cy.get('#searchInput').should('be.visible');
        cy.get('#closeIcon').click();
        cy.get('#searchInput').should('not.visible');
    });

    it('should give correct result when search', () => {
        cy.get('#searchInput').should('be.visible');
        cy.wait(1000);
        cy.get('#searchInput').type('crypto');
        cy.get('#Crypto').contains('Crypto');
    });

    it('should redirect to the correct page', () => {
        cy.get('#searchInput').should('be.visible');
        cy.wait(1000);
        cy.get('#searchInput').type('crypto');
        cy.get('#Crypto').click();
        cy.location('pathname').should('eq', '/en/evest-cryptocurrencies');
    });
});
