// leetcode #160

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const aSet = new Set();

  while (headA) {
    aSet.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (aSet.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
};