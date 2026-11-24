const prompt = require('prompt-sync')();

console.log('=========================')
console.log('----MASUKAN ANGKA (M)----')
console.log('=========================')

let m = Number(prompt('Masukan panjang (m) : '));

const INCH_KE_MM = 25.4;
const KAKI_KE_CM = 30.48;
const YARD_KE_M = 0.9144;

const M_KE_CM = m * 100;
const M_KE_MM = m * 1000;

let inch = kaki = yard = 0;

inch = M_KE_MM / INCH_KE_MM;
kaki = M_KE_CM / KAKI_KE_CM;
yard = m / YARD_KE_M;

console.log('=========================')
console.log('-----HASIL KONVERSI------')
console.log('=========================')

console.log('Inch:', inch.toFixed(2))
console.log('Kaki:', kaki.toFixed(2))
console.log('Yard:', yard.toFixed(2))