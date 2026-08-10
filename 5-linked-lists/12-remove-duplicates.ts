// leetcode #83

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // corner case
  if (!head) {
    return head;
  }

  let prev = head;
  let storedValue = head.val;

  let curr = head.next;

  while (curr) {
    if (storedValue !== curr.val) {
      prev.next = curr;
      prev = curr;
      storedValue = curr.val
    } else {
      prev.next = curr.next;
    }

    curr = curr.next;
  }

  return head;
};