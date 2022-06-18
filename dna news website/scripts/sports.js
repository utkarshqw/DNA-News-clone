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
let sportsdata = [
  {
    heading:
      "India vs South Africa 3rd T20I: ACA VDCA Stadium Pitch and Weather report in Visakhapatnam",
    title:
      "Know all about the pitch conditions and weather report for the 3rd T20I game between India-South Africa which will be played at Vizag.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2300101-aca-vdca-stadium.jpg",
    description1:
      "Team India have their backs against the wall as they face off against South Africa in the third T20I of the five-match series in Vizag on Tuesday. Having already lost the previous two games, Rishabh Pant's side will be hoping to stage a comeback, while Temba Bavuma's Proteas will be looking to clinch the series with another clinical display.",
    description2:
      "So far, the South African side have looked extremely confident as they have successfully won the toss and each of the previous two occasions, whilst also chasing down the required total set by India.",
    description3:
      "Having scored a healthy 200 plus total in the first game, the bowlers let down the Men in Blue, while in the second match it was the batsmen who underwhelmed.",
    description4:
      "In the third game, which is a do-or-die clash for Team India, they will be hoping to fare better in both departments with the team looking to build steam ahead of the T20 World Cup in Australia.",
  },
  {
    heading:
      "India vs South Africa, 3rd T20I live streaming: When and where to watch India vs South Africa 3rd T20I match",
    title:
      "Know all the details about the 3rd T20I match between India-South Africa. All the live streaming details about the 3rd T20I in Vizag.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2299785-ind-vs-sa.jpg",
    description1:
      "After going down 0-2 in the ongoing T20I series versus South Africa, Rishabh Pant's Team India will try and force their way back into the series with a win in the third match.",
    description2:
      "In both, the previous games, Temba Bavuma's Proteas looked dominating as they won the toss and easily chased down the targets set by India.",
    description3:
      "The Men in Blue face a crunch do-or-die clash today, a win will keep them alive in the series, but another will wrap up the series for South Africa. With Pant facing lots of criticism for his decision in the previous two games, will be making some changes in the playing XI today?",
    description4:
      "Only time will tell, but one thing's for sure, fans are in for another classic encounter in the latest chapter of the rivalry between India and South Africa.",
  },
  {
    heading:
      "Paavo Nurmi Games 2022 live streaming: Watch Neeraj Chopra for first time since Tokyo Olympics",
    title:
      "Tokyo Olympic Champion Neeraj Chopra will be in action for the first time at Paavo Nurmi Games 2022, since winning the gold in Tokyo.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2299342-neeraj.jpg",
    description1:
      "For the first time since winning a historic gold medal for India at the Tokyo Olympics in 2022, Neeraj Chopra returns to action at the Paavo Nurmi Games 2022 in Finland on Tuesday.",
    description2:
      "With a historic javelin throw of  87.58m, Chopra had become the poster boy of India and etched his name in the history books after securing India’s first-ever track and field gold at the Olympics.",
    description3:
      "Since that feat, Neeraj Chopra had been preparing overseas for the various big events later this year, and on June 14, the 24-year-old will be seen taking to the field for the first time since Tokyo 2022.",
    description4:
      "The Paavo Nurmi Games is a part of the World Athletics Continental Tour 2022 and Chopra will have his work cut out, facing off against the likes of Anderson Peters, Jakub Vadlejch, and Keshorn Walcott among others.",
  },
  {
    heading:
      "SL vs AUS 1st ODI Dream11 prediction: Best picks for Sri Lanka vs Australia match in Pallekele",
    title:
      "SL vs AUS Dream 11 Team - Check My Dream11 Team, Best Player's list for 1st ODI, Sri Lanka vs Australia",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2298806-sl.jpg",
    description1:
      "After producing heroics in the third and final T20I of the series against Australia, Sri Lanka avoided a whitewash and will be hoping to continue that momentum in the five-match ODI series, that begins on Tuesday.",
    description2:
      "While the Sri Lankan side will be boosted by the return of Dhanajaya de Silva and Dinesh Chandimal, especially as their batsmen struggled against Australia in the T20 series as well.",
    description3:
      "The visitors meanwhile have a host of injuries with Mitchell Marsh, Mitchel Starc, and Kane Richardson, all missing for Australia, the reigning T20 World Cup champs will have their work cut out.",
    description4:
      "SL vs AUS Dream11 Team: Fantasy cricket predictions and tips for Sri Lanka vs Australia",
  },
  {
    heading:
      "Imam-ul-Haq surpasses Chris Gayle, Kane Williamson to become only second batter to unique feat",
    title:
      "Pakistan batsman Imam-ul-Haq surpassed a long list of legends as he become only the second batsman after Javed Miandad to achieve a huge milestone.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2298240-fotojet-1.jpg",
    description1:
      "Pakistan wrapped up the three-match ODI series on Monday, completing a 3-0 clean sweep, and in the process, some of their batsmen landed a few milestones as well. Imam-ul-Haq continued his rich vein of form for the Green Army as he became only the second batsman after compatriot Javed Miandad to achieve a unique yet historic feat.",
    description2:
      "The 26-year-old scored 62 runs in 68 balls in the third ODI against West Indies, with his knock including seven fours and a six helping the youngster to a personal milestone.",
    description3:
      "As Pakistan posted 269-9 in their first innings against the Caribbean side, Imam-ul-Haq recorded his seventh consecutive fifty-plus score in ODI cricket. Following in the footsteps of Miandad, he thus became only the second batsman ever to achieve this illustrious record.",
    description4:
      "Moreover, Pakistan skipper Babar Azam also had a chance to join Imam-ul-Haq by replicating this feat but he was dismissed for just one run in the third ODI, thereby missing the milestone by a whisker.",
  },
  {
    heading:
      "IPL Media Rights: What's in store on day 3 after TV, digital fetch combined value of Rs 44,075 crore",
    title:
      "The IPL Media Rights e-auction will resume on Day 3, with the bidding of Package C, and D still remaining after TV, digital rights fetched Rs 44075 cr",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2297563-ipl-media-rights.jpg",
    description1:
      "The IPL Media Rights e-auction continued on day two as the Board of Control for Cricket in India (BCCI) witnessed staggering growth in the value of IPL. With Star India's stint as the official broadcaster of IPL coming to an end, BCCI decided to have an e-auction for the rights of the upcoming cycle from 2023-27.",
    description2:
      "After two days of intense bidding, the combined value of TV and digital broadcast rights for IPL fetched a staggering value of Rs 44,075 crore.",
    description3:
      "With 410 matches to be broadcasted in the five-year cycle, the total value per match for every IPL game is at INR 107.5 crore as per a report from IANS.",
    description4:
      "As the e-auction, which began on Sunday moves to its third day on Tuesday, here's what fans can expect on day 3 of the IPL media rights e-auction:",
  },
  {
    heading:
      "UEFA Nations League: Luka Modric penalty seals 1-0 win for Croatia, France miss out on final 4 berth",
    title:
      "Holders France failed to qualify for the final four of UEFA Nations League after their latest slump saw the World Champions go down 0-1 to Croatia.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2297170-modric.jpg",
    description1:
      "Luka Modric was the star of the show as his penalty in the fifth minute was enough to secure a slender 1-0 win over France, which all but ended the World Cup champs' hopes of reaching the final four of the UEFA Nations League on Monday.",
    description2:
      "In a repeat of the World Cup final of 2018, Modric's goal secured Croatia's first win over France, and the holders of UEFA Nations League now are in danger of being relegated from Group 1 with just two games left to play.",
    description3:
      "The world champions, who have now lost two and drawn two, are bottom of Group 1 on two points, five adrift of Croatia who prevailed thanks to an early Luka Modric penalty.",
    description4:
      "France coach Didier Deschamps reshuffled his team again as he looked to rest players at the end of the season and in all four matches this month never fielded the best possible lineup.",
  },
  {
    heading:
      "Australia vs Peru highlights: Goalkeeper Andrew Redmayne dances to make save during penalty shootout",
    title:
      "Australia qualified for the World Cup in Qatar 2022 after heroics from goalie Andrew Redmayne who saved penalties during the shootout while dancing.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/14/2296686-fotojet.jpg",
    description1:
      "Australian goalkeeper Andrew Redmayne danced on the goal line as he made a crucial save to confirm Australia's berth at the FIFA World Cup 2022 in Qatar after they edged out Peru 5-4 in a penalty shootout on Monday. ",
    description2:
      "Redmayne, who came on as a substitute, three minutes before the end of the game danced on the line, as he appeared to trick Peru's penalty takers, and the move indeed worked wonders as Alex Valera missed a crucial spot-kick, which was enough to seal Australia's qualification in an inter-continental playoff.",
    description3:
      "Redmayne danced across the goal line before diving to the right to stop a penalty from Alex Valera and hand Australia a deserved victory at the Ahmad bin Ali Stadium.",
    description4:
      "He danced up and down, wiggling his hips and throwing his arms about in a throwback to the clowning antics of Liverpool's Bruce Grobbelaar when they won the European Cup in 1984.",
  },
  {
    heading: "BCCI hikes monthly pensions of former cricketers and umpires",
    title:
      "A total of around 900 personnel will get the benefit of the scheme with more than 75% of the beneficiaries getting a 100 per cent raise.",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2289475-bcci.jpg",
    description1:
      "The Board for Control of Cricket in India (BCCI) on Monday announced a hike in the monthly pensions of former cricketers (both men and women) and former umpires with effect from June 1, 2022.",
    description2:
      "BCCI President, Sourav Ganguly, said it is extremely important that the financial well-being of our former cricketers is taken care of.",
    description3:
      "The players remain the lifeline and as a board, it is our duty to be by their side once their playing days are over. The umpires have been unsung heroes and the BCCI truly values their contribution,he said.",
    description4:
      "Jay Shah, Honorary Secretary, BCCI, said,The welfare of our cricketers be it former or present is a top priority, and increasing pension amounts is a step in that direction.",
  },
  {
    heading:
      "IND vs SA 3rd T20I Dream11 prediction: Best picks for India vs South Africa match in Visakhapatnam",
    title:
      "IND vs SA Dream 11 Team - Check My Dream11 Team, Best Player's list for 3rd T20I, India vs South Africa",
    image:
      "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2286956-fotojet-12.jpg",
    description1:
      "The 2nd T20I of the series witnessed India posting a respectable total of 148 runs on the board, on the back of hefty contributions from Ishan Kishan, Shreyas Iyer, and Dinesh Karthik.",
    description2:
      "Anrich Nortje was the pick of the bowlers. In reply, the Proteas team chased down the score easily with Heinrich Klaasen’s terrific knock. For India, Bhuvneshwar Kumar was the best performer in the bowling unit.",
    description3:
      "We can expect one change in the Indian playing XI from the previous game as The left-arm pacer Arshdeep Singh can come in place of Avesh Khan in India’s playing XI. On the other hand, the visitors can play with the same set of players, if Quinton de Kock has not recovered from a niggle.",
    description4:
      "Visakhapatnam will witness the third T20I match of the series between India and South Africa on the 14th of June.",
  },
];
sportsdata.forEach((ele) => {
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
  document.getElementById("news").append(box);
});

let shownews = (ele) => {
  localStorage.setItem("newsdata", JSON.stringify(ele));
  window.location.href = "sports_new.html";
};