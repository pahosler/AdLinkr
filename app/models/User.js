const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: true 
    },
    lastName: { 
        type: String,
        required: true 
    },
    email: { 
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Regex pattern by Bryan Anderson (@dreamstarter) 
                return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v);
            },
            message: '{VALUE} is not a valid email address.'
        },
    },
    password: { 
        type: String,
        required: true 
    },
    groupId: { 
        type: String,
        required: true 
    },
    forgotPasswordCode: { type: String },
    forgotPasswordTime: { type: Number },
    activationCode: { type: Number }
});
 
userSchema.statics.checkUnique = function(email, callback) {
    this.model('User').find({email}).then(data => {
        callback(data.length === 0)
    });
}

module.exports = mongoose.model('User', userSchema);