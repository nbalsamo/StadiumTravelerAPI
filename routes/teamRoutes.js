'use strict';

var express = require('express');

module.exports = function teamRoutes(teamController) {
    var router = express.Router();

    /* Search for a team name *
     * Query string ?q={query}
     */
    router.get('/', teamController.searchTeam);

    /* 
    Get a team by ID
    */
    router.get('/:teamID([0-9]+)', teamController.getTeamByID);


    /*
    Get a teams schedule by ID
    */
    router.get('/:teamID([0-9]+)/schedule', teamController.getSchedule);


    /*
    Get surrounding games by a teamid
    */
    router.get('/:teamID([0-9]+)/surrounding', teamController.getSurroundingSchedule);


    return router;
};
