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
router.get('/team/', teamController.searchTeamByID);

/* Search for a master list of all teams*
 */
router.get('/teams/', teamController.getAllTeams);

module.exports = router;
