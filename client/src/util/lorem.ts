import { LoremIpsum } from "lorem-ipsum";

export const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});
