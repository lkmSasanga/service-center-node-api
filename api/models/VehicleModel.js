let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let VehicleModelSchema = new Schema({
    model: {
        type: String,
        required: [true, 'Model field is required!']
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Vehicle = mongoose.model('ServiceTag', VehicleModelSchema);
module.exports = { Vehicle }


