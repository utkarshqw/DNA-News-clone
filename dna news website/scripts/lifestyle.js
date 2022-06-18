
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


var data = [{
    heading : "Tea Burn reviews: Real USA customer results exposed!",
    title   : "New Year plans to lose weight are common, but not everyone is successful.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2285242-june-teamology-article-10-dna-002.jpg",
    description : "New Year plans to lose weight are common, but not everyone is successful. Most individuals claim that the early days of weight reduction were effective, but they eventually quit. Most of them have said that this was mostly due to the arduous and strenuous regimen they were obliged to adhere to as part of the weight reduction program designed by health professionals and physicians. Does this situation sound familiar? Those who respond affirmatively should take comfort in knowing that they are not alone. What Is Tea Burn?Tea Burn is a dietary product that employs natural ingredients to aid weight loss. It is a flavorless formula with no added chemicals or colors. It may be combined with food, water, and other drinks. The finest characteristic of this weight reduction medicine is its natural composition. Tea Burn contains all-natural chemicals that work efficiently on the body's system." 
    
},
{
   heading : "Feeling stressed? Steps to avoid burnout",
   title   : "It is crucial to take preventive steps to manage our stress levels and seek out support whenever we need it.",
   image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2284685-stressed-final.jpg",
   description : "Burnouts have become extremely common amongst people, and have become a big challenge for individuals and corporations both. Change is difficult and stressful, but the level of change triggered by the coronavirus outbreak is indeed mammoth. And that's why it is crucial to take preventive steps to manage our stress levels and seek out support whenever we need it. Namita Piparaiya, Yoga and Ayurveda Lifestyle Specialist, Founder of Yoganama guide a journey of health and wellbeing.Mindfulness is an accessible and highly effective form of self-care. You learn to disconnect your overloaded senses from all distractions and focus purely on yourself, your body, your breath and the sensations you feel. This helps you shift your brain from the constantly doing mode to the just being mode. It enables you to tap into a state of immense calm and peace that is always within your reach. You can take mindfulness breaks while sitting at your desk and focusing on your breath. Or you can go out into nature for some grounding and mindful walking. You can even eat your food mindfully to experience this practice and give your nervous system some needed break.If you start to spot early signs of burnout like irritability, disinterest in your work, lack of motivation and lethargy, you should start making time for little yoga Nidra breaks. Yoga Nidra is an excellent practice to include in your daily routine. You can practice it for 10 mins or 40 mins, during the day or before sleeping ? it all depends on what works for you. The best part is all you have to do is just lie down and listen to the teacher`s instructions. It takes you into a soothing pre-meditative state which is excellent for relaxation and improving cognitive skills. This one feels like a mini-vacation once you're done.Lastly, seek help from others. You do not have to fight all your battles alone. Especially when it comes to work, you must seek help as and when needed. Whether from colleagues, HR, or supervisors. There`s a lot more awareness around mental health, and there`s a good chance you will get the support you need. For example, maybe you need to ask your boss to redistribute the work on your plate. Or perhaps you feel you do not have enough say or control over your work, please share your feedback clearly and politely. It can be difficult, but it can also be rewarding. Remember, your mental health is a priority, so don't let it suffer, ask for help."
},
{
    heading : "Why do we 'kiss', where did the trend of kissing come from",
    title   : "If we talk about the first kissing culture, then it has to be Rome where probably the kissing culture began. They had three different types of kisses.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/08/2186968-kissing-pixabay.jpg",
    description : "A simple kiss evokes emotions of love, care and admiration. It also causes excitement in the body. Some researchers believe that kissing began millions of years ago as a result of mouth-to-mouth feeding. While the true origin of kissing remains a mystery, historians have found in India the earliest references to the practice.Major texts in the Vedic Sanskrit literature suggest an early form of kissing. Dating from 1500 BC, they describe the custom of rubbing and pressing noses together. Eventually, someone slipped and found that the lips were very sensitive and found it pleasurable. That one theory on how it started, Texas A&M University anthropologist Vaughn Bryant can be quoted.Kissing by pressing our lips together is an almost uniquely human behaviour. Be it lip-on-lip kissing or any other types of kisses, the moment is about being close or intimate with each other. When two people kiss each other on the lips, then first of all you get a very unique feeling of touch. This happens because your lips are very sensitive.During the time of kissing, the stimulation emanating from the kissing of many lips sends many positive waves to our brain. Due to this, our brain marks kissing and lip stimulation as a feeling of love and protection from the time of childhood. So in this way, when we want to express ourselves, it is possible that we do so through our mouth.British biologist Desmond Morris did some research on lipstick. He showed men several pictures of womens faces and asked which of them were the most attractive. He got the same answer over and over again. The men selected the women whose lips were the most pink, the most coloured. So there is something that draws our attention to the lips and many species use the colour red as a sign of their sexuality.The earliest examples of kissing of any kind are found in Indian Vedic culture about 2500 or 3500 years ago. Which showed that just below the eye there are sebaceous glands (oil glands) that produce a unique smell for each person.In ancient India, kissing dates back to 1500 BC, where there was the custom of rubbing and pressing noses together. Eventually, someone slipped and found that the lips were very sensitive and found it pleasurable. Thats when kissing began."
 },
 {
    heading : "World Poha Day: Why is it a good breakfast choice",
    title   : "Poha is an excellent breakfast food as it is easy to digest due to its high fiber content. It is light and can be easily digested by anyone.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/07/2171773-poha-pixabay.jpg",
    description : "Today is World Poha Day. Well, when we talk of breakfast, we surely think of poha. And when we talk of poha, how can we forget our Indore city. Indore and poha have become synonymous and identity of each other. It is a cheap, tasty, accessible and low calorie breakfast.Poha is simply considered a perfect healthy breakfast. It is super easy to prepare and is also high in nutrients. Poha is also called flattened rice, and it is a trendy Indian breakfast choice. It is available in thin and thick varieties. Many people consider including poha for weight loss into their daily diet.  Poha is an excellent breakfast food as it is easy to digest due to its high fiber content. It is light and can be easily digested by anyone without any issues. Eating poha for breakfast will also not make you feel bloated and have any digestive problems.Poha is a good source of probiotics. Poha is made from fermentation, and hence it retains all of its good microbial growth.Poha contains up to 76.9 percent of natural carbohydrates and up to 23 percent of natural fats. Therefore, it will provide you with lots of energy.Poha is naturally gluten-free, therefore good for those people with gluten allergies.Poha is naturally a highly nutritious, low-calorie food. This makes it an ideal fit for people trying to lose weight.Poha is prepared in seven ways in Indore. The specialty is that each one has its own different taste.    " 
 },
 {
    heading : "Coffee consumption reduces risk of acute kidney injury: Study",
    title   : "According to a study by Johns Hopkins Medicine, researchers suggest that coffee consumption is linked to a reduced risk of acute kidney injury",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/03/2122306-1016740-coffee1-1.jpg",
    description : "A recent study by Johns Hopkins Medicine, researchers suggest that coffee consumption is linked to a reduced risk of acute kidney injury (AKI). According to the report of ANI, the findings, published May 5 in the journal Kidney International Reports, show that those who drank any quantity of coffee every day had a 15% lower risk of AKI, with the largest reductions observed in the group that drank two to three cups a day (a 22%-23% lower risk).AKI symptoms differ depending on the cause and may include: too little urine leaving the body; swelling in the legs and ankles, and around the eyes; fatigue; shortness of breath; confusion; nausea; chest pain; and in severe cases, seizures or coma. The disorder is most commonly seen in hospitalized patients whose kidneys are affected by medical and surgical stress and complications.Using data from the Atherosclerosis Risk in Communities Study, an ongoing survey of cardiovascular disease in four U.S. communities, researchers assessed 14,207 adults recruited between 1987 and 1989 with a median age of 54. Participants were surveyed seven times over a 24-year period as to the number of 8-ounce cups of coffee they consumed per day: zero, one, two to three, or more than three. During the survey period, there were 1,694 cases of acute kidney injury recorded.When accounting for demographic characteristics, socioeconomic status, lifestyle influences and dietary factors, there was a 15% lower risk of AKI for participants who consumed any amount of coffee versus those who did not. When adjusting for additional comorbidities, such as blood pressure, body mass index (BMI), diabetes status, use of antihypertensive medication and kidney function, individuals who drank coffee still had an 11% lower risk of developing AKI compared with those who did not.We suspect that the reason for coffee’s impact on AKI risk may be that either biologically active compounds combined with caffeine or just the caffeine itself improve perfusion and oxygen utilization within the kidneys, says Parikh.by TaboolaSponsored LinksYou May Like. " 
 },
 {
    heading : "Shri Guru Arjan Dev Martyrdom Day 2022: History, Importance and teachings of the fifth Guru",
    title   : "Guru Arjan Dev was just 18-years-old when he took command as the fifth guru of the Sikh community in 1581.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/03/2115659-untitled-design-16.png",
    description : "The inspirational teachings of Sikh Gurus are considered as a symbol of courage by all those who believe in the spirit of Sikhism. Today as we mark the 24th day of the Jyeshtha month of the Sikh calendar, the entire Sikh community is celebrating the Guru Arjan Dev Martyrdom Day. He was the fifth Guru of Sikhs.The sacrifices made by Guru Arjan Dev ji for protecting the Sikh community are unforgettable. As per common belief, the Guru’s stories instil a sense of courage and strength in everyone.Guru Arjan Dev was just 18-years-old when he took command as the fifth guru of the Sikh community in 1581. He followed his father – Guru Ram Das, who was the fourth guru of Sikhs. He is known as the founder of major cities in Punjab, including Tarn Taran Sahib and Kartapur. According to scriptures, he laid the foundation of Harmandir Sahib Gurudwara in Amritsar, which is famously known as the Golden Temple. This holy temple was made to welcome people from every caste, creed, religion and race. It was built to provide food to all such people without any discrimination.Despite his contribution to the Sikh community, Mughal Emperor Jahangir ordered his execution. Don't create enmity between anyone as God is within everyone.Of all the religions, the best religion is to repeat God’s name and do pious deeds. Of all the religious rites, the best rite is to remove the filth of evil intellect by association with the saints. He who lowers his mind to the dust of all men's feet, sees the name of God enshrined in every heart.Thou O Lord, art my father and thou my mother. Thou art the giver of peace to my soul and very life.By the Grace of God, I am cured of the disease of egotism, and death no longer terrifies me.  " 
 },
 {
    heading : "World Bicycle Day 2022: Theme, WhatsApp messages, wishes to share on June 3",
    title   : "The original logo of the World Bicycle Day was designed in blue and white colours by Isaac Feld.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/03/2112267-untitled-design-11.png",
    description : "The World Bicycle Day is celebrated on June 3 every year to recognise the importance of the bicycle across the globe. It is the United Nation’s attempt to recognise the uniqueness, longevity and versatility of the bicycle. A bicycle is not just simple and affordable but also an environment-friendly means of transport.In April 2018, the United Nations General Assembly announced June 3 as the World Bicycle Day. Bicycles are an important part of many lives across the world. Many people who can’t afford to buy costlier modes of transport rely on a bicycle for their everyday commute.The original logo of the World Bicycle Day was designed in blue and white colours by Isaac Feld. It depicted varied bicyclists riding across the globe and was animated by Professor John E. Swanson. It aims to show that the bicycle belongs to everyone and it can serve all humanity likewise.The United Nations is known to observe various international days to create awareness about specific issues in order to generate awareness related to things that affect the world.According to the intergovernmental organisation, the use of bicycle is crucial to meet 13 of the sustainable development goals that it has set out.As the bicycle is a means for all, the World Bicycle Day should be celebrated by everyone. Here are some quotes and wishes that you can share with your friends, family and everyone else too." 
 },
 {
    heading : "Different types of tops for every woman to look super classy than ever!",
    title   : "A wardrobe full of clothes and still confused about what to wear?",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/19/1903602-dnaimge-2.png",
    description : "Well ladies, you are not alone in this! This is every womans story, and it is an everyday event. While there are always a few pairs of pants and jeans listed as your favorite, you can carry them on even three times a week. As for the top wear, you need to spend hours standing in front of the wardrobe thinking about what to put on today and look different than everybody else.  take a glance at different types of tops for women, which are undoubtedly the favorite piece of dress for every fashionista. From formal to party-wear, trendy to casual, here is a list of categories of tops for women, regardless of any body type and size, that will glam up your look and make you look sassy than ever.If you have been working hard on your abs or have a beautiful waist naturally, crop tops are for you. The front part of the top is designed in such a way that it ends up above the belly button and comes with stylish neck patterns.Tank tops are a summer blessing. With its sleeveless structure, you can flaunt your toned arms and beat the summers. You can pair the tank tops with fabulous pair of shorts or palazzos. Kaftan is a very new trend in tops among women. It comes in a robe-type pattern and has a very cool vibe. It fits loosely around the side and has mainly a round or boat neck design. A wrap top is usually preferred on a casual date or hangout. It is an overlapping style top that forms a v-neck. It gets wrapped around your torso with a satisfactory fit, and that's why it is called a wrap top.  Want to look stunning and impress everybody? Then Cami top is a must top to add to your collection. It is a combination of round or square neck and strap shoulders. It is of two types; either it stretches to the pelvic area, or it helps in flaunting your belly.This type of top comes with a unique design. It has a cut-out detail on the sleeves at the shoulder level, which looks impressive and makes it a funky top. The cold shoulder top is in much demand due to its new pattern. Flaunt your waist by wearing a piece of style. The cinched waist top offers an elastic detail on the waist and sometimes styles it with a bow or a ribbon. This top goes with any occasion and looks super classy. One strap top holds a complete diva look. In this style, one shoulder is exposed, and the other one is paired with significant variations in sleeves like full, ruffled, sleeveless, etc. It is a stunning fashion piece that lets you flaunt your shoulders.   " 
 },
 {
    heading : "5 very effective home exercises to reduce arm fat",
    title   : "It is not necessary to join a well-known gym and burn a hole in your wallet. These workouts can be done in your own home with the items you have.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/14/1847071-arm.jpg",
    description : "Every individual is distinct, as is everybody. However, there are some difficulties that affect a large number of people. Flabby arms is one of these concerns. Many people's fat deposits are concentrated in this area. Simply follow these simple arm workouts and you will be glad you did. It is not necessary to join a well-known gym and burn a hole in your wallet. These workouts can be done in your own home with the items you already have.Choose a bed or chair that is a little higher off the ground for this workout. Anything stable on the ground is an excellent choice. A plush cushion sofa might not be the ideal choice; it will make the toning activity more difficult to complete.Push ups in the traditional sense will help you build your muscles. Gaining balance may prove challenging at first. Push-ups should be done while balancing on your hands and knees.This is yet another traditional arm exercise that is incorporated in most workout routines to tone and shape flabby arms. This exercise can be done with or without weights. Although this workout appears simple from the side, it will work your triceps and help you lose weight under your arms. Triceps kickbacks are an arm weight workout that is normally done with dumbbells, however water bottles can also be used as weights. You may already be aware that spot reduction is a lie, and that you cannot lose weight in one specific area only by concentrated activity. The mechanism of weight reduction explains this. You see, weight loss occurs when your body expends more calories than it consumes from meals. In this instance, it begins to transform the stored fat into energy in order to keep your body working properly.  " 
 },
 {
    heading : "World Hypertension Day 2022: 5 fruits to inculde in your diet to control blood pressure",
    title   : "Hypertension affects more than 30 per cent of the adult population worldwide, which is more than one billion people in the world.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/17/1861187-fruits.jpg",
    description : "World Hypertension Day is observed every year on May 17 to increase awareness of hypertension and educate people about the problems caused due to hypertension.Hypertension affects more than 30 per cent of the adult population worldwide, which is more than one billion people in the world.One in four adults in India suffer from hypertension and only 10 per cent of patients have their blood pressure under control, according to the latest report by the India Council for Medical Research.Hypertension is defined as a condition where the force of the blood against the artery walls is too high. The more blood the heart pumps, the chances are higher for the arteries to become narrow, which therefore increases the blood pressure.Bananas are extremely low in sodium and rich in potassium, fibre and magnesium which helps keep BP low and manage hypertension. You can have them alone or add them to your smoothies and milkshakes. It also promotes digestion and helps people feel full for longer.It contains several antioxidants and could help lower your blood pressure too. The fruit is high in heart-healthy fibres and vitamin C.However, it is more advisable to have the whole fruit over the juice, to make sure you don't lose out on healthy fibres. Pomegranate helps in reducing the enzyme ACE which controls the size of the blood vessels and lowers the blood pressure. Eat it as it is or drink juice or mix it in your salad.The king of fruits, mango is a great source of fibre, beta carotene and potassium which are effective in lowering blood pressure.Coconut helps in regulating blood pressure by maintaining the electrolyte balance. Drink a glass of coconut water daily to manage hypertension." 
 },
 {
    heading : "World AIDS Vaccine Day 2022: History, significance and more",
    title   : "This day is important because it helps spread awareness about AIDS and its immunisation measures.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/18/1879167-aids-vaccine-day.jpg",
    description : "World AIDS Vaccine Day is celebrated every year on May 18. This day is a chance to thank the volunteers, community members, health professionals, and scientists working together to find a safe and effective preventive HIV vaccine.It is also a time to educate communities about the importance of preventive HIV (Human Immunodeficiency Virus) vaccine research.The day is also known as HIV Vaccine Awareness Day, with the goal of raising awareness about the importance of HIV vaccinations in preventing HIV infection and AIDS.As of now, there is still no known vaccine that can be used to stem the flow of this deadly infection.This day is observed on May 18 and is rooted in a speech given by then US President Bill Clinton in I997.In his speech, he stated that a vaccine was the only way to control the spread of HIV and eventually wipe it out. After his speech, the day was commemorated for the first time in May 1998.Every year communities around the world organize various activities on this day to raise awareness about HIV and AIDS vaccines, prevention and educate people.AIDS's full form is Acquired Immuno Deficiency Syndrome. Acquired means this condition is acquired that is a person becomes infected with a virus.Immuno denotes that the virus HIV affects the immune system of the person.Deficiency: The person's immune system becomes weak and not able to work properly.by TaboolaSponsored LinksYou May LikeSyndrome - It may happen that a person suffering from AIDS may also experience other diseases due to a weak immune system." 
 },
 {
    heading : "Create a style statement with Darshanaa Sanjanaa's fine and minimal chains",
    title   : "Darshanaa Sanjanaa is already leading the fashion trends with its explicit collection of diamond and gold jewellery sets.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/17/1873755-1.jpg",
    description : "you sometimes find necklaces that aren’t chunky and too ornate? We know a few occasions, such as cocktail parties and dinner dates, that call for something simple yet elegant, and if you're looking for the same, you've come to the right place. Darshanaa Sanjanaa has accomplished the hunt for your dainty and minimal chains. Their elegant piece of jewellery will make you go bonkers.Darshanaa Sanjanaa is already leading the fashion trends with its explicit collection of diamond and gold jewellery sets. And by introducing a stupefying collection of chains every to and fro, they are being the most authentic jewellers yet again.From single chains to layered ones, Darshanaa Sanjanaa has a great collection. Their chain collection comprises Italian beauties which are made with fine and gleaming diamond stones and gold, giving you a perfect regal look. Darshanaa Sanjanaa also has a three-layer gold chain of 18k. With this beautiful chain, you can create a style statement that will sway your onlookers.Besides these, Darshanaa Sanjanaa also has a collection of thin single chains with a beautiful pendant that will accentuate your look for any dinner date or evening party. From beads to cable, to wheat link, to Figaro, and brass drawn to omega, Darshanaa Sanjanaa has covered the chains of every type. Take a look at their collection and the next thing you want to do is add them to your jewellery box. The creative director of Darshanaa Sanjanaa, Darshana Aswani, has made sure that these chains can be worn with any outfit to create an elegant and stylish look. Darshanaa Sanjanaa is known for its fine, bespoke, and affordable collection of jewellery. Founded by Kaushal Aswani and Raveena Aswani in the year 1992, Darshanaa Sanjanaa Jewellers has emerged as a central name when it comes to outstanding ornaments. They have a total of three shops and have numerous clients, including a few from Bollywood. Speaking of which, actresses like Kiara Adwani, Kriti Sanon, Shilpa Shetty, Madhuri Dixit, Esha Gupta, Katrina Kaif, etc. were stopped wearing jewellery by Darshanaa Sanjanaa. So what are you waiting for?  " 
 },
 {
    heading : "Adidas sports bra advertisement banned for showing bare breasts",
    title   : "The new advertisement of Adidas featured photographs of bare breasts of various skin colours, shapes and sizes in a grid format.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/15/1853544-adidas.jpg",
    description : "The new advert featured photographs of bare breasts of various skin colours, shapes and sizes in a grid format. The advertisement appeared in three formats - as a tweet and two posters.Soon after the advert was released, objections were raised by certain people online.Now, reports stated that the Advertising Standards Agency (ASA) found all three versions objectionable that could cause widespread offence and hence decided to ban them.The agency reportedly received 24 complaints that the campaign's use of nudity was gratuitous and objectified women by sexualising them and  Some people had contacted them asking whether the posters were appropriate to be on display where they could be seen by children. After the ban on its ad, a spokesperson for Adidas UK told BBC that it stood proudly behind the message that it continued to display on its website.According to reports, the agency said it did not think the way the women were portrayed in the tweet was sexually explicit or objectified.However, it did find that the tweet was likely to cause a stir as many would raise offence at the explicit nudity. ASA stated that the advert needed careful targeting to avoid causing offence.  "
 },
 {
    heading : "How often should you wash your hair in a week?",
    title   : "When you start seeing the following symptoms in your hair, then you need a hair wash.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/07/1759594-hair-wash.jpg",
    description : "Many of us are confused about hair washing as to when should we wash our hair, on which day of the week, and on which day we should not. With this confusion, many people start washing their hair too much, and some do not use shampoo even after 5-6 days.There is no rocket science in when to shampoo the hair and when not, but there are some important things that you have to take special care of.When you start seeing the following symptoms in your hair, then you need a hair wash.1. If you start seeing oil in your hair after a day of hair wash, then the hair looks sticky, then you need to wash the hair. This is often seen when you have an oily scalp.2. If you do not want to wash your hair daily and your hair becomes oily in a short time, then you can also use dry shampoo.3. If the scalp skin has started appearing in the hair or if you scratch your head a little bit, dirt is visible in the nails, then it means that your hair has become dirty.4. If the head is not washed for a long time, knots start forming in the hair. If your hair is also looking too tangled, then you should wash your hair with shampoo.5. After washing the hair, the smell of shampoo or conditioner starts coming from them. When you stop getting this fragrance in your hair, it means that the hair is ready for washing. 6. The texture of the hair also looks bad if not washed for a long time. Pay attention to this too. by TaboolaSponsored LinksYou May Like7. Washing your hair daily can certainly lead to hair fall or dryness, but you should not skip shampooing for too many days. Also, keep dry shampoo only for emergency, do not make it your habit. " 
 },
 {
    heading : "7 ways to protect your child from heatwave",
    title   : "In view of the heatwave, many states have announced early summer vacations in schools. However, in some places summer vacations are yet to commence.",
    image   : "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/05/17/1873689-children-heat-ians.jpg",
    description : "North and some parts of Central India are reeling under severe heatwave with temperatures touching the 49 degrees mark in many places. In such a situation it becomes imperative that we protect ourselves, especially children against the heatwave.Extreme temperatures can lead to a variety of health issues including dehydration, heat stroke and fatigue. In view of the heatwave, many states have announced early summer vacations in schools. However, in places where summer vacations are yet to commence, special precautions need to be taken. Encourage children to drink water regularly and do not allow them to go out in the sun during peak hours. This is one of the most important step to save them from heat stroke. National Disaster Management Authority has issued an advisory for parents and schools to protect children from the heatwave. 1. School children should always carry a bottle of water with them to school.2. Children should drink lemon water/ buttermilk/ coconut water/ fresh fruit juice regularly.3. When going out, children should wear light coloured, lightweight, loose cotton clothes.4. Cover their heads when children are out in the sun with a cap and an umbrella.5.  Avoid junk food during summer. Go for fresh fruits, salads and home-cooked meals.6. Stay out of direct sunlight, especially during peak hours from 12 pm-4 pm. Play outdoors.7. Take child to a doctor if he/she complains of dizziness, nausea, constant headache, chest pain and breathing problems." 
 }
];

function append(data){
   data.forEach(function(elem){

      let cont = document.createElement("div") 
      //console.log(elem.title)
      cont.setAttribute("id","ndiv")
    

      let image = document.createElement("img")
      image.src = elem.image;
      image.setAttribute("id","nimg")

     let heading = document.createElement("p")
     heading.innerText = elem.heading;

     cont.append(image,heading)
     document.querySelector("#news").append(cont)

      cont.addEventListener("click",function(){
         showNews(elem)
      })

  })

}
 append(data); 

function showNews(elem)  {
      localStorage.setItem("News",JSON.stringify(elem))
      window.location.href = "life_new.html";
   }


