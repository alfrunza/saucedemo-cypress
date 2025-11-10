class LoginPage {
  // Define selectors
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('[data-test="login-button"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
  };

  // Method to enter username
  enterUsername(username) {
    return this.elements
      .usernameInput()
      .click()
      .then(() => this.elements.usernameInput().clear().type(username));
  }

  // Method to enter password
  enterPassword(password) {
    return this.elements
      .passwordInput()
      .click()
      .then(() => this.elements.passwordInput().clear().type(password));
  }

  // Method to click login button
  clickLogin() {
    return this.elements.loginButton().click();
  }

  // Method to perform login
  login(username, password) {
    return this.enterUsername(username)
      .then(() => this.enterPassword(password))
      .then(() => this.clickLogin());
  }
}

export default new LoginPage();
