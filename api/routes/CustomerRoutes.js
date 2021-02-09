module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { Customer } = require("../middleware/customer");

    const CustomerController = require("../controllers/CustomerController");

    // app.get("/serviceagent/:id", [Auth, Customer], CustomerController.viewServiceAgentById);

    // app.post("/customer_register", [Auth, Customer], CustomerController.register);

    app.post("/add_vehicle", [Auth, Customer], CustomerController.addVehicle);
    app.post("/update_vehicle/:id", [Auth, Customer], CustomerController.updateVehicle);
    app.delete("/delete_vehicle/:id", [Auth, Customer], CustomerController.deleteVehicle);

    app.get("/get_service_record/:id", [Auth, Customer], CustomerController.getServiceRecord);
    app.post("/add_appointment", [Auth, Customer], CustomerController.addAppointment);
    app.post("/make_payment", [Auth, Customer], CustomerController.makePayment);



};
