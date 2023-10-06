const ErrorToast = ({
	title = 'Error',
	message = 'Something Went Wrong',
}: {
	title?: string;
	message?: string;
}) => {
	return (
		<div>
			<div className='text-lg font-bold'>{title}</div>
			<div className='text-sm text-gray-400'>{message}</div>
		</div>
	);
};

export default ErrorToast;
