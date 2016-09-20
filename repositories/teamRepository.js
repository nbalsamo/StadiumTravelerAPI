'use strict';

var _ = require('lodash');
var scheduleFilter = require('../enum/scheduleFilter');


module.exports = function(db) {
    var selectTeamSql = 'select team_id as "teamID", team_name as "teamName", team_city as "teamCity", stadium_name as "stadiumName", position, sport_id as "sportID" ';

    return {
        searchTeam: function(teamName) {
            return new Promise(function(resolve, reject) {
                db.query(selectTeamSql + ' from teams where team_name=$1', [teamName], function(err, result) {
                    if (err) {
                        return reject(err);
                    }
                    if (result.rows.length > 0) {
                        return resolve(result.rows[0]); //Right now we are only returning one team
                    }
                    return resolve();
                });
            });
        },

        searchTeamByID: function(teamID) {
            return new Promise(function(resolve, reject) {
                db.query(selectTeamSql + 'from teams where team_id=$1', [teamID], function(err, result) {
                    if (err) {
                        return reject(err);
                    }
                    if (result.rows.length > 0) {
                        return resolve(result.rows[0]);
                    }
                    return reject({
                        message: 'Invalid Team ID',
                        status: 400
                    });
                });

            });
        },

        getAllTeams: function() {
            return new Promise(function(resolve, reject) {
                db.query(selectTeamSql + ' from teams', function(err, result) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result.rows);
                });
            });
        },

        getSurroundingSchedule: function(teamID, date, distance) {
            return new Promise(function(resolve, reject) {

                var sql = 'WITH distanceTable AS (' +
                    'SELECT * from distances where team_id = $1 AND distance < $2' +
                    ') SELECT ' +
                    'home.team_id as "homeTeamID" ,' +
                    'home.team_city as "homeTeamCity",' +
                    'home.team_state as "homeTeamState",' +
                    'home.stadium_name as "homeStadiumName",' +
                    'home.position as "homePosition", ' +
                    'home.team_name as "homeTeam", ' +
                    'away.team_id as "awayTeamID", ' +
                    'away.team_name as "awayTeam",' +
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


                db.query(sql, [teamID, distance, date], function(err, result) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(buildSurroundingSchedule(result.rows));
                });
            });
        },

        getSchedule: function(teamID, filter) {
            return new Promise(function(resolve, reject) {

                var homeSQL = 'SELECT away.team_name as away_team, home.team_name as home_team, home.team_id as home_team_id, s.date, s.time, 1 AS home, home.stadium_name as "homeStadiumName", home.team_city as "homeTeamCity", home.team_state as "homeTeamState" ' +
                    'FROM teams away ' +
                    'INNER JOIN schedules s ON (away.team_id = s.away_team_id) ' +
                    'INNER JOIN teams home ON (home.team_id = s.home_team_id) ' +
                    'WHERE s.home_team_id=$1 ';

                var awaySQL = 'SELECT away.team_name as away_team, home.team_name as home_team, home.team_id as home_team_id, s.date, s.time, 0 AS home, home.stadium_name as "homeStadiumName", home.team_city as "homeTeamCity", home.team_state as "homeTeamState" ' +
                    'FROM teams home ' +
                    'INNER JOIN schedules s ON (home.team_id = s.home_team_id) ' +
                    'INNER JOIN teams away ON (away.team_id = s.away_team_id) ' +
                    'WHERE s.away_team_id=$1 ';

                var sql = '';

                if (filter == scheduleFilter.HOME) {
                    sql = homeSQL + 'ORDER BY date';
                } else if (filter == scheduleFilter.AWAY) {
                    sql = awaySQL + 'ORDER BY date';
                } else {
                    sql = homeSQL + 'UNION ALL ' + awaySQL + 'ORDER BY date';
                }

                db.query(sql, [teamID],
                    function(err, result) {
                        if (err) {
                            return reject(err);
                        }

                        var data = result.rows.map(buildScheduleFromRaw);
                        return resolve(data);
                    });
            });
        }
    };

    function buildScheduleFromRaw(row) {
        var game = {
            awayTeam: row.away_team,
            homeTeam: row.home_team,
            homeTeamID: row.home_team_id,
            time: row.time,
            date: new Date(row.date).toLocaleDateString('en-US'),
            isHome: row.home,
            homeStadiumName: row.homeStadiumName,
            homeTeamCity: row.homeTeamCity,
            homeTeamState: row.homeTeamState
        };
        return game;
    }


    function buildSurroundingSchedule(rows) {
        var games = {};
        games.nhl = _.filter(rows, function(o) {
            return o.sportID == 1;
        });
        games.nba = _.filter(rows, function(o) {
            return o.sportID == 2;
        });
        games.nfl = _.filter(rows, function(o) {
            return o.sportID == 3;
        });
        games.mlb = _.filter(rows, function(o) {
            return o.sportID == 4;
        });
        games.ncaaf = _.filter(rows, function(o) {
            return o.sportID == 5;
        });

        return games;
    }
};
