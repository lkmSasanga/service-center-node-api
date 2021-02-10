module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { ServiceAgent } = require("../middleware/serviceAgent");

    const ServiceAgentController = require("../controllers/ServiceAgentController")

    app.get("/get_service_records", [Auth, ServiceAgent], ServiceAgentController.getServiceRecords);
    app.post("/create_service_record", [Auth, ServiceAgent], ServiceAgentController.createServiceRecord);
    app.post("/update_service_record/:id", [Auth, ServiceAgent], ServiceAgentController.updateServiceRecord);
    app.delete("/delete_service_record/:id", [Auth, ServiceAgent], ServiceAgentController.deleteServiceRecord);

    app.get("/get_appointments", [Auth, ServiceAgent], ServiceAgentController.getAppointments);
    app.get("/get_today_appointments", [Auth, ServiceAgent], ServiceAgentController.getTodayAppointments);

    app.post("/approve_appointment/:id", [Auth, ServiceAgent], ServiceAgentController.approveAppointment);
    app.get("/get_customer/:id", [Auth, ServiceAgent], ServiceAgentController.getCustomer);
    app.get("/get_vehicle/:id", [Auth, ServiceAgent], ServiceAgentController.getVehicle);
    app.get("/get_service_record/:id", [Auth, ServiceAgent], ServiceAgentController.getServiceRecords);

};
