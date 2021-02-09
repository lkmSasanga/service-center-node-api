// const { ServiceCategory } = require("../models/ServiceCategoryModel");
const { ServiceCategory } = require("../models/ServiceCategoryModel");
const { Customer } = require('../models/CustomerModel')
const { User } = require('../models/UserModel')
const { UserRole } = require('../models/UserModel')
const { Vehicle } = require('../models/VehicleModel')
const { ServiceRecord } = require('../models/ServiceRecordModel')

exports.createServiceCategory = async (req, res) => {
    let newServiceCategory = new ServiceCategory(req.body);

    await newServiceCategory.save((err, serviceCategory) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create service tag!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New service tag is created!",
                data: serviceCategory
            });
        }
    });
};

exports.getAllServiceCategories = (req, res) => {
    ServiceCategory.find(function(err, serviceCategories) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrive service tags!",
                data: err
            });
        }

        return res.status(200).json({
            success: true,
            message: "Received service tags!",
            data: serviceCategories
        });
    });
};

// exports.createCustomer = async (req, res) => {
//     let newCustomer = new Customer(req.body);
//
//     await newCustomer.save((err, customer) => {
//         if (err) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Unable to create service tag!",
//                 data: err
//             });
//         } else {
//             return res.status(200).json({
//                 success: true,
//                 message: "New service tag is created!",
//                 data: customer
//             });
//         }
//     });
// };

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

exports.deleteCustomer = async (req, res) => {
    await User.remove({_id: req.params.id}, function(err, customer) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid customer record id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "Customer record deleted!"
        });
    });
};

exports.getVehicles = async (req, res) => {
    await Vehicle.find(function(err, vehicles) {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to retrieve vehicles!",
                data: err
            });
        }

        return res.status(200).json({
            success: true,
            message: "Received vehicles!",
            data: vehicles
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


exports.createServiceAgent = async (req, res) => {
    let newServiceAgent = new User(req.body);

    await newServiceAgent.save((err, serviceAgent) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Unable to create service agent!",
                data: err
            });
        } else {
            return res.status(200).json({
                success: true,
                message: "New service agent is created!",
                data: serviceAgent
            });
        }
    });
};




// exports.createService = async (req, res) => {
//     await ServiceTag.findById(req.body.service_tag, async function(err, serviceTag) {
//         if (err) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Invalid service tag id!"
//             });
//         }
//
//         if(!serviceTag) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Invalid service tag id!"
//             });
//         }
//
//         var newService = new Service(req.body);
//
//         newService.beautician = req.user._id;
//
//         await newService.save((err, service) => {
//             if (err) {
//                 return res.status(422).json({
//                     success: false,
//                     message: "Unable to create service!",
//                     data: err
//                 });
//             } else {
//                 return res.status(200).json({
//                     success: true,
//                     message: "New service is created!",
//                     data: service
//                 });
//             }
//         });
//     });
// };
//
// exports.getAllServices = async (req, res) => {
//     await Service.find(function(err, services) {
//         if (err) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Unable to retrive services!",
//                 data: err
//             });
//         }
//
//         return res.status(200).json({
//             success: true,
//             message: "Received services!",
//             data: services
//         });
//     });
// };
//
// exports.getServiceById = async (req, res) => {
//     await Service.findById(req.params.id, async function(err, service) {
//         if (err) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Invalid service id!"
//             });
//         }
//
//         if(!service) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Invalid service id!"
//             });
//         }
//
//         return res.status(422).json({
//             success: true,
//             message: "Service received!",
//             data: service
//         });
//     });
// };
//
// exports.updateService = async (req, res) => {
//     await Service.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, service) {
//         if (err) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Invalid service id!"
//             });
//         }
//
//         if(!service) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Invalid service id!"
//             });
//         }
//
//         return res.status(422).json({
//             success: true,
//             message: "Service updated!",
//             data: service
//         });
//     });
// };
//
// exports.deleteService = async (req, res) => {
//     await Service.remove({_id: req.params.id}, function(err, service) {
//         if (err) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Invalid service id!"
//             });
//         }
//
//         return res.status(422).json({
//             success: true,
//             message: "Service deleted!"
//         });
//     });
// };
