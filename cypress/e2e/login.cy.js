describe('Login - Jumbo', () => {
    it('logs in via homepage and shows user first name', () => {
        cy.visit("/")
        cy.get('#onetrust-accept-btn-handler').then($btn => {
            if ($btn.is(':visible')) $btn.click()
        })

        cy.contains("span", "Inloggen", { timeout: 10000 }).click()

        cy.url({ timeout: 20000 }).should('include', 'auth.jumbo.com')

        cy.origin(
            'https://auth.jumbo.com',
            {
                args: {
                    email: Cypress.env('EMAIL'),
                    password: Cypress.env('PASSWORD'),
                },
            },
            ({ email, password }) => {
                cy.get('#username').type(email)
                cy.get('#password').type(password, { log: false })
                cy.contains('button', 'Inloggen').click()
            }
        )

        cy.url({ timeout: 20000 }).should('include', 'www.jumbo.com')
        cy.get('[data-label="Adil"]')
            .should('exist')
            .and('be.visible')
    })
})
