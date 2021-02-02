let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ServiceAgentModelSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User field is required!']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const ServiceAgent = mongoose.model('ServiceAgent', ServiceAgentModelSchema);
module.exports = { ServiceAgent }
