class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const a = {}

        for(let i=0;i<nums.length;i++){
            if(a[target - nums[i]] >= 0){
                return [a[target - nums[i]], i];
            }
            else{
                a[nums[i]] = i;
            }
        }
        
    }
}
