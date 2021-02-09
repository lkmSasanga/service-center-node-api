module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { Customer } = require("../middleware/customer");

    const CustomerController = require("../controllers/CustomerController");

    // app.get("/serviceagent/:id", [Auth, Customer], CustomerController.viewServiceAgentById);

    app.post("/add_vehicle", [Auth, Customer], CustomerController.addVehicle);
    app.post("/update_vehicle/:id", [Auth, Customer], CustomerController.updateVehicle);
    app.post("/delete_vehicle/:id", [Auth, Customer], CustomerController.deleteVehicle);
};
