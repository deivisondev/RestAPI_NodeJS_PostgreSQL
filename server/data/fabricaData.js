const database = require('../infra/database');

exports.getFabrica = function () {
    return database.query('SELECT * FROM FABRICA');
}
