var searchRepository = require('../repositories/searchRepository.js');

/*Search for a team using strings*/
var searchTeam = function(teamName, callback) {
    var result = searchRepository.SearchTeam(teamName, function(content, err) {
        /*Search Should only return one object*/
        if (content.length > 0) {
            var team = content[0];
            callback(team, err);
        } else {
            callback(content, err);
        }
    });
}

/*Search for a team using teamID*/
var searchTeamByID = function(teamID, callback) {
    var result = searchRepository.SearchTeamByID(teamID, function(content, err) {
        /*Search Should only return one object*/
        if (content.length > 0) {
            var team = content[0];
            callback(team, err);
        } else {
            callback(content, err);
        }
    });
}

module.exports = {
    searchTeam: searchTeam,
    searchTeamByID: searchTeamByID
}
