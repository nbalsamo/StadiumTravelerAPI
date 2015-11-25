var database = require("../common/database");

//TODO Turn these all into stupid stored procedures

var searchTeam = function (teamName, callback) {
    var query = 'select * from Team where TeamName=\'' + teamName + '\'';
    database.ExecuteSimpleQuery(query, function (content, err) {
        callback(content, err);
    });
}

var searchTeamByID = function (teamID, callback) {
    var query = 'select * from Team where TeamID=' + teamID ;
    database.ExecuteSimpleQuery(query, function (content, err) {
        callback(content, err);
    });
}

module.exports = {
    SearchTeam: searchTeam,
    SearchTeamByID: searchTeamByID
}