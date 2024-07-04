function Palindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}
 
let str1 = "madam";
let str2 = "malayalam";
let str3 = "tamil";
 
console.log(Palindrome(str1));
console.log(Palindrome(str2));
console.log(Palindrome(str3));