var database = require("../common/database");
var pg = require('pg');

var searchTeam = function(teamName, callback) {
    pg.connect(database.connectionString, function(err, client, done) {
        if (err) {
            callback(err);
            return;
        }
        client.query('select team_id as "teamID", team_name as "teamName", team_city as "teamCity", stadium_name as "stadiumName", position, sport_id as "sportID" from teams where team_name=$1::text', [teamName], function(err, result) {
            done();
            if (err) {
                callback(err);
                return;
            }
            console.log(result.rows);
            callback(null, result.rows);
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
                callback(err);
                return;
            }
            console.log(result.rows);
            callback(null, result.rows);
        });
    });
}

module.exports = {
    searchTeam: searchTeam,
    searchTeamByID: searchTeamByID
}
