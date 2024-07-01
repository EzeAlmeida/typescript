import readlinesync = require("readline-sync");

let numeros: Set<number> = new Set<number>();

numeros.add(2);
numeros.add(5);
numeros.add(1);
numeros.add(3);
numeros.add(4);
numeros.add(9);
numeros.add(7);
numeros.add(8);
numeros.add(10);
numeros.add(6);

var adicione = readlinesync.questionInt("Digite um numero de 0 a 10: ")

if(adicione > 10){
    console.log(`O numero ${adicione} não foi encontrado`)
} else if(adicione <=10) {
    numeros.has(adicione)
    console.log(`O numero ${adicione} foi encontrado`)


}
