/**
 * @param {number} num
 * @return {string}
 */
function constructRomanString(n, a, b, c) {
    if( n<6 ){
        return n === 5 ? b : (n === 4) ? a+b : Array.from({ length: n }, (_, i) => a).reduce((i, prev)=>prev+i, "");
    } else {
        return n === 9 ? a + c : Array.from({ length: (n%5) }, (_, i) => a).reduce((i, prev)=>i+prev, b);
    }
}
var intToRoman = function(num) {
    let result = "";
    result += (constructRomanString(parseInt(num/1000), "M", "#"));
    num %= 1000;
    result += (constructRomanString(parseInt(num/100), "C", "D", "M"));
    num %= 100;
    result += (constructRomanString(parseInt(num/10), "X", "L", "C"));
    num %= 10;
    result += (constructRomanString(parseInt(num), "I", "V", "X"));
    return result;
};

console.log("Roman for 58 is --> ", intToRoman(58));
console.log("Roman for 1924 is --> ", intToRoman(1924));
console.log("Roman for 592 is --> ", intToRoman(592));
console.log("Roman for 515 is --> ", intToRoman(515));
console.log("Roman for 15 is --> ", intToRoman(15));