

// import { appendfn } from "./india.js";


let dataarr = JSON.parse(localStorage.getItem("data"));

console.log(dataarr);


function newsappendfn(data){

    let cont = document.querySelector("#vdetailednews");

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




var addata = [
    {
        img:"https://s0.2mdn.net/simgad/3216282925208877128",
        title:"Take the first step toward your life’s best work.SM"
    },

    {
        img:"https://tpc.googlesyndication.com/simgad/5097734368082882947?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnzTnN-0WlloWpEFTKI1s_ZG8_ZCw",
        title:"Learn From IIT Madras Faculty & Indusrty Experts"
    },

    {
        img:"https://s.adroll.com/a/A2B/4T7/A2B4T7QRPZGZVPZQJYDCNM.jpg",
        title:"Learn From IIT Madras Faculty & Indusrty Experts"
    },

    {
        img:"https://lh4.googleusercontent.com/proxy/TQrlrK7iTb7ZhfSDc4ulJ_YAkaXF7sEFCGcOHEDM4Ch-TlPoWgoAhLqQvChmHiXtc3Nzn34zIxGBsEmRFDTvLPn8pMQAK6Bauh6g7oH47_VPHLfwwrZaotvdJUVcGnkZViI8Zjok69pj",
        title:"Club Mahindra has 100+ resorts across India and abroad, take your pick & start holidaying."
    }

    
]

function vaddappendfn(data){

    let adcont= document.querySelector("#vads");

    data.forEach((el)=> {

        let adcard = document.createElement("div");
        adcard.setAttribute("class","adcard");

        let adimgdiv = document.createElement("div");
        adimgdiv.setAttribute("class","adimgdiv")

        let img = document.createElement("img");
        img.src = el.img;

        adimgdiv.append(img);

        let p = document.createElement("p");
        p.innerText=el.title;

        adcard.append(adimgdiv, p)

        adcont.append(adcard)
    })
}

vaddappendfn(addata)




import {navbar,top,side,ufooter} from "./headerfooter.js"
    
    //Navbar && TopNews
    document.querySelector("#iinavbar").innerHTML=navbar()
    document.querySelector("#top_news").innerHTML=top()

    //topnews functionality part
    let para = [
      "India’s wholesale inflation surges to record high of 15.88 % in May 2022",
      "Appointment of India’s new CDS will be made soon: Rajnath Singh",
      "Adhir Ranjan Chowdhury, KC Venugopal detained as Congress protests Rahul Gandhi’s ED question",
      "Nitish Kumar in race to become next President of India? Nihar CM responds to rumours"
    ];
  
    let j = 0;
  
    let slideshow= document.querySelector("#slideshow");
    setInterval(function () {
      if(j>=para.length)
      {
        j=0
      }
      slideshow.innerHTML=null
      let p=document.createElement("p")
      p.innerText=para[j]
      slideshow.append(p)
      j++
  
    },2000);


    //sidebar part
    document.getElementById("side").innerHTML=side();

//     //search_news
// const api="0eb198e463564467bbbc5bcda270cb4a";
// document.querySelector("#search").addEventListener("click",myFun)

// async function myFun(){

//   try{
//     var a= document.querySelector("#query").value
//     // console.log(a)
//     let url=`https://newsapi.org/v2/everything?q=${a}&apiKey=${api}`

//     let res =await fetch(url);
//     let data=await res.json();
//     append(data.articles)
//   }
//   catch(error){
//     console.log(error)
//   }
// }

// let append = (data) =>{
//   let box=document.getElementById("");
//   box.innerHTML="";
//   data.forEach((el)=>{
//        let div=document.createElement("div");
//        let p=document.createElement("p");
//        p.innerText=el.title;
//        let img=document.createElement("img");
//        img.src=el.urlToImage;
//        let p1=document.createElement("p");
//        p1.innerText=el.description;
  
//        div.append(p,img,p1)
//        box.append(div)
//   })
// }


    //footer part
    document.getElementById("ufooter").innerHTML=ufooter()