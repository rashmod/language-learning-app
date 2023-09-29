import generateLeaderBoard from './generateLeaderBoard';

const findUserRank = (
	leaderBoard: ReturnType<typeof generateLeaderBoard>,
	targetUserId: string
) => {
	const targetUser = leaderBoard.find((user) => user.userId === targetUserId);
	if (!targetUser) {
		return -1;
	}

	const targetUserRank =
		leaderBoard.findIndex((user) => user.userId === targetUserId) + 1;
	// Adding 1 because ranks are 1-based

	return targetUserRank;
};

export default findUserRank;
