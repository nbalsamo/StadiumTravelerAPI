'use strict';

var assert = require('chai').assert;
var request = require('supertest');

describe('GET /teams/{teamID}/surrounding -  Get teams surrounding schedule by ID', function() {
    var app;

    before(function(done) {
        app = require('../testServer')();
        done();
    });


    function sendRequest(teamID, date, distance) {
        return request(app)
            .get('/teams/' + teamID + '/surrounding?date=' + date + '&distance=' + distance)
            .send();
    }

    it('returns 200 and valid surrounding schedule', function(done) {
        sendRequest(11, '3/26/2015', 20)
            .end(function(err, res) {
                if (err) return done(err);

                assert.equal(1, res.body.length);
                assert.equal(12, res.body[0].homeTeamID);
                assert.equal('Brooklyn', res.body[0].homeTeamCity);
                assert.equal('NY', res.body[0].homeTeamState);
                assert.equal('Barclays Center', res.body[0].homeStadiumName);
                assert.equal('40.68265, -73.974689', res.body[0].homePosition);
                assert.equal('New York Islanders', res.body[0].homeTeamName);
                assert.equal(21, res.body[0].awayTeamID);
                assert.equal('Los Angeles Kings', res.body[0].awayTeamName);
                assert.equal(1, res.body[0].sportID);
                assert.equal('07:00:00', res.body[0].time);
                assert.equal('2015-03-26T04:00:00.000Z', res.body[0].date);
                assert.equal('18', res.body[0].distance);

                done();
            });
    });

    it('returns 404 for non number team id', function(done) {
        sendRequest('blah')
            .expect(404, done);
    });
});
