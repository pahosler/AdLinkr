/**
 * AdLinkr
 * A URL shortening tool for digital marketers
 * https://github.com/jodylecompte/AdLinkr
 * License: MIT
 *
 * Written by Jody LeCompte <jody@jodylecompte.com
 * Website: https://jodylecompte.com
 */

const User = require('../../app/models/UserGroup');
let expect = require('chai').expect;

describe('Models: UserGroup', function() {
    it('should be invalid if name is empty', () => {
        const user = new User();

        user.validate((err) => {
            expect(err.errors.name).to.exist;
        });
    });
});
