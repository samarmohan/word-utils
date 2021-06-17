export const reverseSentence = (sentence: string, setFunction: Function) => {
	setFunction(sentence.split("").reverse().join(""));
};
