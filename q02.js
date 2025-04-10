let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Digite o ${i + 1}º número:`));
  if (num % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`Quantidade de pares: ${pares}`);
console.log(`Quantidade de ímpares: ${impares}`);
