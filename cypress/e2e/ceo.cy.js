describe('Ceo Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/en/ceo');
        cy.wait(2000);
    });

    it('renders the title of the page', () => {
        cy.contains('Meet Our CEO').should('be.visible');
    });

    it('ensure that slider have data', () => {
        cy.contains('Video: what you need to know about online trading').should(
            'be.visible'
        );
    });

    it('click on the contact us btn should open and close the form', () => {
        cy.get('#showFormBtn').click();
        cy.contains('Contact Our CEO').should('be.visible');
        cy.get('#showFormBtn').click();
        cy.contains('Contact Our CEO').should('not.visible');
    });

    it('ensure that awards have data and visible', () => {
        cy.contains(
            'Fastest Growing Forex Broker forex Expo Dubai 2021'
        ).should('be.visible');
    });
});
