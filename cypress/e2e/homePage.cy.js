import HomePage from "../pageobjects/HomePage.js";
import Utils from "../support/utils.js";

describe("Home Page Sort", () => {
  before(() => {
    cy.fixture("valid-user")
      .as("userData")
      .then((userData) => {
        cy.login(userData.username, userData.password);
        cy.url().should("include", "/inventory.html");
      });
  });

  after(() => {
    cy.clearAllSessionStorage();
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Sorts products by price (low to high)", () => {
    HomePage.selectSortOption("lohi");

    const priceList = [];

    HomePage.elements
      .productCards()
      .each(($item) => {
        cy.wrap($item).within(() => {
          HomePage.elements.productPrice().then(($price) => {
            priceList.push($price.text());
          });
        });
      })
      .then(() => {
        const parsedPrices = Utils.parsePrices(priceList);
        const sortedPrices = parsedPrices.slice().sort((a, b) => a - b);

        expect(parsedPrices).to.deep.equal(sortedPrices);
      });
  });

  it("Sorts products by price (high to low)", () => {
    HomePage.selectSortOption("hilo");

    const priceList = [];

    HomePage.elements
      .productCards()
      .each(($item) => {
        cy.wrap($item).within(() => {
          HomePage.elements.productPrice().then(($price) => {
            priceList.push($price.text());
          });
        });
      })
      .then(() => {
        const parsedPrices = Utils.parsePrices(priceList);
        const sortedPrices = parsedPrices
          .slice()
          .sort((a, b) => a - b)
          .reverse();

        expect(parsedPrices).to.deep.equal(sortedPrices);
      });
  });

  it("Sorts products by name (A to Z)", () => {
    HomePage.selectSortOption("az");

    const nameList = [];

    HomePage.elements
      .productCards()
      .each(($item) => {
        cy.wrap($item).within(() => {
          HomePage.elements.productName().then(($name) => {
            nameList.push($name.text());
          });
        });
      })
      .then(() => {
        const sortedNames = nameList.slice().sort();

        expect(nameList).to.deep.equal(sortedNames);
      });
  });

  it("Sorts products by name (Z to A)", () => {
    HomePage.selectSortOption("za");

    const nameList = [];

    HomePage.elements
      .productCards()
      .each(($item) => {
        cy.wrap($item).within(() => {
          HomePage.elements.productName().then(($name) => {
            nameList.push($name.text());
          });
        });
      })
      .then(() => {
        const sortedNames = nameList.slice().sort().reverse();

        expect(nameList).to.deep.equal(sortedNames);
      });
  });
});
