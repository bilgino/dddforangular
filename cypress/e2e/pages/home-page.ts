export class HomePage {
  static getTitle(){
    return cy.title()
  }

  static visitHomePage(){
    return cy.visit('http://localhost:4200');
  }

  static getInputField(){
    return cy.get('#mongo');
  }
}
