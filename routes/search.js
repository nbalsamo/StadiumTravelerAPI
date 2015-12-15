var express = require('express');
var searchController = require('../controllers/searchController');
var router = express.Router();

/* Search for a team name *
 * Query string ?q={query}
 */
router.get('/', searchController.searchTeam);

/* Search for a team by team id *
 * Query string ?id={teamID}
 */
router.get('/team/', searchController.searchTeamByID);

module.exports = router;
