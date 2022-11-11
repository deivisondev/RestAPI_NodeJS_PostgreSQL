const pgp = require('pg-promise')();
const db = pgp({
    user: '',
    password: '',
    host: '',
    port: 0000,
    database: ''
});

module.exports = db;
