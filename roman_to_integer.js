let s = "MCMXCIV";
var romanToInt = function (s) {
    let roman = [...s.toUpperCase()];
    let valid_char = ["I", "V", "X", "L", "C", "D", "M"];
    let num_arr = [];
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        if (valid_char.includes(roman[i]) == false) {
            return false;
        }
        let current_char = roman[i];
        switch (current_char) {
            case "I":
                num_arr.push(1);
                break;
            case "V":
                num_arr.push(5);
                break;
            case "X":
                num_arr.push(10);
                break;
            case "L":
                num_arr.push(50);
                break;
            case "C":
                num_arr.push(100);
                break;
            case "D":
                num_arr.push(500);
                break;
            case "M":
                num_arr.push(1000);
                break;
        }
    }
    // 1,1,1
    for(let i=0;i<num_arr.length;i++){
        if(num_arr[i] <= result){
            result += num_arr[i];
        }
        else{
            result = num_arr[i] -result;
        }
        console.log(result);
    }
    return result;
};
console.log(romanToInt(s));
