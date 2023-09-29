function formatDate(isoDateString: string) {
	const date = new Date(isoDateString);

	const monthAbbreviations = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const hours = date.getHours();
	const minutes = date.getMinutes();
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	const am_pm = hours >= 12 ? 'PM' : 'AM';
	const formattedHours = hours % 12 || 12;

	const formattedDate = `${formattedHours}:${String(minutes).padStart(
		2,
		'0'
	)} ${am_pm} ${day} ${monthAbbreviations[month]} ${year}`;

	return formattedDate;
}

export default formatDate;
