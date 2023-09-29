import { useState } from 'react';

import { TUserLanguageWithRank } from '../api/users';

const UserLanguageComponent = ({
	languages,
}: {
	languages: TUserLanguageWithRank[];
}) => {
	const [isEditing, setIsEditing] = useState(false);

	if (isEditing)
		return (
			<div className='grid gap-2'>
				<div className='flex justify-between'>
					<div className='text-sm text-gray-600'>User Languages</div>
					<button
						type='button'
						className='px-4 py-1 text-xs transition-all duration-200 border rounded hover:text-white hover:bg-black'
						onClick={() => setIsEditing(true)}>
						Add language
					</button>
				</div>
				<div className='flex gap-4'>
					{languages.map((language) => (
						<div
							key={language.language.languageId}
							className='flex items-end justify-between px-3 py-1 text-xs border-2 border-gray-600 rounded-md'>
							{language.language.languageName}
						</div>
					))}
				</div>
			</div>
		);

	return (
		<div className='grid gap-2'>
			<div className='flex justify-between'>
				<div className='text-sm text-gray-600'>User Languages</div>
				<button
					type='button'
					className='px-4 py-1 text-xs transition-all duration-200 border rounded hover:text-white hover:bg-black'
					onClick={() => setIsEditing(true)}>
					Add language
				</button>
			</div>
			<div className='flex gap-4'>
				{languages.map((language) => (
					<div
						key={language.language.languageId}
						className='flex items-end justify-between px-3 py-1 text-xs border-2 border-gray-600 rounded-md'>
						{language.language.languageName}
					</div>
				))}
			</div>
		</div>
	);
};

export default UserLanguageComponent;
