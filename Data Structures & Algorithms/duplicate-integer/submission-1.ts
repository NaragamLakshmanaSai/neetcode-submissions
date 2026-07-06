class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const a = {};
        for(let i=0;i<nums.length;i++){
            if(a[nums[i]]){
                return true
            }
            else{
                a[nums[i]] = true;
            }
        }

        return false;
    }
}
