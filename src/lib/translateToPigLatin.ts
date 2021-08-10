export const translateToPigLatin = (str: string) => {
  let result = "";
  const words = str.split(" ");
  for (const word of words) {
    const firstLetter = word.charAt(0);
    const restOfString = word.slice(1);
    const pigLatin = restOfString + firstLetter + "ay";
    result += pigLatin + " ";
  }
  return result;
};
