const prompt = require('prompt-sync')({sigint:true})

console.log('==========================')
console.log('----MASUKAN ANGKA (CM)----')
console.log('==========================')    

const cm = Number(prompt('Masukan panjang (cm) : '));

const METER_KE_CM = 100;
const KILOMETER_KE_CM = 100000;

let km = m = sisa = 0;

km = parseInt(cm / KILOMETER_KE_CM);
sisa = cm % KILOMETER_KE_CM;

m = parseInt(sisa / METER_KE_CM);
sisa %= METER_KE_CM;

console.log('==========================')
console.log('------HASIL KONVERSI------')
console.log('==========================')

console.log(`${km} Kilometer ${m} Meter ${sisa} Centimeter`)