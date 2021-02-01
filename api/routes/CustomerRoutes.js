module.exports = function(app) {
    const { Auth } = require("../middleware/auth");
    const { Customer } = require("../middleware/customer");

    const CustomerController = require("../controllers/CustomerController");

    app.get("/serviceagent/:id", [Auth, Customer], CustomerController.viewServiceAgentById);
    // app.post("/search_services", [Auth, Customer], CustomerController.searchServices);
};
