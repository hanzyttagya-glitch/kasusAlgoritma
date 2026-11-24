const prompt = require('prompt-sync')();

console.log('=====================')
console.log('---MASUKAN TANGGAL---')
console.log('=====================')

let dd1 = Number(prompt('hari Pertama (dd)  : '))
let mm1 = Number(prompt('Bulan Pertama (mm) : '))
let yy1 = Number(prompt('Tahun pertama (yy) : '))

let dd2 = Number(prompt('hari Kedua (dd)    : '))
let mm2 = Number(prompt('Bulan Kedua (mm)   : '))
let yy2 = Number(prompt('Tahun Kedua (yy)   : '))

const TAHUN_KE_HARI = 365
const BULAN_KE_HARI = 30

const total1 = yy1 * TAHUN_KE_HARI + (mm1 - 1) * BULAN_KE_HARI + dd1
const total2 = yy2 * TAHUN_KE_HARI + (mm2 - 1) * BULAN_KE_HARI + dd2

jarak = total1 > total2 ? total1 - total2 : total2 - total1

let tahun = bulan = hari = 0

tahun = parseInt(jarak / TAHUN_KE_HARI)
sisa = jarak % TAHUN_KE_HARI

bulan = parseInt(sisa / BULAN_KE_HARI)
sisa %= BULAN_KE_HARI

console.log('=====================')
console.log('---SELISIH TANGGAL---')
console.log('=====================')

console.log('Jarak antara kedua tanggal adalah : ' + jarak + ' hari')
console.log(`${tahun} Tahun ${bulan} Bulan ${sisa} Hari`)