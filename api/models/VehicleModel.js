let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const VehicleType = require('../enums/VehicleType');


let VehicleModelSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    // type: {
    //     type: String,
    //     enum: VehicleType,
    //     default: VehicleType.CAR
    // },
    created_date: {
        type: Date,
        default: Date.now
    }
});

const Vehicle = mongoose.model('Vehicle', VehicleModelSchema);
module.exports = { Vehicle }


