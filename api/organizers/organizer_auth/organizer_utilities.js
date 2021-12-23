const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../../config')

function tokenBuilder(organizer) {
    const payload = {
        subject:organizer.organizer_id,
        organizername:organizer.username,
    }

    const options = {
        expiresIn: '1d'
    }

    const result =  jwt.sign(payload, JWT_SECRET, options)

    return result;
}

module.exports = {
    tokenBuilder,
}
