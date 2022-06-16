import navbar from "./navbar.js";
let nav = document.getElementById("navbar");
import top from "./topnews.js";
let to = document.getElementById("top_news");
to.innerHTML = top();
import side from "./sidebar.js";
let s = document.getElementById("side");
s.innerHTML = side();

nav.innerHTML = navbar();
import footer from "./footer.js";
let fo = document.getElementById("footer");
fo.innerHTML = footer();
//slideshow
let para = [
  "India’s wholesale inflation surges to record high of 15.88 % in May 2022",
  "Appointment of India’s new CDS will be made soon: Rajnath Singh",
  "Adhir Ranjan Chowdhury, KC Venugopal detained as Congress protests Rahul Gandhi’s ED question",
  "Nitish Kumar in race to become next President of India? Nihar CM responds to rumours",
];

let i = 0;

let slideshow = document.querySelector("#slideshow");
setInterval(function () {
  if (i >= para.length) {
    i = 0;
  }
  slideshow.innerHTML = null;
  let p = document.createElement("p");
  p.innerText = para[i];
  slideshow.append(p);
  i++;
}, 2000);
let viralnews = [
  {
    heading:
      "Vladimir Putins bodyguards collecting his poop on foreign trips? Know reason behind claim",
    title:
      "According to a French news report, Vladimir Putin’s bodyguards are collecting his excrements on foreign trips and storing it in suitcases.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2301259-putin-dna.png",
    description1:
      "A lot of rumours and speculations are being made about Russian President Vladimir Putin’s health and well-being as his country remains embroiled in a war with Ukraine. Now, a new claim is being made about the Russian president, more specifically, about his bathroom habits.",
    description2:
      "Soon after rumours of Vladimir Putin having cancer, schizophrenia and dementia broke out, a French news report claims that the president’s bodyguards follow him to the bathroom and collect his excrements while he is on foreign trips.",
    description3:
      "This claim is being made by the French news magazine Paris Match in an investigative report by Russian journalist Regis Gente. The news report claims that whenever Putin is on a trip abroad, his bodyguards follow him to the bathroom and collect his fecal matter.",
    description4:
      "The report further says that the fecal matter is collected by the bodyguards, packed in a suitcase, and sent back to Russia. As per the claims, the Federal Protective Service agents traveling with Putin collect fecal matter, seal it into specialized bags and then send them back to Russia.",
  },
  {
    heading: "Yoga is perfect blend of Gyaan, Karm and Bhakti: Narendra Modi",
    title:
      "PM Modi said that in the last few years, yoga has gained tremendous popularity globally.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2301321-untitled-design-3.png",
    description1:
      "Prime Minister Narendra Modi on Tuesday said that Yoga is a perfect blend of Gyaan (knowledge), Karm (deeds) and Bhakti (devotion). The Prime Minister also said that in a fast-paced world, Yoga offers much-needed calm. He tweeted; Yoga is a perfect blend of Gyaan, Karm and Bhakti. In a fast paced world, it offers much needed calm.",
    description2:
      "Prime Minister Modi also shared a film on 'Yoga in our daily lives.'",
    description3:
      "On Monday, Prime Minister Modi had said that in the last few years, yoga has gained tremendous popularity globally.",
    description4:
      "In the last few years, Yoga has gained tremendous popularity globally. People from different walks of life including leaders, CEOs, sportspersons and actors regularly practice Yoga and talk about how it has helped them, he had said.",
  },
  {
    heading:
      "Uttarakhand: Viral video shows CPU personnel heroically saving toddler's life who fell from e-rickshaw",
    title:
      "The incident was caught on a CCTV camera where the child fell off the lap of her mother who was sitting on an e-rickshaw",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2297724-viral.jpg",
    description1:
      "A City Patrol Unit (CPU) personnel heroically saved a little kid's life after the toddler fell off the mother's lap from an e-rickshaw. The officer, identified as Sundar Sharma, did not care about his life as he rushed to get hold of the child amid trails of traffic-filled road.",
    description2:
      "The incident took place in Kashipur, a city in Udham Singh Nagar district, in Uttarakhand. The incident was caught on a CCTV camera where the child fell off the lap of her mother who was sitting on an e-rickshaw. The video was shared on Twitter by ANI UP/Uttarakhand",
    description3:
      "On Monday, Prime Minister Modi had said that in the last few years, yoga has gained tremendous popularity globally.",
    description4:
      "He was on duty at Cheema Chauraha. An e-rickshaw took a very sharp turn due to which a woman on it dropped her child. The child fell in front of a bus. Without caring for his life, Sundar signalled the bus to stop, ran, picked her up, said Circle Officer (CO) City on Monday. The toddler was later handed over to her mother, the officials added",
  },
  {
    heading:
      "Class 10 marksheet of IAS officer, who secured only 35 in English, 36 in Maths, goes viral",
    title:
      "Class 10 marksheet of Tuhsar Sumera was shared by IAS Awanish Sharan on Twitter to encourage students who are waiting for their board results.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2289240-ias.jpg",
    description1:
      "IAS success story: Poor marks in school do not mean you cannot achieve success. A living example of this is Tushar Sumera, the collector of the Bharuch district in Gujarat.",
    description2:
      "He got only passing marks in Class 10, but with his hard work and dedication, he managed to become a collector.",
    description3:
      "IAS Awanish Sharan has shared his story by posting Sumera’s Class 10 marksheet on Twitter to encourage students who are waiting for their board results.",
    description4:
      "A picture of Sumera along with the report card, which was blurred, was shared on Twitter by Awanish Sharan, a 2009 batch IAS officer of the Chhattisgarh cadre",
  },
  {
    heading:
      "Lineman snaps police station power supply in UP after cop fines him",
    title:
      "The lineman later told reporters that the power supply at the police station did not have a metre and was hence illegal.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2286773-lineman.jpg",
    description1:
      "In a tit-for-tat move, a lineman of the electricity department cut off the power supply to Hardaspur police station in Bareilly  (Uttar Pradesh) after an inspector issued a challan to him for not showing necessary papers.",
    description2:
      "Senior police officials were informed that the power supply to the police station had been snapped on Saturday night.",
    description3:
      "Power officials have now ordered an inquiry into the incident. According to reports, the police official, Modi Singh, was on a vehicle checking drive when he stopped the bike of lineman Bhagwan Swarup and asked him to show the necessary papers.",
    description4:
      "Swarup said that he did not carry the papers with him and could go home and bring them. But the inspector did not listen to him and handed him a fine of Rs 500.",
  },
  {
    heading:
      "Karnataka man quits IT job to open donkey milk farm, receives orders worth Rs 17 lakh",
    title:
      "Srinivas Gowda, the owner of the Karnataka Donkey farm, says he was moved by the plight of donkeys which were often spurned and undervalued.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2283385-shooting-dna-6.png",
    description1:
      "Gowda, a BA graduate, first started Isiri farms, an integrated agriculture and animal husbandry, veterinary services, training and fodder development centre on a 2.3-acre plot at Ira village in 2020 after quitting his job in a software company.",
    description2:
      "He said the number of donkey species is dwindling as they are no longer used by dhobis with the advent of laundry machines and other technology to wash linen.",
    description3:
      "Gowda said several people were apprehensive and made fun of him when the idea of a donkey farm was shared with them. The donkey's milk is delicious, very expensive and has medicinal value.",
    description4:
      "Gowda is planning to supply donkey's milk to people in packets. A 30ml of milk packet will cost Rs 150 and it will be supplied through malls, shops and supermarkets, he said.",
  },
  {
    heading:
      "Lalu Prasad Yadav to contest Presidential Elections 2022? Yes, but it’s not who you think it is",
    title:
      "Reports of Lalu Prasad Yadav contesting the presidential polls surfaced yesterday but is the RJD leader really in the race to become President.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2281183-2207166-presidential-polls.jpg",
    description1:
      "In the upcoming Presidential election, Lalu Prasad Yadav plans to throw his hat in the ring, firm in his belief that there must be a Bihari in the contest.",
    description2:
      "A resident of Saran district, which incidentally has been the ‘karmabhoomi’ (land of work) of his famous namesake, Yadav claims to have already booked a flight ticket to Delhi where he proposes to file his nomination papers on June 15.",
    description3:
      "He had filed his nomination papers in 2017 as well when the contest was between the then Bihar Governor Ram Nath Kovind, who went on to win, and former Lok Sabha Speaker Meira Kumar, who was also a native of the soil.",
    description4:
      "A resident of Yadav Rahimpur village in Marhaura assembly segment of Saran, Yadav is barely 42, young enough to be a son of the RJD president, though, like the latter, he too takes care of a large family.",
  },
  {
    heading:
      "Andhra Pradesh traffic cop suspended after video of him thrashing a drunk man went viral",
    title:
      "The viral video showed a man, likely in an inebriated condition, being hit by the Andhra traffic constable on the roadside.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2280975-shooting-dna-2.png",
    description1:
      "A video clip of a man being allegedly thrashed by a traffic police head constable went viral on social media on Sunday. While the police initially tried to justify the cop’s action, he was later put under suspension, pending an inquiry. The incident took place near Annamayya circle on AIR by-pass road on Saturday.",
    description2:
      "The video showed a man, likely in an inebriated condition, being hit by the traffic constable on the roadside. The police official further maintained that the constable didn’t deliberately thrash the man.",
    description3:
      "The drunken person was creating a nuisance leading to disturbance in the smooth flow of traffic. The traffic constable who was working on the junction tried to defuse the matter. However, the drunken person chose to use filthy language and shouted at the traffic constable, he said.",
    description4:
      "In a conversation with ANI on Sunday, Tirupati DSP traffic Katam Raju said, On Sunday, a drunken person was arguing with a driver of the Andhra Pradesh Road Transport Corporation who was commuting via the RC Puram road. The drunken person was arguing with the driver for not allowing the former to enter the bus.",
  },
  {
    heading:
      "Meet Kyra, India's first meta-influencer with over 1 lakh Instagram followers",
    title:
      "India's first meta influencer Kyra is 21-years-old and is based in Mumbai. She has been designed by an influencer marketing platform TopSocial India.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/12/2266694-untitled-design-65.png",
    description1:
      "Social media platforms are set ablaze with virtual influencers across the globe. These fictional computer-generated 'people' have realistic characteristics, and features and look almost the same as humans.",
    description2:
      "The virtual influencers can be customised to give a graphical representation of a real person. India has also hopped onto the trend, and we now have our own virtual influencer – Kyra.",
    description3:
      "India's first meta-influencer – Kyra, is based in Mumbai and now has more than 1,00,000 followers on her Instagram account. She debuted in December 2021, and her official birthday is celebrated on January 28, 2022.",
    description4:
      "As per Himanshu, Kyra is being approached as a whole company. She will eventually be self-sufficient and unaffiliated with any agency. At the moment, she doesn't have any reference to the brand's name.",
  },
  {
    heading:
      "Virat Kohli's brother shuts Instagram troll who mocked him for having less followers",
    title:
      "Virat Kohli's brother, Vikas Kohli, was recently mocked by a fan for not having as many Instagram followers as his brother.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/11/2257281-untitled-design-5.jpg",
    description1:
      "Former India skipper Virat Kohli just surpassed 200 million Instagram followers, making him the first Indian to accomplish this record. He is now the world's third-most followed athlete on social media, after only football player Cristiano Ronaldo who has 451 million followers and Lionel Messi who has 334 million followers. Virat Kohli is now Asia's most followed social media user.",
    description2:
      "Many of Virat's followers congratulated him on his achievement on social media. However, some narrow-minded fans took advantage of the occasion to ridicule Virat's loved ones for failing to match his level of achievement.",
    description3:
      "Virat Kohli's brother, Vikas Kohli, was recently mocked by a fan for not having as many Instagram followers as his brother. Vikas is one of Kohli's most enthusiastic fans, and he frequently cheers his brother's success on social media.  Vikas also works closely with Virat and plays a vital part in the operations of his athletic wear firm, One8.",
    description4:
      "In the most recent Instagram post about Virat, one user attempted to troll Vikas for failing to reach 1 million followers. Vikas has about 130 thousand followers on social media, which is less than Kohli's but still extremely impressive. Troll commented,  Bechahara bhai ka 200 million subscribers ho gya saale ka 1 million v nhi huya (Brother has hit 200 million subscribers and you don’t even have 1 million).",
  },
];

viralnews.forEach((ele) => {
  let box = document.createElement("div");
  box.setAttribute("id", "semidiv");
  let image_div = document.createElement("div");
  image_div.setAttribute("id", "imagediv");
  let im = document.createElement("img");
  im.src = ele.image;
  im.setAttribute("id", "isumit");
  let text_div = document.createElement("div");
  let p = document.createElement("p");
  p.addEventListener("click", () => {
    shownews(ele);
  });
  p.setAttribute("class", "para");
  p.innerText = ele.heading;
  image_div.append(im);
  text_div.append(p);
  box.append(image_div, text_div);
  document.getElementById("newsdata").append(box);
});
let bu = document.createElement("button");
bu.innerText = "More News";
bu.setAttribute("id", "morenews");
document.getElementById("newsdata").append(bu);
let shownews = (ele) => {
  localStorage.setItem("newsdata", JSON.stringify(ele));
  location.href = "showdata.html";
  console.log(ele);
};
