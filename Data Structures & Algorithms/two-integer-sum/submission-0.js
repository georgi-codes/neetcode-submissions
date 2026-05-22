class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sumMap = new Map()
        for(let i = 0; i < nums.length; i++){
            let xIndex = target - nums[i];
            if (sumMap.has(xIndex)){
                return [sumMap.get(xIndex), i];
            }
          sumMap.set(nums[i], i) 
        }
    }
}
        