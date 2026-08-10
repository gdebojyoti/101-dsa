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
  
  let near = sentinel, far = head, diff = 1;

  while (far.next) {
    if (diff === n) {
        near = near.next;
    } else {
        diff++;
    }

    far = far.next;
  }

  near.next = near.next.next;

  return sentinel.next;
};