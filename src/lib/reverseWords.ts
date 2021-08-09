import { SetStateType } from "../types";

export const reverseWords = (sentence: string, setFunction: SetStateType) => {
  const words: any = sentence.match(/\S+/g);
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i].split("").reverse().join("") + " ";
  }
  return setFunction(result);
};
