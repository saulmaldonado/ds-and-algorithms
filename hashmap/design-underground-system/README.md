# Design Underground System

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Implement the UndergroundSystem class:

- void checkIn(int id, string stationName, int t)
  - A customer with a card id equal to id, gets in the station stationName at time t.
  - A customer can only be checked into one place at a time.
- void checkOut(int id, string stationName, int t)
  - A customer with a card id equal to id, gets out from the station stationName at time t.
- double getAverageTime(string startStation, string endStation)
  - Returns the average time to travel between the startStation and the endStation.
  - The average time is computed from all the previous traveling from startStation to endStation that happened directly.
  - Call to getAverageTime is always valid.

You can assume all calls to checkIn and checkOut methods are consistent. If a customer gets in at time t1 at some station, they get out at time t2 with t2 > t1. All events happen in chronological order.

### Example 1

```
Input
["UndergroundSystem","checkIn","checkIn","checkIn","checkOut","checkOut","checkOut","getAverageTime","getAverageTime","checkIn","getAverageTime","checkOut","getAverageTime"]
[[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24],["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]

Output
[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]

Explanation
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);
undergroundSystem.checkOut(27, "Waterloo", 20);
undergroundSystem.checkOut(32, "Cambridge", 22);
undergroundSystem.getAverageTime("Paradise", "Cambridge");       // return 14.00000. There was only one travel from "Paradise" (at time 8) to "Cambridge" (at time 22)
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 11.00000. There were two travels from "Leyton" to "Waterloo", a customer with id=45 from time=3 to time=15 and a customer with id=27 from time=10 to time=20. So the average time is ( (15-3) + (20-10) ) / 2 = 11.00000
undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 12.00000
```

### Example 2

```
Input
["UndergroundSystem","checkIn","checkOut","getAverageTime","checkIn","checkOut","getAverageTime","checkIn","checkOut","getAverageTime"]
[[],[10,"Leyton",3],[10,"Paradise",8],["Leyton","Paradise"],[5,"Leyton",10],[5,"Paradise",16],["Leyton","Paradise"],[2,"Leyton",21],[2,"Paradise",30],["Leyton","Paradise"]]

Output
[null,null,null,5.00000,null,null,5.50000,null,null,6.66667]

Explanation
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(10, "Leyton", 3);
undergroundSystem.checkOut(10, "Paradise", 8);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.00000
undergroundSystem.checkIn(5, "Leyton", 10);
undergroundSystem.checkOut(5, "Paradise", 16);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 5.50000
undergroundSystem.checkIn(2, "Leyton", 21);
undergroundSystem.checkOut(2, "Paradise", 30);
undergroundSystem.getAverageTime("Leyton", "Paradise"); // return 6.66667
```

### Constraints

`There will be at most 20000 operations.`

`1 <= id, t <= 106`

`All strings consist of uppercase and lowercase English letters, and digits.`

`1 <= stationName.length <= 10`

`Answers within 10-5 of the actual value will be accepted as correct.`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Two HashMaps

We need to keep track of times people have checked in and checked out. For everytime a persons checks ins and checkouts we can get the time for their route by getting the difference of `checkoutTime - checkinTime`.

```
checkIn(id, stationName, checkInTime)

checkout(id, stationName, checkoutTime)

Time = checkoutTime - checkinTime
```

To calculate averages of specific routes we'll need to keep track of the difference in time between checkin and checkout everytime a person travels the specific route. We'll use two hashmaps, the first one with keep track of every time some one checkin in with the key being their `id` and the value being their checkin `stationName` plus their checkin time `t`. Space usage for the first hashmap is capped at the number of unique `ids` checked in. The second hashmap will keep track of the average times for every specific route where the key is the specific route and the value is the total number of times the route has been traveled and the sum of their times.

```
checkIn {
  ID: (stationName, checkInTime),
  ID: (stationName, checkInTime),
  ID: (stationName, checkInTime),
}

checkOut {
  ROUTE: (numberOfTimes, sumOfTravelTimes)
  ROUTE: (numberOfTimes, sumOfTravelTimes)
  ROUTE: (numberOfTimes, sumOfTravelTimes)
}
```

To organize the values by route we'll need to create a custom key that consists of the `startStation` and `endStation`. Something like `"startStation -> endStation"` would work. Every time some one checks out, we will find their checkin station and time from the checkin map. We'll than generate the route key and calculate the time by finding the differnce between the checkout time and the checkin time. The value for the route would then be updated by adding `1` to the number of times the route has been traveled and the sum of the times

To find the averages we'll generate the route by the given `startStation` and `endStation`. If the route exists in the map we'll calculate the average by taking the total sum of times and the number of times the route has been traveled.

```
checkOut {
  ROUTE: (numberOfTimes, sumOfTravelTimes)
  ROUTE: (numberOfTimes, sumOfTravelTimes)
  ROUTE: (numberOfTimes, sumOfTravelTimes)
}

avg = sumOfTravelTimes / numberOfTimes
```

Time: `O(1)`

Space: `O((N * N - 1) +`M`)` Where `N` is the total number of stations and `M` is the total number of unique `id`s

- [JavaScript](./design-underground-system.js)
- [TypeScript](./design-underground-system.ts)
- [Java](./design-underground-system.java)
- [Go](./design-underground-system.go)

</details>
