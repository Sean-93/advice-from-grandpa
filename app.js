// THIS IS A RANDOM BAD ADVICE GENERATOR THAT SELECTS RANDOM STRINGS FROM ARRAYS & PUTS THEM INTO A RANDOM BIT OF ADVICE

// STORING THE 2 ASCII ARTS AS VARIABLES

const grandpaMouthClosed = document.getElementById("grandpa-mouth-closed");

const grandpaMouthOpen = document.getElementById("grandpa-mouth-open");

// THESE ARE THE SECTIONS THAT ARE CONCATENATED TOGETHER TO FROM RANDOM BAD ADVICE

const adviceFirstSection = [
  "Try not to",
  "Sometimes, you can",
  "Sometimes, you want to",
  "You always want to",
  "Don't",
  "Do not",
  "You will always regret it if you",
  "You will always regret that you didn't",
  "Always",
  "Never",
  "Sometimes",
  "Sometimes it's best to",
  "You might want to",
  "Please,",
  "Please do",
  "Please don't",
  "Don't try to",
  "Try and",
  "Go ahead and",
  "You always want to",
  "You never want to",
  "Think about trying to",
  "Maybe you should start to",
  "You would never think to do this, but",
  "Back in my day, we would",
  "In the future, they will",
  "Everyone wants you to",
  "Nobody wants you to",
  "Consider trying to",
  "Never even think to",
  "I wouldn't ever even consider to",
  "Don't let them make you",
  "Never ever",
  "Why would anyone want to",
  "Why wouldn't anyone want to",
  "Your great, great grandad used to",
  "Sometime in your life, I hope you get to",
  "I hope you never have to",
  "Never take for granted the ability to"
];

const adviceSecondSection = [
  "pass up",
  "jump on",
  "throw",
  "eat",
  "use",
  "waste",
  "ride",
  "sit on",
  "feast with",
  "feast on",
  "play the banjo with",
  "play the violin with",
  "install 1993's DOOM on",
  "drink with",
  "play baseball with",
  "play marbles with",
  "play 1993's DOOM with",
  "eat a hotdog with",
  "have a beer with",
  "have a glass of wine with",
  "take a shot of whiskey with",
  "take a shot of vodka with",
  "have a martini with",
  "buy",
  "sell",
  "barter for",
  "climb",
  "take a walk with",
  "take a stroll with",
  "kiss",
  "hug",
  "play guitar with",
  "play the bass with",
  "play drums with",
  "bother",
  "annoy",
  "forget about",
  "remember",
  "throw away",
  "throw out",
  "wash",
  "air out",
  "blow dry",
  "steam clean",
  "make friends with",
  "run away from",
  "eat a sandwich with",
  "eat a donut with",
  "eat broccoli with",
  "eat spinach with",
  "eat a carrot with",
  "eat a potato with",
  "eat ravioli with",
  "eat spaghetti with",
  "eat soup with",
  "eat stew with",
  "eat gravy with",
  "eat meatballs with",
  "eat tuna with",
  "eat chips and salsa with",
  "eat a pie with",
  "eat maccaroni salad with",
  "eat a salad with",
  "eat a hoagie with",
  "eat potato chips with",
  "eat hot sauce with",
  "eat an apple with",
  "eat toast with",
  "eat a pancake with",
  "eat a waffle with",
  "eat pizza with",
  "ride on a merry-go-round with",
  "ride a rollercoaster with",
];

const adviceThirdSection = [
  "a bottle",
  "a crow",
  "a raccoon",
  "a scammer",
  "a rat",
  "a bat",
  "a pig",
  "a dog",
  "a cat",
  "a football",
  "a frog",
  "your boss",
  "a UFO",
  "a duck",
  "a goose",
  "The President",
  "The Vice President",
  "a fish",
  "a tadpole",
  "a caterpillar",
  "a worm",
  "a parrot",
  "a pigeon",
  "your hands",
  "your face",
  "your legs",
  "your feet",
  "a grasshopper",
  "a book",
  "a computer",
  "a telephone",
  "a magic 8 ball",
  "a catfish",
  "a cyber-crimer",
  "a bobcat",
  "a wolf",
  "a cactus",
  "a television",
  "a shoe",
  "a boot",
  "dirt",
  "mud",
  "a spoon",
];

const adviceFourthSection = [
  "at the library",
  "at the DMV",
  "in front of a live audience",
  "in front of God",
  "at the fair",
  "in prison",
  "in jail",
  "in the woods",
  "on the back roads",
  "in the country",
  "in the city",
  "on The Internet",
  "on The Web",
  "in a spaceship",
  "on a tractor",
  "on a lawnmower",
  "in a car",
  "on Sundays",
  "on Mondays",
  "on Tuesdays",
  "on Wednesdays",
  "on Thursdays",
  "on Fridays",
  "on Saturdays",
  "on your birthday",
  "on private property",
  "while trespassing",
  "at area 51",
  "in New York City",
  "in San Fransisco",
  "in Chicago",
  "on the roof",
  "at the park",
  "at the lake",
  "in a building",
  "on the front lawn",
  "in the backyard",
  "in outer space",
  "in the office",
  "at a party",
  "at your house",
  "in the neighbor's yard",
  "on public land",
  "in private",
  "at the store",
  "at the gas station",
  "at the grocery store",
  "on a mountain",
  "with the mayor",
  "in front of the townspeople",
  "at a bar",
  "at a concert",
  "in a bad dream",
  "in a dream",
  "with Bing Crosby",
  "on Christmas",
  "on New Years",
];

// SWITCHING THE ASCII ARTS (CLOSING MOUTH)
function closeGrandpasMouth() {
  grandpaMouthClosed.classList.remove("display-none");
  grandpaMouthOpen.classList.add("display-none");
}

function getRandomAdvice() {
  // SWITCHING THE ASCII ARTS (OPENING MOUTH)
  grandpaMouthClosed.classList.add("display-none");
  grandpaMouthOpen.classList.remove("display-none");
  // GENERATING THE QUOTE
  document.getElementById("advice-section").innerHTML =
    "<span class='random-advice'>" +
    adviceFirstSection[Math.floor(Math.random() * adviceFirstSection.length)] +
    " " +
    adviceSecondSection[
      Math.floor(Math.random() * adviceSecondSection.length)
    ] +
    " " +
    adviceThirdSection[Math.floor(Math.random() * adviceThirdSection.length)] +
    " " +
    adviceFourthSection[
      Math.floor(Math.random() * adviceFourthSection.length)
    ] +
    "." +
    "</span>";
  // SWITCHING THE ASCII ARTS (CLOSING MOUTH)
  setTimeout(closeGrandpasMouth, 4500);
}
