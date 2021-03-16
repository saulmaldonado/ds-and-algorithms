/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
  const dummyOne: ListNode = new ListNode();
  const dummyTwo: ListNode = new ListNode();

  let currOne: ListNode = dummyOne;
  let currTwo: ListNode = dummyTwo;

  let curr: ListNode | null = head;

  while (curr != null) {
    if (curr.val < x) {
      currOne.next = curr;
      currOne = currOne.next;
    } else {
      currTwo.next = curr;
      currTwo = currTwo.next;
    }
    curr = curr.next;
  }

  currTwo.next = null;
  currOne.next = dummyTwo.next;

  return dummyOne.next;
}
