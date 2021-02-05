function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode();
  let prev = dummy;

  let next = head;

  while (next !== null) {
    let tail = next;

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
};

function reverse(head, k) {
  let prev = null;
  let next = null;
  let curr = head;

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
