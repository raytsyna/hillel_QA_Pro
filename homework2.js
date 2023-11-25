const prompt = require('prompt-sync')();
let age = prompt("Введіть свій вік:");

if (!isNaN(age) && age >= 0) {
    let yearsWord;
    if (age % 10 === 1 && age % 100 !== 11) {
        yearsWord = "рік";
    } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
        yearsWord = "роки";
    } else {
        yearsWord = "років";
    }

    console.log(`Ваш вік: ${age} ${yearsWord}`);
} else {
    console.error("Будь ласка, введіть коректне та не від'ємне число.");
}