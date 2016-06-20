'use strict';

var request = require('supertest');
describe('GET teams/{teamID}/schedule - GET a Team\'s Schedule', function() {
    var app;

    before(function(done) {
        app = require('../testServer')();
        done();
    });

    var sendRequest = function(teamID) {
        return request(app)
            .get('/teams/' + teamID + '/schedule')
            .send();
    };

    it('returns correct schedule', function(done) {
        sendRequest(11)
            .end(function(err, res) {
                if (err) return done(err);

                console.log(res.body);

                done();
            });
    });

});
