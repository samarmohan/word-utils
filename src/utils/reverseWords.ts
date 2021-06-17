export const reverseWords = (sentence: string, setFunction: Function) => {
	var words: any = [];
	words = sentence.match(/\S+/g);
	var result = "";
	for (var i = 0; i < words.length; i++) {
		result += words[i].split("").reverse().join("") + " ";
	}
	setFunction(result);
};
