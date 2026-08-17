// leetcode #61

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  // corner cases
  if (!head || !head.next || !k) {
    return head;
  }

  // find length; store tail
  let tail = null;
  let curr = head, length = 0;

  while (curr) {
    length++;
    tail = curr;
    curr = curr.next;
  }

  // get "effective value" of k
  k = k % length;

  // handle another corner case - if k is now 0 (i.e., k is multiple of length)
  if (!k) {
    return head;
  }
  
  // reset curr flag
  curr = head;

  // reset curr; go to (length - k)
  for (let i = 1; i < length - k; i++) {
    curr = curr.next;
  }

  // store new head
  const newHead = curr.next;

  // create new tail
  curr.next = null;

  // attach old tail to old head
  tail.next = head;

  return newHead;
};