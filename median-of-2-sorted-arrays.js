/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var res = [];
    var res = nums1.concat(nums2).sort((a, b) => (a-b));
    if(res.length % 2 ===0){
        return (res[parseInt(res.length / 2) -1] + res[parseInt(res.length / 2)])/2
    } else {
        return res[parseInt(res.length/2)];
    }
    return -1;
};


console.log("first testcase: [1, 3], [2] --> ", findMedianSortedArrays([1, 3], [2]));
console.log("second testcase: [1, 2], [3, 4] --> ", findMedianSortedArrays([1, 2], [3, 4]));
console.log("third testcase: [2], [] --> ", findMedianSortedArrays([2], []));
console.log("fourth testcase: [], [2, 3] --> ", findMedianSortedArrays([], [2, 3]));
console.log("fifth testcase: [10001], [10000] --> ", findMedianSortedArrays([10001], [10000]));
console.log("sixth testcase: [3], [-2, -1] --> ", findMedianSortedArrays([3], [-2, -1]));
