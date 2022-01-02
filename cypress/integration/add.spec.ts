/// <reference types="Cypress" />

describe("Add", () => {
  it("should add a present if the user fills all inputs", () => {
    cy.visit("http://localhost:3000");

    // cy.get("#remove-all").click();
    cy.get("#add").click();

    cy.get("#new-gift").within((_form) => {
      cy.get('[name="gift"]').type("Chocolates");
      cy.get('[name="receiver"]').type("Kahdri");
      cy.get('[name="quantity"]').type("6");
      cy.get('[name="cost"]').type("100");
      cy.get('[name="url"]').type("//placeholder.it/64x64");

      cy.root().submit();
    });
    cy.get('[data-testid="gift-item"]').its("length").should("be.at.least", 1);
  });
});
