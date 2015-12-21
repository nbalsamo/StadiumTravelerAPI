var searchRepository = require('../repositories/searchRepository.js');
var url = require('url');
var response = require('../common/response'); //TODO - get rid of this


/*Search for a team using strings*/
var searchTeam = function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    if (url_parts.query.hasOwnProperty('q')) {
        searchRepository.searchTeam(url_parts.query.q, function(err, content) {
            if (err) return next(err);
            res.json(content);
        });
    } else {
        var err = {
            message: "The query was not provided",
            status: 400
        }
        return next(err);
    }
}

/*Search for a team using teamID*/
var searchTeamByID = function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    if (url_parts.query.hasOwnProperty('id')) {
        searchRepository.searchTeamByID(url_parts.query.id, function(err, content) {
            if (err) return next(err);
            res.json(content);
        });
    } else {
        var err = {
            message: "The query was not provided",
            status: 400
        }
        return next(err);
    }
}

module.exports = {
    searchTeam: searchTeam,
    searchTeamByID: searchTeamByID
}
