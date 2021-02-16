let nums1 = [1,2], nums2 = [3,4];
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1,...nums2].sort((a,b) => a-b);
    let length = arr.length - 1;
    if( length % 2 == 0){
        return arr[length /2];
    }
    length = Math.floor(length/2);
    return (arr[length] + arr[length+1]) / 2;
};
console.log(findMedianSortedArrays(nums1,nums2));