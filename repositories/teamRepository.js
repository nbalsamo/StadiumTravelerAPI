'use strict';

var database = require('../common/database');
var pg = require('pg');

module.exports = function() {
    return {
        searchTeam: function(teamName) {
            return new Promise(function(resolve, reject) {
                pg.connect(database.connectionString, function(err, client, done) {
                    if (err) {
                        return reject(err);
                    }
                    client.query('select team_id as "teamID", team_name as "teamName", team_city as "teamCity", stadium_name as "stadiumName", position, sport_id as "sportID" from teams where team_name=$1::text', [teamName], function(err, result) {
                        done();
                        if (err) {
                            return reject(err);
                        }
                        if (result.rows.length > 0) {
                            return resolve(result.rows[0]); //Right now we are only returning one team
                        }
                        return resolve();
                    });
                });
            });
        },

        searchTeamByID: function(teamID) {
            return new Promise(function(resolve, reject) {
                pg.connect(database.connectionString, function(err, client, done) {
                    if (err) {
                        return reject(err);
                    }
                    client.query('select team_id as "teamID", team_name as "teamName", team_city as "teamCity", stadium_name as "stadiumName", position, sport_id as "sportID" from teams where team_id=$1::bigint', [teamID], function(err, result) {
                        done();
                        if (err) {
                            return reject(err);
                        }
                        if (result.rows.length === 1) { //This should only return one team
                            return resolve(result.rows[0]);
                        }
                        return reject('Invalid Team ID'); //TODO - this will result in a 500. It should be returning a 400
                    });
                });
            });
        },

        getAllTeams: function() {
            return new Promise(function(resolve, reject) {
                pg.connect(database.connectionString, function(err, client, done) {
                    if (err) {
                        return reject(err);
                    }
                    client.query('select team_name as "teamName" from teams', function(err, result) {
                        done();
                        if (err) {
                            return reject(err);
                        }

                        var data = convertRawGetAllTeams(result.rows);
                        return resolve(data);
                    });
                });
            });
        }
    };
};


var convertRawGetAllTeams = function(data) {
    var teamNames = [];
    for (var i = 0; i < data.length; i++) {
        teamNames.push(data[i].teamName);
    }
    return teamNames;
};
