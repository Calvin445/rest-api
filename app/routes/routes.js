module.exports = (app) => {
    const objects = require('../controllers/controller.js');

    app.post('/objects', objects.create);

    app.get('/objects', objects.findAll);

    app.get('/objects/:uid', objects.findOne);

    app.put('/objects/:uid', objects.update);

    app.delete('/objects/:uid', objects.delete);

};
