var database = require("../common/database");
var sql = require('mssql');


var getSchedule = function(teamID, callback) {
    var query = 'select * from Schedule where HomeTeamID=' + teamID;
    database.ExecuteSimpleQuery(query, function(content, err) {
        var schedule;
        if (!err) {
            schedule = buildScheduleFromRaw(content);
        }
        console.log(err);
        callback(schedule, err);
    });
}

var getSurroundingSchedule = function(body, callback) {
    var parameters = [];
    var teamIDParameter = {
        name: "TeamID",
        type: sql.BigInt,
        value: body.teamID
    };
    var dateParameter = {
        name: "Date",
        type: sql.Date,
        value: body.date
    };
    var maximumDistanceParameter = {
        name: "MaximumDistance",
        type: sql.BigInt,
        value: 20
    };

    parameters.push(teamIDParameter);
    parameters.push(dateParameter);
    parameters.push(maximumDistanceParameter);

    database.ExecuteSelectStoredProcedure("usp_SelectSurroundingTeamsByTeamIDAndDate", parameters, function(content, err) {
        if (!err) {
            var data = buildSurroundingScheduleFromRaw(content);
        }
        callback(data, err);
    });
}

var buildScheduleFromRaw = function(scheduleRaw) {
    var schedule = {};
    for (i = 0; i < scheduleRaw.length; i++) {
        scheduleRaw[i].Date.setDate(scheduleRaw[i].Date.getDate() + 1); //NOT SURE WHY ALL THE DATES ARE ONE BEHIND
        schedule[scheduleRaw[i].Date.toLocaleDateString("en-US")] = '';
    }
    return schedule;
}

var buildSurroundingScheduleFromRaw = function(raw) {
    //not sure why raw is an array with an array inside 
    //also i have no idea why it thinks the data is not eastern time so maybe i have to convert it to utc and just know that it's eastern

    //Loop through all of the results just to build the response body. This isn't good practice i know 
    var returnObj = {
        'nhlGames': [],
        'mlbGames': [],
        'nbaGames': [],
        'nflGames': []
    }
    for (var i = 0; i < raw[0].length; i++) {
        var timeDate = new Date(raw[0][i].Time.toString());
        raw[0][i].Time = timeDate.toTimeString();

        /*this is fucking dumb*/
        var date = new Date(raw[0][i].Date.toString());
        raw[0][i].Date.setDate(date.getDate()).toString();
        //raw[0][i].Date = raw[0][i].Date.getDate() + 1; //AGAIN NOT SURE WHY ALL OF THE DATES ARE ONE BEHIND
        //raw[0][i].Date = date

        switch (raw[0][i].SportID) {
            case "1":
                returnObj.nhlGames.push(raw[0][i]);
                break;
            case "2":
                returnObj.nbaGames.push(raw[0][i]);
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
}

module.exports = {
    GetSchedule: getSchedule,
    GetSurroundingSchedule: getSurroundingSchedule
}
