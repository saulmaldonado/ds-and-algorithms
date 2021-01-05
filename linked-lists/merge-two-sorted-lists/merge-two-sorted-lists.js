class ListNode {
  val;
  next;

  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists(l1, l2) {
  let i = l1;
  let j = l2;

  const dummyNode = new ListNode();
  let currentNode = dummyNode;

  while (i !== null && j !== null) {
    const iVal = i.val;
    const jVal = j.val;

    if (iVal <= jVal) {
      currentNode.next = i;
      currentNode = currentNode.next;
      i = i.next;
    } else {
      currentNode.next = j;
      currentNode = currentNode.next;
      j = j.next;
    }
  }

  if (i !== null) {
    currentNode.next = i;
  } else {
    currentNode.next = j;
  }

  return dummyNode.next;
}
