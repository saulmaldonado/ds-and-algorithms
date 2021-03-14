/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function swapNodes(head, k) {
  const dummy = new ListNode(0, head);

  let beg = head;
  let slow = head;
  let fast = head;

  let begPrev = dummy;
  let slowPrev = dummy;

  let i = 0;
  let pos = k - 1;

  while (fast.next !== null) {
    if (i < pos) {
      beg = beg.next;
      begPrev = begPrev.next;
    } else {
      slow = slow.next;
      slowPrev = slowPrev.next;
    }
    fast = fast.next;
    i++;
  }

  begPrev.next = slow;
  slowPrev.next = beg;

  let temp = beg.next;

  beg.next = slow.next;
  slow.next = temp;

  return dummy.next;
}
