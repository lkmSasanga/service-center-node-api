// const { Service } = require("../models/ServiceModel");
// const { ServiceTag } = require("../models/ServiceTagModel");
const { ServiceRecord } = require("../models/ServiceRecordModel");

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
