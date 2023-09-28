import { useQuery } from '@tanstack/react-query';

import { getTests } from '../api/tests';
import Test from '../components/Test';
import { getAllLanguages } from '../api/languages';
import { useGlobalState } from '../context/globalContext';
import InfiniteTest from '../components/InfiniteTest';

const TestList = () => {
	const { languageId, setLanguageId } = useGlobalState();

	const {
		data: testsData,
		isLoading: TestsIsLoading,
		isError: TestsIsError,
	} = useQuery({
		queryKey: ['tests', languageId],
		queryFn: ({ queryKey }) => getTests(queryKey[1]),
	});

	const { data: languagesData } = useQuery({
		queryKey: ['languages'],
		queryFn: getAllLanguages,
	});

	if (TestsIsLoading) return <h1>Loading...</h1>;

	if (TestsIsError) return <h1>Error</h1>;

	return (
		<div className='grid gap-y-4'>
			<div className='flex gap-4'>
				<div>Tests for</div>
				<select
					className='px-3 py-1 text-xs transition-all duration-200 border border-gray-600 rounded'
					value={languageId}
					onChange={(e) => setLanguageId(e.target.value)}>
					{languagesData?.data.map((lang) => (
						<option key={lang.languageId} value={lang.languageId}>
							{lang.languageName}
						</option>
					))}
				</select>
			</div>
			<InfiniteTest
				testName='Infinity and beyond'
				languageName={
					languagesData?.data.find(
						(lang) => lang.languageId === languageId
					)?.languageName
				}
				languageId={languageId}
			/>
			{testsData.data.map((item) => (
				<Test
					key={item.testId}
					languageId={item.languageId}
					maxScore={item.maxScore}
					testId={item.testId}
					testName={item.testName}
					languageName={
						languagesData?.data.find(
							(lang) => lang.languageId === item.languageId
						)?.languageName
					}
				/>
			))}
		</div>
	);
};

export default TestList;
