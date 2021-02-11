let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.send("Welcome to service center API!");
});

require('./AuthRoutes')(router);
require('./SuperAdminRoutes')(router);
require('./ServiceAgentRoutes')(router);
require('./CustomerRoutes')(router);

module.exports.router = router;