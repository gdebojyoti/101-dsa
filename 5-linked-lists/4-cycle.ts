// leetcode #141

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head, fast = head?.next;

  while (fast) {
    if (slow === fast) {
      return true;
    }

    slow = slow.next;
    fast = fast?.next?.next;
  }

  return false;
};