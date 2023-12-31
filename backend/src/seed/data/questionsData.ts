const testData = [
	{
		questionText: 'I spoke to ____.',
		difficulty: 1,
		options: [
			{
				optionText: 'she',
				isCorrect: false,
			},
			{
				optionText: 'her',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'Where ____ you come from?',
		difficulty: 5,
		options: [
			{
				optionText: 'do',
				isCorrect: true,
			},
			{
				optionText: 'are',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'What time does she ___ up?',
		difficulty: 4,
		options: [
			{
				optionText: 'get',
				isCorrect: true,
			},
			{
				optionText: 'gets',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Where ___ he live?',
		difficulty: 1,
		options: [
			{
				optionText: 'do',
				isCorrect: false,
			},
			{
				optionText: 'does',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'I am not ____ this film.',
		difficulty: 4,
		options: [
			{
				optionText: 'liking',
				isCorrect: false,
			},
			{
				optionText: 'enjoying',
				isCorrect: true,
			},
		],
	},
	{
		questionText: "I am seeing her ____ three o'clock.",
		difficulty: 2,
		options: [
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
	},
	{
		questionText: 'Easter is ___ March this year.',
		difficulty: 1,
		options: [
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
	},
	{
		questionText: "She's ____ work all day today.",
		difficulty: 2,
		options: [
			{
				optionText: 'at',
				isCorrect: true,
			},
			{
				optionText: 'on',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I go ___ by bus.',
		difficulty: 2,
		options: [
			{
				optionText: 'home',
				isCorrect: true,
			},
			{
				optionText: 'to home',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'Do you like it?',
		difficulty: 5,
		options: [
			{
				optionText: 'Yes, I like.',
				isCorrect: false,
			},
			{
				optionText: 'Yes, I do.',
				isCorrect: true,
			},
		],
	},
	{
		questionText: "It's the second road ___ the left.",
		difficulty: 4,
		options: [
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
	},
	{
		questionText: "He's arriving ___ the station at six.",
		difficulty: 3,
		options: [
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
	},
	{
		questionText: "I ___ what she's saying.",
		difficulty: 3,
		options: [
			{
				optionText: "can't understand",
				isCorrect: true,
			},
			{
				optionText: 'am not understanding',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'She lives ___ London.',
		difficulty: 3,
		options: [
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
	},
	{
		questionText: "I'm going ___ the bank to get some cash.",
		difficulty: 4,
		options: [
			{
				optionText: 'at',
				isCorrect: false,
			},
			{
				optionText: 'to',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'I went there ____ foot.',
		difficulty: 3,
		options: [
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
	},
	{
		questionText: '____ is a cinema in the shopping centre.',
		difficulty: 4,
		options: [
			{
				optionText: 'There',
				isCorrect: true,
			},
			{
				optionText: 'It',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I went ____ with my sister.',
		difficulty: 5,
		options: [
			{
				optionText: 'their',
				isCorrect: false,
			},
			{
				optionText: 'there',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'She ____ as a doctor.',
		difficulty: 4,
		options: [
			{
				optionText: 'is',
				isCorrect: false,
			},
			{
				optionText: 'works',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'She ___ a doctor.',
		difficulty: 2,
		options: [
			{
				optionText: 'is',
				isCorrect: true,
			},
			{
				optionText: 'works',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'How ___ did your journey take?',
		difficulty: 1,
		options: [
			{
				optionText: 'long',
				isCorrect: true,
			},
			{
				optionText: 'long time',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'He comes ____ the north of the country.',
		difficulty: 4,
		options: [
			{
				optionText: 'to',
				isCorrect: false,
			},
			{
				optionText: 'from',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'She ____ goodbye.',
		difficulty: 2,
		options: [
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
	},
	{
		questionText: 'They are ___ love.',
		difficulty: 1,
		options: [
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
	},
	{
		questionText: 'You _____ drink and drive.',
		difficulty: 2,
		options: [
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
	},
	{
		questionText: "She's studying law ____ university.",
		difficulty: 3,
		options: [
			{
				optionText: 'in',
				isCorrect: false,
			},
			{
				optionText: 'at',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'The bus stopped ___ the traffic lights.',
		difficulty: 5,
		options: [
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
	},
	{
		questionText: 'She ____ English twice a week.',
		difficulty: 5,
		options: [
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
	},
	{
		questionText: '____ is it?',
		difficulty: 3,
		options: [
			{
				optionText: "Who's",
				isCorrect: false,
			},
			{
				optionText: 'Whose',
				isCorrect: true,
			},
		],
	},
	{
		questionText: '___ you afford it?',
		difficulty: 4,
		options: [
			{
				optionText: 'Do',
				isCorrect: false,
			},
			{
				optionText: 'Can',
				isCorrect: true,
			},
		],
	},
	{
		questionText: "They aren't selling ____ tickets.",
		difficulty: 4,
		options: [
			{
				optionText: 'much',
				isCorrect: false,
			},
			{
				optionText: 'many',
				isCorrect: true,
			},
		],
	},
	{
		questionText: "There isn't ______ for all of us to get in.",
		difficulty: 5,
		options: [
			{
				optionText: 'room enough',
				isCorrect: false,
			},
			{
				optionText: 'enough room',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'The police ___ called.',
		difficulty: 2,
		options: [
			{
				optionText: 'was',
				isCorrect: false,
			},
			{
				optionText: 'were',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'In a shop, you are a ____.',
		difficulty: 3,
		options: [
			{
				optionText: 'client',
				isCorrect: false,
			},
			{
				optionText: 'customer',
				isCorrect: true,
			},
		],
	},
	{
		questionText: "It's bigger ____ the old one.",
		difficulty: 5,
		options: [
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
	},
	{
		questionText: "___ did she do it?' 'Yesterday.",
		difficulty: 2,
		options: [
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
	},
	{
		questionText: 'How ___ you spell it?',
		difficulty: 1,
		options: [
			{
				optionText: 'do',
				isCorrect: true,
			},
			{
				optionText: 'can',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'How much did you ___ in the shop?',
		difficulty: 4,
		options: [
			{
				optionText: 'cost',
				isCorrect: false,
			},
			{
				optionText: 'spend',
				isCorrect: true,
			},
		],
	},
	{
		questionText: "How ___ did you buy?' 'Three kilos.",
		difficulty: 1,
		options: [
			{
				optionText: 'much',
				isCorrect: false,
			},
			{
				optionText: 'many',
				isCorrect: true,
			},
		],
	},
	{
		questionText: "I don't work ____ the morning.",
		difficulty: 2,
		options: [
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
	},
	{
		questionText: 'I saw her ____.',
		difficulty: 1,
		options: [
			{
				optionText: 'last week',
				isCorrect: true,
			},
			{
				optionText: 'the last week',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'It costs ____ dollars.',
		difficulty: 5,
		options: [
			{
				optionText: 'forty',
				isCorrect: true,
			},
			{
				optionText: 'fourty',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I heard it ___ the radio.',
		difficulty: 4,
		options: [
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
	},
	{
		questionText: 'There ____ a lot of complaints.',
		difficulty: 1,
		options: [
			{
				optionText: 'was',
				isCorrect: false,
			},
			{
				optionText: 'were',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'There ____ a lot of sugar in the coffee.',
		difficulty: 5,
		options: [
			{
				optionText: 'was',
				isCorrect: true,
			},
			{
				optionText: 'were',
				isCorrect: false,
			},
		],
	},
	{
		questionText: "He didn't work ____.",
		difficulty: 2,
		options: [
			{
				optionText: 'enough hard',
				isCorrect: false,
			},
			{
				optionText: 'hard enough',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'I ____ her.',
		difficulty: 2,
		options: [
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
	},
	{
		questionText: '___ girlfriend left him.',
		difficulty: 1,
		options: [
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
	},
	{
		questionText: 'There are too ____ questions in this test.',
		difficulty: 4,
		options: [
			{
				optionText: 'much',
				isCorrect: false,
			},
			{
				optionText: 'many',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'I hope you do ___ in this test.',
		difficulty: 1,
		options: [
			{
				optionText: 'good',
				isCorrect: false,
			},
			{
				optionText: 'well',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'She is allergic ___ cats.',
		difficulty: 3,
		options: [
			{
				optionText: 'for',
				isCorrect: false,
			},
			{
				optionText: 'to',
				isCorrect: true,
			},
			{
				optionText: 'with',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'The concert starts ____ 7 PM.',
		difficulty: 2,
		options: [
			{
				optionText: 'on',
				isCorrect: true,
			},
			{
				optionText: 'at',
				isCorrect: false,
			},
			{
				optionText: 'in',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I prefer tea ___ coffee.',
		difficulty: 1,
		options: [
			{
				optionText: 'from',
				isCorrect: false,
			},
			{
				optionText: 'over',
				isCorrect: true,
			},
			{
				optionText: 'with',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'The teacher asked me ___ the homework.',
		difficulty: 4,
		options: [
			{
				optionText: 'to do',
				isCorrect: true,
			},
			{
				optionText: 'doing',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I have been waiting for you ____ an hour.',
		difficulty: 3,
		options: [
			{
				optionText: 'since',
				isCorrect: true,
			},
			{
				optionText: 'for',
				isCorrect: false,
			},
			{
				optionText: 'from',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'She is ____ intelligent person.',
		difficulty: 2,
		options: [
			{
				optionText: 'a',
				isCorrect: true,
			},
			{
				optionText: 'an',
				isCorrect: false,
			},
			{
				optionText: 'the',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I will be there ___ a moment.',
		difficulty: 3,
		options: [
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
		],
	},
	{
		questionText: 'The cat is sitting ___ the table.',
		difficulty: 4,
		options: [
			{
				optionText: 'above',
				isCorrect: false,
			},
			{
				optionText: 'over',
				isCorrect: true,
			},
			{
				optionText: 'on',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I cannot believe he ___ the whole cake!',
		difficulty: 5,
		options: [
			{
				optionText: 'eat',
				isCorrect: false,
			},
			{
				optionText: 'eaten',
				isCorrect: false,
			},
			{
				optionText: 'ate',
				isCorrect: true,
			},
		],
	},
	{
		questionText: 'The weather is too cold ___ go swimming.',
		difficulty: 2,
		options: [
			{
				optionText: 'so',
				isCorrect: true,
			},
			{
				optionText: 'but',
				isCorrect: false,
			},
			{
				optionText: 'because',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I have been to Paris, ___ I have never been to London.',
		difficulty: 4,
		options: [
			{
				optionText: 'or',
				isCorrect: true,
			},
			{
				optionText: 'and',
				isCorrect: false,
			},
			{
				optionText: 'but',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'The more you practice, ___ you will become.',
		difficulty: 5,
		options: [
			{
				optionText: 'the better',
				isCorrect: true,
			},
			{
				optionText: 'the best',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'He is ___ successful ___ his brother.',
		difficulty: 3,
		options: [
			{
				optionText: 'as, as',
				isCorrect: true,
			},
			{
				optionText: 'more, than',
				isCorrect: false,
			},
			{
				optionText: 'so, as',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I have read that book ___.',
		difficulty: 2,
		options: [
			{
				optionText: 'already',
				isCorrect: true,
			},
			{
				optionText: 'yet',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'My sister and I ___ to the store yesterday.',
		difficulty: 1,
		options: [
			{
				optionText: 'go',
				isCorrect: false,
			},
			{
				optionText: 'went',
				isCorrect: true,
			},
			{
				optionText: 'gone',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I have never ___ to a jazz concert.',
		difficulty: 3,
		options: [
			{
				optionText: 'be',
				isCorrect: false,
			},
			{
				optionText: 'been',
				isCorrect: true,
			},
			{
				optionText: 'being',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'I cannot find my keys anywhere. They ___ be in the car.',
		difficulty: 4,
		options: [
			{
				optionText: 'can',
				isCorrect: false,
			},
			{
				optionText: 'must',
				isCorrect: true,
			},
			{
				optionText: 'might',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'The movie was so boring that I fell ___.',
		difficulty: 5,
		options: [
			{
				optionText: 'sleep',
				isCorrect: false,
			},
			{
				optionText: 'asleep',
				isCorrect: true,
			},
		],
	},
];

export default testData;
