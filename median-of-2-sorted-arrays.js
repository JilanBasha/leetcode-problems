/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

console.log("script started");
var findMedianSortedArrays = function(nums1, nums2) {
    var res = [];
    console.log("after array diclaration");
    var totalLength = nums1.length + nums2.length;
    console.log("totalLength % 2 ==> ", parseInt(totalLength) % 2);
    if(parseInt(totalLength) % 2 !== 0) {
        console.log("else");
        for(var i =0, j=0; i<nums1.length || j<nums2.length;){
            var mid = res.length;
            if(mid == (totalLength/2 + 1)){
                let a = res.pop();
                let b = nums1[i] < nums2[j] ? nums1[i] : nums2[j];
                return (a+b)/2;
            }
            if( i < nums1.length && nums1[i] <= nums2[j]){
                res[res.length] = nums1[i];
                i++;
            } else if(j < nums2.length && nums1[i] > nums2[j]) {
                res[res.length] = nums2[j];
                j++;
            } else if (i < nums1.length) {
                res[res.length] = nums1[i];
                i++;
            } else if(j < nums2.length) {
                res[res.length] = nums2[j];
                j++;
            } 
        }
    } else {
        console.log("else");
        for(var i =0, j=0; i<nums1.length || j<nums2.length;){
            var mid = res.length;
            if(mid == (totalLength/2 + 1)){
                return res.pop();
            }
            if( i < nums1.length && nums1[i] <= nums2[j]){
                res[res.length] = nums1[i];
                i++;
            } else if(j < nums2.length && nums1[i] > nums2[j]) {
                res[res.length] = nums2[j];
                j++;
            } else if (i < nums1.length) {
                res[res.length] = nums1[i];
                i++;
            } else if(j < nums2.length) {
                res[res.length] = nums2[j];
                j++;
            } 
        }
    }
    return -1;
};


console.log("first testcase --> ", findMedianSortedArrays([1, 3], [2]));