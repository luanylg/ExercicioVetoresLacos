var abobora = require("readline-sync");
var media = 0;
var valores = [];
for (var i = 0; i < 5; i++) {
    var valor = parseFloat(abobora.question('Digite 5 numeros: '));
    valores.push(valor);
    media = media + valor;
}
console.log(media / 5);
console.log(Math.max.apply(Math, valores));
console.log(Math.min.apply(Math, valores));
