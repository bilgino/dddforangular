import {HomePage} from '../pages/home-page'

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit(Cypress.env('base_url'))
    HomePage.getTitle().should('have.string', 'Cypi')
  })
})
