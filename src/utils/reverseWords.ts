export const reverseWords = (
	sentence: string,
	setFunction: Function
): React.Dispatch<React.SetStateAction<string>> => {
	let words: any = sentence.match(/\S+/g);
	let result: string = "";
	for (let i = 0; i < words.length; i++) {
		result += words[i].split("").reverse().join("") + " ";
	}
	return setFunction(result);
};
