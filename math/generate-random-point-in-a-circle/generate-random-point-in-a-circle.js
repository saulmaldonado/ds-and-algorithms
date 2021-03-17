/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
function Solution(radius, x_center, y_center) {
  this.radius = radius;
  this.x = x_center;
  this.y = y_center;
}

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
  const len = Math.sqrt(Math.random()) * this.radius;
  const deg = Math.random() * 2 * Math.PI;
  const x = this.x + len * Math.cos(deg);
  const y = this.y + len * Math.sin(deg);

  return [x, y];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
