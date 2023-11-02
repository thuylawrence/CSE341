const mongdb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (reg, res) => {
    const result = await mongdb.getDatabase().db().collection('contacts').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });
};
const getSingle = async (reg, res) => {
    const userId = new ObjectId(req.param.id)
    const result = await mongdb.getDatabase().db().collection('contacts').find({_id: userId});
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};