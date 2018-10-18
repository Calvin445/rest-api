const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("home_page"));

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const database = dbConfig.heroku;

mongoose.connect(database.url, { useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connected to the database")
    }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use((error, req, res, next) => {
    if (error instanceof SyntaxError) {
        return res.status(400).send({
            verb : req.method,
            url : req.protocol + "://" + req.get('host') + req.originalUrl,
            message: "Malformed JSON Object"
        });
    }
    else {
        next();
    }
});

require('./app/routes/routes.js')(app);

app.listen(database.port, () => {
    console.log("Server is listening on port ", database.port);
});

