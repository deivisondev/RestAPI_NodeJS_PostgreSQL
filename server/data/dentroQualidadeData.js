const database = require('../infra/database');

exports.getDentroQualidades = function () {
    return database.query('SELECT * FROM DENTRO_QUALIDADE');
};

exports.getDentroQualidade = function (id) {
    return database.oneOrNone('SELECT * FROM DENTRO_QUALIDADE WHERE ID_PROD = $1', [id]);
};

exports.saveDentroQualidade = function (dentroQualidade) {
    return database.one('INSERT INTO DENTRO_QUALIDADE (ID_PROD, PECA) VALUES ($1, $2) RETURNING *', [dentroQualidade.id_prod, dentroQualidade.peca]);
};

exports.updateDentroQualidade = function (id, dentroQualidade) {
    return database.none('UPDATE DENTRO_QUALIDADE SET PECA = $1 WHERE ID_PROD = $2', [dentroQualidade.peca, id]);
};

exports.deleteDentroQualidade = function (id) {
    return database.none('DELETE FROM DENTRO_QUALIDADE WHERE ID_PROD = $1', [id]);
};
