module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { SuperAdmin } = require("../middleware/superAdmin");

    const SuperAdminController = require("../controllers/SuperAdminController")

    app.post("/create_service_category", [Auth, SuperAdmin], SuperAdminController.createServiceCategory);
    app.get("/service_categories", [Auth, SuperAdmin], SuperAdminController.getAllServiceCategories);

    // app.get("/customers", [Auth, SuperAdmin], SuperAdminController.getAllCustomers); // bug





    // app.post("/create_service", [Auth, superAdmin], BeauticianController.createService);
    // app.get("/services", [Auth, superAdmin], BeauticianController.getAllServices);
    // app.get("/service/:id", [Auth], BeauticianController.getServiceById);
    // app.put("/update_service/:id", [Auth, superAdmin], BeauticianController.updateService);
    // app.delete("/delete_service/:id", [Auth, superAdmin], BeauticianController.deleteService);
};
