describe('Mock Test', () => {

  beforeEach(() => {

  })

  it('Visits the initial project page', () => {
    cy.visit(Cypress.env('base_url'));
    cy.intercept('GET', '**/comments').as('getComments');
    cy.get("button[class=send-me]").click();

/*    cy.get("input[class=input-kakke]").type("FUCK");
    cy.get("input[class=input-kakke]").focus();
    cy.get("input[class=input-kakke]").should('have.value', "FUCK");
    cy.location("pathname").should("equal","/documents")*/

/*    cy.wait('@getComments').then((interception) => {
      cy.get("input[id=mongo]").should('have.value', "some comment");
      expect(interception?.response?.statusCode).to.be.equal(200);
    })*/
    cy.wait('@getComments').its("response.statusCode").should("eq", 200);
  })

})
