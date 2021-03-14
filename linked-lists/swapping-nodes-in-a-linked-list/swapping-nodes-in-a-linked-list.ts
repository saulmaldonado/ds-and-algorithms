function swapNodes(head: ListNode, k: number): ListNode {
  const dummy: ListNode = new ListNode(0, head);

  let beg: ListNode = head;
  let slow: ListNode = head;
  let fast: ListNode = head;

  let begPrev: ListNode = dummy;
  let slowPrev: ListNode = dummy;

  let i: number = 0;
  let pos: number = k - 1;

  while (fast.next !== null) {
    if (i < pos) {
      beg = beg.next!;
      begPrev = begPrev.next!;
    } else {
      slow = slow.next!;
      slowPrev = slowPrev.next!;
    }
    fast = fast.next;
    i++;
  }

  begPrev.next = slow;
  slowPrev.next = beg;

  let temp: ListNode | null = beg.next;

  beg.next = slow.next;
  slow.next = temp;

  return dummy.next!;
}
