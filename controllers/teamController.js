'use strict';
var url = require('url');

module.exports = function teamController(teamRepository) {
    return {

        searchTeam: function(req, res, next) {
            var url_parts = url.parse(req.url, true);
            if (url_parts.query.hasOwnProperty('q')) {
                teamRepository.searchTeam(url_parts.query.q)
                    .then(function(content) {
                        res.json(content);
                    }).catch(function(err) {
                        return next(err);
                    });
            } else {
                teamRepository.getAllTeams()
                    .then(function(content) {
                        res.json(content);
                    }).catch(function(err) {
                        return next(err);
                    });
            }
        },

        getTeamByID: function(req, res, next) {
            teamRepository.searchTeamByID(req.params.teamID)
                .then(function(content) {
                    res.json(content);
                }).catch(function(err) {
                    return next(err);
                });
        },

        getSchedule: function(req, res, next) {
            teamRepository.getSchedule(req.params.teamID, req.query.filter)
                .then(function(content) {
                    res.json(content);
                }).catch(function(err) {
                    return next(err);
                });
        },

        getSurroundingSchedule: function(req, res, next) {
            if (!req.query.date || !req.query.distance) return next('missing fields');
            teamRepository.getSurroundingSchedule(req.params.teamID, req.query.date, req.query.distance)
                .then(function(content) {
                    res.json(content);
                }).catch(function(err) {
                    return next(err);
                });
        }
    };

};
