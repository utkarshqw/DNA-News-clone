
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


//search_news
const api="0eb198e463564467bbbc5bcda270cb4a";
document.querySelector("#search").addEventListener("click",myFun)

async function myFun(){

  try{
    var a= document.querySelector("#query").value
    // console.log(a)
    let url=`https://newsapi.org/v2/everything?q=${a}&apiKey=${api}`

    let res =await fetch(url);
    let data=await res.json();
    append(data.articles)
  }
  catch(error){
    console.log(error)
  }
}

let append = (data) =>{
    let box=document.getElementById("news");
    box.innerHTML="";
    data.forEach((el)=>{
         let div=document.createElement("div");
         let p=document.createElement("p");
         p.innerText=el.title;
         let img=document.createElement("img");
         img.src=el.urlToImage;
         let p1=document.createElement("p");
         p1.innerText=el.description;
    
         div.append(p,img,p1)
         box.append(div)
    })
}


//top_news

let topp=[
    {
        title:"Top News",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2322307-2153546-mamata-banerjee.jpg",
        description:"AAP, TRS to skip Mamata Banerjee's Opposition meet, Owaisi not invited; Kharge says no consensus without Congress"
    },
    {
        title:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2321291-covid-19-virus-reuters.jpg",
        description:"Covid 4th wave: 8822 new cases reported in last 24 hours, 3 months record broken"
    },
    {
        title:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2321291-covid-19-virus-reuters.jpg",
        description:"Why was PM Modi’s ‘Tukaram Pagdi’ in Pune changed at last minute? Know more about the headgear"
    },
    {
        title:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2322022-shehbaz-dna.png",
        description:"12-hour blackouts, ban on wedding ceremonies: Know reason behind Pakistan’s massive electricity crisis"
    },
    {
        title:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2322280-aarti-prabhakar-twitter.jpg",
        description:"Who is Aarti Prabhakar, US President Joe Biden's new science advisor"
    },
    {
        title:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2321975-fotojet-1.jpg",
        description:"Watch Ishan Kishan involved in a heated argument with Tabraiz Shamsi after hitting him for a six"
    },
    {
        title:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/15/2323196-thackeray.jpg",
        description:"Inside Maharashtra minister Aaditya Thackeray's 'non-political' Ayodhya trip in Uttar Pradesh today"
    }
]
function topnews(topp){
topp.forEach((el)=>{
         let d=document.getElementById("news");
         let div=document.createElement("div");
         div.setAttribute("id","udivcard")
         div.addEventListener("click",function(){
             ugiveinfo(el)
         })


         let h2=document.createElement("h1");
         h2.innerText=el.title
         let img=document.createElement("img");
         img.src=el.image;
         let p1=document.createElement("p");
         p1.innerText=el.description;
    
        div.append(h2,img,p1);
        d.append(div)
    })
  }

topnews(topp)

function ugiveinfo(el){
  localStorage.setItem("news",JSON.stringify(el))
  window.location.href="business.html"
}