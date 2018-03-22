const routes = require('express').Router();
const posts = require('./posts');
const users = require('./users');

routes.get('/api', (req, res) => {
    res.status(200).json({ message: 'Connected' });
});

routes.use('/posts', posts);
routes.use('/users', users);

module.exports = routes;
