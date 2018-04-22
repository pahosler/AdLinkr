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
