class Solution {
  public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode();

    ListNode currentNode = dummy;

    int carryOver = 0;

    while(l1 != null || l2 != null) {
      int sum = 0;

      if (l1 != null) {
        sum += l1.val;
      }

      if (l2 != null) {
        sum += l2.val;
      }

      sum += carryOver;

      carryOver = sum / 10;

      sum %= 10;

      currentNode.next = new ListNode(sum);
      currentNode = currentNode.next;
      if(l1 != null) {
        l1 = l1.next;
      }

      if(l2 != null) {
        l2 = l2.next;
      }
    }

    if(carryOver > 0) {
      currentNode.next = new ListNode(carryOver);
    }

    return dummy.next;
  }
}
