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


let newsDetails = JSON.parse(localStorage.getItem("newsByClick"));
displayDetails(newsDetails);

function displayDetails(details){
    

        let bhead = document.createElement("h1");
        bhead.setAttribute("id","bhead");

        let bp1 = document.createElement("p");
        bp1.setAttribute("id","bp1");

        let bp2 = document.createElement("p");
        bp2.setAttribute("id","bp2");

        let bimg1 = document.createElement("img");
        bimg1.setAttribute("id","bimg1");

        bimg1.src = details.image;
        bhead.innerText = details.heading;
        bp1.innerText = details.description;
        bp2.innerText = details.full_description;

        document.querySelector("#news").append(bhead,bp1,bimg1,bp2)

   
}
