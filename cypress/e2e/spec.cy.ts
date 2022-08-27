import {HomePage} from '../page-objects/home-page.po'

describe('My First Test', () => {
  const homePage = new HomePage();
  it('Visits the initial project page', () => {
    cy.visit('/')
    homePage.getTitle().should('have.string', 'Cypi')
  })
})
