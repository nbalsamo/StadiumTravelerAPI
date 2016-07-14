'use strict';

var request = require('supertest');
var assert = require('chai').assert;

describe('GET teams/{teamID}/schedule - GET a Team\'s Schedule', function() {
    var app;

    before(function(done) {
        app = require('../testServer')();
        done();
    });

    var sendRequest = function(teamID, filter) {
        var queryString = filter ? '?filter=' + filter : '';
        return request(app)
            .get('/teams/' + teamID + '/schedule' + queryString)
            .send();
    };

    it('returns correct schedule', function(done) {
        sendRequest(11)
            .end(function(err, res) {
                if (err) return done(err);

                assert.equal(res.body.length, 82);

                //just testing the body is set correctly - not checking data integrity yet
                assert.ok(res.body[0].awayTeam);
                assert.ok(res.body[0].homeTeam);
                assert.ok(res.body[0].time);
                assert.ok(res.body[0].date);
                assert.equal(res.body[0].isHome, 0);
                assert.ok(res.body[0].homeTeamCity);
                assert.ok(res.body[0].homeTeamState);
                assert.ok(res.body[0].homeStadiumName);

                done();
            });
    });

    it('filters by home', function(done) {
        sendRequest(11, 1)
            .end(function(err, res) {
                if (err) return done(err);

                assert.equal(res.body.length, 41);

                //just testing the body is set correctly - not checking data integrity yet
                assert.ok(res.body[0].awayTeam);
                assert.ok(res.body[0].homeTeam);
                assert.ok(res.body[0].time);
                assert.ok(res.body[0].date);
                assert.equal(res.body[0].isHome, 1);

                done();
            });
    });

    it('filters by away', function(done) {
        sendRequest(11, 2)
            .end(function(err, res) {
                if (err) return done(err);

                assert.equal(res.body.length, 41);

                //just testing the body is set correctly - not checking data integrity yet
                assert.ok(res.body[0].awayTeam);
                assert.ok(res.body[0].homeTeam);
                assert.ok(res.body[0].time);
                assert.ok(res.body[0].date);
                assert.equal(res.body[0].isHome, 0);

                done();
            });
    });

});
