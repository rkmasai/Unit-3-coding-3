
       var arr=JSON.parse(localStorage.getItem("purchase"))||  [] ;
     console.log(arr)

     // localStorage.setItem("amount",JSON.stringify(amount));

     var amount= JSON.parse(localStorage.getItem("amount")) || [];;
     var wallet_balance= document.getElementById("wallet_balance")
     wallet_balance.innerText= amount

     display (arr)

     function display(arr)
     {
        var con = document.getElementById("purchased_vouchers")
        con.innerHTML=null

         arr.forEach(function(ele) {

            var box = document.createElement("div")
            box.setAttribute= "class","voucher"

            var image = document.createElement("img")
            image.src= ele.image

            var para= document.createElement("p")
            para.innerText= ele.name

            var price = document.createElement("p")
            price.innerText= ele.price

            box.append(image,para,price)

            con.append(box)
             


         });
     }