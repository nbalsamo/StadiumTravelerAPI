'use strict';

var assert = require('chai').assert;
var request = require('supertest');

describe('GET /teams/{teamID} -  Get team by ID', function() {
    var app;

    before(function(done) {
        app = require('../testServer')();
        done();
    });


    function sendRequest(teamID) {
        return request(app)
            .get('/teams/' + teamID)
            .send();
    }

    it('returns 200 and team data for get team by team id', function(done) {
        sendRequest(11)
            .end(function(err, res) {
                if (err) return done(err);

                assert.equal(res.status, 200);
                assert.equal(res.body.teamName, 'New Jersey Devils');
                assert.equal(res.body.teamCity, 'Newark');
                assert.equal(res.body.stadiumName, 'Prudential Center');
                assert.equal(res.body.position, '40.733611, -74.171111');
                assert.equal(res.body.sportID, 1);

                done();
            });
    });

    it('returns 404 for non number team id', function(done) {
        sendRequest('blah')
            .expect(404, done);
    });
});
