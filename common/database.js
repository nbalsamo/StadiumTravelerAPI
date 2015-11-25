var sql = require('mssql');

var config = {
    user: 'sa',
    password: 'SQL h@$ N0 =',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: 'StadiumTraveler',

    options: {
        encrypt: false // Use this if you're on Windows Azure 
    }
}

var executeSimpleQuery = function(query, callback) {
    var connection = new sql.Connection(config, function(err) {
        console.log('connection erro');
        console.log(err);
        var request = new sql.Request(connection);
        request.query(query, function(err, recordset) {
            callback(recordset, err);
        });
    });
}

var executeSelectStoredProcedure = function(storedProcedure, parameters, callback) {
    var connection = new sql.Connection(config, function(err) {
        var request = new sql.Request(connection);
        for (var i = 0; i < parameters.length; i++) {
            request.input(parameters[i].name, parameters[i].type, parameters[i].value);
        }
        request.execute(storedProcedure, function(err, recordsets, returnValue) {
            callback(recordsets, err);
        });
    });
}

module.exports = {
    ExecuteSimpleQuery: executeSimpleQuery,
    ExecuteSelectStoredProcedure: executeSelectStoredProcedure
}
