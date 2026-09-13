// leetcode #160

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let switches = 0;
  let p1 = headA, p2 = headB;

  while (true) {
    if (p1 === p2) {
      return p1;
    }

    p1 = p1.next;
    p2 = p2.next;

    if (!p1) {
      p1 = headB;
      switches++;
    }

    if (!p2) {
      p2 = headA;
      switches++;
    }

    if (switches > 2) {
      return null;
    }
  }
}

// // shorter answer - by Akshay Saini
// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//   let p1 = headA, p2 = headB;

//   while (p1 !== p2) {
//     p1 = p1 === null ? headB : p1.next;
//     p2 = p2 === null ? headA : p2.next;
//   }

//   return p1; // in case there is no intersection, the matched value will be null
// };


// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//   let dupeA = headA, dupeB = headB;
  
//   let countA = 0;
//   while (dupeA) {
//     countA++;
//     dupeA = dupeA.next;
//   }

//   let countB = 0;
//   while (dupeB) {
//     countB++;
//     dupeB = dupeB.next;
//   }

//   let shorter = null, longer = null;
//   if (countA <= countB) {
//     shorter = headA;
//     longer = headB;
//   } else {
//     shorter = headB;
//     longer = headA;
//   }

//   for (let i = 0; i < Math.abs(countA - countB); i++) {
//     longer = longer.next;
//   }

//   while (shorter) {
//     if (shorter === longer) {
//       return shorter;
//     }

//     shorter = shorter.next;
//     longer = longer.next;
//   }

//   return null;
// };