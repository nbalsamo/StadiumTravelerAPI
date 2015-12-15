var express = require('express');
var scheduleController = require('../controllers/scheduleController');
var router = express.Router();

/* GET schedules of a team *
 * Query string ?teamID={teamID}
 */
router.get('/', scheduleController.getSchedule);

/* Post message to search the games in the surrounding area
 * search format
 * {
 *      teamID:
 *      date:
 *      distance: WILL BE HARDCODED FOR NOW
 * }
 */
router.post('/surroundingSchedule', scheduleController.getSurroundingSchedule);

module.exports = router;
