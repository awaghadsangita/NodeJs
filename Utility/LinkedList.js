
class Node {

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class DayNode{
    constructor(day,data,next){
        this.day=day;
        this.data=data;
        this.next=next;
    }
}
class LinkList {

    constructor() {
        this.HEAD = new Node();
    }
    isEmpty() {
        return this.HEAD == null;
    }
    //insert at first position
    insertFirst(node) {
        if (this.isEmpty()) {
            this.HEAD = node;
        }
        else {
            node.next=this.HEAD;
            this.HEAD = node;
        }
    }
    //insert node at specific position
    insertAt(node, position) {
        if (position == 1 && this.isEmpty()) {
            this.HEAD = node;

        }
        else if (position == 1) {
            node.setNext(this.HEAD);
            this.HEAD = node;
        }
        else {
            let count = 1;
            let temp = this.HEAD;
            while (count < pos - 1) {
                temp = temp.getNext();
                count = count + 1;
            }
            let current = temp.getNext();
            node.setNext(current.getNext());
            current.setNext(node);
        }
    }
    //insert node at last position
    insertAtEnd(node) {
        let temp = this.HEAD;
        if (temp == null) {
            this.HEAD = node;
        }
        else {
            while (temp.next != null) {
                temp = temp.next;
            }

            temp.next = node;

        }
    }
    //delete first node
    deleteFirst() {
        if (this.HEAD.next == null) {
            this.HEAD = null;

        }
        else {
            let temp = this.HEAD;
            this.HEAD = temp.next;
        }
    }
    //delete at specific position from linkedlist
    deleteAt(position) {
        let count = 1;
        let temp = this.HEAD;
        if (position == 1) {
            this.HEAD = temp.next;
        }
        else {
            while (count < position - 1) {
                temp = temp.next;
                count++;
            }
            let current = temp.next;
            current.next = current.next.next;
        }
    }
    //delete last node from linkedlist
    deleteLast() {
        let temp = this.HEAD;
        while (temp.getNext() != null) {
            temp = temp.getNext();
        }
        temp = null;
    }
    //display linked list
    display() {
        let temp = this.HEAD.next;
        while (temp != null) {
            // console.log(`${temp.data}`);
            process.stdout.write(`${temp.data} `);
            temp = temp.next;
        }
    }
    //return position of element if element is found otherwise return -1
    index(data) {
        let index = -1
        let count = 0;
        let temp = this.HEAD;
        while (temp != null) {
            if (temp.data == data) {
                index = count;
                break;
            }
            count++;
            temp = temp.next;
        }
        return index;
    }
    //return node data separted with comman as string
    getString() {
        let content = "";
        if (this.HEAD == null) {
            content = "";
        }
        else {
            let temp = this.HEAD.next;
            while (temp != null) {
                content = content + temp.data + ",";
                temp = temp.next;
            }
        }
        return content;
    }
    //sort linked list
    // sortList() {
    //     let temp = this.HEAD.next;
    //     for (let i = temp; i.next != null; i = i.next) {
    //         for (let j = i.next; j != null; j = j.next) {
    //             if (j.data < i.data ) {
    //                 // let d = i.data;
    //                 // i.data = j.data;
    //                 // j.data = d;
    //                 let d = i.data;
    //                 i.data = j.data;
    //                 j.data = d;
    //             }
    //         }
    //     }
    // }
    // buuble sort
    sortList() {
        let lastNode = null;
        let swapped=0;
        do {
            let temp = this.HEAD.next;
            swapped=0;
            let nextTemp;
            while (temp!= lastNode) {
                nextTemp=temp.next;
                if (temp.data > nextTemp.data) {
                    let d = temp.data;
                    temp.data = temp.next.data;
                    temp.next.data = d;
                    swapped=1;
                }
                temp = temp.next;
                
            }
            lastNode = temp;
        } while (swapped == 1);
    }
}

module.exports = { Node, LinkList,DayNode }