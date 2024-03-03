import data from "./data.js"


export let tempProducts=[]

export default class GetPriceApi{
    constructor(){
        this.getValue=(item)=>{
            console.log("veri tabanindan istek atiyorz");
           const dataFind= data.find((data)=>data.name==item)
           if(dataFind){
                  tempProducts.push(dataFind)
                //   console.log(dataFind);
          return dataFind
           }else{
            const unfindedProduct="urun data da yok"
           return unfindedProduct
           }
     
        }
    }
}

// burda yazdirablyrmyz diye bakmak icin asagidaki code lari kullansak da bunlari Proxy sayfasinda yapacagiz

// const deneme=new GetPriceApi()

// console.log(deneme.getValue("sucuk"));


