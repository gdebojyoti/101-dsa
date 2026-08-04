// leetcode #121 (dynamic programming)

function calculateMaximumProfit(prices: number[]): number {
  let leastCP = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    leastCP = prices[i] < leastCP ? prices[i] : leastCP;

    const profit = prices[i] - leastCP;
    if (maxProfit < profit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};