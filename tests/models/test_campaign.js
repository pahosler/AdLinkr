/**
 * AdLinkr
 * A URL shortening tool for digital marketers
 * https://github.com/jodylecompte/AdLinkr
 * License: MIT
 *
 * Written by Jody LeCompte <jody@jodylecompte.com
 * Website: https://jodylecompte.com
 */

const Campaign = require('../../app/models/Campaign');
let expect = require('chai').expect;

describe('Models: Campaigns', function() {
    it('should be invalid if name is empty', () => {
        let campaign = new Campaign();

        campaign.validate((err) => {
            expect(err.errors.name).to.exist;
        });
    });
});
