class Solution {
  public int numFactoredBinaryTrees(int[] arr) {
    int n = arr.length;
    if (n == 1) {
      return 1;
    }

    Arrays.sort(arr);

    int mod = 1_000_000_007;

    Map<Integer, Integer> map = new HashMap<Integer, Integer>();

    for (int i = 0; i < n; i++) {
      map.put(arr[i], i);
    }

    long[] dp = new long[n];
    dp[0] = 1;

    for (int i = 1; i < n; i++) {
      long count = 1;
      for (int j = 0; j < i; j++) {
        if (arr[i] % arr[j] == 0 && map.containsKey(arr[i] / arr[j])) {
          count += (dp[j] * dp[map.get(arr[i] / arr[j])]);
        }
      }
      dp[i] = count;
    }

    long sum = 0;

    for (long num : dp) {
      sum += num;
    }

    return (int) (sum % mod);

  }
}
