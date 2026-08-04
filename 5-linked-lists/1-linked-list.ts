// leetcode #707

class MyLinkedList {
    private head: ListNode;
    private size: number;
    
    constructor() {
        this.head = null;
        this.size = 0;
    }

    get(index: number): number {
        // corner cases
        if (index >= this.size) {
            return -1;
        }

        let i = 0, currentNode = this.head;

        while (i < index) {
            i++;
            currentNode = currentNode.next;
        }

        return currentNode.val;
    }

    addAtHead(val: number): void {
        const node = new ListNode(val);

        if(this.head) {
            node.next = this.head;
        }

        this.head = node;
        
        this.size++;
    }

    addAtTail(val: number): void {
        this.addAtIndex(this.size, val);
    }

    addAtIndex(index: number, val: number): void {
        // handle corner cases
        if (index > this.size) {
            return;
        }

        if (index === 0) {
            this.addAtHead(val);
            return;
        }

        let i = 0, currentNode = this.head;

        while (i < index - 1) {
            i++;
            currentNode = currentNode.next;
        }

        const node = new ListNode(val);
        node.next = currentNode.next;
        currentNode.next = node;
        
        this.size++;
    }

    deleteAtIndex(index: number): void {
        // handle corner cases
        if (index >= this.size) {
            return;
        }

        // handle head deletion
        if (index === 0) {
            this.head = this.head.next;
            this.size--;

            return;
        }

        let i = 0, currentNode = this.head;

        while (i < index - 1) {
            i++;
            currentNode = currentNode.next;
        }

        currentNode.next = currentNode.next.next;
        
        this.size--;
    }
}

class ListNode {
    val: number;
    next: ListNode;

    constructor(num: number) {
        this.val = num;
        this.next = null;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */