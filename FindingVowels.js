function vowelCount(str) {
    const vowelRegex = /[aeiou]/gi; 
    const strMatches = str.match(vowelRegex);

    if (strMatches) {
        return strMatches.length;
    } else {
        return 0; 
    }
}
const string = "I'm learning JavaScript";
const len = vowelCount(string);
console.log("Number of vowels:", len);