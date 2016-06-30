'use strict';

var database = require('../common/database');
var pg = require('pg');

module.exports = function() {
    var selectTeamSql = 'select team_id as "teamID", team_name as "teamName", team_city as "teamCity", stadium_name as "stadiumName", position, sport_id as "sportID" ';

    return {
        searchTeam: function(teamName) {
            return new Promise(function(resolve, reject) {
                pg.connect(database.connectionString, function(err, client, done) {
                    if (err) {
                        return reject(err);
                    }
                    client.query(selectTeamSql + ' from teams where team_name=$1::text', [teamName], function(err, result) {
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
                    client.query(selectTeamSql + 'from teams where team_id=$1::bigint', [teamID], function(err, result) {
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
                    client.query(selectTeamSql + ' from teams', function(err, result) {
                        done();
                        if (err) {
                            return reject(err);
                        }

                        return resolve(result.rows);
                    });
                });
            });
        },

        getSurroundingSchedule: function(teamID, date, distance) {
            return new Promise(function(resolve, reject) {
                pg.connect(database.connectionString, function(err, client, done) {
                    if (err) {
                        return reject(err);
                    }

                    var sql = 'WITH distanceTable AS (' +
                        'SELECT * from distances where team_id = $1::bigint AND distance < $2::bigint' +
                        ') SELECT ' +
                        'home.team_id as "homeTeamID" ,' +
                        'home.team_city as "homeTeamCity",' +
                        'home.team_state as "homeTeamState",' +
                        'home.stadium_name as "homeStadiumName",' +
                        'home.position as "homePosition", ' +
                        'home.team_name as "homeTeamName", ' +
                        'away.team_id as "awayTeamID", ' +
                        'away.team_name as "awayTeamName",' +
                        's.sport_id as "sportID", ' +
                        's.time, ' +
                        's.date,' +
                        'd.distance ' +
                        'FROM schedules s ' +
                        'INNER JOIN teams home on home.team_id = s.home_team_id ' +
                        'INNER JOIN teams away on away.team_id = s.away_team_id ' +
                        'INNER JOIN distanceTable d on d.destination_team_id = s.home_team_id ' +
                        'WHERE s.date >= $3::date - 1 ' +
                        'AND s.date <= $3::date + 1';


                    client.query(sql, [teamID, distance, date], function(err, result) {
                        done();
                        if (err) {
                            return reject(err);
                        }
                        return resolve(result.rows);

                    });
                });
            });
        }
    };
};
