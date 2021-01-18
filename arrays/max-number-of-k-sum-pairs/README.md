# Max Number of K-Sum Pairs

## Difficulty

![Medium](https://img.shields.io/badge/medium-ef6c00?style=for-the-badge&logoColor=white)

## Problem:

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.

### Example 1:

```
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
```

### Example 2:

```
Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
```

### Constraints

`1 <= nums.length <= 105`

`1 <= nums[i] <= 109`

`1 <= k <= 109`

<details>
  <summary>Solutions (Click to expand)</summary>

### Explanation

There are two possible efficient solutions here. One avoid brute force and runs at `O(nlogn)` time with `O(1)` space. The other sacrifices `O(n)` space for an `O(n)` runtime.

#### Two pointers

This solution uses two pointer on a sorted array to find pairs that sum to `k`. Both start at each end `i, j` and move towards middle until they reach the same index. At each index, the sum of `nums[i] + nums[j]` will de compared to `k`. If the sum is equal to k the count if incremented by one and both pointer are moved towards the center simulating that both numbers have been removed from the array. If the sum is smaller than `k`, the left pointer `i` is moved to the right to a greater number to increase the sum. If the sum is greater than `k`, the `j` pointer is moved to the left to a smaller number to decrease the sum. Once all number have been visited, or `i == j` the count is incremented.

```
k = 5
[1,2,3,4]
 ^     ^
1 + 4 = 5 // 1 and 4 is a k-sum pair increment the count
-----------------------------------------------------------

k = 6
[1,2,3,4]
 ^     ^
 1 + 4 = 5 // sum is less than k increment the left pointer to increase the sum
 -----------------------------------------------------------

k = 4
[1,2,3,4]
^      ^
1 + 4 = 5 // sum is greater than k decrement the right pointer to decrease the sum
```

As an added optimization, every time we increment the `i` pointer or decrement the `j` pointer by itself, we can use a while loop to repeatedly move that pointer until we reach a new unique number. This will ensure we do not make unnecessary comparisons on repeated sums.

```
k = 6
[1,1,2,3,4]
 ^       ^
1 + 4 = 5 // sum is less than k, increment the left pointer until we find a new unique number

[1,1,2,3,4]
     ^   ^
2 + 4 = 6 // 2 and 4 is a k-sum pair, increment the count
```

#### Frequency Map

Imagine an array with only two different numbers and a `k` of 6

```
[2,2,2,4,4,4,4,4,4]
2 = 3
4 = 6
```

We can calculate the number of `k` sum pairs by taking the frequency of `2`s in the array and the frequency of `4`s in the array and finding the max number of pairs we can make out of them, or `min(frequency(2), frequency(4))`

We can apply this solution to a regular array by building a frequency map, iterating over the freq map and for every `i` key check if the frequency map also contains its complement or `k - i`. If it does we can find the number of possible pairs we can make out of these two number by using `min(freq(i), freq(k - i))`. To simulate removing the numbers from the array, set the frequencies of these numbers to 0.

One edge case we have to consider with this method is for number who's complement is itself
Example

```
k = 6
i = 3
k - i = 3
```

We cant take `min(freq(3), freq(3))` since we can only make `freq(3) / 2` numbers of pairs with itself.

- [JavaScript](./max-number-of-k-sum-pairs.js)
- [TypeScript](./max-number-of-k-sum-pairs.ts)
- [Java](./max-number-of-k-sum-pairs.java)
- [Go](./max-number-of-k-sum-pairs.go)
</details>
