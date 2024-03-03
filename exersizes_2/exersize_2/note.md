# market uygulamasi; bir musteri urun isteyince bunu veri tabanindan cekecek ve ikinci bir musteri ayni urunu isteyince bunu tekrar veri tabanindan cekmek yerine proxy diye bir ara katman olusturup, ordan cekmek. nedeni API yi fazla yormamak, masrafi kismak.

# once ya packet.jsoni baska bir projeden getirip burda npm install ile packet icindekileri kullanilabilir yapariz ya da npm init -y ile bastan olustururz.

# app.js dosyamizi olusturalim. packet.json da test kismini start, icedrigini de node app.js diye degsitirelm.

# terminalde npm install nodemon ile nodemon paketini kuralim ve yine packet.json da script altina dev:nodemon app.js yazalim

# ES6 yi kullanmak istedigimiz icin yani export-import larda , packet.json da yukarilara type:module yazmaliyiz

# urunler icin bir js dosyasi acip [{}] icerisinde name ve price seklinde bir veri dosyasi olusturalim. bunu kullanmak icin export default yaziyorz basina.herhangibir isme gerek yok export default da ama karsilarken bir isim vermeliyiz. sadece export dersek const ile birde degisken ismi vermeliyiz.Nerde cagirmak istiyorsak importunu yapalim.

# Bir fonksiyonun icinde verileri cekelim.bunun icin bir js dosyasi acalim.ES6 ya gore bunu class yapisi ile olusturalim.once GetPriceApi adinda bir class olusturalim. class yapisinda her classin bir constructor() yapisi var ve bu her calistiginda constructor calisir . icerisinde de bir fonksiyon, dizi, degisken tanimlayabiliriz ama bunu this. ile tanimliyoruz.bir arrow function seklinde olusturuyorz functioni .calisip calismadigini icerisinde console.log ile control yapabiliriz.terminalde node dosya adi skelinde yazdirabiliriz terminale. npm run start dersek bu app.js i calistirir ama biz daha o sayfayi olusturmadik ve calistirmak istedigimiz app.js degil o yuzden dosya adi ile calistiriyorz. simdi bu classin icindeki butun ozellikleri almak icin, inheritance yaparak bir degiskene atayalim. new GetPriceApi() seklinde inheritance yapiyorz. ve burda olusturdugumuz fonksiyonun icinde verileri almak icin istek atabiliriz. artik bu degisken ustteki classin ozelliklerini aldi. class icindeki fonksiyonu cagirmak icin ise degisken adi.fonksiyon adi() seklinde yapmaliyiz.

- veri sayfasindaki export edilen datayi burda import edip class icindeki fonksiyon icinde kontrol amacli; datanin import adi[indis no].name yazdirirsak console da veri sayfasindaki o indisdeki urunun nameini getirir.

# musteri geldi sut istedi, simdi bunu veri tababnindan bulup yazdiracak. Bunun icin fonksiyonu cagirdigimiz yere string olarak sut yazmaliyiz ama tabi fonksiyonu kurdugumuz yerde de bu parametreyi karsilamamiz lazim.. yine kontrol amacli console.log ile karsiladigimiz parametre adini yazdirirsak sayfayi calistirinca getirmesi lazim.

- simdi bu veri tabanini zaten sayfamiza import etmistik, iste musterinin aradigi urunu burdan bulacak ve bize verecek. veri tababnin adini class yapisindaki fonksiyon icinde find methodu ile bulmamiz lazim. name e gore bulacak.find da bir parametre alir ve arrow function doner.parametredeki name == fonksiyondaki parametreye diye yaziyoruz arrow function icine.bunu da bir degiskene atayalim ve console.log ile bu degiskeni yazdiralim.

# veri tabanindakileri bulunca donduruyor ama ya yoksa? Bunun icin bir if condition koyuyoruzz fonksiyon icine ve eger varsa; find ile yazdigimiz degiskeni yazarsak zaten ici doluysa demek, return bu degiskenin adi ve console.log ile de yazdir bunu, degisle(else demeye gerek yok) bir degiskenle "yok" yazalim ve return bu degisken adi diyelim.


-    daha once istek yapildiysa proxy.js dosyasi olusturmaliyiz ki ordan ceksin API den degil. Bu nedenle class tanimladigimiz sayfada  gecici bir depo olusturalim. Yani ilk kez urun istenildiginde bunu veri tabanindan cekecek ve birde depoya atacak bunu. Tekrar istediginde bu depodan cekecek. bu nedenle yukarida bir bos Array tanimlayacagiz. Fonksiyon icinde find ile urunu bulmustu hemen altinda da push ile bu depoya da atacak. Simdi bu bos ama veri cekilince doldurdugumuz Arrayi export edelim ki proxy sayfamizda kullanabilelim. classimizi da export default ile cikartalim


# proxy.js file inda yine bir class olusturalim. ayni seyleri yapiyoruz constructor, this.fonksiyon adi, classin disinda new ile bu classdan inheritance yapiyoruz. ve fonksiyonu cagirriyoruz. GetPriceAPI sayfasindaki inheritance kismini kapatabiliriz. console.log ile sayfanin calistigini kontrol edebiliriz. GetPriceAPI yi buraya import ediyoruz ve Arrayimizi de import ediyoruz. export default ile normal import edebiliyoruz ama export ile import edince {} icinde import edioyrz. export defaultda istedigin isim ile, adini degistirerek import edebiliriz ama export dedigimizde import ederken nasil gonderdiysek ayni o isimle import ederiz.

- simdi calss icindeki fonksiyon icinde; musteri geldi ilk defa ekmek istedi bunu zaten bir onceki sayfada find ile aradik bulduk, ve ayni zamanda yedek depoya atti. ikinci kez ayni urun istenildiginde ise, bunu proxy sayfasindan cekecek. onceimport ettigimiz depoda arayqacak, orda varsa ordan alacak, yoksa yani ilk defa veri tabanindan cekiliyorsa gidip API den cekecek.Bunlari iste fonksiyon icinde yazacagiz.

# depoda arama yapmali once.  fonksiyon bir parametre alacak, ve find ile depoda arayacak ve find daki parametre.name==fonksiyon item i deyip bunu da bir degsikene atiyorz. simdi if condition i yazalim. if in ici true ise, yani depoda varsa,depoyu return etsin , yoksa veri tabanina gitsin yani GetPriceAPI yi burda inheritance yapalim new keywordu ile.ve .onun icindeki fonksiyon(icine yukaridaki this li fonksiyon icindeki musterinin istedigi itemi yaziyorz ) ve bunu bir degsikene atiyoruz , consle.log ile de yazdiriyorz degiskeni ve o degskeni return ediyorz.


# artik yazdirma islemleri icin app.js olustrualim ve bu proxy classimizi export edelim.app.js de de import edelim. once Proxy classini inheritance yapalim new ile ve bir degsikene atayalim.sonra da o degiske.fonksiyon(icine de istedigin urunu yaz)


# artik app.js i calistirabiliriz
