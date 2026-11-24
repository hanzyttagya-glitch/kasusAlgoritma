const prompt = require('prompt-sync')();

console.log('===============================')
console.log('MASUKAN ANGKA TINGGI BADAN (CM)')
console.log('===============================')

let tinggi = Number(prompt('Masukan tinggi badan (cm) : '));
let p1 = tinggi - 100;
let p2 = 10/100 * p1;
let ideal = p1 - p2;

console.log('===============================')
console.log('-------HASIL PERHITUNGAN-------')
console.log('===============================')

console.log('Berat badan ideal: '+ ideal.toFixed(2) + 'kg')