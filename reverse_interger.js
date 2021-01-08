// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0

// Constraints:

// -231 <= x <= 231 - 1

var reverse = function (x) {
    let val = String(x);
    let result = "";
    if (Math.sign(val) == 1) {
        for (let i = val.length - 1; i >= 0; i--) {
            result += val[i];
        }
    } else if (Math.sign(val) != 0) {
        result += "-";
        for (let i = val.length - 1; i > 0; i--) {
            result += val[i];
        }
    } else {
        return 0;
    }
    return Number(result);
};

// 2147483647;

// ******** NOT MINE **********
// var reverse = function(x){
//     let result = 0;
//     let prev = 0;
//     while( x != 0 ){
//         let cur = x % 10; //3
//         x /= 10;  //12
//         result = result * 10 + cur;
//         if((result - cur) / 10 != prev ) return 0;
//         prev = result;
//         console.log(x,prev,result);
//     }
//     return result;
// }
// console.log(reverse(123));
