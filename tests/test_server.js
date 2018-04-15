const request = require('supertest');
const app = require('../app/server')

describe('Server.js', () => {
    
    it('Should start an express app and serve status code 200 on root request', done => {
        request(app)
            .get('/')
            .expect(200, done);
    });

    it('Should respond to valid asset requests served from static directory', done => {
        request(app)
            .get('/public/fixture.json')
            .expect(200, done);
    });

    it('Should return a 404 status code on invalid asset request', done => {
        request(app)
            .get('/public/jerrywasaracecardriver')
            .expect(404, done);
    });

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