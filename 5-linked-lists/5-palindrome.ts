// leetcode #234

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function isPalindrome(head: ListNode | null): boolean {
  // edge cases
  if (!head || !head.next) {
    return true;
  }

  // identify middle node
  let slow = head, fast = head?.next;
  while (fast) {
    slow = slow.next;
    fast = fast?.next?.next;
  }
  const middle = slow;

  // reverse from tail to middle node
  let prev = middle, curr = middle?.next, next = middle?.next?.next;
  middle.next = null;
  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next?.next;
  }
  const tail = prev;

  // check from both ends
  let i = head, j = tail;
  while (j.next && i.next !== j.next) {
    if (i.val !== j.val) {
      return false;
    }

    i = i.next;
    j = j.next;
  }

  return i.val === j.val;
}