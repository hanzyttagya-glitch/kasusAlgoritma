const prompt = require('prompt-sync')();
let hari = Number(prompt(`Hari : `))
const TAHUN_KE_HARI = 365
const BULAN_KE_HARI = 30

let tahun = bulan = sisa = 0

tahun = parseInt(hari / TAHUN_KE_HARI)
sisa = hari % TAHUN_KE_HARI

bulan = parseInt(sisa / BULAN_KE_HARI)
sisa %= BULAN_KE_HARI

console.log(`${tahun} Tahun ${bulan} Bulan ${sisa} Hari`)