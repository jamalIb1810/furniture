describe('Home Page', () => {
    beforeEach(() => {
        // Adjust the URL to match your local development server
        cy.visit('http://localhost:3000');
    });

    it('renders a welcome message', () => {
        cy.contains('Get Started').should('be.visible');
    });

    it('has no broken internal links', () => {
        cy.get('a').each(($el) => {
            const href = $el.prop('href');
            const origin = window.location.origin;

            // Check if the href is not empty, not a mailto link, and is an internal link
            if (
                href &&
                href.startsWith(origin) &&
                !$el.prop('href').includes('mailto')
            ) {
                cy.request(href).its('status').should('eq', 200);
            }
        });
    });

    it('buttons work correctly', () => {
        cy.get('button').each(($el) => {
            cy.wrap($el).should('not.be.disabled');
        });
    });

    it.skip('images are displayed and not hidden', () => {
        cy.get('img').each(($el) => {
            cy.wrap($el)
                .should('be.visible')
                .and('have.attr', 'src')
                .should('not.be.empty')
                .and('not.have.attr', 'hidden')
                .and('not.have.css', 'display', 'none')
                .and('not.have.css', 'visibility', 'hidden')
                .and('not.have.css', 'opacity', '0');
        });
    });

    // it('check translation', () => {
    //     cy.wait(3000)
    //     cy.get('.__className_36bd41').should('not.contain', 'HomePage2.');
    // });
});
