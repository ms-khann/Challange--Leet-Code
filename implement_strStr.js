// let haystack = "hello", needle = "ll";
// let haystack = "aaaaa", needle = "bba";
let haystack = "", needle = "";
var strStr = function(haystack, needle) {
    return haystack.search(needle);
    // return haystack;
};
console.log(strStr(haystack, needle));