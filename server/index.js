'use strict';

var port    = process.env.PORT,
    express = require('express'),
    app     = express();

require('./lib/config')(app);
require('./routes/routes')(app, express);

app.listen(port);

module.exports = app;
