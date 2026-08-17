// leetcode #21

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const sentinel = new ListNode();
  let ref = sentinel;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      ref.next = list1;
      list1 = list1.next;
    } else {
      ref.next = list2;
      list2 = list2.next;
    }

    ref = ref.next;
  }

  ref.next = list1 ? list1 : list2;

  return sentinel.next;
};