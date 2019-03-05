/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    prices[i] - prices[i - 1] > 0 ? profit += prices[i] - prices[i - 1] : null; 
  }
  return profit;
};

/* var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    prices[i + 1] - prices[i] > 0 ? profit += prices[i + 1] - prices[i] : null; 
  }
  return profit;
}; */