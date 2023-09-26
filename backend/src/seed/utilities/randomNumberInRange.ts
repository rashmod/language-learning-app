const randomNumberInRange = (max: number, min = 0) => {
	return Math.floor(Math.random() * (max - min) + min);
};

export default randomNumberInRange;
