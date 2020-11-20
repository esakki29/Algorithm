/*81. Search in Rotated Sorted Array II - Javascript solution

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
*/
var search = function(nums, target) {
    let N = nums.length,j=N-1;
    for(let i=0;i<N;i++){
        if(nums[i] == target || nums[j] == target) return true;
        j -=i;
    }
    return false;
};
//Or
var search = function(nums, target) {
    if(nums.indexOf(target)>-1){return true}
    return false
};
