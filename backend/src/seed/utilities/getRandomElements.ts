const getRandomElements = <T>(array: T[], count: number): T[] => {
	const shuffled = array.slice();
	let currentIndex = shuffled.length;
	let temporaryValue, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = shuffled[currentIndex];
		shuffled[currentIndex] = shuffled[randomIndex];
		shuffled[randomIndex] = temporaryValue;
	}

	return shuffled.slice(0, count);
};

export default getRandomElements;
