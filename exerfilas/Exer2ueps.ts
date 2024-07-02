import readlinesync = require("readline-sync");

import { Stack } from "../interface/Stack";


const livros = new Stack<string>();

var prosseguir = true




while (prosseguir) {


    console.log("****************************");
    console.log("\n 1 - Digite o nome do livro");
    console.log("\n 2 - Listar todos os livros");
    console.log("\n 3 - Retirar um livro da pilha");
    console.log("\n 0 - sair");
    console.log("\n*****************************");

    var opcao = readlinesync.questionInt("\nDigite a opcao desejada: ")

    switch (opcao) {

        case 1: var livroInserido = readlinesync.question("\nDigite o nome do livro: ");
            livros.push(livroInserido)
            console.log(`\nO livro ${livroInserido} foi adicionado`);
            console.log("\nPilha")
            livros.printStack()
            prosseguir = readlinesync.keyInYNStrict("\nDeseja voltar ao menu?: ");

            break;



        case 2: console.log(`\nLista de livros na Pilha`)
            livros.printStack();
            prosseguir = readlinesync.keyInYNStrict("\nDeseja voltar ao menu?: ")


            break;

        case 3: livros.pop()
            console.log("Um livro foi retirado da pilha")

            prosseguir = readlinesync.keyInYNStrict("\nDeseja voltar ao menu?: ")


            break;

        case 0: prosseguir = false
            console.log("Programa Finalizado!")

            break;
    }
}


