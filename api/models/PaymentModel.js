let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PaymentModelSchema = new Schema({
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: [true, 'Service field is required!']
    },
    amount: {
        type: Number,
        required: [true, 'Amount field is required!']
    },
    // status: {
    //     type: String,
    //     enum: ['pending', 'processed', 'completed', 'failed'],
    //     required: [true, 'Status field is required!']
    // },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Payment = mongoose.model('Payment', PaymentModelSchema);
module.exports = { Payment }
