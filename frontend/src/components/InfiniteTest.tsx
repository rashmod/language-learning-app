import { Link } from 'react-router-dom';

export type TInfiniteTest = {
	testName: string;
	languageName: string | undefined;
};

const InfiniteTest = ({ testName, languageName }: TInfiniteTest) => {
	return (
		<div className='flex items-center justify-between px-4 py-2 text-white bg-orange-600 rounded'>
			<div className='flex flex-col justify-between'>
				<p className='text-xl font-semibold'>{testName}</p>
				<p className='text-sm'>The questions never stop... </p>
			</div>
			<Link
				to={`/test/${testName}`}
				state={{ testName, languageName }}
				className='px-4 py-1 text-white transition-all duration-200 bg-black border border-black rounded hover:text-black hover:bg-white'>
				Start Test
			</Link>
		</div>
	);
};

export default InfiniteTest;
