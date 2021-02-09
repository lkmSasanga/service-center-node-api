let mongoose = require('mongoose');
let Schema = mongoose.Schema;
// const { ServiceTag } = require("./ServiceTagModel");

let ServiceCategoryModelSchema = new Schema({
    category: {
        type: String,
        enum: ['full_service', 'body_wash'],
        required: [true, 'Title field is required!']
    },
    cost: {
        type: String,
        required: [true, 'Cost field is required!']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const ServiceCategory = mongoose.model('ServiceCategory', ServiceCategoryModelSchema);
module.exports = { ServiceCategory }
