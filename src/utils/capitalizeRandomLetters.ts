function toggleCase(str: string) {
	if (str.length !== 1) return str;

	if (str.match(/^[A-z]$/)) {
		if (str.toUpperCase() === str) {
			return str.toLowerCase();
		} else {
			return str.toUpperCase();
		}
	}

	return str;
}

export const capitalizeRandomLetters = (
	sentence: any,
	setFunction: Function
) => {
	setFunction(
		sentence
			.split("")
			.map((char: any, index: number) => {
				if (index % 2 === 0) return toggleCase(char);
				return char;
			})
			.join("")
	);
};
