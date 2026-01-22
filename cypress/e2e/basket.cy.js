/// <reference types="cypress" />

import HomePage from "../pages/HomePage"

const homePage = new HomePage();
const productNumber = 0;

describe("basket functionality", () => {

    beforeEach(() => {
        homePage.visit();
        homePage.goToProducten();
        cy.get(`[data-testid="product-card-${productNumber}"]`).first().click();

        cy.wait(1000);

        cy.get('body').then($body => {
            if ($body.find('#onetrust-accept-btn-handler').length) {
                cy.get('#onetrust-accept-btn-handler').then($btn => {
                    cy.wrap($btn).click();
                });
            }
        });

        cy.contains("button", "Toevoegen aan mandje")
            .should("be.visible")
            .click();
    });

    afterEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
    });

    it("should be able to add product to the basket from details page", () => {
        cy.get(`[data-testid="add-button"]`).first().click();

        cy.get(".basket-button .count")
            .should("have.text", "2");
    });

    it("should be able to remove product from the basket from details page", () => {
        cy.get(`[data-testid="add-button"]`).first().click();

        cy.get(".basket-button .count")
            .should("have.text", "2");

        cy.get(`[data-testid="remove-button"]`).first().click();

        cy.get(".basket-button .count")
            .should("have.text", "1");
    });

    it("basket page should have correct count of products", () => {
        cy.get(`[data-testid="add-button"]`).first().click();

        cy.get(".basket-button .count")
            .should("have.text", "2");

        homePage.goToMandje();

        cy.contains(".jum-quantity-button-container span", "2")
            .should("exist");
    });

    it("basket page should have remove products option", () => {
        homePage.goToMandje();

        cy.get(".card-line-item-actions__remove-button").click();

        cy.get(".basket-products").find(`[data-testid="add-button"]`).should("not.exist");
    });
});
