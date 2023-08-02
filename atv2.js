"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function encontrarMNome(nomes) {
    var MNome = nomes[0];
    for (var i = 1; i < nomes.length; i++) {
        if (nomes[i].length > MNome.length) {
            MNome = nomes[i];
        }
    }
    return MNome;
}
function main() {
    var QNomes = 5;
    var nomes = [];
    for (var i = 0; i < QNomes; i++) {
        var nome = readlineSync.question("Digite o ".concat(i + 1, " nome: "));
        nomes.push(nome);
    }
    var MNome = encontrarMNome(nomes);
    console.log("O maior nome \u00E9: ".concat(MNome));
}
main();
