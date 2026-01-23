function acceptCookiesIfPresent() {
    cy.get('body').then($body => {
        if ($body.find('#onetrust-accept-btn-handler').length) {
            cy.get('#onetrust-accept-btn-handler').click()
        }
    })
}

class HomePage {
    /**
     * this function is to handle cookie banner 
     * visit() functions takes onLoad as cb
     * onload helps us to make sure page fully loaded
     * this will handle page synchronization racing issue
     */
    visit() {
        cy.visit('/', {
            onLoad() {
                cy.get('body').then($body => {
                    if ($body.find('#onetrust-accept-btn-handler').length) {
                        cy.get('#onetrust-accept-btn-handler').click()
                    }
                })
            }
        })
    }

    /**
    * this function is to handle cookie banner 
    * visit() functions takes onLoad as cb
    * onload helps us to make sure page fully loaded
    * this will handle page synchronization racing issue
    */
    visitProducten() {
        cy.visit('/producten', {
            onLoad() {
                cy.get('body').then($body => {
                    if ($body.find('#onetrust-accept-btn-handler').length) {
                        cy.get('#onetrust-accept-btn-handler').click()
                    }
                })
            }
        })
    }

    /**
    * this function is to handle cookie banner 
    * visit() functions takes onLoad as cb
    * onload helps us to make sure page fully loaded
    * this will handle page synchronization racing issue
    */
    visitMandje() {
        cy.visit('/mandje', {
            onLoad() {
                cy.get('body').then($body => {
                    if ($body.find('#onetrust-accept-btn-handler').length) {
                        cy.get('#onetrust-accept-btn-handler').click()
                    }
                })
            }
        })
    }

    productenLink() {
        return cy.contains('a', 'Producten')
    }

    receptenLink() {
        return cy.contains('a', 'Recepten')
    }

    aanbiedingenLink() {
        return cy.contains('a', 'Aanbiedingen')
    }

    mandjeIcon() {
        return cy.get(`[data-testid="basket-button"]`)
    }

    // --- Assertions ---
    verifyPageTitle() {
        cy.title().should('match', /jumbo/i)
    }

    verifyNavigationVisible() {
        this.productenLink().should('be.visible')
        this.receptenLink().should('be.visible')
        this.aanbiedingenLink().should('be.visible')
        this.mandjeIcon().should('be.visible')
    }

    goToProducten() {
        this.productenLink().click()
        cy.get('[data-testid="products-title"]')
            .should('be.visible')
            .and('contain.text', 'Producten')
    }

    goToRecepten() {
        this.receptenLink().click()
        cy.location('pathname').should('include', '/recepten')
    }

    goToAanbiedingen() {
        this.aanbiedingenLink().click()
        cy.location('pathname').should('include', '/aanbiedingen')
    }

    goToMandjeWithButton() {
        this.mandjeIcon().click()
    }
}

export default HomePage
