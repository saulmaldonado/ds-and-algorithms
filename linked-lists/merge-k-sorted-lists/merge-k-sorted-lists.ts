class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next?: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    const a = lists.shift() ?? null;
    const b = lists.shift() ?? null;
    const h = merge(a, b);
    lists.push(h);
  }
  return lists[0];
}

function merge(a: ListNode | null, b: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let currentNode = dummy;
  while (a !== null && b !== null) {
    if (a.val < b.val) {
      currentNode.next = a;
      a = a.next;
    } else {
      currentNode.next = b;
      b = b.next;
    }
    currentNode = currentNode.next;
  }
  if (a !== null) {
    currentNode.next = a;
  }
  if (b !== null) {
    currentNode.next = b;
  }
  return dummy.next;
}
