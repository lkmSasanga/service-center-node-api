let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ServiceTagModelSchema = new Schema({
    tag: {
        type: String,
        required: [true, 'Tag field is required!']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const ServiceTag = mongoose.model('ServiceTag', ServiceTagModelSchema);
module.exports = { ServiceTag }
