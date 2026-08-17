// leetcode #328

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let oddCurr = head;
  let evenCurr = head.next;

  const evenFirst = evenCurr;

  while (evenCurr && evenCurr.next) {
    oddCurr.next = oddCurr.next.next;
    oddCurr = oddCurr.next;
    evenCurr.next = evenCurr.next.next;
    evenCurr = evenCurr.next;
  }

  oddCurr.next = evenFirst;

  return head;
};

// function oddEvenList(head: ListNode | null): ListNode | null {
//   let FO = null, LO = null, FE = null, LE = null;
//   let node = head;
//   let count = 1;

//   while (node) {
//     // odd check
//     if (count % 2 === 1) {
//       if (!FO) FO = node;
//       if (LO) LO.next = node;
//       LO = node;
//     }

//     // even check
//     if (count % 2 === 0) {
//       if (!FE) FE = node;
//       if (LE) LE.next = node;
//       LE = node;
//     }

//     node = node.next;
//     count++;
//   }

//   if (LO) LO.next = FE;
//   if (LE) LE.next = null;

//   return FO || FE;
// };