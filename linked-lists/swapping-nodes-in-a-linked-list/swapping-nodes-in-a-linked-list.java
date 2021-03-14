/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class Solution {
  public ListNode swapNodes(ListNode head, int k) {
    List<ListNode> list = new ArrayList<>();

    ListNode curr = head;

    while (curr != null) {
      list.add(curr);
      curr = curr.next;
    }

    ListNode temp = list.get(k - 1);
    list.set(k - 1, list.get(list.size() - k));
    list.set(list.size() - k, temp);

    ListNode dummy = new ListNode();
    curr = dummy;

    for (ListNode node : list) {
      curr.next = node;
      curr = curr.next;
    }

    curr.next = null;

    return dummy.next;
  }

  public ListNode swapNodes2(ListNode head, int k) {
    ListNode beg = head;
    ListNode fast = head;
    ListNode slow = head;

    int i = 0;
    int pos = k - 1;

    while (fast.next != null) {
      if (i < pos) {
        beg = beg.next;
      } else {
        slow = slow.next;
      }
      fast = fast.next;
      i++;
    }

    int temp = beg.val;
    beg.val = slow.val;
    slow.val = temp;

    return head;

  }

  public ListNode swapNodes3(ListNode head, int k) {

    ListNode dummy = new ListNode(0, head);

    ListNode beg = head;
    ListNode slow = head;
    ListNode fast = head;

    ListNode begPrev = dummy;
    ListNode slowPrev = dummy;

    int i = 0;
    int pos = k - 1;

    while (fast.next != null) {
      if (i < pos) {
        beg = beg.next;
        begPrev = begPrev.next;
      } else {
        slow = slow.next;
        slowPrev = slowPrev.next;
      }
      fast = fast.next;
      i++;
    }

    begPrev.next = slow;
    slowPrev.next = beg;

    ListNode temp = beg.next;

    beg.next = slow.next;
    slow.next = temp;

    return dummy.next;
  }
}
