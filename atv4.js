"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function sortWords(words) {
    return words.sort(function (a, b) { return a.localeCompare(b); });
}
function main() {
    var words = [];
    rl.question("Insira a primeira palavra: ", function (word1) {
        words.push(word1);
        rl.question("Insira a segunda palavra: ", function (word2) {
            words.push(word2);
            rl.question("Insira a terceira palavra: ", function (word3) {
                words.push(word3);
                rl.question("Insira a quarta palavra: ", function (word4) {
                    words.push(word4);
                    rl.question("Insira a quinta palavra: ", function (word5) {
                        words.push(word5);
                        var sortedWords = sortWords(words);
                        console.log("Palavras em ordem alfabética: ", sortedWords);
                        rl.close();
                    });
                });
            });
        });
    });
}
main();
