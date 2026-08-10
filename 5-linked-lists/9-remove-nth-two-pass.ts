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
  let listNode = head, count = 0;

  while (listNode) {
    count++;
    listNode = listNode.next;
  }

  const index = count - n;

  if (index < 0) {
    return null;
  }

  if (index === 0) {
    return head.next;
  }

  // reset listNode
  listNode = head;

  for (let i = 0; i < index; i++) {
    if (i === index - 1) {
      listNode.next = listNode.next.next;
    }

    listNode = listNode.next;
  }

  return head;
};