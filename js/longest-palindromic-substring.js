/**
 * @param {string} s
 * @return {string}
 */
function em(s, start, end){
    // console.log(`excuting for start = ${start}, end = ${end}`)
    if(start < 0 || end > s.length || s[start] !== s[end]) {
        return [-1, -1, 0];
    }
    while (end < s.length && start > 0 && s[start-1] === s[end+1]) {
        start--;
        end++;
    }
    return [start, end+1, end - start +1];
}
var longestPalindrome = function(s) {
    let sarr = s.split("");
    let maxLength = 1;
    let start=0, end=0;
    for(let i=0; i<s.length; i++) {
        let [start1, end1, l1] = em(sarr, i, i);
        // console.log(`start1=${start}, end1=${end1}, l1=${l1}`);
        // console.log("em(sarr, i, i+1) --> ", em(sarr, i, i+1));
        let [start2, end2, l2] = em(sarr, i, i+1);   
        let l = l1>l2 ? l1 : l2;
        let st = l1 > l2 ? start1 : start2;
        let en = l1 > l2 ? end1 : end2;

        if(l>=maxLength) {
            maxLength = l;
            // start = i - parseInt((l1-1)/2);
            // end = i + parseInt(l1/2)
            start = st;
            end = en;
        }
        // console.log("l --> ", l);
        // console.log(`l1 = ${l1}, l2 = ${l2}, maxLength = ${maxLength}`);
        // console.log(`start = ${start}, end = ${end}`);
        // console.log(`s.substring(start, end) = ${s.substring(start, end)}`);
    }
    return s.substring(start, end);
};

console.log(`Longest palindrome in 'babad' is ${longestPalindrome("babad")}`)
console.log(`Longest palindrome in 'cbbd' is ${longestPalindrome("cbbd")}`);