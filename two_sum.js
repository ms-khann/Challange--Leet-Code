// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109


et arr = [2,7,11,15];
// let arr = [3,2,4];
var twoSum = function(nums, target) {
    let result = [];
    let tarverse = [];
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if( i != j ){
                let sum = nums[i] + nums[j];
                if(sum == target && tarverse.includes(nums[i]) == false && tarverse.includes(nums[j]) == false ){
                    result.push(i,j);
                    tarverse.push(nums[i],nums[j]);
                }
            }
        }
    }
    return result;
};
console.log(twoSum(arr,9));