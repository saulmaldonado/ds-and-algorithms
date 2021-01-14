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
