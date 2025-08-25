
let main=document.querySelector(".main");
let form=document.querySelector("form");
let input=document.querySelectorAll("input")
form.addEventListener("submit",function(val) {
   val.preventDefault();
   let card=document.createElement("div")
   card.classList.add("card");
   let profile=document.createElement("div");
      profile.classList.add("profile");
      let img=document.createElement("img");
      img.setAttribute("src",input[0].value);
      let a=document.createElement("h5");
      a.textContent = `Name :${input[1].value}`;
      let b= document.createElement("h5");
      b.textContent = `Age : ${input[2].value}`;
      let c=document.createElement("h6");
      c.textContent = `Occupation :${input[3].value}`;
      profile.appendChild(img);
      card.appendChild(profile);
      card.appendChild(a);
      card.appendChild(b);
      card.appendChild(c);
      main.appendChild(card);
      input.forEach(function (par) {
  if(par.type != "submit"){
     par.value = "";

  }
  
  
    
  
  
})


      



   })
   
   


   
