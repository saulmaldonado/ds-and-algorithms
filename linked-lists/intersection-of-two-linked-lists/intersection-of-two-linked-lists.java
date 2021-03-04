/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; next = null; } }
 */
public class Solution {
  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {

    if (headA == null || headB == null) {
      return null;
    }

    ListNode aPointer = headA;
    ListNode bPointer = headB;

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
}
