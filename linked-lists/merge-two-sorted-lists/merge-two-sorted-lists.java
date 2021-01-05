public class ListNode {
  int val;
  ListNode next;

  ListNode() {
  }

  ListNode(int val) {
    this.val = val;
  }

  ListNode(int val, ListNode next) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode i = l1;
    ListNode j = l2;
    ListNode dummy = new ListNode(0, l1);
    ListNode currentNode = dummy;

    while (i != null && j != null) {
      int iValue = i.val;
      int jValue = j.val;

      if (iValue <= jValue) {
        currentNode.next = i;
        currentNode = currentNode.next;
        i = i.next;
      } else {
        currentNode.next = j;
        currentNode = currentNode.next;
        j = j.next;
      }
    }

    if (i != null) {
      currentNode.next = i;
    } else {
      currentNode.next = j;
    }

    return dummy.next;
  }
}
