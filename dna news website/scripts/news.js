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

let dataarr = JSON.parse(localStorage.getItem("data"));

console.log(dataarr);


function newsappendfn(data){

    let cont = document.querySelector("#news");

    data.forEach((el)=>{
        let card = document.createElement("div");
        card.setAttribute("class","vcard")

        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class","imgdiv")

        let img = document.createElement("img");
        img.src = el.image;

        imgdiv.append(img);

        let h1= document.createElement("h1");
        h1.innerText=el.heading;

        let h3= document.createElement("h3");
        h3.innerText=el.title;

        let p= document.createElement("p");
        p.innerText=el.description;

        card.append(h1,h3,imgdiv,p)

        cont.append(card)
    })
}

newsappendfn(dataarr)


// function vaddappendfn(data){

//     let adcont= document.querySelector("#vads");

//     data.forEach((el)=> {

//         let adcard = document.createElement("div");
//         adcard.setAttribute("class","adcard");

//         let adimgdiv = document.createElement("div");
//         adimgdiv.setAttribute("class","adimgdiv")

//         let img = document.createElement("img");
//         img.src = el.img;

//         adimgdiv.append(img);

//         let p = document.createElement("p");
//         p.innerText=el.title;

//         adcard.append(adimgdiv, p)

//         adcont.append(adcard)
//     })
// }

// vaddappendfn(addata)

  

