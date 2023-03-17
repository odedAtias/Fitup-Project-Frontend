// Modules imports
const express = require('express');
const cors = require('cors');

// Custom modules imports
const events = require('./routes/events');

// App initializing
const app = express();

// App middlewares
app.use(cors());
app.use('/api/events', events);

// Port initialize
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
