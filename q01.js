let popA = 80000;
let popB = 200000;
let anos = 0;

while (popA < popB) {
  popA += popA * 0.03;
  popB += popB * 0.015;
  anos++;
}

console.log(`Levará ${anos} anos para que o país A ultrapasse ou iguale o país B.`);
