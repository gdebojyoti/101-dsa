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
  // exit condition
  if (!head || !head.next) {
    return head;
  }

  const left = head, right = head.next;

  left.next = swapPairs(right.next);
  right.next = left;

  return right;
};