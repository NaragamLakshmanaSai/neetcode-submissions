class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        const res = {};

        for(const str of strs){
            const key = str.split("").sort().join("");

            if(res[key]){
                res[key].push(str)
            }
            else{
                res[key] = [str];
            }
        }


        return Object.values(res)
    }
}
