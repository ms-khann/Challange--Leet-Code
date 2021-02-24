// let a = "11",
//     b = "1";
// let a = "1010",
//     b = "1011";

let a = "100",
    b = "110010";
var addBinary = function (a, b) {
    let a_str = [...a];
    let b_str = [...b];
    let res = [];
    let remain = 0;
    let dif =
        a_str.length > b_str.length
            ? a_str.length - b_str.length
            : b_str.length - a_str.length;

    if (a_str.length < b_str.length) {
        let arr = Array(dif).fill('0');
        a_str = arr.concat(a_str);
    }
    if (b_str.length < a_str.length) {
        let arr = Array(dif).fill("0");
        b_str = arr.concat(b_str);
    }

    for (let i = a_str.length - 1; i >= 0; i--) {
        let add = Number(a_str[i]) + Number(b_str[i]) + Number(remain);
        debugger;
        switch (add) {
            case 0:
                res.push(0);
                remain = 0;
                break;
            case 1:
                res.push(1);
                remain = 0;
                break;
            case 2:
                res.push(0);
                remain = 1;
                break;
            case 3:
                res.push(1);
                remain = 1;
                break;
        }
    }
    res.reverse();
    if (remain) {
        return [1, ...res].join("");
    } else {
        return res.join("");
    }
};

console.log(addBinary(a, b));
