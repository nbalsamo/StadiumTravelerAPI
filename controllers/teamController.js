var teamRepository = require('../repositories/teamRepository.js');
var url = require('url');
var response = require('../common/response'); //TODO - get rid of this


module.exports = function teamController() {
    return {
        /*Search for a team using strings*/
        searchTeam: function(req, res, next) {
            var url_parts = url.parse(req.url, true);
            if (url_parts.query.hasOwnProperty('q')) {
                teamRepository.searchTeam(url_parts.query.q, function(err, content) {
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
        },

        /*Search for a team using teamID*/
        searchTeamByID: function(req, res, next) {
            var url_parts = url.parse(req.url, true);
            if (url_parts.query.hasOwnProperty('id')) {
                teamRepository.searchTeamByID(url_parts.query.id, function(err, content) {
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
        },

        /*Return a list of all teams*/
        getAllTeams: function(req, res, next) {
            teamRepository.getAllTeams(function(err, content) {
                if (err) return next(err);
                res.json(content);
            });
        }
    }

}
