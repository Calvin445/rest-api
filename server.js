const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || dbConfig.url, { useNewUrlParser: true })
    .then(() => {
        console.log("Successfully connected to the database")
    }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req,res) => {
    res.json({"message": "Welcome."});
});

require('./app/routes/routes.js')(app);

app.listen(process.env.PORT || 3000, () => {
    let port = app.address().port;
    console.log("Server is listening on port ", port);
});

