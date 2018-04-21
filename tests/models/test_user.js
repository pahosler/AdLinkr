const User = require('../../app/models/User');
var expect = require('chai').expect;
const sinon = require('sinon');
const mongoose = require('mongoose');

const seed = require('../seeds/user.seed')
const config = require('../../app/config/config')
require('../../app/db')

describe('Models: User', function() {
    it('should be invalid if any required fields are empty', () => {
        const user = new User();

        user.validate(err => {
            expect(err.errors.firstName).to.exist;
            expect(err.errors.lastName).to.exist;
            expect(err.errors.email).to.exist;
            expect(err.errors.password).to.exist;
            expect(err.errors.groupId).to.exist;
        });
    });

    it('should allow for all optional / event based fields', () => {
        const user = new User({
            firstName: "Test",
            lastName: "Test",
            email: "test@test.com",
            password: "Test",
            groupId: 1,
            forgotPasswordCode: "null",
            forgotPasswordTime: 12345678,
            activationCode: 12345
        });

        expect(user.forgotPasswordCode).to.equal("null")
        expect(user.forgotPasswordTime).to.equal(12345678)
        expect(user.activationCode).to.equal(12345)
    });

    it('should be invalid if email address is invalid', () => {
        const user = new User({
            firstName: "Test",
            lastName: "Test",
            email: "Test",
            password: "Test",
            groupId: 1,
        });

        user.validate(err => {
            expect(err.errors.email)
        });
    });

    describe('Methods: ', () => {
        beforeEach(function(done) {
            User.remove({}).then(() => {
                return User.insertMany(seed);
              }).then(() => done());
        })
        
        it("checkUnique should return false if duplicate user is found", function(done) {
            User.checkUnique("test@test.com", function(data) {
                console.log("data: " + data)
                expect(data).to.equal(false);
                done();
            });
        });

        it("checkUnique should return false if duplicate user is true", function(done) {
            User.checkUnique("teswft@test.com", function(data) {
                expect(data).to.equal(true);
                done();
            });
        });
    })
});