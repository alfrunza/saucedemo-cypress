import HomePage from "../pageobjects/HomePage.js";
import LoginPage from "../pageobjects/LoginPage.js";
import validUser from "../fixtures/validUser.json";

describe("Login functionality", () => {
  it("Logs in with valid credentials", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.fixture("validUser")
      .as("userData")
      .then((userData) => {
        LoginPage.login(userData.username, userData.password).then(() => {
          HomePage.elements.inventoryContainer().should("be.visible");
        });
      });
  });
});
