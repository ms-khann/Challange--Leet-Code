let s = "IIVG";
var romanToInt = function(s) {
    let roman = [...s.toUpperCase()];
    let valid_char = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let i = 0;
    roman.some(function(current){
        if( valid_char.includes(current) == false ){
            console.log(i++);
            return false;
        }
    });
    // console.log(is_valid);
    return roman;
};
console.log(romanToInt(s));