const UserRole = require("../enums/UserRole");
const { User } = require("../models/UserModel");
const { Service } = require("../models/ServiceCategoryModel");

// exports.searchServices = (req, res) => {
//     let searchString = req.body.term;
//
//     if(!searchString) {
//         return res.status(422).json({
//             success: false,
//             message: "Serach term is required!"
//         });
//     }
//
//     Service.find({
//         $or: [
//             {title: {$regex: searchString, $options: 'i'}},
//             {description: {$regex: searchString, $options: 'i'}}
//         ]
//     }, function(err, services){
//         if (err) {
//             return res.status(422).json({
//                 success: false,
//                 message: "Error filteting services!",
//                 data: err
//             });
//         }
//
//         return res.status(422).json({
//             success: true,
//             message: "Filtered services!",
//             data: services
//         });
//     });
// };

exports.viewServiceAgentById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, serviceAgent) => {
        if (err) {
            return res.status(422).json({
                success: false,
                message: "Invalid service agent id!"
            });
        }

        if(!serviceAgent) {
            return res.status(422).json({
                success: false,
                message: "Invalid service agent id!"
            });
        }

        if(serviceAgent.role !== UserRole.SERVICE_AGENT) {
            return res.status(422).json({
                success: false,
                message: "Invalid service agent id!"
            });
        }

        return res.status(422).json({
            success: true,
            message: "service agent received!",
            data: serviceAgent
        });
    });
};
