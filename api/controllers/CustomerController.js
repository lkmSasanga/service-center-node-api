const UserRole = require("../enums/UserRole");
const { User } = require("../models/UserModel");
const { Vehicle } = require("../models/VehicleModel");
const { ServiceRecord } = require("../models/ServiceRecordModel");
const { Appointment } = require("../models/AppointmentModel");
const { Payment } = require("../models/PaymentModel");

// exports.register = async(req, res) => {
//     const user = new User(req.body);
//
//     await user.save((err, doc) => {
//         if (err) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Registration failed check validation errors!",
//                 data: err
//             });
//         } else {
//             return res.status(200).json({
//                 success: true,
//                 message: "Successfully Signed Up!"
//             });
//         }
//     });
// };

exports.addVehicle = async (req, res) => {
    let newVehicle = new Vehicle(req.body);

    await newVehicle.save((err, vehicle) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create Vehicle!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New Vehicle is created!",
                data: vehicle
            });
        }
    });
};

exports.updateVehicle = async (req, res) => {
    await Vehicle.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid vehicle id!"
            });
        }

        if(!vehicle) {
            return res.status(422).json({
                success: false,
                message: "Invalid vehicle id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Vehicle updated!",
            data: vehicle
        });
    });
};

exports.deleteVehicle = async (req, res) => {
    await Vehicle.remove({_id: req.params.id}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid vehicle id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Vehicle deleted!"
        });
    });
};

exports.getServiceRecord = async (req, res) => {
    await ServiceRecord.findById(req.params.id, async function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service id!"
            });
        }

        if(!serviceRecord) {
            return res.status(422).json({
                success: false,
                message: "Invalid service record id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Service record received!",
            data: serviceRecord
        });
    });
};

exports.addAppointment = async (req, res) => {
    let newAppointment = new Appointment(req.body);

    await newAppointment.save((err, appointment) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create appointment!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New Appointment is created!",
                data: appointment
            });
        }
    });
};


exports.makePayment = async (req, res) => {
    let newPayment = new Payment(req.body);

    await newPayment.save((err, payment) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create payment!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New payment is created!",
                data: payment
            });
        }
    });
};
