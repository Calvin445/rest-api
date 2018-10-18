const Obj = require('../models/model.js');

validateRequest = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content cannot be empty"
        });
    }
};

// Create a new object save it to the database
exports.create = (req, res) => {
    validateRequest(req, res);

    const jObj = new Obj(req.body);
    jObj.save()
        .then(obj => {
            res.status(201).send(obj);
            console.log("Object with id " + obj._id + " created");
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.update = (req, res) => {
    validateRequest(req, res);

    Obj.replaceOne(Obj.findById(req.params.uid), req.body, {new : true})
        .then(obj => {
            if(!obj) {
                return res.status(404).send({
                    message: "Could not find object with id " + req.params.uid
                });
            }
            res.status(201).send(req.body);
            console.log("Object with id " + obj._id + " updated");
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message });
        });
};

// retrieve all objects from the database
exports.findAll = (req, res) => {
    Obj.find()
        .then(objects => {
            urls = [];
            objects.forEach(obj => {
                urls.push({"url" : req.protocol + "://" + req.get('host')
                + req.originalUrl + obj._id});
            });
            res.status(200).send(urls);
        })
        .catch(err => {
        res.status(500).send({
            message: err.message });
        });
};

exports.findOne = (req, res) => {
    Obj.findById(req.params.uid)
        .then(objects => {
            res.status(200).send(objects);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message });
        });
};

exports.delete = (req, res) => {
    Obj.findByIdAndDelete(req.params.uid)
        .then(obj => {
            if(!obj) {
                return res.status(404).send({
                    message: "Could not find object with id " + req.params.uid });
            }
            res.status(204).send();
            console.log("Object with id " + req.params.uid + " deleted");
        })
        .catch(err => {
            return res.status(500).send({
                message: "Could not delete object with id " + req.params.uid })
        })
};

