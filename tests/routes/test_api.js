const request = require('supertest');
const app = require('../../app/server')

describe('Routes: API', () => {
    
    it('Should serve JSON for valid API routes', done => {
        request(app)
            .get('/api')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('Should return an error on invalid endpoints', done => {
        request(app)
            .get('/api/egaega')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect({"error": "Invalid endpoint."}, done);
    });

});