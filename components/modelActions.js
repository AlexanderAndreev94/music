const ObjectId = require('mongoose').Types.ObjectId;

class ModelActions {
    constructor(model) {
        this.model = model;
    }

    findAll() {
        return this.model.find().exec();
    }

    findOneBy(criteria) {
        return this.model.findOne(criteria).exec();
    }

    insert(data) {
        const model = new this.model(data);
        return model.save();
    }

    updateBy(criteria, data) {
        return this.model.find().update(criteria, data).exec();
    }

    deleteBy(criteria) {
        return this.model.find().remove(criteria);
    }
}

module.exports = ModelActions;