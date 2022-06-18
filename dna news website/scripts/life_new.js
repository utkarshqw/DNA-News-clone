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
document.getElementById("ufooter").innerHTML=ufooter()

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

  let data = JSON.parse(localStorage.getItem("News"))
  console.log(data)

function Display(data){

//console.log(elem.title)
let cont = document.createElement("div") 
cont.setAttribute("id","container")

let heading = document.createElement("h2")
heading.innerText = data.heading;

let title = document.createElement("p")
title.innerText = data.title;

let image = document.createElement("img")
image.src = data.image;

let desc = document.createElement("p")
desc.innerText = data.description;


cont.append(heading,title,image,desc)
document.querySelector("#news").append(cont)

}

Display(data) 