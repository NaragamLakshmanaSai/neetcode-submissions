class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length){
            return false;
        }

        const a = {};
        for(let i=0;i<s.length;i++){
            if(a[s[i]]){
                a[s[i]]++;
            }
            else{
                a[s[i]] = 1;
            }

            if(a[t[i]]){
                a[t[i]]--;
            }
            else[
                a[t[i]] = -1
            ]
        }

        for(const key of Object.keys(a)){
            if(a[key]!=0){
                return false;
            }
        }

        return true
    }
}
