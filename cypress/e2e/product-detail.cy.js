/// <reference types="cypress" />

import HomePage from "../pages/HomePage"

const homePage = new HomePage();

describe("Open the product detail page", () => {
    beforeEach(() => {
        homePage.visit()
        homePage.visitProducten();
    })

    it("should be able to see product details", () => {
        cy.get(`[data-testid="product-card-0"]`).first().click()

        cy.contains("button", "Toevoegen aan mandje")
            .should("exist")
            .and("be.visible")

        cy.get(".product-price .fractional")
            .invoke("text")
            .then(text => {
                const price = parseInt(text.replace(/\D/g, "")) // remove any non-digits
                expect(price).to.be.a("number")
            })
    })
})