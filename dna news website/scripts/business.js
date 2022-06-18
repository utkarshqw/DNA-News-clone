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

  let newarr = [
    {
        heading:"Air India fined Rs 10 lakh for denying boarding to passengers without compensation",
        title:"In case the airline concerned is able to arrange an alternative flight for the affected passenger within an hour, no compensation is to be paid",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2303541-untitled-design-2.jpg",
        description:'Aviation regulator DGCA on Tuesday said it has imposed a fine of Rs 10 lakh on Air India for denying boarding to passengers holding valid tickets and thereafter not providing mandatory compensation to them. "After that a series of checks were carried out by DGCA and during our surveillance at Bengaluru, Hyderabad and Delhi, there were specific instances, in the case of Air India - where the regulation (regarding compensation to passengers) is not being followed and therefore, a show cause notice was issued to the airline and also a personal hearing was afforded," the Directorate General of Civil Aviation (DGCA) said in a statement. According to the regulator, Air India may not have a policy in this regard and does not pay compensation to the passengers. "To say the least, it is a matter of serious concern and unacceptable. In the specific cases detailed in the show cause notice, after going through AI submissions, as part of enforcement action, the competent authority has levied a penalty of Rs 10 lakh," it noted. "In addition, the Airline has been advised to immediately put the systems in place to resolve the issue - failing which further action shall be taken by DGCA," it added.'
    },

    {
        heading:"India’s wholesale inflation surges to record high of 15.88 % in May 2022",
        title:"The Wholesale Price Index (WPI) based inflation has been in the double-digit for 14 months in a row.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2303057-wpi.jpg",
        description:'India`s annual wholesale price-based inflation surged to 15.88 per cent in May, the highest level in nearly 10 years, due to a sharp jump in the prices of fuel, metal, chemicals, and food articles, the government data showed on Tuesday.The Wholesale Price Index (WPI) based inflation has been in the double-digit for 14 months in a row. The WPI-based inflation stood at 15.08 per cent in April and 14.55 per cent in March.In May 2021, the WPI-based inflation stood at 13.11 per cent, as per data released by the Ministry of Commerce & Industry.The month-over-month change in the WPI index for the month of May 2022 stood at 1.38 per cent as compared to April 2022.'
    },

    {
        heading:"BMW iX electric SUV to be powered by ONE long-range battery",
        title:"BMW will install and test a long-range battery developed by Michigan-based startup ONE in iX electric SUV.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2302646-bmw-logo.png",
        description:'BMW will install and test a long-range battery developed by Michigan-based startup Our Next Energy (ONE) in the German automaker`s iX electric SUV, the companies said on Tuesday. ONE`s Gemini battery will incorporate two types of battery cells, including one with advanced chemistry that can store more energy and enable vehicle range of 600 miles (965 km) or more between charges, the battery maker said. The prototype vehicle is expected to be completed by year-end, ONE said.'
    },

    {
        heading:"NGO Great Mission Group Society files application to attain GI tag for Gaumukh Gangajal",
        title:"Once a product gets this tag, any person or company cannot sell a similar item under that name.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2302130-untitled-design-4.png",
        description:'Great Mission Group Society (GMGS), a non-government organisation, has filed an application before the GI registry office in Chennai to attain Geographical Indications tag for Gaumukh Gangajal, with an aim to promote its unique properties across the globe. Once a product gets this tag, any person or company cannot sell a similar item under that name. This tag is valid for a period of 10 years following which it can be renewed. The other benefits of GI registration include legal protection to that item, prevention against unauthorised use by others, and promoting exports.Founder and Chairman of GMGS Ganesh Hingmire claimed that the scientific research has proved that the water of Gaumukh Gangajal is unique in terms of having medicinal properties, and presence of healthy living organisms. There are several scientific researches and studies which have proved the uniqueness of this water, he said.'
    },

    {
        heading:"Swiggy, Zomato asked to submit consumer grievance redressal plan in 15 days",
        title:"In last one year, over 3,631 grievances were registered against Swiggy and 2,828 against Zomato on the National Consumer Helpline - 1915.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2299680-swiggy-zomato-ians.jpg",
        description:'Taking cognizance of increasing complaints, the Department of Consumer Affairs on Monday directed the two major e-commerce food business operators, Swiggy and Zomato to submit within 15 days proposals to improve their consumer grievance redressal mechanisms. The department has received more than 3,500 grievances against Swiggy and Zomato on its consumer helpline. The Department of Consumer Affairs has also directed Swiggy and Zomato to disclose breakup of all charges included in the order amount such as delivery charges, packaging charges, taxes and surge pricing. The instructions were given during a meeting chaired by consumer affairs secretary Rohit Kumar Singh with major e-commerce food business operators. '
    },

    {
        heading:"2022 Mahindra Scorpio-N interior revealed: Check what’s new in the upcoming SUV",
        title:"Mahindra is gearing up to launch the 2022 Mahindra Scorpio-N later this month on June 27.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2299559-mahindra-scorpio-n.jpg",
        description:'Mahindra is gearing up to launch the 2022 Mahindra Scorpio-N later this month on June 27 and ahead of the launch, the car manufacturer has shared new images that reveal how the interiors of the upcoming SUV will look like. The images confirm a few of the speculations and leaks that have been in circulation for quite a while now. Here’s what we know about the 2022 Mahindra Scorpio-N.'
    },

    {
        heading:"Silver lining for India in current global meltdown: Zerodha CEO",
        title:"Zerodha CEO Nithin Kamath believes that the current global meltdown has a silver lining for India.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2298779-wordle-1.png",
        description:'As high inflation and soaring interest rates are continuously throbbing the Dalal Street, Zerodha CEO Nithin Kamath believes that the current global meltdown has a silver lining for India as we may continue to do better than other markets on a relative basis due to the low levels of leverage in our capital markets. Kamath mentioned his views in a Twitter thread.He further said that leverage is like a weapon of mass destruction, resulting in excesses both on the way up and down. Kamath believes that leverage during these times can highlight the dive. “When markets fall, long leveraged positions are required to bring additional margins, failing which positions are forced to exit resulting in the markets falling even more.” the CEO wrote in the Twitter thread.'
    },

    {
        heading:"LIC shares crash by 5.85%, down 30% from IPO issue price",
        title:"",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2298597-lic-image.jpg",
       description: 'The share price of Life Insurance Corporation of India (LIC) crashed by around 6 per cent on Monday as the end of the lock-in period for anchor investors intensified selling. The government-run LIC closed 5.85 per cent down at Rs 668.20 at the BSE. The scrip hit a low of Rs 666.90 in the intra-day.'
       
    },

    {
        heading:"Bitcoin falls 14 percent after major US crypto lending company freezes withdrawals",
        title:"LIC`s share is 29.59 per cent down from its IPO issue price of Rs 949.LIC has closed in the red for the 10 straight trading sessions.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2290560-crypto-currency-reuters.jpg",
        description:'Bitcoin slumped 14 percent on Monday after major US cryptocurrency lending company Celsius Network froze withdrawals and transfers citing "extreme" conditions, in the latest sign of the financial market downturn hitting the cryptosphere.The Celsius move triggered a slide across cryptocurrencies, with their value dropping below $1 trillion on Monday for the first time since January 2021, dragged down by bitcoin, the largest token.New Jersey-based Celsius, which has around $11.8 billion in assets, offers interest-bearing products to customers who deposit cryptocurrencies with its platform. It then lends out cryptocurrencies to earn a return.'
    }, 

    {
        heading:"7th Pay Commission: DA hike in July, new formula, calculation - Check latest updates",
        title:"While a 4 percent DA hike was expected for central government employees in July, latest reports now claim that a 5 percent hike is being considered.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2288320-da-hike-update-pixabay.jpg",
        description:'7th Pay Commission latest news: With news reports increasing around a grander than expected Dearness Allowance hike for central government employees, a new formula may be implemented in July. After the 3 percent hike earlier in the year, a four percent hike was expected but the latest reports now put the number at 5 percent. If this figure turns out accurate, this will be the first 5 percent DA jump since 2019. The formula for DA will change with the July revision, as per a Zee Business English report. The new formula will reportedly bring home a greater DA hike for central government employees. Currently, the DA stands at 34 percent. With the All India Consumer Price Index (AICPI) climbing, which is the basis of allowance calculation, there is hope for a bigger DA hike than last time.'
    },

    {
        heading:"India’s retail inflation eases to 7.04% in May 2022",
        title:"While a 4 percent DA hike was expected for central government employees in July, latest reports now claim that a 5 percent hike is being considered.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2287214-inflation.jpg",
        description:`India's retail inflation eased to 7.04 per cent in May as against 7.79 per cent in April, mainly on account of softening food prices. However, it remained above the RBI's upper tolerance level for the fifth consecutive month, government data showed on Monday.The Consumer Price Index (CPI) based inflation was 7.79 per cent in April. In May 2021, the retail inflation stood at 6.3 per cent.Inflation in the food basket was 7.97 per cent in May 2022, marginally lower than 8.31 per cent in the previous month, as per the data released by the National Statistical Office (NSO).`
    },

    {
        heading:"Equity indices open in red, Sensex down by 1,432 points",
        title:"Equity benchmark indices opened in the red on Monday with Sensex down by 1,432.52 points and Nifty by 410.10 points. ",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2285830-1655119044-00000003.jpg",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis rem veniam odio voluptatibus molestias mollitia quasi nam aliquid maiores dignissimos recusandae esse laudantium sapiente quod harum impedit nihil dolores reprehenderit saepe, eum quae necessitatibus. Veritatis autem dicta sequi facere unde, voluptas obcaecati ipsam omnis quisquam, suscipit possimus earum perspiciatis cumque alias labore. Assumenda et neque odit, a autem quisquam dolore at optio blanditiis molestias. Quas nulla ducimus, aspernatur ipsa voluptatibus ipsum maiores hic. Vero reiciendis necessitatibus consequuntur fuga at, optio placeat error maiores sit esse tempore unde ullam ratione voluptatem porro magnam veritatis? Ipsam molestiae obcaecati quidem, placeat autem nobis iure a quisquam omnis illum deserunt adipisci dolor ducimus recusandae saepe, culpa voluptate libero! Porro odio officiis enim ut beatae numquam minima perferendis necessitatibus ab. Tempore quis consectetur porro commodi corporis quos inventore quae ea. Ducimus, modi eos nihil ad labore minima libero omnis incidunt a beatae magni unde voluptatibus possimus doloremque quisquam quae enim voluptatum laboriosam corrupti. Sapiente quibusdam nesciunt nam commodi obcaecati officia excepturi fugiat, molestias repudiandae quam aut? Animi assumenda dolore quasi quae necessitatibus officia minus,"
    },

    {
        heading:"Rupee falls 20 paise to close at record low of 78.13 against US dollar",
        title:"Last week, the rupee had tumbled 19 paise to close at a record low of 77.93 against the US dollar.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2285509-untitled-design.png",
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis rem veniam odio voluptatibus molestias mollitia quasi nam aliquid maiores dignissimos recusandae esse laudantium sapiente quod harum impedit nihil dolores reprehenderit saepe, eum quae necessitatibus. Veritatis autem dicta sequi facere unde, voluptas obcaecati ipsam omnis quisquam, suscipit possimus earum perspiciatis cumque alias labore. Assumenda et neque odit, a autem quisquam dolore at optio blanditiis molestias. Quas nulla ducimus, aspernatur ipsa voluptatibus ipsum maiores hic. Vero reiciendis necessitatibus consequuntur fuga at, optio placeat error maiores sit esse tempore unde ullam ratione voluptatem porro magnam veritatis? Ipsam molestiae obcaecati quidem, placeat autem nobis iure a quisquam omnis illum deserunt adipisci dolor ducimus recusandae saepe, culpa voluptate libero! Porro odio officiis enim ut beatae numquam minima perferendis necessitatibus ab. Tempore quis consectetur porro commodi corporis quos inventore quae ea. Ducimus, modi eos nihil ad labore minima libero omnis incidunt a beatae magni unde voluptatibus possimus doloremque quisquam quae enim voluptatum laboriosam corrupti. Sapiente quibusdam nesciunt nam commodi obcaecati officia excepturi fugiat, molestias repudiandae quam aut? Animi assumenda dolore quasi quae necessitatibus officia minus,'
    },

    {
        heading:"What is National Pension Scheme and way to address NPS related queries on WhatsApp?",
        title:"National Pension System Trust (NPST) has introduced a WhatsApp service for NPS subscribers through which they can submit their NPS-related queries.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2285427-nps-whatsapp.jpg",
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis rem veniam odio voluptatibus molestias mollitia quasi nam aliquid maiores dignissimos recusandae esse laudantium sapiente quod harum impedit nihil dolores reprehenderit saepe, eum quae necessitatibus. Veritatis autem dicta sequi facere unde, voluptas obcaecati ipsam omnis quisquam, suscipit possimus earum perspiciatis cumque alias labore. Assumenda et neque odit, a autem quisquam dolore at optio blanditiis molestias. Quas nulla ducimus, aspernatur ipsa voluptatibus ipsum maiores hic. Vero reiciendis necessitatibus consequuntur fuga at, optio placeat error maiores sit esse tempore unde ullam ratione voluptatem porro magnam veritatis? Ipsam molestiae obcaecati quidem, placeat autem nobis iure a quisquam omnis illum deserunt adipisci dolor ducimus recusandae saepe, culpa voluptate libero! Porro odio officiis enim ut beatae numquam minima perferendis necessitatibus ab. Tempore quis consectetur porro commodi corporis quos inventore quae ea. Ducimus, modi eos nihil ad labore minima libero omnis incidunt a beatae magni unde voluptatibus possimus doloremque quisquam quae enim voluptatum laboriosam corrupti. Sapiente quibusdam nesciunt nam commodi obcaecati officia excepturi fugiat, molestias repudiandae quam aut? Animi assumenda dolore quasi quae necessitatibus officia minus,'
    },

    {
        heading:"UAE-based META4 to invest Rs 250 crore in India, aims to set up electric two-wheeler plant",
        title:"The United Arab Emirates-based company META4 on Monday announced to invest Rs 250 crore to set up an EV manufacturing plant in Telangana.",
        image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2284632-amazon.png",
        description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis rem veniam odio voluptatibus molestias mollitia quasi nam aliquid maiores dignissimos recusandae esse laudantium sapiente quod harum impedit nihil dolores reprehenderit saepe, eum quae necessitatibus. Veritatis autem dicta sequi facere unde, voluptas obcaecati ipsam omnis quisquam, suscipit possimus earum perspiciatis cumque alias labore. Assumenda et neque odit, a autem quisquam dolore at optio blanditiis molestias. Quas nulla ducimus, aspernatur ipsa voluptatibus ipsum maiores hic. Vero reiciendis necessitatibus consequuntur fuga at, optio placeat error maiores sit esse tempore unde ullam ratione voluptatem porro magnam veritatis? Ipsam molestiae obcaecati quidem, placeat autem nobis iure a quisquam omnis illum deserunt adipisci dolor ducimus recusandae saepe, culpa voluptate libero! Porro odio officiis enim ut beatae numquam minima perferendis necessitatibus ab. Tempore quis consectetur porro commodi corporis quos inventore quae ea. Ducimus, modi eos nihil ad labore minima libero omnis incidunt a beatae magni unde voluptatibus possimus doloremque quisquam quae enim voluptatum laboriosam corrupti. Sapiente quibusdam nesciunt nam commodi obcaecati officia excepturi fugiat, molestias repudiandae quam aut? Animi assumenda dolore quasi quae necessitatibus officia minus,'
    },
]


function uappend(data){
    data.forEach(function(elem){

        let div = document.createElement("div")
        div.setAttribute("id","udivcard")
        div.addEventListener("click",function(){
            ugiveinfo(elem)
        })

        let h3 = document.createElement("h3")
        h3.innerText = elem.heading


        let img = document.createElement("img")
        img.src = elem.image
        img.setAttribute("id","unewscardimage")

        div.append(img,h3)

        document.querySelector("#ne").append(div);
    })
}

uappend(newarr)

function ugiveinfo(elem){
    localStorage.setItem("news",JSON.stringify(elem))
    window.location.href="business_new.html"
}


let  container = document.querySelector("#n")
let id;


function usliding() {
      if (i === newarr.length) {
        i = 0;
      }

      container.innerHTML = null;

      let div = document.createElement("div")
      div.setAttribute("id","uslideshowcard")

      
      let img = document.createElement("img");
      img.setAttribute("src", newarr[i].image);
      img.setAttribute("id","uslideshowimage")

      let h3 = document.createElement("h3")
      h3.innerText = newarr[i].heading
      h3.setAttribute("id","uslideshowheading")

      div.append(img,h3)

      container.append(div);
      i++;
    }

    id = setInterval(usliding, 1000);