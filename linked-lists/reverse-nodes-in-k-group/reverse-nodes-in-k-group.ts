/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const dummy: ListNode = new ListNode();
  let prev: ListNode = dummy;

  let next: ListNode | null = head;

  while (next !== null) {
    let tail: ListNode | null = next;

    let i = 0;

    while (next !== null && i < k) {
      next = next.next;
      i++;
    }

    if (i < k) {
      prev.next = tail;
      break;
    }

    prev.next = reverse(tail, k);
    prev = tail;
  }

  return dummy.next;
}

function reverse(head: ListNode | null, k: number): ListNode | null {
  let prev: ListNode | null = null;
  let next: ListNode | null = null;
  let curr: ListNode | null = head;

  while (curr !== null && k > 0) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    k--;
  }

  head = prev;
  return head;
}
