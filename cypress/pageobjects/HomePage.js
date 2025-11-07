class HomePage {
  elements = {
    inventoryContainer: () => cy.get('[data-test="inventory-container"]'),
  };
}

module.exports = new HomePage();
