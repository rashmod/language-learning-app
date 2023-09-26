import randomNumberInRange from './randomNumberInRange';

const wait = async () => {
	const delay = randomNumberInRange(1000, 500); // Random delay between 500ms and 1000ms
	await new Promise((resolve) => setTimeout(resolve, delay));
};

export default wait;
