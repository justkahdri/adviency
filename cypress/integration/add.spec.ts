/// <reference types="Cypress" />

const fillForm = ({name, receiver, quantity, cost, url}) => {
  cy.get('[name="gift"]').type(name);
  cy.get('[name="receiver"]').type(receiver);
  cy.get('[name="quantity"]').type(quantity);
  cy.get('[name="cost"]').type(cost);
  cy.get('[name="url"]').type(url);
};

describe("Add", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");

    // cy.get("#remove-all").click();
    cy.get("#add").click();
  });

  it("should display the form on drawer", () => {
    cy.get("#new-gift").should("be.visible");
  });

  it("should close the form on close button", () => {
    cy.contains(/cancelar/i).click();
    cy.get("#new-gift").should("not.exist");
  });

  it("should add a present if the user fills all inputs", () => {
    cy.get("#new-gift").within(() => {
      fillForm({
        name: "Chocolates",
        receiver: "Dummy",
        quantity: "6",
        cost: "100",
        url: "http://placehold.it/64x64",
      });
      cy.root().submit();
    });

    cy.get('[data-testid="gift-item"]').its("length").should("be.at.least", 1);
  });
});
