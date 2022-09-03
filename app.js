// THIS IS A RANDOM ADVICE GENERATOR THAT SELECTS RANDOM STRINGS FROM ARRAYS & PUTS THEM INTO A RANDOM BIT OF ADVICE

const adviceFirstSection = ["Always", "Never", "Sometimes", "Sometimes it's best to", "You might want to", "Please, "];

const adviceSecondSection = ["eat", "use", "waste", "ride", "sit on", "feast with", "feast on", "play the banjo with", "play the violin with", "install 1993's DOOM on", "drink with", "play baseball with"];

const adviceThirdSection = ["a sandwich", "a dog", "a cat", "a football", "a frog", "your boss", "a lawnmower", "a UFO", "a duck", "a goose"];

const adviceFourthSection = ["on Sundays", "with The President", "on a roof", "at the park", "at the lake", "in a building"];

function getRandomAdvice() {
  document.getElementById("advice-section").innerHTML =
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
    ".";
}
