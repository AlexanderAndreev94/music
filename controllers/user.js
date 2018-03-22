const ObjectId = require('mongoose').Types.ObjectId;
const userModel = require('../models/user');
const consts = require('../config/constants');

class UserController {
    static async getAll(req, res) {
        res.send(await userModel.findAll());
    }

    static async getOne(req, res) {
        if(req.params.id !== undefined) {
            res.send(await userModel.findOneBy({ _id: new ObjectId(req.params.id) }));
        } else {
            res.status(400).json({ result: false, message: consts.MISSING_PARAMETERS });
        }
    }

    static async add(req, res) {
        if(req.body !== undefined) {
            res.send(await userModel.insert(req.body));
        } else {
            res.status(400).json({ result: false, message: consts.MISSING_PARAMETERS });
        }
    }

    static async update(req, res) {
        if(req.body !== undefined && req.params.id !== undefined) {
            res.send(await userModel.updateBy({ _id: new ObjectId(req.params.id) }, req.body));
        } else {
            res.status(400).json({ result: false, message: consts.MISSING_PARAMETERS });
        }
    }

    static async remove(req, res) {
        if(req.params.id !== undefined) {
            res.send(await userModel.deleteBy({ _id: new ObjectId(req.params.id) }));
        } else {
            res.status(400).json({ result: false, message: consts.MISSING_PARAMETERS });
        }
    }
}

module.exports = UserController;