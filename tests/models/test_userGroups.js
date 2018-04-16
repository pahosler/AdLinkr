const User = require('../../app/models/UserGroup');
var expect = require('chai').expect;

describe('User Groups Model Model', function() {
   
    it('should be invalid if name is empty', () => {
        const user = new User();

        user.validate(err => {
            expect(err.errors.name).to.exist;
        });
    });

});