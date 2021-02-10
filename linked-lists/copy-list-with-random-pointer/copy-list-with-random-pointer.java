class Solution {
  public Node copyRandomList(Node head) {

    if (head == null)
      return null;
    Node curr = head;

    while (curr != null) {
      Node temp = curr.next;
      curr.next = new Node(curr.val, temp, null);
      curr = temp;
    }

    curr = head;

    while (curr != null) {
      if (curr.random != null) {
        curr.next.random = curr.random.next;
      }
      curr = curr.next.next;
    }

    curr = head;
    Node copy = head.next;

    while (curr != null) {
      Node next = curr.next.next;
      Node c = curr.next;
      curr.next = next;

      if (next != null) {
        c.next = next.next;
      }
      curr = next;
    }

    return copy;

  }
}
