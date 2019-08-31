class Queue {
    constructor() {
        this.rear = -1;
        this.front = -1;
        this.MAX = 100;
        this.queue = new Array(this.MAX);
    }
    isEmpty() {
        return this.rear == this.front;
    }
    isFull() {
        return this.rear == this.MAX - 1;
    }
    enqueue(item) {
        try {
            let regex = /^[a-zA-Z0-9]{1,}$/;
            if (!regex.test(item)) {
                throw 'data to be added should not contain special symbols';
            }
            if (item == 'undefined') {
                throw 'data to be added should not be undefined';
            }
            if (item == null) {
                throw 'data to be added should not be null';
            }
            if (this.isFull()) {
                throw 'queue is full';
            }
            else {
                this.rear = this.rear + 1;
                this.queue[this.rear] = item;
            }
            return 'success';
        } catch (e) {
            return e;
        }
    }
    dequeue() {
        try {
            if (this.isEmpty()) {
                throw 'queue is empty';
            }
            else {
                let item = this.queue[++this.front];
                return item;
            }
        } catch (e) {
            return e;
        }
    }
    display() {

        try {
            if (this.isEmpty()) {
                throw 'queue is empty'
            } else {
                let mFront = this.front;

                for (let i = ++mFront; i <= this.rear; i++) {
                    console.log(`${this.queue[i]} `);
                }
            }
            return 'success';
        } catch (e) {
            return e;
        }
    }
    size() {
        let mFront = this.front;
        let count = 0;
        if (this.rear > -1) {
            for (let i = mFront; i <= this.rear; i++) {
                count++;
            }
        }
        return count;
    }
    getLastItem() {
        try {
            let mFront = this.front;
            if(mFront==-1)
            {
                mFront=mFront+1;
            }
            let count = 0;
            for (let i = mFront; i <= this.rear; i++) {
                count = this.queue[i];
            }
            return count;
        } catch (e) {
            return e;
        }
    }

}
module.exports = { Queue };