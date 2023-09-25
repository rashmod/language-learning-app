import { useQuery } from '@tanstack/react-query';

import { getTests } from '../api/tests';
import Test, { TTest } from './Test';
import { getAllLanguages } from '../api/languages';

export type TLanguage = {
	languageId: string;
	languageName: string;
};

const TestList = () => {
	const languageId = '0865afca-1408-42d0-9ebb-cbff837aa301';
	const {
		data: testsData,
		isLoading: TestsIsLoading,
		isError: TestsIsError,
	} = useQuery({
		queryKey: ['tests'],
		queryFn: () => getTests(languageId),
	});

	const {
		data: languagesData,
		isLoading: languagesIsLoading,
		isError: languagesIsError,
	} = useQuery({
		queryKey: ['languages'],
		queryFn: getAllLanguages,
	});

	const languageName = languagesIsLoading
		? 'Loading'
		: languagesIsError
		? 'Error'
		: languagesData.filter(
				(language: TLanguage) => language.languageId === languageId
				// eslint-disable-next-line no-mixed-spaces-and-tabs
		  )[0].languageName;

	if (TestsIsLoading) return <h1>Loading...</h1>;

	if (TestsIsError) return <h1>Error</h1>;

	return (
		<div className='grid gap-y-4'>
			<div>Tests for {languageName}</div>
			{testsData.map((item: TTest) => (
				<Test
					key={item.testId}
					languageId={item.languageId}
					maxScore={item.maxScore}
					testId={item.testId}
					testName={item.testName}
				/>
			))}
		</div>
	);
};

export default TestList;
