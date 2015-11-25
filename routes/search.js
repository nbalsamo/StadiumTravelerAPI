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
    res.setHeader('Access-Control-Allow-Origin', '*'); //cross domain shit
    if (url_parts.query.hasOwnProperty('q')) {
        searchService.SearchTeam(url_parts.query.q, function(result, err) {
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
    res.setHeader('Access-Control-Allow-Origin', '*'); //cross domain shit
    if (url_parts.query.hasOwnProperty('id')) {
        searchService.searchTeamByID(url_parts.query.id, function(result, err) {
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

router.post('/', function(req, res) {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log(req.body);
    res.json(new response.ApiResponse("hi ya", false, null));
});



module.exports = router;
