const request = require('supertest');
const app = require('../../app/server');

describe('Routes: Core', () => {

    it('Should return an error on invalid route', done => {
        request(app)
            .get('/egaega')
            .expect(404, done);
    });

});