# Generate Random Point in a Circle

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem

Given the radius and x-y positions of the center of a circle, write a function randPoint which generates a uniform random point in the circle.

Note:

1. input and output values are in floating-point.
2. radius and x-y position of the center of the circle is passed into the class constructor.
3. a point on the circumference of the circle is considered to be in the circle.
4. randPoint returns a size 2 array containing x-position and y-position of the random point, in that order.

### Example 1

```
Input:
["Solution","randPoint","randPoint","randPoint"]
[[1,0,0],[],[],[]]
Output: [null,[-0.72939,-0.65505],[-0.78502,-0.28626],[-0.83119,-0.19803]]
```

### Example 2

```
Input:
["Solution","randPoint","randPoint","randPoint"]
[[10,5,-7.5],[],[],[]]
Output: [null,[11.52438,-8.33273],[2.46992,-16.21705],[11.13430,-12.42337]]
```

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

#### Random degree and Length from the Center

To get a random point in the circle we'll need a random radian value out of `0` to `2 * PI` and a random length from the center of the out of `0` to `radius`. We can then assume that our random point is at `rand(radius)` from the middle of the circle and at `rand(2 * PI)` radians. To find the coordinates we will use cosine to find `x` and sine to find `y`. If the point is `len` away from the middle and at `deg` degrees we can find `x` by `x_center + len * cos(deg)` and `y` by `y_center + len * sin(deg)`

Time: `O(1)`
Space: `O(1)`

- [JavaScript](./generate-random-point-in-a-circle.js)
- [TypeScript](./generate-random-point-in-a-circle.ts)
- [Java](./generate-random-point-in-a-circle.java)
- [Go](./generate-random-point-in-a-circle.go)

</details>
