// leetcode #2

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const sentinel = new ListNode();
  let ref = sentinel;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    const newNode = new ListNode(sum % 10);
    ref.next = newNode;
    ref = ref.next;
    carry = Math.floor(sum / 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return sentinel.next;
};