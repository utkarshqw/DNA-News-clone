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

let videos_data = [
    {
        video_name: "DNA: संकट काल में दुनिया का विश्व गुरू बनकर उभरा India",
        video_link: "https://www.youtube.com/embed/z5qbiODl5p8"
    },

    {
        video_name: "DNA Live: देखिए DNA Sudhir Chaudhary के साथ, June 13, 2022",
        video_link: "https://www.youtube.com/embed/E4mPdGrP2C8"
    },

    {
        video_name: "DNA Live: देखिए DNA, Sudhir Chaudhary के साथ Ukraine Russia War Live Update",
        video_link: "https://www.youtube.com/embed/vVYOSicr5KA"
    },

    {
        video_name: "DNA: Agneepath Yojna -- सेना में सिर्फ 4 साल नौकरी के क्या मायने हैं? ",
        video_link: "https://www.youtube.com/embed/i8rMXtpyPZU"
    },

    {
        video_name: "DNA: Agneepath Yojna - सेना में भर्ती की नई प्रक्रिया की जरूरत क्यों पड़ी? ",
        video_link: "https://www.youtube.com/embed/W4aIHyukyfU"
    },

    {
        video_name: "DNA: Herald Case - राहुल गांधी..महात्मा गांधी के वंशज हैं? ",
        video_link: "https://www.youtube.com/embed/q5H1g50mpdU"
    },

    {
        video_name: "DNA: भारत के खिलाफ मुस्लिम देशों की मुहिम का विश्लेषण ",
        video_link: "https://www.youtube.com/embed/qXytVbp1m1Y"
    },

    {
        video_name: "DNA: धमकी पर अल-कायदा को 140 करोड़ भारतीयों की चुनौती ",
        video_link: "https://www.youtube.com/embed/0jOFW3sluJ4"
    },

    {
        video_name: "DNA: Muslim Countries Vs India -- मुस्लिम देशों की नाराजगी का विश्लेषण ",
        video_link: "https://www.youtube.com/embed/q5H1g50mpdU"
    },

    {
        video_name: "DNA: Nupur Sharma Remark -- पैगंबर मोहम्मद साहब के नाम पर हिंसा जायज कैसे? ",
        video_link: "https://www.youtube.com/embed/i8rMXtpyPZU"
    },

    {
        video_name: "DNA: Explained -- गजवा-ए-हिन्द क्या है? | What is Ghazwa-e-Hind? ",
        video_link: "https://www.youtube.com/embed/vVYOSicr5KA"
    },

    {
        video_name: "DNA Live: देखिए DNA Sudhir Chaudhary के साथ, June 07, 2022 ",
        video_link: "https://www.youtube.com/embed/z5qbiODl5p8"
    },

    {
        video_name: "DNA Live: देखिए DNA Sudhir Chaudhary के साथ, June 14, 2022 ",
        video_link: "https://www.youtube.com/embed/E4mPdGrP2C8"
    },

    {
        video_name: "DNA Live: देखिए DNA Sudhir Chaudhary के साथ, June 08, 2022",
        video_link: "https://www.youtube.com/embed/vVYOSicr5KA"
    },

    {
        video_name: "DNA Live: देखिए DNA Sudhir Chaudhary के साथ, June 07, 2022",
        video_link: "https://www.youtube.com/embed/z5qbiODl5p8"
    }
]


{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/z5qbiODl5p8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }

let playVideo = (data) => {
    data.forEach(function (elem) {
        let videoDiv = document.querySelector("#news")

        let videoBox = document.createElement("div")

        let videoName = document.createElement("h3")
        videoName.innerText = elem.video_name;

        let biframe = document.createElement("iframe")
        biframe.id = "biframe"
        biframe.allow = "fullscreen";
        biframe.src = elem.video_link

        videoBox.append(videoName, biframe)
        videoDiv.append(videoBox)
    })
}

playVideo(videos_data)




