let nums = [0,1,2,2,3,0,4,2];
let val = 2;
var removeElement = function(nums, val) {
    let num_len = nums.length;
    for(let i=0;i<num_len;i++){
        if(nums[i] == val){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};
console.log(removeElement(nums,val));
console.log(nums);