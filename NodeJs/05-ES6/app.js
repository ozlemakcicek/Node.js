//! ES6 ya gore boyle import edilir.exportu ise sadece fonksiyon onune export yazarak yapilir.

// import {topla} from "./topla.js"
// console.log(topla(5,6));

//? birden fazlayi getirmek istersek;

// import{topla,cikar} from "./islemler.js"
// console.log(cikar(7,6));

//? tek bir degisken icinde birden cok fonksiyonu export edip import etme
// import {islemler} from "./islemler.js"

// console.log(islemler.cikar(5,6));

//! chalk in kullanimi
 import {islemler} from "./islemler.js"
import chalk from "chalk"
console.log(chalk.bgYellow(islemler.cikar(5,6))); // islemin arkasini sari yapti

// import ogrenci,{ogrenciAdi} from "./ogrenciler.js"
// console.log(chalk.red(ogrenciAdi));
// console.log(ogrenci);

import ogrenci, { ogrenciAdi as studentName } from "./ogrenciler.js";
console.log(studentName);