/*************************************************************************************************
 * @purpose	:find prime number and then find anagram then store them queue which is implemented using
 *          queue; 
 *  
 * @auther	:sangita awaghad
 * @version	:1.0
 * @since	:30-08-2019
 * 
 **************************************************************************************************/
const utility=require('../Utility/Utility');
const linkedList=require('../Utility/LinkedList');

function primeAnagramQueue(){

    let prime=[[],[]];
    let k=0;
    let listObj=new linkedList.LinkList();
    let node;
    let primeArray= utility.getPrimeNumber(0,1000);//return array of prime numbers between 0 to 1000
    
    console.log("*********Prime Array*******")
    for(let i=0;i<primeArray.length;i++)
    {
        process.stdout.write(`${primeArray[i]} `);
    }
    let anagramArray=utility.getOnlyAnagram(primeArray);//return array of anagram number which are prime 
    anagramArray.sort((a,b) => a-b);    //sort anagram elements
    for(let i=0;i<anagramArray.length;i++)
    {
        node=new linkedList.Node(anagramArray[i],null);//create object of node class
        listObj.insertAtEnd(node);
    }
    
    console.log("\n\n*********Anagram in order*********");
    let head=listObj.HEAD.next;//get head of linked list
    let start=0;
    let end=100;
    process.stdout.write(`${start}-${end} :`);
    while(head!=null)
    {
        let data=head.data;//data from node of linked list
        if(data>end)
        {
            console.log();
            start=start+100;
            end=end+100;
            process.stdout.write(`${start}-${end} :`);
        }
        process.stdout.write(`${data} `);
        head=head.next;//iterate the head still last node;
    }
    console.log();
}
module.exports=primeAnagramQueue();