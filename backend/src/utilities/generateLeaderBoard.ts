const generateLeaderBoard = (
	users: {
		userId: string;
		username: string;
		languages: {
			proficiencyLevel: number;
			score: number;
			languageId: string;
		}[];
	}[],
	languageId: string
) => {
	const leaderBoardData = users.map((user) => {
		const languageScore =
			user.languages.find((lang) => lang.languageId === languageId)
				?.score || 0;

		const totalScore = user.languages.reduce(
			(acc, lang) => acc + lang.score,
			0
		);

		return {
			userId: user.userId,
			username: user.username,
			totalScore: languageId ? languageScore : totalScore,
		};
	});

	return leaderBoardData.sort((a, b) => b.totalScore - a.totalScore);
};

export default generateLeaderBoard;
