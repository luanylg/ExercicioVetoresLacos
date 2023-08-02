"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function findWordsWithLetterA(words) {
    var wordsWithLetterA = [];
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word.toLowerCase().includes('a')) {
            wordsWithLetterA.push(word);
        }
    }
    return wordsWithLetterA;
}
function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Digite 5 palavras separadas por espaço: ', function (input) {
        var words = input.split(' ');
        if (words.length !== 5) {
            console.log('Você deve digitar exatamente 5 palavras.');
            rl.close();
            return;
        }
        var wordsWithLetterA = findWordsWithLetterA(words);
        if (wordsWithLetterA.length === 0) {
            console.log('Nenhuma palavra contém a letra "a".');
        }
        else {
            console.log('Palavras que contêm a letra "a":');
            console.log(wordsWithLetterA.join(', '));
        }
        rl.close();
    });
}
main();
