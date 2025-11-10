/**
 * Parses a list of price strings by removing the dollar sign and converting to numbers.
 * @param {string[]} priceList - An array of price strings (e.g., ["$10.99", "$5.50"]).
 * @returns {number[]} An array of parsed numbers (e.g., [10.99, 5.5]).
 */
const parsePrices = (priceList) => {
  return priceList.map((price) => price.replace("$", "")).map(parseFloat);
};

/**
 * Sorts a list of prices in ascending or descending order.
 * @param {number[]} list of prices
 * @param {string} order - "ascending" or "descending"
 * @returns {number[]} Sorted array of prices
 */
const sortPrices = (prices, order) => {
  const sortedPrices = prices.slice().sort((a, b) => {
    return a - b;
  });

  if (order === "descending") {
    return sortedPrices.reverse();
  }
  return sortedPrices;
};

export default {
  parsePrices,
  sortPrices,
};
