import navbar from "./navbar.js";
let nav = document.getElementById("navbar");
import top from "./topnews.js";
let to = document.getElementById("top_news");
to.innerHTML = top();
import side from "./sidebar.js";
let s = document.getElementById("side");
s.innerHTML = side();
import footer from "./footer.js";
let f = document.getElementById("footer");
f.innerHTML = footer();
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
nav.innerHTML = navbar();
let newsdata = JSON.parse(localStorage.getItem("newsdata"));
let h1 = document.createElement("h1");
h1.innerText = newsdata.heading;
let h3 = document.createElement("h3");
h3.innerText = newsdata.title;
let im = document.createElement("img");
im.src = newsdata.image;
let p1 = document.createElement("p");
p1.innerText = newsdata.description1;
let p2 = document.createElement("p");
p2.innerText = newsdata.description2;
let p3 = document.createElement("p");
p3.innerText = newsdata.description3;
let p4 = document.createElement("p");
p4.innerText = newsdata.description4;
document.getElementById("newsdata").append(h1, h3, im, p1, p2, p3, p4);
