var searchRepository = require('../repositories/searchRepository.js');

/*Search for a team using strings*/
var searchTeam = function(teamName, callback) {
    var result = searchRepository.searchTeam(teamName, function(err, content) {
        if (content.length > 0) {
            var team = content[0];
            callback(err, team);
        } else {
            callback(err, content);
        }
    });
}

/*Search for a team using teamID*/
var searchTeamByID = function(teamID, callback) {
    var result = searchRepository.searchTeamByID(teamID, function(err, content) {
        if (content.length > 0) {
            var team = content[0];
            callback(err, team);
        } else {
            callback(err, content);
        }
    });
}

module.exports = {
    searchTeam: searchTeam,
    searchTeamByID: searchTeamByID
}
