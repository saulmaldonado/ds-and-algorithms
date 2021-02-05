/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class Solution {
  public ListNode reverseKGroup(ListNode head, int k) {

    ListNode dummy = new ListNode(0);
    ListNode prev = dummy;

    ListNode next = head;

    while (next != null) {
      ListNode tail = next; // reference to the first node of the group. After reversing the first node will
                            // be the last. This node will be linked to the head of the next group

      int i = 0;

      while (next != null && i < k) {
        next = next.next;
        i++;
      }

      if (i < k) {
        prev.next = tail;
        break;
      }

      prev.next = reverse(tail, k);
      prev = tail;
    }
    return dummy.next;
  }

  private ListNode reverse(ListNode head, int k) {
    ListNode prev = null;
    ListNode next = null;
    ListNode curr = head;

    while (curr != null && k > 0) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      k--;
    }

    head = prev;
    return head; // returns a reference of the first node
  }
}
