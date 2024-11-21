describe('Signup Page', () => {
    beforeEach(() => {
        // Visit the signup page before each test
        cy.viewport(1920, 1080);
        cy.visit('http://localhost:3000/sign-up');
        cy.intercept('POST', 'https://evest.com/api/register', {
            statusCode: 200,
            body: {
                data: {
                    loginToken: '/trade-room?token=mocked-token',
                },
            },
        }).as('registerUser');
    });

    it('should display the signup form', () => {
        // Check if the signup form is visible
        cy.get('form').should('be.visible');
    });

    it('should keep inputs disabled for unsupported country', () => {
        // Select an unsupported country
        cy.get('input[type="search"]').type('Israel');

        // Check that the inputs are disabled
        cy.get('input[name="firstName"]').should('be.disabled');
        cy.get('input[name="lastName"]').should('be.disabled');
        cy.get('input[name="email"]').should('be.disabled');
    });

    it('should enable inputs for supported country', () => {
        // Select a supported country
        cy.get('input[type="search"]').clear().type('Saudi Arabia{enter}');

        // Check that the inputs are enable
        cy.get('input[name="firstName"]').should('be.enabled');
        cy.get('input[name="lastName"]').should('be.enabled');
        cy.get('input[name="email"]').should('be.enabled');
        // cy.contains( 'Is authorized by the Vanuatu Financial Services Commission (“VFSC”) under the Financial Dealers Licensing Act [Cap70] Principal License, with registration number 17910. Registered Address: 1st Floor B&P House, Kumul Highway, Port Vila, Republic of Vanuatu.' ).should( 'be.visible' )
    });

    it('filling a form and register', () => {
        cy.get('input[type="search"]').clear().type('Saudi Arabia{enter}');
        cy.get('input[name="firstName"]').type('test');
        cy.get('input[name="lastName"]').type('test');
        cy.get('input[name="email"]').type('test12312312312312@test.com');
        cy.get('input[name="password"]').type('123123Aa');
        cy.get('input[type="tel"]').type('0500500505');
        cy.get('.checkbox.flip').check();
        cy.get('form').submit();
        // // Wait for the registration request to complete
        // cy.wait( '@registerUser', { timeout: 10000 } ).its( 'response.statusCode' ).should( 'eq', 200 );

        // // Check if the URL contains the token and redirects to the trade room
        // cy.url().should( 'include', '/trade-room?token=mocked-token' );
    });
});
