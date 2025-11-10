import HomePage from "../pageobjects/HomePage.js";
import LoginPage from "../pageobjects/LoginPage.js";

describe("Login functionality", () => {
  it("Logs in with valid credentials", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.fixture("valid-user")
      .as("userData")
      .then((userData) => {
        LoginPage.login(userData.username, userData.password).then(() => {
          HomePage.elements.inventoryContainer().should("be.visible");
        });
      });
  });

  it("Shows error message with invalid credentials", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.fixture("invalid-user")
      .as("userData")
      .then((userData) => {
        LoginPage.login(userData.username, userData.password).then(() => {
          LoginPage.elements.errorMessage().should("be.visible");
        });
      });
  });
});
