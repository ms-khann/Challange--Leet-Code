/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let l1 = { 
    val: 1,
    next :{
        val:2,
        next:{
            val:4,
            next:null
        }
    }
};
let l2 = { 
    val: 1,
    next :{
        val:3,
        next:{
            val:4,
            next:null   
        }
    }
};
var mergeTwoLists = function (l1, l2) {
    if(l1 == null && l2 == null){
        return null;
    }
    let arr = [];
    while(l1){
        arr.push(l1.val);
        l1=l1.next;
    }
    while(l2){
        arr.push(l2.val);
        l2=l2.next;
    }
    arr.sort((a,b)=>a-b);
    let list = {};
    let current;
    let previous = null;
    for(let i = arr.length-1; i>=0; i--){
        current = new Node(arr[i],previous);
        previous = current;
    }
    return current
};

class Node {
    constructor(data, next = null) {
        this.val = data;
        this.next = next;
    }
}

console.log(mergeTwoLists(l1,l2));