class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
  };

  enterUsername(username) {
    this.elements
      .usernameInput()
      .click()
      .then(() => this.elements.usernameInput().clear().type(username));
  }

  enterPassword(password) {
    this.elements
      .passwordInput()
      .click()
      .then(() => this.elements.passwordInput().clear().type(password));
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
}

module.exports = new LoginPage();
