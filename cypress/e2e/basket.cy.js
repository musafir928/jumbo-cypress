/// <reference types="cypress" />

import HomePage from "../pages/HomePage";

const homePage = new HomePage();
const productNumber = 0;

describe("basket functionality", () => {

    beforeEach(() => {
        homePage.visitProducten();

        cy.get('[data-testid^="product-card-"]', { timeout: 10000 })
            .should('have.length.at.least', 1);

        cy.get(`[data-testid="product-card-${productNumber}"]`)
            .first()
            .should('be.visible')
            .click();

        cy.wait(4000);
        cy.get('body').then($body => {
            if ($body.find('#onetrust-accept-btn-handler').length) {
                cy.get('#onetrust-accept-btn-handler').click()
            }
        })


        cy.contains("button", "Toevoegen aan mandje", { timeout: 10000 })
            .should("be.visible")
            .and("be.enabled")
            .click();

        cy.get(".basket-button .count", { timeout: 5000 })
            .should("be.visible")
            .and("have.text", "1");
    });

    it("should be able to add product to the basket from details page", () => {
        cy.get('[data-testid="add-button"]')
            .first()
            .should("be.visible")
            .click();

        cy.get(".basket-button .count")
            .should("have.text", "2");
    });

    it("should be able to remove product from the basket from details page", () => {
        cy.get('[data-testid="add-button"]')
            .first()
            .should("be.visible")
            .click();

        cy.get(".basket-button .count")
            .should("have.text", "2");

        cy.get('[data-testid="remove-button"]')
            .first()
            .should("be.visible")
            .click();

        cy.get(".basket-button .count")
            .should("have.text", "1");
    });

    it("basket page should have correct count of products", () => {
        cy.get('[data-testid="add-button"]')
            .first()
            .should("be.visible")
            .click();

        cy.get(".basket-button .count")
            .should("have.text", "2");

        homePage.visitMandje();

        cy.get(".jum-quantity-button-container", { timeout: 10000 })
            .should("be.visible");

        cy.get(".jum-quantity-button-container span", { timeout: 10000 })
            .should("have.text", "2");
    });

    it("basket page should have remove products option", () => {
        homePage.visitMandje();

        cy.get(".card-line-item-actions__remove-button", { timeout: 10000 })
            .should("be.visible")
            .click();

        cy.get('[data-testid="add-button"]')
            .should("not.exist");
    });
});