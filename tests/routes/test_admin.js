const request = require('supertest');
const app = require('../../app/server');

describe('Routes: Admin', () => {
    it('Should serve 200 on successful route', (done) => {
        request(app)
            .get('/admin')
            .expect(200, done);
    });
});
