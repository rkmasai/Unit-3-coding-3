
    var user = JSON.parse(localStorage.getItem("user"))
    var wall = user.wallet

    var amount= [];
    amount.push(wall)
    

    var head = document.querySelector("#wallet_balance")
    head.innerText= wall


   var item = JSON.parse(localStorage.getItem("purchase"))||[];
   

   var arr=JSON.parse(localStorage.getItem("purchase"))||[];

 var data = [
    {
    "vouchers": [
    {
    "name": "Buffets",
    "image": "https://img4.nbstatic.in/tr:w-350/622a6aa86f487a000c2bf442.jpg",
    "price": 299
    },
    {
    "name": "Haircuts",
    "image": "https://img4.nbstatic.in/tr:w-350/622a6a633b031b000b44c81f.jpg",
    "price": 299
    },
    {
    "name": "Brunch",
    "image": "https://img4.nbstatic.in/tr:w-350/622a69d63b031b000b44c81d.jpg",
    "price": 99
    },
    {
    "name": "Hair Spa",
    "image": "https://img4.nbstatic.in/tr:w-350/622a69ad6f487a000c2bf440.jpg",
    "price": 349
    },
    {
    "name": "Thali",
    "image": "https://img4.nbstatic.in/tr:w-350/6100b65a40e9df000b0f5f37.jpg",
    "price": 699
    },
    {
    "name": "Breakfast",
    "image": "https://img4.nbstatic.in/tr:w-350/6100b57a1e2731000b9be705.jpg",
    "price": 149
    },
    {
    "name": "Pizza",
    "image": "https://img4.nbstatic.in/tr:w-350/6100b68640e9df000b0f5f38.jpg",
    "price": 239
    },
    {
    "name": "Head Spa",
    "image": "https://img4.nbstatic.in/tr:w-350/60fe5ce140e9df000b0f5bde.jpg",
    "price": 399
    },
    {
    "name": "Ayurvedic Massage",
    "image": "https://img4.nbstatic.in/tr:w-350/60fe5cc340e9df000b0f5bdb.jpg",
    "price": 459
    },
    {
    "name": "Holiday",
    "image": "https://img4.nbstatic.in/tr:w-350/60fe5cad40e9df000b0f5bd9.jpg",
    "price": 499
    }
    ]
    }
    ]

    display((data[0].vouchers))

    function display(data)
    {

        var container = document.getElementById("voucher_list")

        
        data.forEach( function(ele, index){

            var box = document.createElement("div")
            box.setAttribute= "class","voucher"

            var image = document.createElement("img")
            image.src= ele.image

            var para= document.createElement("p")
            para.innerText= ele.name

            var price = document.createElement("p")
            price.innerText= ele.price

            var btn = document.createElement("button")
            btn.innerText= "BUY"
            btn.setAttribute="class","buy_voucher"
            btn.addEventListener("click",function()
            {
                productadd(ele,index)
            })
            box.append(image,para,price,btn)

            container.append(box)

            
        });
    }

    function productadd(ele,index)
    {
        
      var pprice= ele.price
      if (wall > pprice)
      {
         var amount =[];;
        var totall = wall- pprice
        head.innerHTML= null
        head.innerText= totall

        wall= totall

        amount.push(wall)

        alert("Hurray! purchase successful")

        arr.push(ele)
        
         item.push(arr)

      localStorage.setItem("purchase",JSON.stringify(arr));
     
      localStorage.setItem("amount",JSON.stringify(amount));



        
      }
      else
      {
          alert ("Sorry! insufficient balance")
      }

      


        

       // localStorage.setItem("purchased",JSON.stringify(arr))


    }