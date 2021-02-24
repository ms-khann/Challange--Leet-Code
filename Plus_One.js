let dig = [9, 9, 9, 9, 9];
var plusOne = function (digits) {
    let i;
    for (i = digits.length - 1; i >= 0; i--) {
        digits[i] = digits[i] + 1;
        if (digits[i] == 10) {
            digits[i] = 0;
        } 
        else {
            break;
        }
    }
    if( i == -1){
        return [1,...digits];
    }
    return digits;
};
console.log(plusOne(dig));
