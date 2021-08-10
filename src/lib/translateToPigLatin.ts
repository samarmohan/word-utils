export const translateToPigLatin = (sentence: string) => {
  let result = "";
  const words = sentence.split(" ");
  for (const word of words) {
    const firstLetter = word.charAt(0);
    const restOfString = word.slice(1);
    const pigLatin = restOfString + firstLetter + "ay";
    result += pigLatin + " ";
  }
  return result;
};
