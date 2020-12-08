let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];
let unnecessaryWords = ["extremely", "literally", "actually"];

//  ----------------split the string into individual words and count how many words is it
const storyWords = story.split(" ");
const wordsCount = (arr) => `Word count: ${arr.length}`;
console.log(wordsCount(storyWords));

//  ------------------filter unnecessary words
const betterWords = [];
storyWords.filter((word) => {
  if (
    word !== unnecessaryWords[0] &&
    word !== unnecessaryWords[1] &&
    word !== unnecessaryWords[2]
  ) {
    betterWords.push(word);
  }
});

// ----------------------count overused words
const pointUnwanted = (arr) => {
  let really = 0;
  let very = 0;
  let basically = 0;

  arr.forEach((word) => {
    switch (word) {
      case overusedWords[0]:
        really++;
        break;
      case overusedWords[1]:
        very++;
        break;
      case overusedWords[2]:
        basically++;
        break;
    }
  });

  return `Overused words: really: ${really}, very: ${very}, basically: ${basically}`;
};

console.log(pointUnwanted(storyWords));

// -----------------  count number of sentences:

const countSentences = function (arr) {
  let amount = 0;
  arr.forEach((word) => {
    if (word[word.length - 1] === "." || word[word.length - 1] === "!") {
      amount++;
      // console.log(word);
    }
  });
  return `Number of sentences: ${amount}.`;
};

console.log(countSentences(storyWords));

// ------------- log word count, sentence count and overused words.
const logResults = (wordCount, sentenceCount, pointUnwanted) => {
  console.log(wordCount);
  console.log(sentenceCount);
  console.log(pointUnwanted);
};

logResults(
  wordsCount(storyWords),
  countSentences(storyWords),
  pointUnwanted(storyWords)
);

//  log the betterWords array to the console as a single string.
const betterWordsString = betterWords.join(" ");
// console.log(betterWords.join(" "))
