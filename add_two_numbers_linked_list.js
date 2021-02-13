// let l1 = {
//     val: 2,
//     next: {
//         val: 4,
//         next: {
//             val: 3,
//             next: null
//         },
//     },
// };
// let l2 = {
//     val: 5,
//     next: {
//         val: 6,
//         next: {
//             val: 4,
//             next: null
//         },
//     },
// };

// [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
// [5,6,4]

// let l1 = {
//     val: 2,
//     next: {
//         val: 4,
//         next: {
//             val: 3,
//             next: null
//         },
//     },
// };
// let l2 = {
//     val: 5,
//     next: {
//         val: 6,
//         next: {
//             val: 4,
//             next: null
//         },
//     },
// };

class Node{
    constructor(val,next){
        this.val = val;
        this.next = next;
    }
};

let l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
let l2 = [5,6,4];
l1 = createList(l1);
l2 = createList(l2);

var addTwoNumbers = function (l1, l2) {
    l1 = converToArrayAndReverse(l1);
    l2 = converToArrayAndReverse(l2);
    let res = (l1+l2);
    // res = [...res];
    // console.log(res**2);
    // res.reverse();
    console.log(l1);
    console.log(l2);
    console.log(res);
    let list= null;
    for(let i=0;i<res.length;i++){
        list = new Node(res[i],list);
    }
    // return list;
};

function converToArrayAndReverse(obj){
    let arr = []
    while(obj){
        arr.unshift(obj.val);
        obj = obj.next; 
    }
    return Number(arr.join(''));
}

function createList(arr){
    let obj = null;
    arr.reverse();
    for(let i=0;i<arr.length;i++){
        obj = new Node(arr[i],obj);
    }
    return obj;
}

console.log(addTwoNumbers(l1,l2));;

