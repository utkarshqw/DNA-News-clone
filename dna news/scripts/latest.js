//navbar
import navbar from "/component/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

//sidebar
import side from "/component/side.js"
document.getElementById("side").innerHTML=side();

//top_news
import top from "/component/top.js"
document.getElementById("top_news").innerHTML=top();

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

let data=[
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2324442-whatsapp-reuters.jpg",
        desc:"Here's how to transfer WhatsApp chats from Android to iPhone"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2324414-akshay.jpg",
        desc:"Akshay Kumar said he will go back to 'masala' films if Samrat Prithviraj fails, reveals Chandraprakash Dwivedi"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2324480-exam-ians.jpg",
        desc:"Haryana Board result 2022: HBSE class 12 result to be declared SHORTLY at bseh.org.in"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2324349-cong-dna.png",
        desc:"National Herald case: Rahul Gandhi quizzed by ED for 3rd straight day, more Congress workers detained amid protests"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2324248-untitled-design-61.png",
        desc:"Jamshedpur: Man dies after being hit on head by boat in amusement park"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323778-twinkle-khanna.jpg",
        desc:"Twinkle Khanna drops hilarious video about 'struggles' of being a mother"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323882-sleep-dna.png",
        desc:"What is Covid-19 side effect ‘coronasomnia’? Know how the virus can disrupt sleep pattern"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323642-president-nomination.jpg",
        desc:"Presidential Election 1957: Who was Nehru's candidate for the post instead of Rajendra Prasad?"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323678-nothing-phone-1-1.png",
        desc:"Nothing Phone (1) design officially revealed ahead of July 12 launch"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323648-examz-2-1.jpg",
        desc:"Kerala SSLC Result 2022: DHSE Kerala board class 10 result to be declared shortly at keralaresults.nic.in"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323841-fotojet-2.jpg",
        desc:"Gautam Gambhir and Anurag Thakur praise Neeraj Chopra for breaking national record in javelin throw"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323563-aai.jpg",
        desc:"AAI Recruitment 2022: Apply for Junior Executive posts at www.aai.aero, check CTC, eligibility, application fees"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323259-1267150-sbi.jpg",
        desc:"SBI FD rates increased, PNB, IDBI also hike fixed deposit interest rates; check details"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323045-dilip-final.jpg",
        desc:"Saira Banu breaks down in tears as she accepts Bharat Ratna Dr Ambedkar Award for late Dilip Kumar"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323191-amber-heardfile-photo-1.jpg",
        desc:"Aquaman 2: Amber Heard removed from Aquaman and The Lost Kingdom? Actress responds"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323103-ather-energy.png",
        desc:"Ather Energy in talks with state governments to set up new plant"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2322900-5g-dna.png",
        desc:"5G rollout in India: Cabinet approves auction of 5G Spectrum, speed 10 times higher than 4G services"
    },
    {
        image:"",
        desc:"Indian Army Recruitment 2022: New vacancies announced for Territorial Army Officer posts at jointerritorialarmy.gov.in"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323025-army-6-pg.jpg",
        desc:"The cost of every delivery bowled between IPL 2023-2027 will blow your mind, check out"
    },
    {
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2320460-apple-iphone-12.png",
        desc:"Apple reportedly testing more eco-friendly packaging for these iPhones"
    }
]
data.forEach((el)=>{
    let d=document.getElementById("news");
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.image;
    let p1=document.createElement("p");
    p1.innerText=el.desc;
    div.append(img,p1);
    d.append(div)
})