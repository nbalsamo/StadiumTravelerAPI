var scheduleRepository = require('../repositories/scheduleRepository');

var getSchedule = function(teamID, callback) {
    var schedule = scheduleRepository.GetSchedule(teamID, function(content, err) {
        callback(content, err);
    });
}

var getSurroundingSchedule = function(body, callback) {
    var schedule = scheduleRepository.GetSurroundingSchedule(body, function(content, err) {
        callback(content, err);
    });
}

module.exports = {
    GetSchedule: getSchedule,
    GetSurroundingSchedule: getSurroundingSchedule
}
