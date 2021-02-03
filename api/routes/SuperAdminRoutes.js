// module.exports = function(app) {
//     const { Auth } = require("../middleware/auth");
//     const { superAdmin } = require("../middleware/superAdmin");
//
//     const SuperAdminController = require("../controllers/SuperAdminController")
//
//     app.post("/create_service_tag", [Auth, superAdmin], BeauticianController.createServiceTag);
//     app.get("/services_tags", [Auth, superAdmin], BeauticianController.getAllServiceTags);
//     app.post("/create_service", [Auth, superAdmin], BeauticianController.createService);
//     app.get("/services", [Auth, superAdmin], BeauticianController.getAllServices);
//     app.get("/service/:id", [Auth], BeauticianController.getServiceById);
//     app.put("/update_service/:id", [Auth, superAdmin], BeauticianController.updateService);
//     app.delete("/delete_service/:id", [Auth, superAdmin], BeauticianController.deleteService);
// };
