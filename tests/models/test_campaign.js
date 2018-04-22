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
