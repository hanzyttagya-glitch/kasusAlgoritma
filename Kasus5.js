const prompt = require('prompt-sync')();

console.log('============================')
console.log('----MASUKAN ANGKA KEL 25----')
console.log('============================')

let angka = Number(prompt('Masukan angka : '));

const SERIBU = 1000
const RATUS = 100
const LIMA_PULUH = 50
const DUA_PULUH_LIMA = 25

let seribu = ratus = lima_puluh = dua_lima = 0

seribu = Math.floor(angka / SERIBU)
sisa = angka % SERIBU

ratus = Math.floor(sisa / RATUS)
sisa %= RATUS

lima_puluh = parseInt(sisa / LIMA_PULUH)
sisa %= LIMA_PULUH

dua_lima = parseInt(sisa / DUA_PULUH_LIMA)
sisa %= DUA_PULUH_LIMA

console.log('============================')
console.log('------HASIL PERHITUNGAN-----')
console.log('============================')

console.log(`Ribuan        : ${seribu} buah`)
console.log(`Ratusan       : ${ratus} buah`)
console.log(`Lima Puluh    : ${lima_puluh} buah`)
console.log(`Dua Puluh Lima: ${dua_lima} buah`)