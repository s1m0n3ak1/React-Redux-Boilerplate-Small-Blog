const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();

dotenv.config()

const env = process.env;

// ----------------------- //
// ---- CONFIGURATION ---- //
// ----------------------- //
// PORTS
const port = env.PORT || 8081;
// DB
mongoose
    .connect(`mongodb://${ env.MDB_USER }:${ env.MDB_PASS }@${ env.MDB_END }`,() => {})
    .then(() => {
        // res
    })
    .catch(err => {
        console.error(err.stack);
    });

// ROUTES
const posts = require('./api/posts');

// CORS OPTIONS
const whitelist = env.WHITELIST;
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1)
            callback(null, true)
        else
            callback(new Error('Not allowed by CORS'))
    }
}

app.use(cors(corsOptions));

// set body parser so we can get info from routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// LOG TO CONSOLE
app.use(morgan('dev'));

// BASIC ROUTES
app.get('/', (req, res) => {
    res.send('API available at http://localhost:' + port + '/api');
});

app.use('/api', posts);

app.listen(port);
console.log(`Magic on port: ${ port }`);
