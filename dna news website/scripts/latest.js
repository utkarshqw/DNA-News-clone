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

let data=[
    {   heading:"List of new features WhatsApp may soon introduce for iPhone, Android users",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2324442-whatsapp-reuters.jpg",
        description:"WhatsApp has come up with new features in the recent past. And now, the messaging platform is planning to launch other new features in the coming days. Here's a list of some new features WhatsApp may soon introduce. 1. Admins to limit who joins the group chats The meta-owned platform may allow group admins to accept or deny requests from people wanting to join via hyperlink when enabled. The information comes from WABetaInfo, and it indicates that the feature, which is now only available to beta users, will soon be available for secure versions of the app on both Android and iOS, as per Mashable. When available, the admin approval feature in WhatsApp must be manually enabled for each group that requires the feature. 2. Users can hide profile photo, last seen from specific people WhatsApp has recently announced that it will be rolling out new options which allow users to hide their profile photos, last seen, and about information from specific people in their contact lists. “To further protect your privacy online, we’re rolling out new options to your privacy control settings. Now you can select who from your contact list can see your Profile Photo, About, and Last Seen status,” WhatsApp announced on Twitter.",
        desc:"Here's how to transfer WhatsApp chats from Android to iPhone"
    },
    {
        heading:"Akshay Kumar told Dr. Chandraprakash Dwivedi that he will go back to doing films like Housefull, and Rowdy Rathore if Samrat Prithviraj fails.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2324414-akshay.jpg",
        description:"",
        desc:"Akshay Kumar said he will go back to 'masala' films if Samrat Prithviraj fails, reveals Chandraprakash Dwivedi"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2324480-exam-ians.jpg",
        description:"",
        desc:"Haryana Board result 2022: HBSE class 12 result to be declared SHORTLY at bseh.org.in"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2324349-cong-dna.png",
        description:"",
        desc:"National Herald case: Rahul Gandhi quizzed by ED for 3rd straight day, more Congress workers detained amid protests"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2324248-untitled-design-61.png",
        description:"",
        desc:"Jamshedpur: Man dies after being hit on head by boat in amusement park"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323778-twinkle-khanna.jpg",
        description:"",
        desc:"Twinkle Khanna drops hilarious video about 'struggles' of being a mother"
    },
    {
        hesding:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323882-sleep-dna.png",
        description:"",
        desc:"What is Covid-19 side effect ‘coronasomnia’? Know how the virus can disrupt sleep pattern"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323642-president-nomination.jpg",
        description:"",
        desc:"Presidential Election 1957: Who was Nehru's candidate for the post instead of Rajendra Prasad?"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323678-nothing-phone-1-1.png",
        description:"",
        desc:"Nothing Phone (1) design officially revealed ahead of July 12 launch"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323648-examz-2-1.jpg",
        description:"",
        desc:"Kerala SSLC Result 2022: DHSE Kerala board class 10 result to be declared shortly at keralaresults.nic.in"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323841-fotojet-2.jpg",
        description:"",
        desc:"Gautam Gambhir and Anurag Thakur praise Neeraj Chopra for breaking national record in javelin throw"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323563-aai.jpg",
        description:"",
        desc:"AAI Recruitment 2022: Apply for Junior Executive posts at www.aai.aero, check CTC, eligibility, application fees"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323259-1267150-sbi.jpg",
        description:"",
        desc:"SBI FD rates increased, PNB, IDBI also hike fixed deposit interest rates; check details"
    },
    {   heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323045-dilip-final.jpg",
        description:"",
        desc:"Saira Banu breaks down in tears as she accepts Bharat Ratna Dr Ambedkar Award for late Dilip Kumar"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323191-amber-heardfile-photo-1.jpg",
        description:"",
        desc:"Aquaman 2: Amber Heard removed from Aquaman and The Lost Kingdom? Actress responds"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323103-ather-energy.png",
        description:"",
        desc:"Ather Energy in talks with state governments to set up new plant"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2322900-5g-dna.png",
        description:"",
        desc:"5G rollout in India: Cabinet approves auction of 5G Spectrum, speed 10 times higher than 4G services"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2323025-army-6-pg.jpg",
        description:"",
        desc:"The cost of every delivery bowled between IPL 2023-2027 will blow your mind, check out"
    },
    {
        heading:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/quarter/public/2022/06/15/2320460-apple-iphone-12.png",
        description:"",
        desc:"Apple reportedly testing more eco-friendly packaging for these iPhones"
    }
]

function uappend(data){
data.forEach((el)=>{
    let d=document.getElementById("news");
    let div=document.createElement("div");
    div.setAttribute("id","udivcard")
    div.addEventListener("click",function(){
        ugiveinfo(el)
    })


    let img=document.createElement("img");
    img.src=el.image;
    let p1=document.createElement("p");
    p1.innerText=el.desc;
    div.append(img,p1);
    d.append(div)
})
}
uappend(data)

function ugiveinfo(el){
    localStorage.setItem("news",JSON.stringify(el))
    window.location.href="latest_new.html"
}


