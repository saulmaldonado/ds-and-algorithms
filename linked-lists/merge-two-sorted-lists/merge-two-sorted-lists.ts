class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
  let i: ListNode | null = l1;
  let j: ListNode | null = l2;

  const dummyNode = new ListNode();
  let currentNode: ListNode | null = dummyNode;

  while (i !== null && j !== null) {
    const iVal: number = i.val;
    const jVal: number = j.val;

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
