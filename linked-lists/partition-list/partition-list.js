function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
  const dummyOne = new ListNode();
  const dummyTwo = new ListNode();

  let currOne = dummyOne;
  let currTwo = dummyTwo;

  let curr = head;

  while (curr != null) {
    if (curr.val < x) {
      currOne.next = curr;
      currOne = currOne.next;
    } else {
      currTwo.next = curr;
      currTwo = currTwo.next;
    }
    curr = curr.next;
  }

  currTwo.next = null;
  currOne.next = dummyTwo.next;

  return dummyOne.next;
}
