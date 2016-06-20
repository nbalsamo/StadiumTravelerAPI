'use strict';

module.exports = function testServer() {
    var app = require('../server')(false);
    app.loggingEnabled = false;
    return app;
};
