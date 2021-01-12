class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number, next: ListNode) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy: ListNode = new ListNode();

  let currentNode: ListNode | null = dummy;

  let carryOver: number = 0;

  while (l1 || l2) {
    let sum: number = 0;

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
