function ModelActions(model) {
    return {
        findAll: () => {
            return model.find().exec();
        },
        findOneBy: (criteria) => {
            return model.findOne(criteria).exec();
        },
        insert: (data) => {
            return new model(data).save();
        },
        updateBy: (criteria, data) => {
            return model.find().update(criteria, data).exec();
        },
        deleteBy:(criteria) => {
            return model.find().remove(criteria);
        }
    }
}

module.exports = ModelActions;