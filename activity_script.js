const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    username: String,
    action: String,
    timestamp: { type: Date, default: Date.now },
    hash: String
});

const Activity = mongoose.model('Activity', activitySchema);