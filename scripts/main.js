
    
    
    
    
    
    document.querySelector("form").addEventListener("submit", myfun)


     function myfun (){
 
            event.preventDefault()
   
            var obj= {
        name : form.name.value,
        email : form.email.value,
        address : form.address.value,
        wallet : form.amount.value

    }

    localStorage.setItem("user",JSON.stringify(obj))

    window.location.reload
     }
    // console.log(obj)