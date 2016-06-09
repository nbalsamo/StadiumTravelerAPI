var teamRepository = require('../repositories/teamRepository.js');
var url = require('url');


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
                teamRepository.getAllTeams(function(err, content) {
                    if (err) return next(err);
                    res.json(content);
                });
            }
        },

        /*Search for a team using teamID*/
        getTeamByID: function(req, res, next) {
            teamRepository.searchTeamByID(req.params.teamID, function(err, content) {
                if (err) return next(err);
                res.json(content);
            });
        },

        /*Return a list of all teams*/
        getAllTeams: function(req, res, next) {
            teamRepository.getAllTeams(function(err, content) {
                if (err) return next(err);
                res.json(content);
            });
        }
    };

};
