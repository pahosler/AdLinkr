const mongoose = require('mongoose');
 
const campaignSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    }
});
 
module.exports = mongoose.model('Campaign', campaignSchema);