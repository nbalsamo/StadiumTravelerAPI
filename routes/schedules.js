var express = require('express');
var url = require('url');
var response = require('../common/response');
var scheduleService = require('../services/scheduleService.js');
var router = express.Router();

/* GET schedules of a team *
 * Query string ?teamID={teamID}*/
router.get('/', function(req, res) {
    var url_parts = url.parse(req.url, true);
    if (url_parts.query.hasOwnProperty('teamID')) {
        scheduleService.getSchedule(url_parts.query.teamID, function(err, schedule) {
            if (err) {
                res.json(new response.ErrorResponse(err));
                return;
            }
            res.json(new response.ApiResponse(schedule, false, null));
        });
    } else {
        res.json(new response.ErrorResponse("teamID was not provided"));
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
    if (body.teamID && body.date) {
        scheduleService.getSurroundingSchedule(body, function(err, schedule) {
            if (err) {
                res.json(new response.ErrorResponse(err));
                return;
            }
            res.json(new response.ApiResponse(schedule, false, null));
        });
    } else {
        res.json(new response.ErrorResponse("Request body was not formed correctly"));
    }

});

module.exports = router;
