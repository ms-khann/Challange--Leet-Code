// let nums = [1,3,5,6], target = 5;
let nums=[1,3,5,6],target = 2;
var searchInsert = function(nums, target) {
    let ind = nums.indexOf(target);
    if(ind == -1){
        ind = nums.findIndex(ele => ele > target);
    }
    if(ind == -1){
        ind = nums.length;
    }
    return ind;
};
console.log(searchInsert(nums,target));
// console.log(ind);
