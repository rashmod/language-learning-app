import testNames from '../data/testsData';
import generateQuestions from './generateQuestions';

const generateTest = (index: number) => {
	const questions = generateQuestions();
	const maxScore = questions.reduce((acc, curr) => acc + curr.difficulty, 0);
	const testName = testNames[index];

	return { testName, maxScore, questions };
};

export default generateTest;
