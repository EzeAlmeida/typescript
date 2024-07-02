const frutas: Set<string> = new Set<string>();

//colecao boa para não repetições
frutas.add("Caqui");
frutas.add("Laranja");
frutas.add("Uva");


//conferir se o produto existe

console.log(`${frutas.has("Uva")}`)


//para deletar o valor
frutas.delete("fruta")

