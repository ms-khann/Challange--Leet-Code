// let strs = ["a"];
// let strs = ["dog","racecar","car"];
// let strs = ["reflower","flow","flight"];
// let strs = ["abab","aba",""];
// let strs = ["ca","c","bba","bacb","bcb"];
// let strs = ["acc","aaa","aaba"];
// let strs = ["ab", "a"];
let strs = ["flower", "flow", "flight"];

// var longestCommonPrefix = function(strs){
//     strs.sort();
//     console.log(strs);
//     let max_len = strs.reduce( (acc,current_val) => { return current_val.length > acc ? current_val.length : acc }, 0);
//     for(let i=0; i < max_len - 1;i++){
//         let j = 0;
//         while(j < strs.length){
//             if( strs[j] && strs[j+1] ){
//                 let current = strs[j];
//                 let next = strs[j+1];
//                 if( current[j][i] == next[j][i] ){
//                     console.log(current[j][i]);
//                     console.log(next[j][i]);
//                 }
//             }
//             j++;
//         }

//     }
// }

var longestCommonPrefix = function (strs) {
    if (strs.length >= 200) {
        return "";
    }
    strs.sort();
    let max_len;
    let prefix = [];
    if (strs.length > 1) {
        for (let i = 0; i < strs.length - 1; i++) {
            if (strs[i].length <= 200) {
                let current_str = strs[i];
                let next_str = strs[i + 1];
                if (current_str.trim() != "" && next_str.trim() != "") {
                    max_len = max_len ? max_len : current_str.length;
                    // debugger;
                    for (let j = 0; j < max_len; j++) {
                        if (next_str[j]) {
                            if (current_str[j] == next_str[j]) {
                                if (prefix[j] != current_str[j]) {
                                    prefix.push(current_str[j]);
                                }
                            } else {
                                if (j == 0) {
                                    return "";
                                }
                                if (prefix.length > 0) {
                                    let match_char = prefix[j];
                                    if (
                                        current_str[j] == match_char ||
                                        next_str[j] == match_char
                                    ) {
                                        prefix = prefix.slice(0, j);
                                    }
                                    max_len = j;
                                    break;
                                } else {
                                    return prefix.join("");
                                }
                            }
                        } else {
                            break;
                        }
                    }
                } else {
                    return "";
                }
            } else {
                break;
            }
        }
    } else {
        return strs.join("");
    }
    return prefix.join("");
};

console.log(longestCommonPrefix(strs));
