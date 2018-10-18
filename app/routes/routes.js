module.exports = (app) => {
    const objects = require('../controllers/controller.js');

    app.post('/api/objects', objects.create);

    app.get('/api/objects', objects.findAll);

    app.get('/api/objects/:uid', objects.findOne);

    app.put('/api/objects/:uid', objects.update);

    app.delete('/api/objects/:uid', objects.delete);

};
