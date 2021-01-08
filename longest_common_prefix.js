let strs = ["flower","flow","flight"];
// let strs = ["a"];
// let strs = ["dog","racecar","car"];
let strs = ["reflower","flow","flight"];
var longestCommonPrefix = function(strs) {
    let prefix = [];
    if( strs.length > 1 ){
        if(strs.length <= 200){
            for(let i=0; i < strs.length - 1; i++){
                if(strs[i].length <= 200){
                    let current_str = strs[i];
                    let next_str = strs[i+1];
                    for(let j=0; j < current_str.length; j++){
                        if(next_str[j]){
                            if( current_str[j] == next_str[j]){
                                if(prefix[j] != current_str[j]){
                                    prefix.push(current_str[j]);
                                }
                               }
                            else{
                                let match_char = prefix[j];
                                if( current_str[j] == match_char || next_str[j] == match_char ){
                                    prefix = prefix.slice(0,j);
                                }
                                break;
                            }
                        }else{
                            break;
                        }
                    }
                }else{
                    break;
                }
            }
        }
    }
    else{
        return strs.join('');
    }
    return prefix.join('');
};
console.log(longestCommonPrefix(strs));















