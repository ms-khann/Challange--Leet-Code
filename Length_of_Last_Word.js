s = "Hello World";
var lengthOfLastWord = function (s) {
    s = s.trim();
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        // console.log(`${s[i]} ${s.charCodeAt(i)}`);
        // console.log(s.charCodeAt[i] == 32);
        if (s[i] == " ") {
            break;
        }
        count++;
    }
    return count;
};
console.log(lengthOfLastWord(s));
