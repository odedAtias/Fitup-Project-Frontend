// Modules imports
const express = require('express');
const router = express.Router();

// Dummy DB
const EVENTS = [
	{
		id: 'e1',
		category: 'Zumba',
		trainerId: 't2',
		trainerName: 'Max Shultz',
		date: '19/02/23',
		hour: '17:00',
		address: 'Hatnofa 18',
		city: 'Jerusalem',
		numOfTrainees: 17,
		maxNumOfTrainees: 20,
		imageUrl:
			'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		description:
			'The "Zumba" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
	},
	{
		id: 'e2',
		category: 'TRX',
		trainerId: 't2',
		trainerName: 'Max shultz',
		date: '20/05/23',
		hour: '17:00',
		address: 'Hatnofa 18 ',
		city: 'Jerusalem',
		numOfTrainees: 13,
		maxNumOfTrainees: 15,
		imageUrl:
			'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
		description:
			'The "TRX" event is a weightlifting competition that involves lifting dumbbells of varying weights with one hand at a time. Competitors typically perform a set number of repetitions for each weight, with the winner being the person who completes the most repetitions or lifts the heaviest weight. The dumbbells themselves consist of a handle and two weights that can be adjusted or replaced to change the overall weight. The dumbbells event is often included in strongman competitions and has also been featured in the Olympics as part of the weightlifting program.',
	},
];

router.get('/', (req, res) => {
	res.send(EVENTS);
});

module.exports = router;
