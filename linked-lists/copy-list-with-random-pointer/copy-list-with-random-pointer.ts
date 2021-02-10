class Node {
  val: number;
  next: Node | null;
  random: Node | null;
  constructor(val: number, next: Node | null, random: Node | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}

function copyRandomList(head: Node | null): Node | null {
  if (head === null) {
    return null;
  }
  let curr: Node | null = head;

  while (curr !== null) {
    const next: Node | null = curr.next;
    curr.next = new Node(curr.val, next, null);
    curr = next;
  }

  curr = head;

  while (curr !== null) {
    if (curr.random !== null) {
      curr.next!.random = curr.random.next;
    }
    curr = curr.next!.next;
  }

  curr = head;
  const headCopy: Node | null = head.next;

  while (curr !== null) {
    const next: Node | null = curr.next!.next;
    const c: Node | null = curr.next;
    curr.next = next;

    if (next !== null) {
      c!.next = next.next;
    }
    curr = next;
  }

  return headCopy;
}
