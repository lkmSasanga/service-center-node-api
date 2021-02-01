let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.send("Welcome to API!");
});

require('./AuthRoutes')(router);
// require('./AdminRoutes')(router);
require('./ServiceAgentRoutes')(router);
require('./CustomerRoutes')(router);

module.exports.router = router;
