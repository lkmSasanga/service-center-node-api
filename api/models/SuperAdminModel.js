let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SuperAdminModelSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User field is required!']
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'Customer field is required!']
    },
    service_agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceAgent',
        required: [true, 'Service Agent field is required!']
    },
    service_record: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceRecord',
        required: [true, 'Service Record field is required!']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const SuperAdmin = mongoose.model('SuperAdmin', SuperAdminModelSchema);
module.exports = { SuperAdmin }
