// leetcode #19

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const sentinel = new ListNode(0, head);
  let count = 0;

  while (head) {
    count++;
    head = head.next;
  }

  const index = count - n;

  let prev = sentinel;
  
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      prev.next = prev.next.next;
    }

    prev = prev.next;
  }

  return sentinel.next;
};