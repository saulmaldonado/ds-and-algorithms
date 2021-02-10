function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {Node} head
 * @return {Node}
 */
function copyRandomList(head) {
  if (head === null) {
    return null;
  }
  let curr = head;

  while (curr !== null) {
    const next = curr.next;
    curr.next = new Node(curr.val, next, null);
    curr = next;
  }

  curr = head;

  while (curr !== null) {
    if (curr.random !== null) {
      curr.next.random = curr.random.next;
    }
    curr = curr.next.next;
  }

  curr = head;
  const headCopy = head.next;

  while (curr !== null) {
    const next = curr.next.next;
    const c = curr.next;
    curr.next = next;

    if (next !== null) {
      c.next = next.next;
    }
    curr = next;
  }

  return headCopy;
}
