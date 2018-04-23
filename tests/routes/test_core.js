/**
 * AdLinkr
 * A URL shortening tool for digital marketers
 * https://github.com/jodylecompte/AdLinkr
 * License: MIT
 *
 * Written by Jody LeCompte <jody@jodylecompte.com
 * Website: https://jodylecompte.com
 */

const request = require('supertest');
const app = require('../../app/server');

describe('Routes: Core', () => {
    it('Should return an error on invalid route', (done) => {
        request(app)
            .get('/egaega')
            .expect(404, done);
    });
});
