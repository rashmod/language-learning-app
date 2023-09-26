const testData = [
	[
		{
			questionText: 'I spoke to ____.',
			difficulty: 1,
		},
		{
			optionText: 'she',
			isCorrect: false,
		},
		{
			optionText: 'her',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'Where ____ you come from?',
			difficulty: 5,
		},
		{
			optionText: 'do',
			isCorrect: true,
		},
		{
			optionText: 'are',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'What time does she ___ up?',
			difficulty: 4,
		},
		{
			optionText: 'get',
			isCorrect: true,
		},
		{
			optionText: 'gets',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'Where ___ he live?',
			difficulty: 1,
		},
		{
			optionText: 'do',
			isCorrect: false,
		},
		{
			optionText: 'does',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'I am not ____ this film.',
			difficulty: 4,
		},
		{
			optionText: 'liking',
			isCorrect: false,
		},
		{
			optionText: 'enjoying',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "I am seeing her ____ three o'clock.",
			difficulty: 2,
		},
		{
			optionText: 'in',
			isCorrect: false,
		},
		{
			optionText: 'at',
			isCorrect: true,
		},
		{
			optionText: 'on',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'Easter is ___ March this year.',
			difficulty: 1,
		},
		{
			optionText: 'on',
			isCorrect: false,
		},
		{
			optionText: 'at',
			isCorrect: false,
		},
		{
			optionText: 'in',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "She's ____ work all day today.",
			difficulty: 2,
		},
		{
			optionText: 'at',
			isCorrect: true,
		},
		{
			optionText: 'on',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'I go ___ by bus.',
			difficulty: 2,
		},
		{
			optionText: 'home',
			isCorrect: true,
		},
		{
			optionText: 'to home',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'Do you like it?',
			difficulty: 5,
		},
		{
			optionText: 'Yes, I like.',
			isCorrect: false,
		},
		{
			optionText: 'Yes, I do.',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "It's the second road ___ the left.",
			difficulty: 4,
		},
		{
			optionText: 'in',
			isCorrect: false,
		},
		{
			optionText: 'at',
			isCorrect: false,
		},
		{
			optionText: 'on',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "He's arriving ___ the station at six.",
			difficulty: 3,
		},
		{
			optionText: 'at',
			isCorrect: true,
		},
		{
			optionText: 'on',
			isCorrect: false,
		},
		{
			optionText: 'to',
			isCorrect: false,
		},
	],
	[
		{
			questionText: "I ___ what she's saying.",
			difficulty: 3,
		},
		{
			optionText: "can't understand",
			isCorrect: true,
		},
		{
			optionText: 'am not understanding',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'She lives ___ London.',
			difficulty: 3,
		},
		{
			optionText: 'on',
			isCorrect: false,
		},
		{
			optionText: 'at',
			isCorrect: false,
		},
		{
			optionText: 'in',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "I'm going ___ the bank to get some cash.",
			difficulty: 4,
		},
		{
			optionText: 'at',
			isCorrect: false,
		},
		{
			optionText: 'to',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'I went there ____ foot.',
			difficulty: 3,
		},
		{
			optionText: 'in',
			isCorrect: false,
		},
		{
			optionText: 'by',
			isCorrect: false,
		},
		{
			optionText: 'at',
			isCorrect: false,
		},
		{
			optionText: 'on',
			isCorrect: true,
		},
		{
			optionText: 'to',
			isCorrect: false,
		},
	],
	[
		{
			questionText: '____ is a cinema in the shopping centre.',
			difficulty: 4,
		},
		{
			optionText: 'There',
			isCorrect: true,
		},
		{
			optionText: 'It',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'I went ____ with my sister.',
			difficulty: 5,
		},
		{
			optionText: 'their',
			isCorrect: false,
		},
		{
			optionText: 'there',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'She ____ as a doctor.',
			difficulty: 4,
		},
		{
			optionText: 'is',
			isCorrect: false,
		},
		{
			optionText: 'works',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'She ___ a doctor.',
			difficulty: 2,
		},
		{
			optionText: 'is',
			isCorrect: true,
		},
		{
			optionText: 'works',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'How ___ did your journey take?',
			difficulty: 1,
		},
		{
			optionText: 'long',
			isCorrect: true,
		},
		{
			optionText: 'long time',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'He comes ____ the north of the country.',
			difficulty: 4,
		},
		{
			optionText: 'to',
			isCorrect: false,
		},
		{
			optionText: 'from',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'She ____ goodbye.',
			difficulty: 2,
		},
		{
			optionText: 'said',
			isCorrect: true,
		},
		{
			optionText: 'told',
			isCorrect: false,
		},
		{
			optionText: 'spoke',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'They are ___ love.',
			difficulty: 1,
		},
		{
			optionText: 'in',
			isCorrect: true,
		},
		{
			optionText: 'on',
			isCorrect: false,
		},
		{
			optionText: 'at',
			isCorrect: false,
		},
		{
			optionText: 'to',
			isCorrect: false,
		},
		{
			optionText: 'by',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'You _____ drink and drive.',
			difficulty: 2,
		},
		{
			optionText: 'may',
			isCorrect: false,
		},
		{
			optionText: 'must',
			isCorrect: false,
		},
		{
			optionText: 'may not',
			isCorrect: false,
		},
		{
			optionText: 'must not',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "She's studying law ____ university.",
			difficulty: 3,
		},
		{
			optionText: 'in',
			isCorrect: false,
		},
		{
			optionText: 'at',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'The bus stopped ___ the traffic lights.',
			difficulty: 5,
		},
		{
			optionText: 'in',
			isCorrect: false,
		},
		{
			optionText: 'on',
			isCorrect: false,
		},
		{
			optionText: 'at',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'She ____ English twice a week.',
			difficulty: 5,
		},
		{
			optionText: 'study',
			isCorrect: false,
		},
		{
			optionText: 'studys',
			isCorrect: false,
		},
		{
			optionText: 'studeis',
			isCorrect: false,
		},
		{
			optionText: 'studies',
			isCorrect: true,
		},
	],
	[
		{
			questionText: '____ is it?',
			difficulty: 3,
		},
		{
			optionText: "Who's",
			isCorrect: false,
		},
		{
			optionText: 'Whose',
			isCorrect: true,
		},
	],
	[
		{
			questionText: '___ you afford it?',
			difficulty: 4,
		},
		{
			optionText: 'Do',
			isCorrect: false,
		},
		{
			optionText: 'Can',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "They aren't selling ____ tickets.",
			difficulty: 4,
		},
		{
			optionText: 'much',
			isCorrect: false,
		},
		{
			optionText: 'many',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "There isn't ______ for all of us to get in.",
			difficulty: 5,
		},
		{
			optionText: 'room enough',
			isCorrect: false,
		},
		{
			optionText: 'enough room',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'The police ___ called.',
			difficulty: 2,
		},
		{
			optionText: 'was',
			isCorrect: false,
		},
		{
			optionText: 'were',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'In a shop, you are a ____.',
			difficulty: 3,
		},
		{
			optionText: 'client',
			isCorrect: false,
		},
		{
			optionText: 'customer',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "It's bigger ____ the old one.",
			difficulty: 5,
		},
		{
			optionText: 'as',
			isCorrect: false,
		},
		{
			optionText: 'than',
			isCorrect: true,
		},
		{
			optionText: 'then',
			isCorrect: false,
		},
	],
	[
		{
			questionText: "___ did she do it?' 'Yesterday.",
			difficulty: 2,
		},
		{
			optionText: 'Why',
			isCorrect: false,
		},
		{
			optionText: 'Where',
			isCorrect: false,
		},
		{
			optionText: 'When',
			isCorrect: true,
		},
		{
			optionText: 'How',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'How ___ you spell it?',
			difficulty: 1,
		},
		{
			optionText: 'do',
			isCorrect: true,
		},
		{
			optionText: 'can',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'How much did you ___ in the shop?',
			difficulty: 4,
		},
		{
			optionText: 'cost',
			isCorrect: false,
		},
		{
			optionText: 'spend',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "How ___ did you buy?' 'Three kilos.",
			difficulty: 1,
		},
		{
			optionText: 'much',
			isCorrect: false,
		},
		{
			optionText: 'many',
			isCorrect: true,
		},
	],
	[
		{
			questionText: "I don't work ____ the morning.",
			difficulty: 2,
		},
		{
			optionText: 'on',
			isCorrect: false,
		},
		{
			optionText: 'in',
			isCorrect: true,
		},
		{
			optionText: 'at',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'I saw her ____.',
			difficulty: 1,
		},
		{
			optionText: 'last week',
			isCorrect: true,
		},
		{
			optionText: 'the last week',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'It costs ____ dollars.',
			difficulty: 5,
		},
		{
			optionText: 'forty',
			isCorrect: true,
		},
		{
			optionText: 'fourty',
			isCorrect: false,
		},
	],
	[
		{
			questionText: 'I heard it ___ the radio.',
			difficulty: 4,
		},
		{
			optionText: 'in',
			isCorrect: false,
		},
		{
			optionText: 'at',
			isCorrect: false,
		},
		{
			optionText: 'on',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'There ____ a lot of complaints.',
			difficulty: 1,
		},
		{
			optionText: 'was',
			isCorrect: false,
		},
		{
			optionText: 'were',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'There ____ a lot of sugar in the coffee.',
			difficulty: 5,
		},
		{
			optionText: 'was',
			isCorrect: true,
		},
		{
			optionText: 'were',
			isCorrect: false,
		},
	],
	[
		{
			questionText: "He didn't work ____.",
			difficulty: 2,
		},
		{
			optionText: 'enough hard',
			isCorrect: false,
		},
		{
			optionText: 'hard enough',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'I ____ her.',
			difficulty: 2,
		},
		{
			optionText: 'am not knowing',
			isCorrect: false,
		},
		{
			optionText: "don't know",
			isCorrect: true,
		},
		{
			optionText: "doesn't know",
			isCorrect: false,
		},
	],
	[
		{
			questionText: '___ girlfriend left him.',
			difficulty: 1,
		},
		{
			optionText: 'He',
			isCorrect: false,
		},
		{
			optionText: 'Him',
			isCorrect: false,
		},
		{
			optionText: 'His',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'There are too ____ questions in this test.',
			difficulty: 4,
		},
		{
			optionText: 'much',
			isCorrect: false,
		},
		{
			optionText: 'many',
			isCorrect: true,
		},
	],
	[
		{
			questionText: 'I hope you do ___ in this test.',
			difficulty: 1,
		},
		{
			optionText: 'good',
			isCorrect: false,
		},
		{
			optionText: 'well',
			isCorrect: true,
		},
	],
];

export default testData;
