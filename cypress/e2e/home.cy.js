/// <reference types="cypress" />
import HomePage from '../pages/HomePage'

describe('Home Page Navigation - Jumbo', () => {
    const homePage = new HomePage()

    beforeEach(() => {
        homePage.visit()
    })

    it('should display all main navigation options', () => {
        homePage.verifyPageTitle()
        homePage.verifyNavigationVisible()
    })

    it('should navigate to Producten page', () => {
        homePage.goToProducten()
    })

    it('should navigate to Recepten page', () => {
        homePage.goToRecepten()
    })

    it('should navigate to Aanbiedingen page', () => {
        homePage.goToAanbiedingen()
    })

    it('should navigate to Mandje page', () => {
        homePage.goToMandje()
    })
})
