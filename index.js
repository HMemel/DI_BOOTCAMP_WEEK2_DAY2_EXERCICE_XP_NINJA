// Exercise 1 : Age Difference

// Given the years two people were born, find the date when the younger one is exactly half the age of the older.

function computeYear() {
    let birth1 = 1996
    let birth2 = 1997
    let ageDiff = Math.abs(birth1 - birth2);
    let doubleYear;

    if (birth1 > birth2) {
        doubleYear = Number(birth1) + Number(ageDiff);
    } else {
        doubleYear = Number(birth2) + Number(ageDiff);
    }
    console.log(doubleYear)
}

computeYear()


// Exercise 2 : Zip Codes

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.

// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
let zip = prompt("what is your zipcode ?");

// Zip codes consists of 5 numbers
if (zip.length !== 5 || isNaN(zip)) {
    console.log("ERROR")
} else {
    console.log("Very Good")
}

let zipPrompt = prompt("Write your code here");
pattern = /^\d{5}$/;
console.log(pattern.test(zipPrompt))

// Exercise 3 : Secret Word

// Prompt the user for a word and save it to a variable.
let word = prompt("Enter a word");
let word2 = word;
word = word.replace(/[aeiouAEIOU]/gi, "");
console.log(word);


// Bonus: Replace the vowels with another character and console.log the result
let words = prompt("Enter a word");
let word3 = words;
console.log(word3);
word3 = word3.toLocaleLowerCase();
word3 = word3.split("");
console.log(word3)

for (i of word3){
    if( i == 'a') {
        word3.splice(word3.indexOf('a'), 1, 1)
    } else if( i == 'e') {
        word3.splice(word3.indexOf('e'), 1, 2)
    } else if( i == 'i') {
        word3.splice(word3.indexOf('i'), 1, 3)
    } else if( i == 'o') {
        word3.splice(word3.indexOf('o'), 1, 4)
    } else if( i == 'u') {
        word3.splice(word3.indexOf('u'), 1, 5)
    }
}

word3 = word3.join("");
console.log(word3);