describe('FeesPage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/evest-trading-fees');
    });

    it('pages Loads ', () => {
        cy.contains('Evest Trading Fees').should('be.visible');
    });

    it('SpreadTable is visible and working', () => {
        cy.wait(2000);
        //table exist and there is content in the rows
        cy.get('table.table.table-zebra.w-full').should('exist');
        cy.get('table.table.table-zebra.w-full tbody tr').should(
            'have.length.greaterThan',
            1
        );
        cy.get('table.table.table-zebra.w-full tbody tr td').should(
            'have.length.greaterThan',
            1
        );
    });

    // it('tabs of SpreadTable is working', () => {
    //     //table exist and there is content in the rows
    //     cy.get('table.table.table-zebra.w-full').should('exist');
    //     cy.get('table.table.table-zebra.w-full tbody tr').should(
    //         'have.length.greaterThan',
    //         1,
    //     );
    //     cy.get('table.table.table-zebra.w-full tbody tr td').should(
    //         'have.length.greaterThan',
    //         1,
    //     );
    // });

    it('costTabel is visible and working', () => {
        cy.wait(2000);
        //table exist and there is content in the rows  table table-zebra w-full border-separate border-spacing-0
        cy.get(
            'table.table.table-zebra.w-full.border-separate.border-spacing-0'
        ).should('exist');
        cy.get(
            'table.table.table-zebra.w-full.border-separate.border-spacing-0 tbody tr'
        ).should('have.length.greaterThan', 1);
        cy.get(
            'table.table.table-zebra.w-full.border-separate.border-spacing-0 tbody tr td'
        ).should('have.length.greaterThan', 1);
    });
});
