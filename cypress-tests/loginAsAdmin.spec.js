context("Admin page", () => {

    beforeEach(() => {
        cy.visit("http://localhost:4000/login");
    })


    it("Should log in as admin 'balthazar'", () => {
        
        cy.get('#username').type('balthazar').should('have.value', 'balthazar');
        cy.get('#password').type('1234').should('have.value', '1234');
        cy.get('#post-login-form').submit();

    });

});