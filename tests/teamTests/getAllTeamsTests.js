'use strict';

var assert = require('chai').assert;
var request = require('supertest');

describe('GET /teams - Seach Teams', function() {
    var app;

    before(function(done) {
        app = require('../testServer')();
        done();
    });


    function sendRequest() {
        return request(app)
            .get('/teams')
            .send();
    }

    it('returns 200 and team data for team search', function(done) {
        sendRequest('New Jersey Devils')
            .end(function(err, res) {
                if (err) return done(err);

                assert.equal(res.body.length, 249);

                done();
            });
    });
});
