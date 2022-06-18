//navbar
import navbar from "/component/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

//sidebar
import side from "/component/side.js"
document.getElementById("side").innerHTML=side();

//top_news
import top from "/component/top.js"
document.getElementById("top_news").innerHTML=top();

import ufooter from "/component/footer.js";
document.getElementById("ufooter").innerHTML=ufooter();

//slideshow
let para = [
    "India’s wholesale inflation surges to record high of 15.88 % in May 2022",
    "Appointment of India’s new CDS will be made soon: Rajnath Singh",
    "Adhir Ranjan Chowdhury, KC Venugopal detained as Congress protests Rahul Gandhi’s ED question",
    "Nitish Kumar in race to become next President of India? Nihar CM responds to rumours"
  ];

  let i = 0;

  let slideshow= document.querySelector("#slideshow");
  setInterval(function () {
    if(i>=para.length)
    {
      i=0
    }
    slideshow.innerHTML=null
    let p=document.createElement("p")
    p.innerText=para[i]
    slideshow.append(p)
    i++

  },2000);

//latest_news
let obj = JSON.parse(localStorage.getItem("news"))


append(obj)

function append(data){

    let div = document.createElement("div")
    div.setAttribute("id","udetailnews")
   

    let h1 = document.createElement("h1")
    h1.innerText = data.heading

    let h31 = document.createElement("h3")
    h31.innerText = data.desc


 let img = document.createElement("img")
    img.src = data.image
    img.setAttribute("id","udetailimage")

    let p = document.createElement("p")
    p.innerText=data.description

    div.append(h1,h31,img,p)

    document.querySelector("#news").append(div)
}



