const UserRole = require("../enums/UserRole");
const { User } = require("../models/UserModel");
const { Service } = require("../models/ServiceCategoryModel");
const { Vehicle } = require("../models/VehicleModel");
const { ServiceRecord } = require("../models/ServiceRecordModel");

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
