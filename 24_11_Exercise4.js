var Koala={
    prodId : 1002,
    supplierCode:"S1001",
    description:"Koalas",
    pictureName:"Koala.jpg",
    qtyOnHand:9,
    price:119.95,
 };

 var Tulips={
     prodId : 1003,
     supplierCode:"S1002",
     description:"Tulips",
     pictureName:"Tulip.jpg",
     qtyOnHand:9,
     price:7.95,
 };
         
 var penguins={
     prodId : 1004,
     supplierCode:"S1003",
     description:"Penguins",
     pictureName:"Penguins.jpg",
     qtyOnHand:9,
     price:127.95,
 }

     function getPrice(refer){
         var text="";
         var animal = refer.id;
         if(animal === "btnKoala"){
             text+= " "+ Koala.price;
         }
         else if(animal ==="btnTulips"){
             text+= " "+Tulips.price;
         }
         else{
             text+= " "+penguins.price;
         }

         document.getElementById("outputStuff").innerHTML=text;
     }
