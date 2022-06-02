context('Cypress.Auth', () => {
    beforeEach(() => {
        cy.log('Authorization pending')
        return cy.login()
    })

    it('Check login step', () => {
        cy.get('[data-testid="input-email"]').type('saidabror@abutech.uz')
        cy.get('[data-testid="input-password"]').type('1111')
        cy.get("[data-testid='loginBtn']").click()
        cy.url().should('include', '/')
    })
});
