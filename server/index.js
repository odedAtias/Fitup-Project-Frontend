// Modules imports
const express = require('express');
const mongoose = require('mongoose');

// Custom routes imports
const events = require('./routes/events');
const trainers = require('./routes/trainers');

// App initializing
const app = express();

// Connecting to the db
mongoose
	.connect(
		'mongodb+srv://odedAt:MmIYSyz0bGJmxTfe@cluster0.qmie9vh.mongodb.net/?retryWrites=true&w=majority'
	)
	.then(() => console.log('Connected to FitUp DB ...'))
	.catch(err => console.error('Could not connect to FitUp DB ...'));

// App middlewares
app.use(express.json());
app.use('/api/events', events);
app.use('/api/trainers', trainers);

// Port initialize
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
