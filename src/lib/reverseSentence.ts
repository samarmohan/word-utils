import { SetStateType } from "../types";

export const reverseSentence = (
  sentence: string,
  setFunction: SetStateType
) => {
  return setFunction(sentence.split("").reverse().join(""));
};
