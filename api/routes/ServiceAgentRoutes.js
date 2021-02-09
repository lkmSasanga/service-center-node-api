module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { ServiceAgent } = require("../middleware/serviceAgent");

    const ServiceAgentController = require("../controllers/ServiceAgentController")

    app.get("/view_service_record", [Auth, ServiceAgent], ServiceAgentController.viewServiceRecords);
    app.post("/create_service_record", [Auth, ServiceAgent], ServiceAgentController.createServiceRecord);



    // app.get("/services_tags", [Auth, Beautician], BeauticianController.getAllServiceTags);
    // app.post("/create_service", [Auth, Beautician], BeauticianController.createService);
    // app.get("/services", [Auth, Beautician], BeauticianController.getAllServices);
    // app.get("/service/:id", [Auth], BeauticianController.getServiceById);
    // app.put("/update_service/:id", [Auth, Beautician], BeauticianController.updateService);
    // app.delete("/delete_service/:id", [Auth, Beautician], BeauticianController.deleteService);
};
