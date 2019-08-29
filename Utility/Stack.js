class Stack {
    constructor() {
        this.TOP = -1;
        this.MAX = 100;
        this.stk = new Array(this.MAX);
    }
    isEmpty() {
        return this.TOP == -1;
    }
    isFull() {
        return this.TOP == this.MAX - 1;
    }
    push(data) {
        try {
            if (this.isFull()) {
                throw 'stack overflow';
            }
            else {
                this.stk[++this.TOP] = data;
            }

        } catch (e) {
            return e;
        }
    }
    pop()
    {
        try {
            if (this.isEmpty()) {
                throw 'stack underflow';
            }
            else {
                let item=this.stk[this.TOP];
                this.top--;
                return item;
            }

        } catch (e) {
            return e;
        }
    }
    peek()
    {
        try {
            if (this.isEmpty()) {
                throw 'stack underflow';
            }
            else {
                let item=this.stk[this.TOP];
                return item;
            }

        } catch (e) {
            return e;
        }
    }
    display()
    {
        console.log('HIIII');
        let top=this.TOP;
        while(top>-1)
        {
            console.log("display");
            console.log(' '+stk[top--]);
        }
    }
}

module.exports={Stack};