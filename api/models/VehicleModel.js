let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let VehicleModelSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Vehicle = mongoose.model('Vehicle', VehicleModelSchema);
module.exports = { Vehicle }


