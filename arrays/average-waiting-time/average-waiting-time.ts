function averageWaitingTime(customers: number[][]): number {
  let chef: number = 0;
  let timeWaited: number = 0;

  for (let i = 0; i < customers.length; i++) {
    chef = Math.max(chef, customers[i][0]) + customers[i][1];

    timeWaited += chef - customers[i][0];
  }

  return timeWaited / customers.length;
}
