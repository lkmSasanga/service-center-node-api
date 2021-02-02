let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const { ServiceTag } = require("./ServiceTagModel");

let ServiceModelSchema = new Schema({
    category: {
        type: String,
        enum: ['full_service', 'body_wash'],
        required: [true, 'Title field is required!']
    },
    description: {
        type: String,
        required: [true, 'Description field is required!']
    },
    cost: {
        type: String,
        required: [true, 'Cost field is required!']
    },
    image: {
        type: String
    },
    // beautician: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Beautician',
    //     required: [true, 'Beautician field is required!']
    // },
    created_date: {
        type: Date,
        default: Date.now
    }
});

ServiceModelSchema.index({
    // title: 'text',
    description: 'text',
}, {
    weights: {
        // title: 3,
        description: 5,
    },
});

const Service = mongoose.model('Service', ServiceModelSchema);
module.exports = { Service }
