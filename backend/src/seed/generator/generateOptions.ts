import { prisma } from '../../db/prisma';

const generateOptions = async (
	questionId: string,
	options: { optionText: string; isCorrect: boolean }[]
) => {
	for (let i = 0; i < options.length; i++) {
		const option = options[i];
		await generateOption(questionId, option);
	}
};

const generateOption = async (
	questionId: string,
	option: { optionText: string; isCorrect: boolean }
) => {
	const temp = await prisma.option.create({
		data: {
			optionText: option.optionText,
			isCorrect: option.isCorrect,
			question: { connect: { questionId } },
		},
	});
	// console.log(`created option: ${temp.optionText}`);
};

export default generateOptions;
