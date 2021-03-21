class UndergroundSystem {
  checkins: Record<number, [string, number]>;
  checkouts: Record<string, [number, number]>;

  constructor() {
    this.checkins = {};
    this.checkouts = {};
  }

  checkIn(id: number, stationName: string, t: number): void {
    this.checkins[id] = [stationName, t];
  }

  checkOut(id: number, stationName: string, t: number): void {
    const checkin: [string, number] = this.checkins[id];
    const route: string = checkin[0] + '->' + stationName;
    const time: number = t - checkin[1];

    if (!this.checkouts[route]) {
      this.checkouts[route] = [0, 0];
    }

    this.checkouts[route][0] += time;
    this.checkouts[route][1]++;
  }

  getAverageTime(startStation: string, endStation: string): number {
    const route: string = startStation + '->' + endStation;
    const checkout: [number, number] = this.checkouts[route];
    return checkout[0] / checkout[1];
  }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
