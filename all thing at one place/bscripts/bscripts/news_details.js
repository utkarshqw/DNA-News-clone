let newsDetails = JSON.parse(localStorage.getItem("newsByClick"));
// let newsDetails1 = JSON.parse(localStorage.getItem("newsByClick1"));

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

        document.querySelector("#main_section1").append(bhead,bp1,bimg1,bp2)

   
}

// displayDetails1(newsDetails1);

// function displayDetails1(detailss){

//     let head = document.createElement("h1");
//     head.setAttribute("id","head");

//     let p1 = document.createElement("p");
//     p1.setAttribute("id","p1");

//     let p2 = document.createElement("p");
//     p2.setAttribute("id","p2");

//     let img1 = document.createElement("img");
//     img1.setAttribute("id","img1");

//     img1.src = detailss.image;
//     head.innerText = detailss.heading;
//     p1.innerText = detailss.description;
//     p2.innerText = detailss.full_description;

//     document.querySelector("#main_section1").append(head,p1,img1,p2)


// }


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