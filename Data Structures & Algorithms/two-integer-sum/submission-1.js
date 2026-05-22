class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sumMap = new Map()//declare a map that will store the a new array of values
        for(let i = 0; i < nums.length; i++){//used a classic for loop to iterate through the num of values
            let xIndex = target - nums[i];//declare a new var that calcs the target from the index
            if(sumMap.has(xIndex)){//used a conditional statement to that checks if the boolean value is in the var
                return [sumMap.get(xIndex), i];//binds the index found by calc and it's postion to the map that can later be called
            }
          sumMap.set(nums[i], i)//the .set() searches and places the values array
        }
    }
}
        