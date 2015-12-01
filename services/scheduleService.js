var scheduleRepository = require('../repositories/scheduleRepository');

var getSchedule = function(teamID, callback) {
    var schedule = scheduleRepository.getSchedule(teamID, function(err, content) {
        callback(err, content);
    });
}

var getSurroundingSchedule = function(body, callback) {
    var schedule = scheduleRepository.getSurroundingSchedule(body, function(err, content) {
        callback(err, content);
    });
}

module.exports = {
    getSchedule: getSchedule,
    getSurroundingSchedule: getSurroundingSchedule
}
