const crypto = require('crypto');

function hashActivity(username, action, timestamp) {
    const data = `${username}-${action}-${timestamp}`;
    return crypto.createHash('sha256').update(data).digest('hex');
}