let n = parseInt(prompt("Quantos números você quer inserir?"));
let menor, maior, soma = 0;

for (let i = 0; i < n; i++) {
  let num = parseFloat(prompt(`Digite o ${i + 1}º número:`));
  if (i === 0) {
    menor = maior = num;
  }
  if (num < menor) menor = num;
  if (num > maior) maior = num;
  soma += num;
}

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Soma dos valores: ${soma}`);
