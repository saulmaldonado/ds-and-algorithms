function hasCycle(head: ListNode | null) {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }
  return false;
}
