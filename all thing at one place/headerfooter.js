function navbar() {
    return `
    <div>
    <div id="dna">
        <img src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt="" id="img1">
        <h4 id="h4">हिंदी में पढ़ें</h4>
       </div>
    <div id="black">
        <div><a href="#"><img src="https://english.cdn.zeenews.com/static/public/menusearch.svg" alt="" id="img"></a>
            <div class="search-drop">
                <div>
                    <input type="text" id="query" placeholder="Search on DNA...">
                    <button id="search">Go</button>
                 </div>
             </div>
            </div>
    </div>
</div>
    `;
}

function top() {
    return `
    <div><p>Top News</p></div>
    <div id="slideshow">
    </div>
    <div id="play">
     <i class="fa-solid fa-backward-step" ></i>
     <i class="fa-solid fa-pause"></i>
     <i class="fa-solid fa-forward-step"></i>
    </div>`;
}

function side() {
    return `
    <div>
    <img src="https://english.cdn.zeenews.com/static/public/icons/icons-latestnews.svg" alt="">
    <a href="latest.html"><p>Latest News</p></a>
    </div>
    <div>
        <img src="https://english.cdn.zeenews.com/static/public/icons/icons-photos.svg" alt="">
        <a href="#"><p>Photos</p></a>
    </div>
    <div>
        <img src="https://english.cdn.zeenews.com/static/public/icons/icons-videos.svg" alt="">
        <a href="#"><p>Videos</p></a>
    </div>
    <div>
        <img src="https://english.cdn.zeenews.com/static/public/icons/icons-explainer.svg" alt="">
        <a href="#"><p>Explainers</p></a>
    </div>
    <div>
        <img src="https://english.cdn.zeenews.com/static/public/icons/icons-india.svg" alt="">
        <a href="india.html"><p>India</p></a>
    </div>
    <div>
        <img src="https://english.cdn.zeenews.com/static/public/icons/icons-entertainment.svg" alt="">
        <a href="entertainment.html"><p>Entertainment</p></a>
    </div>
    <div>
        <img src="https://english.cdn.zeenews.com/static/public/icons/icons-sports.svg" alt="">
        <a href="#"><p>Sports</p></a>
    </div>
    <div>
        <img src="https://english.cdn.zeenews.com/static/public/icons/icons-viralNews.svg" alt="">
        <a href="#"><p>Viral News</p></a>
    </div>
    <div>
        <img src="https://english.cdn.zeenews.com/static/public/icons/icons-lifestyle.svg" alt="">
        <a href="#"><p>Lifestyle</p></a>
    </div>
    <div>
        <img src="https://english.cdn.zeenews.com/static/public/icons/icons-business.svg" alt="">
        <a href="Business.html"> <p>Business</p></a>
    </div>
    <div>
        <img src="https://english.cdn.zeenews.com/static/public/icons/icons-world.svg" alt="">
        <a href="world.html"><p>World</p></a>
    </div>
       `;
}

function ufooter(){
    return `
    <!-- footer part start -->
    <div id="main_fotter">

     <div class="footer">
         <div class="one">   
             <a href=""><img  class="images" src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png"></a> 
          </div>
        
          <div class="two">
              <a href="">INDIA</a>
          </div>
          <div class="two">
              <a href="">WORLD</a>
          </div>
          <div class="two">
              <a href="">BUSINESS</a>
          </div>
          <div class="two">
              <a href="">TECHNOLOGY</a>
          </div>
          <div class="two">
              <a href="">SPORTS</a>
          </div>
          <div class="two">
              <a href="">CRICKET</a>
          </div>
          <div class="two">
              <a href="">ENTERTAINMENT</a>
          </div> 
     </div>

     <hr size="1" width="90%" color="grey">  

    
    
    <div class="footer2">
     <div class="you">
         <div class="follow">FOLLOW US ON</div>
        <a href=""><img class="image" src="https://www.citypng.com/public/uploads/small/51614984618gsscoqnrvq8pq2urdypfrvwe9tdicq0kisamqnuq6aubalc3nkrm3nvxh7fs4wjxxb6dlt1c3kb69zxwde4syrmqmapf5exghqkr.png"></a>
      </div> 
    
      
       
         
             <div class="two">
                 <a href="">ABOUT DNA</a>
             </div>
             <div class="two">
                 <a href="">CONTACT US</a>
             </div>
             <div class="two">
                 <a href="">INVESTORS</a>
             </div>
             <div class="two">
                 <a href="">ADVERTICE</a>
             </div>
             <div class="two">
                 <a href="">PRIVACY-POLICY</a>
             </div>
             <div class="two">
                 <a href="">ENTERTAINMENT</a>
             </div>
        
         
     </div>

     
     <hr size="1" width="90%" color="grey">  

    
    <div class="footer3">
     <div class="one1">   
         <div>PARTNER SITE</div>
      </div>
    
      <div class="two">
          <a href="">ZEE NEWS</a>
      </div>
      <div class="two">
          <a href="">HINDI NEWS</a>
      </div>
      <div class="two">
          <a href="">MARATHI NEWS</a>
      </div>
      <div class="two">
          <a href="">BENGALI NEWS</a>
      </div>
      <div class="two">
          <a href="">TAMIL NEWS</a>
      </div>
      <div class="two">
          <a href="">MALAYALAM NEWS</a>
      </div>
      <div class="two">
          <a href="">WION</a>
      </div> 
 </div>

 <hr size="1" width="90%" color="grey">  

 <div class="footer4">
     <div class="one2">©1998-2022 INDIA DOT COM PRIVATE LIMITED, ALL RIGHTS RESERVED.</div>
 </div>

 </div>
<!-- footer part end     -->
    `
    
}

export {navbar,top,side,ufooter}

