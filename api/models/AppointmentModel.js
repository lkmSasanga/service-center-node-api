let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let AppointmentModelSchema = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: [true, 'Customer field is required!']
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: [true, 'Service field is required!']
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'payment_done', 'completed'],
        required: [true, 'Status field is required!']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Appointment = mongoose.model('Booking', AppointmentModelSchema);
module.exports = { Appointment }
