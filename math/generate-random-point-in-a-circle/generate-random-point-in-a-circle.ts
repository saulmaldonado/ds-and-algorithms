class Solution {
  radius: number;
  x: number;
  y: number;

  constructor(radius: number, x_center: number, y_center: number) {
    this.radius = radius;
    this.x = x_center;
    this.y = y_center;
  }

  randPoint(): number[] {
    const len = Math.sqrt(Math.random()) * this.radius;
    const deg = Math.random() * 2 * Math.PI;
    const x = this.x + len * Math.cos(deg);
    const y = this.y + len * Math.sin(deg);

    return [x, y];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
