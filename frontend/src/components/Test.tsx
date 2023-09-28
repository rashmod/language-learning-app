import { Link } from 'react-router-dom';

export type TTest = {
	testId: string;
	testName: string;
	maxScore: number;
};

const Test = ({
	testName,
	maxScore,
	testId,
	languageName,
}: TTest & { languageName: string | undefined }) => {
	return (
		<div className='flex items-center justify-between px-4 py-2 border-2 rounded'>
			<div className='flex flex-col justify-between'>
				<p className='text-xl font-semibold'>{testName}</p>
				<p className='text-sm text-gray-600'>Max Score: {maxScore}</p>
			</div>
			<Link
				to={`/test/${testName}`}
				state={{ testId, testName, languageName }}
				className='px-4 py-1 transition-all duration-200 border rounded hover:text-white hover:bg-black'>
				Start Test
			</Link>
		</div>
	);
};

export default Test;
