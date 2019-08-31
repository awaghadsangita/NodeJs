const assert=require('chai').assert;
const queueUtility=require('../Utility/Queue');

describe('test cases for enqueue operation of queue',function(){
    let queueObj1=new queueUtility.Queue();
    let tc1=queueObj1.enqueue('@@@');
    it('data to be added should not contain special symbols',function(){
        assert.equal(tc1,'data to be added should not contain special symbols');
    });

    let queueObj2=new queueUtility.Queue();
    let tc2=queueObj2.enqueue('undefined');
    it('data to be added should not be undefined',function(){
        assert.equal(tc2,'data to be added should not be undefined');
    });

    let queueObj3=new queueUtility.Queue();
    let tc3=queueObj3.enqueue(null);
    it('data to be added should not be null',function(){
        assert.equal(tc3,'data to be added should not be null');
    });

    let queueObj4=new queueUtility.Queue();
    for(let i=0;i<100;i++)
    {
        queueObj4.enqueue(i);
    }
    let tc4=queueObj4.enqueue(1000);
    it('you should not add into full queue',function(){
        assert.equal(tc4,'queue is full');
    });
});

describe('test cases for dequeue operation of queue',function(){
    let queueObj1=new queueUtility.Queue();
    let tc1=queueObj1.dequeue();
    it('you can not remove data from empty queue',function(){
        assert.equal(tc1,'queue is empty');
    });

    let queueObj2=new queueUtility.Queue();
    queueObj2.enqueue('abc');
    queueObj2.enqueue('xyz');
    queueObj2.enqueue('qpr');
    let tc2=queueObj2.dequeue();
    it('successfully deleted item from queue',function(){
        assert.notEqual(tc2,'queue is empty');
    });
});

describe('test cases for display operation of queue',function(){
    let queueObj1=new queueUtility.Queue();
    let tc1=queueObj1.display();
    it('you can not display empty queue',function(){
        assert.equal(tc1,'queue is empty');
    });

    let queueObj2=new queueUtility.Queue();
    queueObj2.enqueue('abc');
    queueObj2.enqueue('xyz');
    queueObj2.enqueue('qpr');
    let tc2=queueObj2.display();
    it('successfully display from queue',function(){
        assert.equal(tc2,'success');
    });
});