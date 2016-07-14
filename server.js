'use strict';

var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

module.exports = function init(enableLogging) {
    var app = express();

    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    };

    if (enableLogging) {
        app.use(logger('dev'));
    }

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cookieParser());
    app.use(allowCrossDomain);


    //dependencies 
    var db = require('./common/database')();

    //repositories
    var teamRepository = require('./repositories/teamRepository.js')(db);

    //controllers
    var teamController = require('./controllers/teamController')(teamRepository);

    //routes
    var teamRoutes = require('./routes/teamRoutes')(teamController);
    app.use('/teams', teamRoutes);


    app.use(function(req, res) {
        res.sendStatus(404);
    });

    if (app.get('env') === 'development') {
        app.use(function(err, req, res) {
            res.status(err.status || 500);
            res.json({
                message: err.message,
                error: err
            });
        });
    }

    app.use(function(err, req, res) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

    return app;
};
