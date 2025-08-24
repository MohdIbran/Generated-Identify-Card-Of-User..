let form=document.querySelector("form");
let main=document.querySelector(".main");





let input=document.querySelectorAll("input");
form.addEventListener("submit", function (val) {
  val.preventDefault();

  let id=document.createElement("div");
id.classList.add("id");
let profile=document.createElement("div");
profile.classList.add("profile");
let img=document.createElement("img");
img.setAttribute("src",input[0].value);

let hee=document.createElement("h5");
hee.textContent=`Name :${input[1].value}`;
let haa=document.createElement("h4");
haa.textContent=`Age :${input[2].value}`;
let paa=document.createElement("p");
paa.textContent=`Occupation:${input[3].value}`;


profile.appendChild(img);
id.appendChild(profile);
id.appendChild(hee);
id.appendChild(haa);
id.appendChild(paa);
main.appendChild(id);
input.forEach(function (par) {
  if(par.type != "submit"){
     par.value = "";

  }
  
  
    
  
  
})


  
  
})





    

  