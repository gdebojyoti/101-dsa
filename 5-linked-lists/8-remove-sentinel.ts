// leetcode #203

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const sentinel = new ListNode(0, head);
  let prev = sentinel, curr = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = prev.next;
    }

    curr = curr.next;
  }

  return sentinel.next;
};