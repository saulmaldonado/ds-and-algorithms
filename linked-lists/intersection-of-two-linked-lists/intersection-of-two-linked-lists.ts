function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }

  let aPointer: ListNode | null = headA;
  let bPointer: ListNode | null = headB;

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
