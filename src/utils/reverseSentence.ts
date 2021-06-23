export const reverseSentence = (
	sentence: string,
	setFunction: Function
): React.Dispatch<React.SetStateAction<string>> => {
	return setFunction(sentence.split("").reverse().join(""));
};
