class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  };

  enterUsername(username) {
    return this.elements
      .usernameInput()
      .click()
      .then(() => this.elements.usernameInput().clear().type(username));
  }

  enterPassword(password) {
    return this.elements
      .passwordInput()
      .click()
      .then(() => this.elements.passwordInput().clear().type(password));
  }

  clickLogin() {
    return this.elements.loginButton().click();
  }

  login(username, password) {
    return this.enterUsername(username)
      .then(() => this.enterPassword(password))
      .then(() => this.clickLogin());
  }
}

export default new LoginPage();
