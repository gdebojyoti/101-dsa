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
  let prev = null;
  let curr = head;

  let isHeadUpdated = false;

  while (curr) {
    if (curr.val === val) {
      if (prev) {
        prev.next = curr.next;
      }
    } else {
      prev = curr;

      if (!isHeadUpdated) {
        isHeadUpdated = true;
        head = curr;
      }
    }

    curr = curr.next;
  }

  return isHeadUpdated ? head : null;
};