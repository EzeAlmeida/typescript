
import readlinesync = require("readline-sync");

let cores: Array<string> = new Array<string>();

var i: number = 0


console.log("\nAdicione 5 cores para começar")

for (let i = 1; i <= 5; i ++){
    let cor = readlinesync.question(`\nDigite a ${i} cor: `)
    cores.push(cor)
}
console.log("Cores:", cores)

cores.sort();

console.log("\nAs cores inseridas em ordem alfabetica", cores);