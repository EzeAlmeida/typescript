import readlinesync = require("readline-sync");
import { Queue } from "../interface/Queue";

const fila = new Queue<string>();

var nomes = new Array<string>();
var prosseguir = true




while (prosseguir) {


    console.log("****************************");
    console.log("\n 1 - Adicionar clientes na fila");
    console.log("\n 2 - Listar todos os clientes");
    console.log("\n 3 - Retirar clientes da fila");
    console.log("\n 0 - sair");
    console.log("\n*****************************");

    var opcao = readlinesync.questionInt("\nDigite a opcao desejada: ")

    switch (opcao) {

        case 1: var nomeInserido = readlinesync.question("\nDigite seu nome: ");
            fila.enqueue(nomeInserido)
            console.log(`\nO nome ${nomeInserido} foi adicionado`);
            console.log(`\nFila `);
            fila.printQueue()
            prosseguir = readlinesync.keyInYNStrict("\nDeseja voltar ao menu?: ");

            break;


        case 2: console.log(`\nLista de clientes na fila`);
            fila.printQueue();
            prosseguir = readlinesync.keyInYNStrict("\nDeseja voltar ao menu?: ");


            break;

        case 3: fila.dequeue();

            break;

        case 0: prosseguir = false
            console.log("Programa Finalizado!");

            break;
    }
}

