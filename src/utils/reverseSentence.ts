import { TypedFunction } from "../types";

export const reverseSentence = (
  sentence: string,
  setFunction: TypedFunction
): React.Dispatch<React.SetStateAction<string>> => {
  return setFunction(sentence.split("").reverse().join(""));
};
