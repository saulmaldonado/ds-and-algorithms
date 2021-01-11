class Solution {
  public double averageWaitingTime(int[][] customers) {
    double chef = 0;
    double timeWaited = 0;

    for (int i = 0; i < customers.length; i++) {
      chef = (Math.max(chef, (double) customers[i][0]) + customers[i][1]);

      timeWaited += (chef - customers[i][0]);
    }

    return timeWaited / customers.length;

  }
}
