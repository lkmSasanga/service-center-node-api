const UserRole = require("../enums/UserRole");
const { User } = require("../models/UserModel");
const { Service } = require("../models/ServiceCategoryModel");
const { Vehicle } = require("../models/VehicleModel");

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
