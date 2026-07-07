class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count:Record<number, number> = {

        };
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const arr = Object.entries(count).map(([a, b]) => [b, parseInt(a)]);

        arr.sort((a,b) => b[0] - a[0])

        const res = [];

        for(let i=0;i<k;i++){
            res.push(arr[i][1])
        }

        return res;
    }
}
