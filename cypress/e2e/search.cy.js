import HomePage from "../pages/HomePage"

const homePage = new HomePage();

describe('Search Products - Jumbo', () => {
    it('searches for Unicorn and verifies results', () => {
        homePage.visit();

        cy.get(`.nav-bar > [data-testid="jum-search-bar"]`)
            .type('Unicorn{enter}')

        cy.get('.product-results-list .product-container', { timeout: 10000 })
            .should('exist')

        cy.get('.product-results-list .product-container .content a')
            .each($el => {
                cy.wrap($el)
                    .invoke('text')
                    .should('contain', 'Unicorn')
            })

        cy.get('.product-results-list .product-container')
            .each($el => {
                cy.wrap($el)
                    .find('.product-price, .fractional')
                    .invoke("text")
                    .then($t => parseInt($t) >= 0)
            })
    })
})
