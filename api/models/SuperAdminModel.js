let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SuperAdminModelSchema = new Schema({
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

const SuperAdmin = mongoose.model('SuperAdmin', SuperAdminModelSchema);
module.exports = { SuperAdmin }
