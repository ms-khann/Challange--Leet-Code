let nums = [1,1,2];
var removeDuplicates = function(nums) {
    let previous;
    let current;
    let num_len = nums.length;
    let slice = false;
    for(let i=0; i<num_len;i++){
        current = nums[i];
        if(current != previous){
            nums.push(current);
            slice = true;
        }
        previous = current;
    }
    nums.splice(0,num_len);
    return nums.length;
};
removeDuplicates(nums);
console.log(nums);
