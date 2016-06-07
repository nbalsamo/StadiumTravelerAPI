var database = require("../common/database");
var pg = require('pg');

var searchTeam = function(teamName, callback) {
    pg.connect(database.connectionString, function(err, client, done) {
        if (err) {
            return callback(err);
        }
        client.query('select team_id as "teamID", team_name as "teamName", team_city as "teamCity", stadium_name as "stadiumName", position, sport_id as "sportID" from teams where team_name=$1::text', [teamName], function(err, result) {
            done();
            if (err) {
                return callback(err);
            }
            if (result.rows.length > 0) {
                return callback(null, result.rows[0]); //Right now we are only returning one team
            }
            return callback(null, null);
        });
    });
}

var searchTeamByID = function(teamID, callback) {
    pg.connect(database.connectionString, function(err, client, done) {
        if (err) {
            callback(err);
            return;
        }
        client.query('select team_id as "teamID", team_name as "teamName", team_city as "teamCity", stadium_name as "stadiumName", position, sport_id as "sportID" from teams where team_id=$1::bigint', [teamID], function(err, result) {
            done();
            if (err) {
                return callback(err);
            }
            if (result.rows.length === 1) { //This should only return one team
                return callback(null, result.rows[0]);
            }
            return callback('Invalid Team ID'); //TODO - this will result in a 500. It should be returning a 400
        });
    });
}

var getAllTeams = function(callback) {
    pg.connect(database.connectionString, function(err, client, done) {
        if (err) {
            return callback(err);
        }
        client.query('select team_name as "teamName" from teams', function(err, result) {
            done();
            if (err) {
                return callback(err);
            }
            return callback(null, convertRawGetAllTeams(result.rows));
        });
    });
}

var convertRawGetAllTeams = function(data) {
    var teamNames = [];
    for (var i = 0; i < data.length; i++) {
        teamNames.push(data[i].teamName);
    }
    return teamNames;
}

module.exports = {
    searchTeam: searchTeam,
    searchTeamByID: searchTeamByID,
    getAllTeams: getAllTeams
}
