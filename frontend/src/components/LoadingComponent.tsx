import { Loader2 } from 'lucide-react';
import cn from '../utilities/cn';

const LoadingComponent = ({
	message,
	size,
}: {
	message?: string;
	size?: 3 | 5 | 10;
}) => {
	return (
		<div className='flex flex-col items-center justify-center grow'>
			<div
				className={cn('flex items-center gap-4', {
					'gap-2 items-center': size === 3,
				})}>
				<Loader2
					className={cn('w-20 h-20 animate-spin', {
						'w-10 h-10': size === 10,
						'w-5 h-5': size === 5,
						'w-4 h-4': size === 3,
					})}
				/>
				<div
					className={cn('text-7xl', {
						'text-5xl': size === 10,
						'text-xl': size === 5,
						'text-xs': size === 3,
					})}>
					{message}
				</div>
			</div>
		</div>
	);
};

export default LoadingComponent;
