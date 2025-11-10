class HomePage {
  elements = {
    inventoryContainer: () => cy.get('[data-test="inventory-container"]'),
    productCards: () => cy.get('[data-test="inventory-item"]'),
    sortDropdown: () => cy.get('[data-test="product-sort-container"]'),
    productPrice: () => cy.get('[data-test="inventory-item-price"]'),
    productName: () => cy.get('[data-test="inventory-item-name"]'),
  };

  selectSortOption(option) {
    this.elements.sortDropdown().select(option);
  }
}

export default new HomePage();
