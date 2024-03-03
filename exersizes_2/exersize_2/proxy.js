import GetPriceApi from "./GetPriceAPI.js"
import {tempProducts} from "./GetPriceAPI.js"  // sadece export ile gonderirsek karsilarken {} icinde olmali.export defaultda ise herhangi bir isim vererek import ediyorz

export default class Proxy {
  constructor() {
    this.getValue = (item) => {
      console.log("proxy sayfasindayiz");
    const findedProduct= tempProducts.find((product)=>product.name===item);
   
      if (findedProduct) {
        console.log(findedProduct);
       return findedProduct
       
      } else {


  const result=new GetPriceApi().getValue(item)
  console.log(result);
  return result

      }
    };
  }
}

// asagidakileri de app.js de isleme sokacagiz o nedenle burdaki kontrol amacli yazdiklarimizi kapatabilirz

// const deneme=new Proxy()

// deneme.getValue("su");


