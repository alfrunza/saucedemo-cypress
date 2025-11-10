const parsePrices = (priceList) => {
  return priceList.map((price) => price.replace("$", "")).map(parseFloat);
};

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
