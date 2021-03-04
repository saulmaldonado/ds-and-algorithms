function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }

  let aPointer = headA;
  let bPointer = headB;

  while (aPointer != bPointer) {
    aPointer = aPointer.next;
    bPointer = bPointer.next;

    if (aPointer == bPointer) {
      return aPointer;
    }

    if (aPointer == null) {
      aPointer = headB;
    }

    if (bPointer == null) {
      bPointer = headA;
    }
  }

  return aPointer;
}
