const seedCallback = async (func: Function, str: string) => {
	try {
		const res = await func();
		// console.log(res);
		console.log(`successfully seeded ${str}`);
	} catch (error) {
		console.log(error);
		console.log(`failed to seed ${str}`);
	}
};

export default seedCallback;
