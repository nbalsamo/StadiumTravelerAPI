'use strict';

var conString = process.env.dbConnectionString || 'postgres://postgres:admin@localhost/stadium_traveler';

module.exports = {
    connectionString: conString
};
