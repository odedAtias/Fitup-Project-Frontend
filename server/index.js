// Modules imports
const express = require('express');

// Custom modules imports
const events = require('./routes/events');
const categories = require('./routes/categories');

// App initializing
const app = express();

// App middlewares
app.use('/api/events', events);
app.use('/api/categories', categories);

// Port initialize
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
