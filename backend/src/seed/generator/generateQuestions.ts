import testData from '../data/questionsData';
import getRandomElements from '../utilities/getRandomElements';
import randomNumberInRange from '../utilities/randomNumberInRange';

const convertToValidFormat = (input: any[]) => {
	const result = [];
	for (let i = 0; i < input.length; i++) {
		const question = input[i];
		for (let j = 0; j < question.length; j++) {
			const element = question[j];
			if (j === 0) {
				result.push({
					questionText: element.questionText as string,
					difficulty: element.difficulty as number,
					options: [] as {
						optionText: string;
						isCorrect: boolean;
					}[],
				});
			} else {
				const last = result[result.length - 1];
				last.options.push({
					optionText: element.optionText,
					isCorrect: element.isCorrect,
				});
			}
		}
	}
	return result;
};

const generateQuestions = () => {
	const numberOfQuestions = randomNumberInRange(20, 10);
	const questions = getRandomElements(testData, numberOfQuestions);
	const validQuestions = convertToValidFormat(questions);
	return validQuestions;
};

export default generateQuestions;
