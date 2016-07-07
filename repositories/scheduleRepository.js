'use strict';

var pg = require('pg');
var database = require('../common/database');
var scheduleFilter = require('../enum/scheduleFilter');

var getSchedule = function(teamID, filter) {
    return new Promise(function(resolve, reject) {
        pg.connect(database.connectionString, function(err, client, done) {
            if (err) {
                return reject(err);
            }

            var homeSQL = 'SELECT away.team_name as away_team, home.team_name as home_team, s.date, s.time, 1 AS home ' +
                'FROM teams away ' +
                'INNER JOIN schedules s ON (away.team_id = s.away_team_id) ' +
                'INNER JOIN teams home ON (home.team_id = s.home_team_id) ' +
                'WHERE s.home_team_id=$1::bigint ';

            var awaySQL = 'SELECT away.team_name as away_team, home.team_name as home_team, s.date, s.time, 0 AS home ' +
                'FROM teams home ' +
                'INNER JOIN schedules s ON (home.team_id = s.home_team_id) ' +
                'INNER JOIN teams away ON (away.team_id = s.away_team_id) ' +
                'WHERE s.away_team_id=$1::bigint ';

            var sql = '';

            if (filter == scheduleFilter.HOME) {
                sql = homeSQL + 'ORDER BY date';
            } else if (filter == scheduleFilter.AWAY) {
                sql = awaySQL + 'ORDER BY date';
            } else {
                sql = homeSQL + 'UNION ALL ' + awaySQL + 'ORDER BY date';
            }

            client.query(sql, [teamID],
                function(err, result) {
                    done();
                    if (err) {
                        return reject(err);
                    }

                    var data = result.rows.map(buildScheduleFromRaw);
                    return resolve(data);
                });
        });
    });
};

var buildScheduleFromRaw = function(row) {
    var game = {
        awayTeam: row.away_team,
        homeTeam: row.home_team,
        time: row.time,
        date: new Date(row.date).toLocaleDateString('en-US'),
        isHome: row.home
    };
    return game;
};

module.exports = {
    getSchedule: getSchedule
};
