var url = require('url');
var scheduleRepository = require('../repositories/scheduleRepository');
var response = require('../common/response'); //TODO - get rid of this

var getSchedule = function(req, res, next) {
    var url_parts = url.parse(req.url, true);
    if (url_parts.query.hasOwnProperty('teamID')) {
        scheduleRepository.getSchedule(url_parts.query.teamID, function(err, schedule) {
            if (err) {
                return next(err);
            }
            res.json(schedule);
        });
    } else {
        var err = {
            message: "teamID was not provided",
            status: 400
        }
        return next(err);
    }
}

var getSurroundingSchedule = function(req, res, next) {
    var body = {};
    body['teamID'] = req.body.teamID;
    body['date'] = req.body.date;
    if (body.teamID && body.date) {
        scheduleRepository.getSurroundingSchedule(body, function(err, schedule) {
            if (err) {
                return next(err);
            }
            res.json(new response.ApiResponse(schedule, false, null));
        });
    } else {
        var err = {
            message: "Request body was not formed correctly",
            status: 400
        }
        return next(err);
    }
}

module.exports = {
    getSchedule: getSchedule,
    getSurroundingSchedule: getSurroundingSchedule
}
