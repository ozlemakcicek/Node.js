// const topla=(a,b)=>{
//     return a+b
// }

// const cikar = (a, b) => {
//   return a - b;
// };

// const bol = (a, b) => {
//   return a / b;
// };

// const carp = (a, b) => {
//   return a * b;
// };

// console.log(topla(4,2));
// console.log(cikar(5,2));


//! bu kadar uzun kod yazmak yerine ayri ayri dosyalarda yaziyorz.ordan export yapip burda import yapiyorzu

const topla=require("./topla")
console.log(topla(4, 2));

const cikar = require("./cikar");
console.log(cikar(4, 2));

// //! bu sekilde tek tek dosyalarda yapilabilecegi gibi birden fazla islemi tek bir dosyada yazip onu export yapip karsilarsak;

const islem=require("./islemler")
console.log(islem.carp(2,4));
console.log(islem.cikar(6,4));

// //! bir objeyi de, arrayi de export edip karsilayabilirz

const ogrenciler=require("./ogrenciler")
console.log(ogrenciler.ogrenciler.name);


const dizi = require("./ogrenciler");
console.log(ogrenciler.dizi)