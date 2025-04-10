let raio = parseFloat(prompt("Informe o raio do círculo:"));
let area = Math.PI * Math.pow(raio, 2);
let perimetro = 2 * Math.PI * raio;

console.log(`Área: ${area.toFixed(2)}\nPerímetro: ${perimetro.toFixed(2)}`);
