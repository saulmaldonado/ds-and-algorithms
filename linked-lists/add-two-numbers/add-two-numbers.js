/**
 * Definition for singly-linked list.
 *
 */

class ListNode {
  val;
  next;
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const dummy = new ListNode();

  let currentNode = dummy;

  let carryOver = 0;

  while (l1 || l2) {
    let sum = 0;

    if (l1) {
      sum += l1.val;
    }

    if (l2) {
      sum += l2.val;
    }

    sum += carryOver;
    carryOver = Math.floor(sum / 10);

    sum %= 10;

    currentNode.next = new ListNode(sum);
    currentNode = currentNode.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (carryOver) {
    currentNode.next = new ListNode(carryOver);
  }

  return dummy.next;
}
