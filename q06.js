let capital = parseFloat(prompt("Capital inicial:"));
let taxa = parseFloat(prompt("Taxa de juros mensal (em %):")) / 100;
let tempo = parseInt(prompt("Tempo do investimento (em meses):"));

let montante = capital * Math.pow(1 + taxa, tempo);
console.log(`Montante: R$ ${montante.toFixed(2)}`);
