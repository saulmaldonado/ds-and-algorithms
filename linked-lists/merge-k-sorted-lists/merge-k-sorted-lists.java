
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode() {} ListNode(int val) { this.val = val; } ListNode(int val,
 * ListNode next) { this.val = val; this.next = next; } }
 */
class Solution {
  public ListNode mergeKLists(ListNode[] lists) {

    Comparator<ListNode> comp = new Comparator<>() {
      public int compare(ListNode l1, ListNode l2) {
        if (l1.val < l2.val) {
          return -1;
        } else if (l1.val == l2.val) {
          return 0;
        } else {
          return 1;
        }
      }
    };

    ListNode dummy = new ListNode();

    ListNode currentNode = dummy;

    PriorityQueue<ListNode> queue = new PriorityQueue<>(10, comp);

    for (ListNode l : lists) {
      if (l != null) {
        queue.add(l);
      }
    }

    while (!queue.isEmpty()) {
      ListNode heapHead = queue.poll();
      currentNode.next = heapHead;
      currentNode = currentNode.next;

      if (heapHead.next != null) {
        queue.offer(heapHead.next);
      }
    }

    return dummy.next;
  }

}

class Solution {
  public ListNode mergeKLists(ListNode[] lists) {
    if (lists.length == 0) {
      return null;
    }
    int interval = 1;
    while (interval < lists.length) {
      for (int i = 0; i + interval < lists.length; i = i + interval * 2) {
        lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
      }
      interval *= 2;
    }

    return lists[0];
  }

  public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode h = new ListNode(0);
    ListNode ans = h;
    while (l1 != null && l2 != null) {
      if (l1.val < l2.val) {
        h.next = l1;
        h = h.next;
        l1 = l1.next;
      } else {
        h.next = l2;
        h = h.next;
        l2 = l2.next;
      }
    }
    if (l1 == null) {
      h.next = l2;
    }
    if (l2 == null) {
      h.next = l1;
    }
    return ans.next;
  }
}
