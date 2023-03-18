// Modules imports
const express = require('express');
const router = express.Router();

// Dummy DB
const CATEGORIES = [
	{
		id: 'c1',
		name: 'Yoga',
	},
	{
		id: 'c2',
		name: 'Pilates',
	},
	{
		id: 'c3',
		name: 'Spining',
	},
	{
		id: 'c4',
		name: 'KickBoxing',
	},
	{
		id: 'c5',
		name: 'TRX',
	},
	{
		id: 'c6',
		name: 'Strengh',
	},
	{
		id: 'c7',
		name: 'Dumbels',
	},
	{
		id: 'c8',
		name: 'Zumba',
	},
	{
		id: 'c9',
		name: 'Swimming',
	},
	{
		id: 'c10',
		name: 'Other',
	},
];

router.get('/', (req, res) => {
	res.send(CATEGORIES);
});

module.exports = router;
