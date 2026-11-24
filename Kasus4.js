const prompt = require('prompt-sync')();
let x = Number(prompt(`x : `))
let y = Number(prompt(`y : `))
let z = Number(prompt(`z : `))

console.log(`NILAI AWAL : x = ${x}, y = ${y}, z = ${z}`)

let nilaiAwal = x
x = y
y = z
z = nilaiAwal
console.log(`NILAI AKHIR : x = ${x}, y = ${y}, z = ${z}`)