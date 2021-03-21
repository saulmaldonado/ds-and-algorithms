function UndergroundSystem() {
  this.checkins = {};
  this.checkouts = {};
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkins[id] = [stationName, t];
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const checkin = this.checkins[id];
  const route = checkin[0] + '->' + stationName;
  const time = t - checkin[1];

  if (!this.checkouts[route]) {
    this.checkouts[route] = [0, 0];
  }

  this.checkouts[route][0] += time;
  this.checkouts[route][1]++;
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  const route = startStation + '->' + endStation;
  const checkout = this.checkouts[route];
  return checkout[0] / checkout[1];
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
