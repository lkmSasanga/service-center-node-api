// const { Service } = require("../models/ServiceModel");
// const { ServiceTag } = require("../models/ServiceTagModel");
const { ServiceRecord } = require("../models/ServiceRecordModel");
const { Appointment } = require("../models/AppointmentModel");
const { User } = require("../models/UserModel");
const { Vehicle } = require("../models/VehicleModel");

exports.createServiceRecord = async (req, res) => {
    let newServiceRecord = new ServiceRecord(req.body);

    await newServiceRecord.save((err, serviceRecord) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create service record!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New service record is created!",
                data: serviceRecord
            });
        }
    });
};

exports.getServiceRecords = async (req, res) => {
    await ServiceRecord.find(function(err, serviceRecords) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrieve service records!",
                data: err
            });
        }

        return res.status(200).json({
            success: true,
            message: "Received service records!",
            data: serviceRecords
        });
    });
};

exports.updateServiceRecord = async (req, res) => {
    await ServiceRecord.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, serviceRecord) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service record id!"
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
            message: "Service record updated!",
            data: serviceRecord
        });
    });
};

exports.deleteServiceRecord = async (req, res) => {
    await ServiceRecord.remove({_id: req.params.id}, function(err, vehicle) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service record id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Service record deleted!"
        });
    });
};

exports.getAppointments = async (req, res) => {
    await Appointment.find(function(err, appointments) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrieve appointments!",
                data: err
            });
        }

        return res.status(200).json({
            success: true,
            message: "Received appointments!",
            data: appointments
        });
    });
};


exports.approveAppointment = async (req, res) => {
    await Appointment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, appointment) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service record id!"
            });
        }

        if(!appointment) {
            return res.status(422).json({
                success: false,
                message: "Invalid appointment id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Appointment updated!",
            data: appointment
        });
    });
};

exports.getCustomer = async (req, res) => {
    await User.findById(req.params.id, async function(err, customer) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid customer id!"
            });
        }

        if(!customer) {
            return res.status(422).json({
                success: false,
                message: "Invalid customer id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "customer record received!",
            data: customer
        });
    });
};

exports.getVehicle = async (req, res) => {
    await Vehicle.findById(req.params.id, async function(err, vehicle) {
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
            message: "vehicle record received!",
            data: vehicle
        });
    });
};
