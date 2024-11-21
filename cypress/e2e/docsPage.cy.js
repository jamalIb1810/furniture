describe('Documents and Policies Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/evest-Documents-Policies');
    });

    it('should display the correct page title and initial content', () => {
        // Check the page title
        cy.title().should('include', 'Documents and Policies');

        cy.get('h1').within(() => {
            cy.get('a').should('contain.text', 'Documents & Policies');
        });
    });

    it('should display the correct accordions and handle opening/closing', () => {
        const accordionTitles = [
            'ATRIAFINANCIAL SA (PTY) LTD',
            'ATRIAFINANCIAL LTD',
            'ATRIAFINANCIAL (COMOROS) LTD',
        ];

        cy.get('span.text-bold.title').each((element, index) => {
            cy.wrap(element).should('have.text', accordionTitles[index]);
        });
    });

    it.skip('should navigate to the correct document link when clicked', () => {
        // Click on a specific document link and check if it navigates correctly
        cy.get('.main-content')
            .first()
            .within(() => {
                cy.get('a')
                    .first()
                    .then((link) => {
                        const href = link.prop('href');
                        cy.wrap(link).click();
                        cy.url().should('include', href);
                    });
            });
    });

    it('should correctly render the TrustBox component', () => {
        cy.get('.trustpilot-widget').should('exist');
    });
});
