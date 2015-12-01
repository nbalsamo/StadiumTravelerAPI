var express = require('express');
var bodyParser = require("body-parser");
var url = require('url');
var response = require('../common/response');
var searchService = require('../services/searchService.js');
var router = express.Router();

/* Search for a team name *
 * Query string ?q={query}*/
router.get('/', function(req, res) {
    var url_parts = url.parse(req.url, true);
    if (url_parts.query.hasOwnProperty('q')) {
        searchService.searchTeam(url_parts.query.q, function(err, result) {
            if (err) {
                res.json(new response.ErrorResponse(err));
                return;
            }
            res.json(new response.ApiResponse(result, false, null));
        });
    } else {
        res.json(new response.ErrorResponse("The query was not provided"));
    }
});

/* Search for a team by team id *
 * Query string ?id={teamID}*/
router.get('/team/', function(req, res) {
    var url_parts = url.parse(req.url, true);
    if (url_parts.query.hasOwnProperty('id')) {
        searchService.searchTeamByID(url_parts.query.id, function(err, result) {
            if (err) {
                res.json(new response.ErrorResponse(err));
                return;
            }
            res.json(new response.ApiResponse(result, false, null));
        });
    } else {
        res.json(new response.ErrorResponse("The query was not provided"));
    }
});

module.exports = router;
