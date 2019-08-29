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
            if (this.isFull()) {
                throw 'queue is full';
            }
            else {
                this.queue[++this.rear] = item;
            }
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
                return { "result": item, "testcaseresult": "success" };
            }
        } catch (e) {
            return { "result": "", "testcaseresult": e };
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

        } catch (e) {
        
            console.log(e);
            return e;
        }
    }
    size(){
        let mFront=this.front;
        let count=0;
        for(let i=mFront;i<this.queue;i++)
        {
            count++;
        }
        return count;
    }
    getLastItem()
    {
        let mFront=this.front;
        let count=0;
        for(let i=mFront;i<this.queue;i++)
        {
           
            count=this.queue[i];
        }
        return count;
    }
    
}
module.exports={Queue};