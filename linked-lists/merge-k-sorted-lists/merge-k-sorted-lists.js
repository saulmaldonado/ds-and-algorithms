class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
  if (lists.length === 0) {
    return null;
  }
  while (lists.length > 1) {
    const a = lists.shift();
    const b = lists.shift();
    const h = merge(a, b);
    lists.push(h);
  }
  return lists[0];
}

// divide and conquer
function mergeKLists2(lists) {
  if (lists.length === 0) {
    return null;
  }

  let interval = 1;

  while (interval < lists.length) {
    for (let i = 0; i + interval < lists.length; i += interval * 2) {
      lists[i] = merge(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }
  return lists[0];
}

function merge(a, b) {
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
