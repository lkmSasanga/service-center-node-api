module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { SuperAdmin } = require("../middleware/superAdmin");

    const SuperAdminController = require("../controllers/SuperAdminController")

    app.post("/create_service_category", [Auth, SuperAdmin], SuperAdminController.createServiceCategory);
    app.get("/service_categories", [Auth, SuperAdmin], SuperAdminController.getAllServiceCategories);


    app.get("/get_customer/:id", [Auth, SuperAdmin], SuperAdminController.getCustomer);
    app.delete("/delete_customer/:id", [Auth, SuperAdmin], SuperAdminController.deleteCustomer);

    app.get("/get_vehicles", [Auth, SuperAdmin], SuperAdminController.getVehicles);
    app.delete("/delete_vehicle/:id", [Auth, SuperAdmin], SuperAdminController.deleteVehicle);

    app.get("/get_service_records", [Auth, SuperAdmin], SuperAdminController.getServiceRecords);
    app.delete("/delete_service_record/:id", [Auth, SuperAdmin], SuperAdminController.deleteServiceRecord);

    app.post("/create_service_agent", [Auth, SuperAdmin], SuperAdminController.createServiceAgent);


};
