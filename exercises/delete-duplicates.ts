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

interface ListNode {
  val: number;
  next: ListNode;
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let node = head;

  while (node) {
    if (node.val === node.next?.val) {
      node.next = node.next?.next;
      continue;
    }

    node = node.next;
  }

  return head;
}
