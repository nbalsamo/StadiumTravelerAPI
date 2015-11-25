var express = require('express');
var url = require('url');
var response = require('../common/response');
var scheduleService = require('../services/scheduleService.js');
var router = express.Router();

/* GET schedules of a team *
 * Query string ?teamID={ID}*/
router.get('/', function(req, res) {
    var url_parts = url.parse(req.url, true);
    res.setHeader('Access-Control-Allow-Origin', '*'); //cross domain shit
    if (url_parts.query.hasOwnProperty('ID')) {
        scheduleService.GetSchedule(url_parts.query.ID, function(schedule, err) {
            if (err) {
                res.json(new response.ErrorResponse(err));
                return;
            }
            res.json(new response.ApiResponse(schedule, false, null));
        });
    } else {
        res.json(new response.ErrorResponse("Team ID was not provided"));
    }
});

/* Post message to search the games in the surrounding area
 * search format
 * {
 *      teamID:
 *      date:
 *      distance: WILL BE HARDCODED FOR NOW
 * }
 */
router.post('/surroundingSchedule', function(req, res) {
    var body = {};
    body['teamID'] = req.body.teamID;
    body['date'] = req.body.date;
    res.setHeader('Access-Control-Allow-Origin', '*'); //cross domain shit
    res.setHeader('Access-Control-Allow-Headers', 'accept, content-type'); //cross domain shit
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    if (body.teamID && body.date) {
        scheduleService.GetSurroundingSchedule(body, function(schedule, err) {
            if (err) {
                res.json(new response.ErrorResponse(err));
                return;
            }
            console.log(schedule);
            res.json(new response.ApiResponse(schedule, false, null));
        });
    } else {
        res.json(new response.ErrorResponse("Request body was not formed correctly"));
    }

});

module.exports = router;
