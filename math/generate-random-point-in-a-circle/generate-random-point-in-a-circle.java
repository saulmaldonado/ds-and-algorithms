class Solution {
  double radius;
  double x;
  double y;

  public Solution(double radius, double x_center, double y_center) {
    this.radius = radius;
    this.x = x_center;
    this.y = y_center;
  }

  public double[] randPoint() {
    double len = Math.sqrt(Math.random()) * radius;
    double deg = Math.random() * 2 * Math.PI;
    double x = this.x + len * Math.cos(deg);
    double y = this.y + len * Math.sin(deg);

    return new double[] { x, y };
  }
}

/**
 * Your Solution object will be instantiated and called as such: Solution obj =
 * new Solution(radius, x_center, y_center); double[] param_1 = obj.randPoint();
 */
