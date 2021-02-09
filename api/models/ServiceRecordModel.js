let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ServiceRecordModelSchema = new Schema({
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, 'Service field is required!']
    },
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'User field is required!']
    },
    vehicle_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vehicle',
        required: [true, 'Vehicle field is required!']
    },
    service_Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceCategory',
        required: [true, 'Vehicle field is required!']
    },

    // status: {
    //     type: String,
    //     enum: ['pending', 'payment_done', 'completed'],
    //     required: [true, 'Status field is required!']
    // },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const ServiceRecord = mongoose.model('ServiceRecord', ServiceRecordModelSchema);
module.exports = { ServiceRecord }
