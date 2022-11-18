const express = require('express');

const app = express();
// whats up with my parser?
const cookieParser = require('cookie-parser');

// Built in middleware
app.use(express.json());

// App routes
app.use('/api/v1/users', require('./controllers/users'));

// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
