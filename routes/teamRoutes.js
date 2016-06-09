var express = require('express');
var teamController = require('../controllers/teamController')();
var router = express.Router();

/* Search for a team name *
 * Query string ?q={query}
 */
router.get('/', teamController.searchTeam);

/* Search for a team by team id *
 * Query string ?id={teamID}
 */
router.get('/:teamID([0-9]+)', teamController.getTeamByID);


module.exports = router;
