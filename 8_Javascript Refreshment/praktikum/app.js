var A = 5; //soal no 1.
let B = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [A, B, nama, terdaftar];

function perkenalan() {
    let asal = "indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama + 
        " nomor urut " + 
        A + 
        " sekarang sedang mengikuti " +
        B + 
        " berasal dari " + 
        asal
    );
}
// jawab 1. b
if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

A = B;
// nama = b;
// console.log("asal diakses = " + asal);
console.log("array = " + nama);
console.log("a adalah = " + A);
console.log("b adalah = " + lengkap_arr[1]); // jawab 1. a.
perkenalan();// jawab 1. c
// jawab 1. d (run code)


// ============ no. 2 ================

//  jawab
//  a. karna value awal dari variable “terdaftar” adalah “false”, pada baris 21,22,23 terdapat control 
//     flow “if” yang di mana untuk menjalankan isi nya, value dari variable “terdaftar” harus bernilai 
//     sama dengan argumen di perkondisian “if” yaitu “true”.apa bila variable “terdaftar” bernilai “true” 
//      maka isi dari perkondisian “if” akan di jalankan.  

//  b. karna variable “a” berisi nilai “b” lebih dahulu jika selanjutnya variable “nama” di isi dengan 
//     nilai “b” maka akan menyebabkan error karna nilai varibale “b” sudah menjadi milik variable “a” 
//     menjadi satu reference yang sama. untuk mengambil nilai atau meneruskannya maka variable selanjutnya 
//     harus mengambilnya dari variable “a”.

//  c. baris 28 error karna variable “asal” dalam console.log merupakan variable local yang berada dalam function 
//     “perkenalan()” yang hanya bisa di akses apabila functon tersebut di jalankan.


// ============= no. 3 ==============
const foo = ['Budi', 'Sita', 'Ayu'];
var [a, b, c] = foo;
console.log("== no. 3 ==");
console.log(a);
console.log(b);
console.log(c);
// catatan = menjalankan script ini harus di block dulu kalau tidak variable nya nabrak sama nomor 1


// ============= no. 4 ==============
let bdays = ['10-17','05-19', '20-19'];
let ubahBdays = bdays.map((bdays) => {
    return bdays.replace('-', '/');
});
console.log("== no. 4 ==");
console.log(ubahBdays);

// ============= no. 5 ==============
let value = [1, 2, 3, 4, 5, 6];
let ubahValue = value.map(value => {
    return value * 2;
})
console.log("== no. 5 ==");
console.log(ubahValue);

// ============= no. 6 ==============

let arr = [1.5, 2.56, 5.1, 12.33];
let bulatkanArr = arr.map((arr) => {
    return Math.round(arr);
})
console.log("== no. 6 ==");
console.log(bulatkanArr);