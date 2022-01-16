/// <reference types="Cypress" />

import {DEFAULT_GIFTS} from "../../src/utils";

const firstGift = DEFAULT_GIFTS[0];

describe("Gifts", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="gift-item"]', {timeout: 5000}).should("be.visible");
  });

  it("should display the gifts correctly", () => {
    cy.get('[data-testid="gift-item"]')
      .first()
      .within(() => {
        cy.get("h3").should("have.text", firstGift.name);
        cy.contains(firstGift.receiver).should("be.visible");
        cy.get("img")
          .should("have.attr", "src", firstGift.img_src)
          .should("have.attr", "alt", firstGift.name);
      });
  });

  it("should open details on expand click", () => {
    cy.get('[data-testid="gift-item"]').first().click();
    cy.get(".details")
      .should("be.visible")
      .within(() => {
        cy.contains(`${firstGift.quantity} ud.`).should("be.visible");
        cy.contains(firstGift.cost.toLocaleString("es-AR")).should("be.visible");
      });

    cy.get('[data-testid="gift-buttons"]')
      .should("be.visible")
      .within(() => {
        cy.get(`[aria-label="Eliminar ${firstGift.name}"]`).should("be.visible");
      });
  });
});
