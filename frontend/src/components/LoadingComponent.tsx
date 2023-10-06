import { Loader2 } from 'lucide-react';
import cn from '../utilities/cn';

const LoadingComponent = ({
	message,
	size,
}: {
	message?: string;
	size?: number;
}) => {
	return (
		<div className='flex flex-col items-center justify-center grow'>
			<div className='flex items-center gap-4'>
				<Loader2
					className={cn('w-20 h-20 animate-spin', {
						'w-10 h-10': size === 10,
						'w-5 h-5': size === 5,
					})}
				/>
				<div
					className={cn('text-7xl', {
						'text-5xl': size === 10,
						'text-xl': size === 5,
					})}>
					{message}
				</div>
			</div>
		</div>
	);
};

export default LoadingComponent;
