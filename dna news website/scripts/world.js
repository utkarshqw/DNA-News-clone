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

  var worldarr = [
   
    {
         heading:"Thousands are still without power as Blizzard hits Australian mountain #shorts",
         title:"Blizzard hit Australian mountain hikers. Eight people were rescued in a blizzard on a Tasmanian mountain.",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2303795-1655203509-00000004.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
     {
         heading:"Strawberry supermoon rises tonight, when will it peak",
         title:"The world is set to witness the June's full moon, known as Strawberry Moon, on June 14",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2304364-httpscdn.cnn.comcnnnextdamassets220609160125-june-2022-strawberry-full-moon-file.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
     {
         heading:"Why did a province in Canada pass the Turban Day Act? Know all about it",
         title:"With the Legislative Assembly of Manitoba in Canada passing the Turban Day Act",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2303158-1655200526-00000003.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
         
     },
 
     {
         heading:"Villagers left to put out fires as fighting in Luhansk threatens their crops",
         title:"For civilians who stayed behind in their villages along the frontline in the Donbas the fighting between Russia and Ukraine poses a new threat. ",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2303100-1655200230-00000004.jpg",
         description:""
     },
 
     {
         heading:"Monkeypox cases rise to 470 in United Kingdom, mostly homosexuals infected",
         title:"So far 99% of infections in UK are in men and most cases are reported in London. Scientists warn that any person can become vulnerable to the disease.",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2301303-monkeypox1-reuters.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
     {
         heading:"Indian stakes high in resolution of repatriation of displaced persons from Myanmar",
         title:"As the only country that shares a long border with both Bangladesh and Myanmar, India has high stakes in the resolution of the issue of repatriation of the displaced persons from the Rakhine state of Myanmar.",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2300754-1655189558-00000003.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
     {
         heading:"After Texas school shooting, what steps are being taken by US to reduce gun violence?",
         title:"The Texas school shooting became one of the deadliest mass shooting incidents in the history of United States, prompting the government to take action",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2300071-shooting-dna.png",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
     {
         heading:"Gaia will shed light on Milky Way's secrets",
         title:"The Gaia space probe on Monday unveiled its latest discoveries in its quest to map the Milky Way ",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2292310-1655149810-00000003.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
     {
         heading:"Shocking: Drone footage shows major blaze at Smurfit Kappa packaging plant in UK",
         title:"A huge fire ripped through a packaging plant owned by Smurfit Kappa in Birmingham",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2287666-1655127909-00000003.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
 
     {
         heading:"New problem for Ukraine? Specialist gang ‘targeting’ treasures",
         title:"A specialist gang is smuggling valuable historic artefacts out of Ukraine and into Russia",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2287440-1655126747-00000002.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
 
     {
         heading:"Pakistan's unemployment woes: 27.6 pc rise in people seeking jobs overseas",
         title:"The number of Pakistanis seeking jobs abroad in the year 2021 has risen to 27.6 per cent",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2285778-1655118690-00000003.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
     {
         heading:"Report: Russia destroyed large depot with Western weapons in Ukraine",
         title:"Despite problems, people continue to live in Norilsk as the workers at Norilsk Nickel earn over $986 a month, which is higher than Russia’s average.",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2285616-1655117709-00000003.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
 
     {
         heading:"Why is Russia's Norilsk called Earth's 'most depressing city'? Know reason behind its extreme pollution",
         title:"The most northerly city in the world – the Russian mining town of Norilsk is so remote that it can’t be reached by road",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2285131-shooting-dna-8.png",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
     {
         heading:"Queen Elizabeth II becomes world’s second longest-reigning monarch: Know how she rose to power",
         title:"The most northerly city in the world – the Russian mining town of Norilsk is so remote that it can’t be reached by road",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2282460-elizabeth-dna.png",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     },
 
     {
         heading:"Kuwait to deport expats who protested against Nupur Sharma's remarks",
         title:"Stern action comes as protesters violated the laws and regulations of the country which prohibits sit-ins or demonstrations by expatriates in Kuwait.",
         image:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2281550-nupur-sharma-protest-ians.jpg",
         description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, nesciunt quisquam hic laborum vitae voluptatem neque quis similique, minus aliquid perferendis magnam impedit illo quos, delectus ea est provident sit molestiae. Eveniet veritatis, harum iste voluptates aliquid sequi delectus nesciunt voluptatibus in. Harum, quae unde eligendi officia cum ab sapiente nam voluptate impedit error aliquam natus, sit rerum excepturi quidem praesentium reiciendis sed quia! Non ex alias odio, voluptate optio soluta aut repellat? Minima fugit odio iusto. Error voluptatem maxime, dolore ab enim recusandae asperiores qui facere blanditiis nam quos repellendus similique? At enim velit, nobis facere iure perspiciatis quas animi rerum, deserunt sed voluptatem, voluptatibus sint corrupti nesciunt non accusamus dicta illo est quibusdam veritatis repudiandae quidem. Accusamus officia quasi, quaerat libero incidunt nesciunt neque eum minima? Necessitatibus obcaecati dolor magni reprehenderit, distinctio eum porro quibusdam ea officia non accusantium neque quae tenetur, fugiat tempore. Dignissimos repudiandae, atque numquam quis officiis dolorum fugit commodi eligendi odio quo quisquam maiores est fuga nesciunt, officia quasi ipsa excepturi nobis sequi velit animi. Earum fugiat quisquam, est dolorem suscipit aliquam deleniti eaque facilis ad minima beatae asperiores illo veritatis repellendus eos aperiam possimus perferendis incidunt aliquid? Rerum quisquam distinctio at placeat alias hic minus doloremque praesentium perspiciatis. Laborum optio placeat at necessitatibus, sint quaerat corrupti deleniti laudantium veritatis, perferendis delectus accusantium facere. Molestiae dolor earum vel illo ratione animi doloribus sit, qui nisi molestias dolorum, saepe tenetur voluptatem id enim expedita adipisci consequatur voluptas quasi. Similique a excepturi eius culpa praesentium magni eaque dolorem velit porro fuga libero, ea qui amet eos maiores iure repellendus ad? Repellat quidem dolorum rerum! Totam excepturi iure delectus culpa odio quaerat nisi corrupti expedita voluptas commodi, rem dolorum ratione? Maxime provident, non id deleniti eligendi odio eum molestiae? Ea aperiam, doloribus nostrum ut maiores id eius!"
     }
 
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
 
         document.querySelector("#ne").append(div)
 
     })
 
 }
 
 uappend(worldarr)
 
 function ugiveinfo(elem){
     localStorage.setItem("news",JSON.stringify(elem))
     window.location.href="business_new.html"
 }

 let  container = document.querySelector("#n")
let id;

function usliding() {
      if (i === worldarr.length) {
        i = 0;
      }

      container.innerHTML = null;

      let div = document.createElement("div")
      div.setAttribute("id","uslideshowcard")

      
      let img = document.createElement("img");
      img.setAttribute("src", worldarr[i].image);
      img.setAttribute("id","uslideshowimage")

      let h3 = document.createElement("h3")
      h3.innerText = worldarr[i].heading
      h3.setAttribute("id","uslideshowheading")

      div.append(img,h3)

      container.append(div);
      i++;
    }

    id = setInterval(usliding, 1000);