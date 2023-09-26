import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import toastConfig from '../config/toastConfig';
import { useMutation } from '@tanstack/react-query';
import { endTest } from '../api/tests';

const ConfirmEndTestModal = ({
	setIsSubmitModalOpen,
	languageId,
	testId,
	testScore,
}: {
	setIsSubmitModalOpen: Dispatch<SetStateAction<boolean>>;
	languageId: string;
	testId: string;
	testScore: number;
}) => {
	// todo change this to dynamic
	const userId = '503a6783-9ff0-465f-97e6-22b9d87bf452';

	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: endTest,
	});

	const onSubmitHandler = () => {
		mutation.mutate({ userId, languageId, testId, score: testScore });
		toast.success('Successfully saved test result', toastConfig);
	};

	return (
		<div className='absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm'>
			<div className='p-4 bg-white border border-gray-600 rounded-lg w-80'>
				<div className='flex justify-between mb-10'>
					{mutation.isIdle && (
						<p>Are you sure you want to end this test?</p>
					)}
					{mutation.isLoading && (
						<p>Submitting your test result...</p>
					)}
					{mutation.isError && (
						<p>
							Failed to submit test result. Please wait and try
							again later.
						</p>
					)}
					{mutation.isSuccess && (
						<p>Successfully submitted your test results.</p>
					)}
				</div>
				<p className='flex justify-end gap-4'>
					<button
						type='button'
						className='border border-gray-600 py-1.5 px-6 rounded-xl hover:scale-105 transition disabled:cursor-not-allowed'
						disabled={mutation.isLoading}
						onClick={() => {
							setIsSubmitModalOpen(false);
							if (mutation.isSuccess) {
								navigate('/', { replace: true });
							}
						}}>
						{!mutation.isSuccess ? 'Cancel' : 'Close'}
					</button>
					{!mutation.isSuccess && (
						<button
							type='button'
							className='border border-red-600 text-white bg-red-600 py-1.5 px-6 rounded-xl hover:scale-105 transition disabled:cursor-not-allowed'
							onClick={onSubmitHandler}
							disabled={mutation.isLoading}>
							End Test
						</button>
					)}
				</p>
			</div>
		</div>
	);
};

export default ConfirmEndTestModal;
