//navbar
import navbar from "/component/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

//sidebar
import side from "/component/side.js"
document.getElementById("side").innerHTML=side();

//top_news
import top from "/component/top.js"
document.getElementById("top_news").innerHTML=top();


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



  //photo_news

  var data=[
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/16/2339946-thumb.jpg",
      desc:"Inside photos of Sonam Kapoor's baby shower: Personalised food menu, tasteful decor"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/15/2332241-untitled-design-2022-06-15t231814.147.jpg",
      desc:"In Pics: Heavy rains trigger flood-like conditions in Guwahati"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/15/2331990-fotojet-2022-06-15t225944.384-1.jpg",
      desc:"Viral Photos of the Day: Poonam Pandey sizzles in glamorous dress, Kiara Advani, Malaika Arora pose for paps"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/15/2329731-hong-kong.jpg",
      desc:"World's top 5 expensive cities to live in"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/15/2326593-infinix-inbook-x1-slim-1.png",
      desc:"Affordable smartphones from OnePlus, Xiaomi and others with ‘most powerful’ Snapdragon chipset"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/15/2325794-1000681-5g-6g.jpg",
      desc:"5G news: Internet to be 10 times faster. How much time will it take to download a movie?"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/15/2325162-fotojet-4.jpg",
      desc:"In Pics: Batters who made the impact in the cricket game with their bowling"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/15/2324459-fotojet-2-1.jpg",
      desc:"Nayanthara, Samantha Ruth Prabhu, Rashmika Mandanna: Know whopping fee South actresses charge per film"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/15/2322679-fotojet-1-1.jpg",
      desc:"Vikram, KGF Chapter 2, RRR, Pushpa The Rise, Master: A look at recent South blockbusters"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/15/2322231-internet-explorer.png",
      desc:"Microsoft retiring Internet Explorer after 27-years: 5 facts that you may not know about the browser"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/24/1958285-mughal-monument.jpg",
      desc:"From Taj Mahal to Qutub Minar: Mughal era monuments, mosques embroiled in recent controversies"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/24/1957400-aligarh-muslim-university3-ians.jpg",
      desc:"Aligarh Muslim University foundation day: Famous personalities who studied here"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/23/1948658-fotojet-2022-05-23t225903.015.jpg",
      desc:"Viral Photos of the Day: Akshay Kumar-Manushi Chhillar promote Prithviraj, Malaika Arora stuns in casuals"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/23/1946527-digilocker.jpg",
      desc:"Now you can access DigiLocker through WhatsApp, here’s how"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/23/1943890-thumb.jpg",
      desc:"Tejasswi Prakash turns into paparazzo as she surprises Karan Kundrra at Mumbai airport"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/23/1943724-mars-canyon.jpg",
      desc:"In Pics: Mesmerising photos of 'Grand Canyon' of Mars released by European Space Agency"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/23/1942850-team-india.jpg",
      desc:"Sanju Samson to Rahul Tripathi: Cricketers netizens believe Team India will miss against South Africa"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/23/1942596-gyanvapi-mosque9.jpg",
      desc:"Rare photo of Gyanvapi complex clicked in 1868, see here"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/22/1939613-fotojet-2022-05-22t214333.796.jpg",
      desc:"Viral Photos of the Day: Varun Dhawan lifts Kiara Advani, Nora Fatehi stuns fans in black outfit"
    },
    {
      img:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/05/22/1939316-feature-image-2022-05-22t203837.477.jpg",
      desc:"Bhool Bhulaiyaa 2: Kartik Aaryan celebrates film's success with public, flaunts 'housefull' board"
    }
  ]

  // console.log(data)
  data.forEach((el)=>{
    let d=document.getElementById("news");
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    let p1=document.createElement("p");
    p1.innerText=el.desc;
    div.append(img,p1);
    d.append(div)
})