class UndergroundSystem {
  Map<Integer, Pair<String, Integer>> checkins;
  Map<String, Pair<Integer, Integer>> checkouts;

  public UndergroundSystem() {
    checkins = new HashMap<>();
    checkouts = new HashMap<>();
  }

  public void checkIn(int id, String stationName, int t) {
    checkins.put(id, new Pair<>(stationName, t));
  }

  public void checkOut(int id, String stationName, int t) {
    Pair<String, Integer> checkin = checkins.get(id);
    String route = checkin.getKey() + "->" + stationName;
    int time = t - checkin.getValue();
    Pair<Integer, Integer> checkout = checkouts.getOrDefault(route, new Pair<>(0, 0));
    checkouts.put(route, new Pair<>(checkout.getKey() + time, checkout.getValue() + 1));
  }

  public double getAverageTime(String startStation, String endStation) {
    String route = startStation + "->" + endStation;
    Pair<Integer, Integer> checkout = checkouts.get(route);
    return (double) checkout.getKey() / checkout.getValue();
  }
}

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * UndergroundSystem obj = new UndergroundSystem();
 * obj.checkIn(id,stationName,t); obj.checkOut(id,stationName,t); double param_3
 * = obj.getAverageTime(startStation,endStation);
 */
