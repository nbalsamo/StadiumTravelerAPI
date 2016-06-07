'use strict';

var mocha = require('mocha');
var assert = require('chai').assert;
var request = require('supertest');

describe('GET /teams - Seach Teams', function() {
    var app;

    before(function(done) {
        app = require('../testServer')();
        done();
    });


    function sendRequest(query) {
        return request(app)
            .get('/teams?q=' + query)
            .send();
    }

    it('returns 200 and team data for team search', function(done) {
        sendRequest('New Jersey Devils')
            .end(function(err, res) {
                if (err) return done(err);
                assert.equal(res.status, 200);
                assert.equal(res.body.teamName, 'New Jersey Devils');
                assert.equal(res.body.teamCity, 'Newark');
                assert.equal(res.body.stadiumName, 'Prudential Center');
                assert.equal(res.body.position, '40.733611°N 74.171111°W');
                assert.equal(res.body.sportID, 1);

                done();
            });
    });

    it('returns nothing for invalid team name', function(done) {
        sendRequest('blah')
            .end(function(err, res) {
                if (err) return done(err);
                assert.equal(res.status, 200);
                assert.notOk(res.body);

                done();
            });
    });
});
