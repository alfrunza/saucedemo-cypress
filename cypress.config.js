const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'e6eqya',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: "https://www.saucedemo.com/",
    testIsolation: false,
  },
});
