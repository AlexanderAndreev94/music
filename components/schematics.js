class SchemaTypes {
    static string(length, required = false) {
        return { type: 'string', length: length, required: required };
    }
    static number(required = false) {
        return { type: 'number', required: required };
    }
    static boolean(required = false) {
        return { type: 'boolean', required: required };
    }
    static object(required = false) {
        return { type: 'object', required: required };
    }
}

function validate(schema) {
    return (req, res, next) => {
        let validated = true;
        let errorMessage = undefined;
        Object.keys(schema).forEach(param => {
           if(!req.body[param] && schema[param].required) {
               errorMessage = 'Missing required params';
               validated = false;
           } else if (req.body[param] !== undefined && req.body[param].length !== undefined && req.body[param].length > schema[param].length) {
               errorMessage = 'Params length more than specified';
               validated = false;
           }
        });
        if(errorMessage !== undefined)
            res.status(500).json(errorMessage);

        if (validated)
            next();
        return false;
    }
}

module.exports = { SchemaTypes, validate };