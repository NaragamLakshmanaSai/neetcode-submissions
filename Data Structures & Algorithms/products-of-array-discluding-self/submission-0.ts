class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {

        let zerosCount = 0;
        let prod = 1;
        nums.forEach((a) => {
            if(a == 0){
                zerosCount += 1
            }
            else{
                prod = prod * a
            }
        })

        if(zerosCount >= 2){
            return Array(nums.length).fill(0);
        }

        const res = []

        for(let i = 0;i<nums.length;i++){
            if(zerosCount == 1){
                if(nums[i] == 0){
                    res.push(prod)
                }
                else{
                    res.push(0)
                }
            }
            else{
                res.push(prod/nums[i])
            }
        }

        return res

    }
}
