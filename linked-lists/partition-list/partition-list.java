/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class Solution {
  public ListNode partition(ListNode head, int x) {
    ListNode dummyOne = new ListNode();
    ListNode dummyTwo = new ListNode();

    ListNode currOne = dummyOne;
    ListNode currTwo = dummyTwo;

    ListNode curr = head;

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
}
