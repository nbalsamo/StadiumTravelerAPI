'use strict';

var pg = require('pg');
var database = require('../common/database');

var getSchedule = function(teamID) {
    return new Promise(function(resolve, reject) {
        pg.connect(database.connectionString, function(err, client, done) {
            if (err) {
                return reject(err);
            }
            client.query('select date from schedules where home_team_id=$1::bigint', [teamID], function(err, result) {
                done();
                if (err) {
                    return reject(err);
                }
                var schedule = buildScheduleFromRaw(result.rows);
                return resolve(schedule);
            });
        });
    });
};

var getSurroundingSchedule = function(body, callback) {
    pg.connect(database.connectionString, function(err, client, done) {
        if (err) {
            return callback(err);
        }
        //TODO - make this better
        client.query('select ' +
            's.home_team_id as "homeTeamID",' +
            's.away_team_id as "awayTeamID",' +
            's.date,' +
            's.time,' +
            't2.team_city as "city",' +
            't2.team_state as "state",' +
            't2.team_name as "homeTeamName",' +
            't3.team_name as "awayTeamName",' +
            'sp.sport_id as "sportID",' +
            'sp.sport_name as "sportName" ' +
            'from distances d inner join teams t on d.team_id = t.team_id ' +
            'inner join schedules s on d.destination_team_id = s.home_team_id ' +
            'inner join teams t2 on s.home_team_id = t2.team_id ' +
            'inner join teams t3 on s.away_team_id = t3.team_id ' +
            'inner join sports sp on sp.sport_id = s.sport_id ' +
            'where s.date = $1::date ' +
            'AND t.team_id = $2::bigint ' +
            'AND d.distance <= 20 ', [body.date, body.teamID],
            function(err, result) {
                done();
                if (err) {
                    return callback(err);
                }
                var data = buildSurroundingScheduleFromRaw(result.rows);
                return callback(null, data);
            });
    });
};

var buildScheduleFromRaw = function(scheduleRaw) {
    var schedule = {};
    for (var i = 0; i < scheduleRaw.length; i++) {
        schedule[scheduleRaw[i].date.toLocaleDateString('en-US')] = '';
    }
    return schedule;
};

var buildSurroundingScheduleFromRaw = function(raw) {
    var returnObj = {
        'nhlGames': [],
        'mlbGames': [],
        'nbaGames': [],
        'nflGames': []
    }
    for (var i = 0; i < raw.length; i++) {
        //TODO - user moment to fix the fucking date
        switch (raw[i].sportID) {
            case "1":
                returnObj.nhlGames.push(raw[i]);
                break;
            case "2":
                returnObj.nbaGames.push(raw[i]);
                break;
            case "3":
                returnObj.nflGames.push(raw[0][i]);
                break;
            case "4":
                returnObj.mlbGames.push(raw[0][i]);
                break;
            default:
                console.log("wtf sport is this????");
        }
    }
    return returnObj;
};

module.exports = {
    getSchedule: getSchedule,
    getSurroundingSchedule: getSurroundingSchedule
};
