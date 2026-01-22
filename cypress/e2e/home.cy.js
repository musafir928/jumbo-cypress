/// <reference types="cypress" />

it("should visit jumbo home page", () => {
    cy.visit("/");
    cy.title().should('include', 'Jumbo')
})