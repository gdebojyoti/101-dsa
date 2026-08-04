// leetcode #876

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function middleNode(head: ListNode): ListNode | null {
  let p1 = head; // slow pointer
  let p2 = head.next; // fast pointer

  while (p2) {
      p1 = p1.next;
      p2 = p2.next?.next;
  }

  return p1;
};