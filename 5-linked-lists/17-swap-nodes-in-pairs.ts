// leetcode #24

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  const sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;

  while (head && head.next) {
    let a = head;
    let b = head.next;

    prev.next = b;

    a.next = b.next;
    b.next = a;

    prev = a;
    head = head.next;
  }

  return sentinel.next;
};