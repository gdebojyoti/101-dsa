// leetcode #206

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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  let prev = head;
  let curr = prev?.next;
  let next = curr?.next;

  head.next = null;

  while (curr) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next?.next;
  }

  return prev;
};