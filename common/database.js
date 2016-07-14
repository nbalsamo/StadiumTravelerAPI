'use strict';

var anyDb = require('any-db');

module.exports = function() {

    var conString = process.env.dbConnectionString || 'postgres://postgres:admin@localhost/stadium_traveler';

    var dbPool = anyDb.createPool(conString, {
        min: 2,
        max: 20
    });
    return dbPool;
};
