let nums = [1,3,5,6], target = 5;
var searchInsert = function(nums, target) {
    let ind = nums.findIndex((ele) => ele == target);
    if(ind == -1){
        ind = nums.findIndex((ele) => ele < target);
        ind++;
    }
    return ind;
};
console.log(searchInsert(nums,target));