/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let chef = 0;
  let timeWaited = 0;

  for (let i = 0; i < customers.length; i++) {
    chef = Math.max(chef, customers[i][0]) + customers[i][1];

    timeWaited += chef - customers[i][0];
  }

  return timeWaited / customers.length;
};
