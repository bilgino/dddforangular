import { When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import {HomePage} from "../../pages/home-page";

When("I visit the homepage", () => {
  HomePage.visitHomePage()
});

Then("I see the placeholder {string}", (placeholderText) => {
  HomePage.getInputField().should(
    "have.attr",
    "placeholder",
    placeholderText
  );
});

Given('es gibt folgende Bohnenarten in der Anwendung', (dataTable: any) => {
  for (const row of dataTable.hashes()) {
    const id = row['Id'];
    const art = row['Bohne'];
    const ekp = row['Einkaufspreis in Euro'];
    const vkp = row['Verkaufspreis in Euro'];
    const marge = row['Marge in Prozent'];
    console.log(id, art, ekp, vkp);
  }
});
