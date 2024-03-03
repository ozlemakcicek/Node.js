console.log("merhaba");

//! slugify; string ifadelerin herbir kelimelerinin arasina - veya istedigin isareti getirr.
const slug = require("slugify"); // kullanima acmak icin bunu yazmaliyiz
console.log(slug("Merhaba Node JS")); // slugify stringlerde calisir ve - ceker her kelime arasina
console.log(slug("Merhaba Node JS", "/")); // araya / koyar

//! lodash; arraylerde calisir
const lod = require("lodash");
console.log(lod.reverse([1, 2, 3])); // tersten yazdiracak
console.log(lod.last([1, 2, 3, 54, 677, 2345])); // sonuncu elemani bulma
console.log(lod.take([1, 2, 3, 54, 677, 2345], 3)); // yazdigin sayiya gore bastan elemanlari dondurur.bisey yazmazsan ilk elemani verir
console.log(lod.take([1, 2, 3, 54, 677, 2345], 4)); // ilk 4 sayiyi verir


console.log("Merhaba nodemon");