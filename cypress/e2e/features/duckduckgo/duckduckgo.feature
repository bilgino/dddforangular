Feature: homepage
  Scenario: visiting the homepage
    When I visit the homepage
    Then I see the placeholder "es war einmal"


  Scenario: give beans
    Given es gibt folgende Bohnenarten in der Anwendung
      | Id | Bohne     | Einkaufspreis in Euro | Marge in Prozent | Verkaufspreis in Euro | Rabatt |
      | 1  | Äthiopien | 10.00                 | 30               | 13.00  | 0.00   |
