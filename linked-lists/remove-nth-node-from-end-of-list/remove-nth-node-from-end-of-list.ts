/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy: ListNode | null = new ListNode(0, head!);
  let first: ListNode | null = dummy;
  let second: ListNode | null = dummy;

  while (n >= 0) {
    n--;
    first = first!.next;
  }

  while (first !== null) {
    first = first.next;
    second = second!.next;
  }

  second!.next = second!.next!.next;
  return dummy.next;
}
