
                          ************************************** NODE JS (node packet management)***************************************************

# 2009 yilinda node.js ortaya cikti.Js dilini sadece Browserlarda calisan bir dil olmaktan cikarip, sunucu, serverlarda da calisabilen bir dil haline getirdi. Node.js ile backend de de frontend de de javascript yazabilecek hale getiriyor.kullanabilmek icin bilgisayarimiza indirmemiz lazim.varmi diye kontrol etmek icin ise cmd ekraninda veya bash de node -v veya node --version ile kontrol edebilriiz.

- node.js de javascript gibi asynchron(ayni anda birden fazla isi yapma) yapiya sahip bir dil. ama senchron yapiya donusturulebilir yine js gibi callback, promise larla.

# Backend de web uygulamalari gelistirmek icin kullanilir yaygin olarak. Yazilimcilarin isini kolaylastirir.hem backendde hem frontendde farkli farkli teknolojiler bilmemize gerek kalmiyor. Ust duzey bir performans sergiliyor.

# cmd de node -v veya node --version yazarak bilgisayarinda olup olmadigini gorebilirsin.

# yine node yazarsan artik node ortamina gecersin ve code yazabilirsin. ayni seyi vs code un bash inde de yapabilirsin.ve boylece js dosyasinda yazdiklarini terminalde gorursun.

# node app.js(olusturdugun ve gozukmesini istedigin js dosyasi adi) veya node app diyerek dosyamizi ister uzantili ister uzantisiz terminalde gorebilirz. browser yok artik, console.log yok yani.

                 *****************************************
         
# Json formati; obje gibi key value var ama farkli olarak key de valu da "" icinde yazilir. birden fazla object tarzi yazacaksak [] icine aliriz. kendine özgu bir yapi. ne array ne obje. Biz node.js i bilgisayarimiza kurunca bize json formatinda bir paket gelecek

-  https://www.npmjs.com/ adresi onemli.burdan goruruz node.js paketlerinin  icerigini. birsuru paket var burda. Terminalde hep npm keywordunu yazarak islemlerimizi terminalde yaziyoruz(ayni gitHub a veri gonderirken hep git ile basladigimiz gibi)

# npm paketini indirmenin iki yolu var.birincisi tek tek indirme digeri ise direkt npm install diyerek.

- 1. yol::: terminale npm init yazarak enterlayarak sonuna kadar package.json i kurariz. YA DA; daha kolay npm init -y dersek enterlanan butun herseyi otomatik onaylayip indirir.icerisine scripts altina "start":"node app.js" ki baslatabilelim. npm run start ile de baslatabiliriz. package.json uzerinde manuel olarak degisiklik yapmayi tavsiye etmeyiz. scripts kismi onemli!! Buraya mudahale edebiliriz ve calistirmak istedigimiz sayfalari burda calsitiriz. npm run ve calsitirmak istedigin sayfanin adi.mesela npm run app veya scripts altinda otomatik test geliyor npm run test dersek terminalde o sayfayi calistirir.

-- scripts de otomatik gelen test adini degistirebilirsin.hatta icerigini de degistirebilirsin. genelde start yapilir test ifadesi ve icerigi de node ile calismasini istedigimiz sayfann adi.      node app.js diye degsitirisen mesela app.js sayfasini calistirir.ve terminalde artik sadece npm run start deriz. baska scriptlerde ekleyebiliirz.

# dosyamizda degisiklikler yaptigimizda bunu her defasinda npm run dosya adi dememiz gerekiyor ki gosterebilsin.buna daha kolay bir yolla halaedecegiz.nodemon ile
       


           ********** npm paketini tanima  *****


# most popular npm package dersen google a cikan gitHub sitesinden goruruz. https://gist.github.com/anvaka/8e8fa57c7ee1350e3491 adresinden ulasabilrisin

-1- slugify; string olarak verdigimiz yazilarin arasina - ceker.
# npm i slugify yazinca terminale,yani bir paket kurdugumuzda package.json a dependence geliyor ve node_modules ve birde package-lock.json(buna hic dokunulmaz.paketlerin nerden alindigini gosteren yardimci bir dosya) dosyasi gelir klasorumuzun icine. onun icinde de slugify klasoru geliyor.

#  app.js de const slug=require("slugify") yazmaliyiz boylece slugify i kullanima acmis oluruz. ve artik slug i cosole.log icinde yazdirabiliirz yazdirabiliriz.require farz olan bir ifade. npm run start deyince require icine yazdigimiz yaziya - koyarak cikti verir. icine , / dersen kelimelerin aralarina / koyarak verir.

-2-lodash; Arraylerle alakali
# birde lodash var npm paketi olarak. npm i lodash ile indiririz. onun da icinde .last(arraylerdeki son elemani getirir), .take(bastan itibaren elemanlari verir ama [],kac taneyi istiyrsan o sayi  z.B. _.take([1, 2, 3], 2); //=> [1, 2] ), .reverse(son elemani kaldirir) gibi methodlar var.  once const lod=require("lodash") diyerek kullanima acariz. onlarca fonksiyonu var.sitesinden gorebilirsin.

- lodash ve slugify package.json da dependencies icine yazilir terminale install edince.

# AMA bunlara gerek kalmadan sadece npm install dersek hersey gelecek. Baskasinin reposundan bir proje aldiginda da npm install yapmalisin ki saglikli calissin.

-3-nodemon; canliya alma fonksiyonu
           ************* nodemon( her degisiklikte dinamik bir sekilde gostersin icin kullaniriz.) *******************

# npm run start demeden dinamik bir sekilde yazdigimiz codelarin terminalde gozukmesi icin nodemon paketini kullaniriz.
# nodemon paketini yine npmjs.com dan gorebiliriz. Canli bir sekilde server tarafinda yapilan degisiklikleri takip eder.html deki open live server gibi is goruyor.
# npm i nodemon ile indririz paketi. 10 tane baska pakete dependence o.i.onlari da getirr node modules a. package.jsona ddependences ler altina da gelir ama scripts altina dev olarak ekle ve icine de nodemon app.js yaz ve npm run dev dersek surekli terminalde canli takip eder.

- .gitignore dosyasi acip githuba gitmesini istemedigimiz dosyalari biraya direkt yazabiliriz.mesela note.md veya node_modules dersek bunlar githuba gitmez.Her projeye ekleyebilirsin


-3- expres;
# express paketi. npm i express ile kurablrz.

- 4- chalk; renkli yazmayi saglar.tebesir demek. ES6 ile gelmistir o yuzden alttaki yontemlerle degil ES6 ile yazmaliyiz
# npm i chalk ile indirirz. ve package.json da   "type": "module", yi eklemeliyiz ki ES6 calissin.

# chalki chalkdan import etmeliyiz.islemleri de import etmeliyiz, sonra yazdirirken de ;                                                             console.log(chalk.bgYellow(islemler.cikar(5,6)))



         ************* paketleri lokal veya globale instal / uninstall yapma *****************

# globale veya locale paketleri kurabiliriz. globale kurmak icin npm i -g paket adi deriz. kaldirirken de npm uninstall -g paket adi deriz. lokaldekileri kaldirmak icin aynisini ama -g siz halini yaziyorz. npm list -g ile globaldeki butun npm paketlerini goruruz.npm list ile de lokalimizdeki npm paketlerini goruruz.


            **** moduler yapi kullanarak kod yazma *****

# moduler yapi; farkli sayfalari birbirine baglayip, tek bir sayfada code kalabaligi yapmak yerine, sayfalar arasi aktarim yapmaya denilir.

# bunun icin islemi tanimladigimiz dosyadan module.exports= topla ile export ediyoruz.topla dosyanin adi. Ve yazdirmak istedigimiz dosya da                const topla=require("./topla") diyerek bunu import etmis oluyoruz.ve altina console.log icinde parametre vererrek islemi yazdirabilirz

# bu sekilde tek tek dosyalarda yapabilecegimiz gibi tek bir dosyada yazip islemleri hesaplamasini da ayri bir dosyada yapabiliriz. Birden fazla islemi gonderirken ise module.exports={topla, cikar, bol, carp} seklinde export ederiz. Ve yazdiracagimiz sayfada da require ile dosyayi tanitiyorz. yazdirirken de degisken adi.fonksiyon adi(parametre seklinde)
# const islem=require("./islemler")
# console.log(islem.carp(2,4));


# bir objeyi veya arrayi de export edeblrz. exportu ayni diger tek bir islemi gonderme gibi.yazdirilacagi sayfada da require ile tanimla.yazdirirken ise dosya adi.key adi diyoruz.  ogrenciler dosyasina bak. objeyi de arrayi de ayni sayfada yaparsan exportu {} icinde.yazdiracagimiz sayfada ise  obje icin;              genel dosya ad.obje-adi.key
# dizi icin ise genel dosya_adi.dizi_adi




       ********* ES6 ile ise bunlara gerek kalmadan daha kolay yapacagiz *********

# ES6 ile islem yapmak icin package.json a type:module ekliyorz.

# module.exports seklinde degilde fonksiyonun basina export yazarak disariya acmis oluyorz. Yazdiracagimiz yerde ise import {} from "fonksiyon adi.js" ile yazariz. degisken o.i. fonksiyonumuz {} icinde yazariz.from kisminda uzantisi ile beraber yazmak onemli ES6 da.

# birden fazla fonksiyonu da import edebilirz {} icinde ve istedigimizi yazdirrirz

# export ederken birden fazla fonksiyonu gonderirkewn tek tek yerine toplu bir sekilde de gonderebilirz.tek bir isimde gondeririz import ederken de sadece o ismi import ederiz. gonderirken fonksiyona islemini de tarif ederek gondermeliyiz. fonksiyon adi:(parametreler)=> {return yapilacak islem a+b}
# import ettigimiz sayfada ise; tek isimle import et ama yazdirirken export adi.islem adi deyip icine parametrelere karsilik gelen degerleri yaziyorz


           *********** export ile export.default arasindaki fark ************

# export ile gonderince {} icinde importunu yap. export default deyince gonderirken bir isim vermene gerek yok.import ederken {} olmadan aciktan bir isim yaz ve onu yazdir

# as ile takma isim de verilebillr.







       ********* LOOPBACK ***********

# bir Node js. in bir frameworkudur. REST API endpointleri uretir. Create REST API End points in under 2 and a half minutes.
# MySQL, MongoDB, Postgres kullanir.
# ubuntu da  npm install -g @loopback/cli kodu ile globale indir