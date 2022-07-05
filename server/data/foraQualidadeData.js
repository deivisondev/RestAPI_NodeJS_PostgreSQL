const database = require('../infra/database');

exports.getForaQualidades = function () {
    return database.query('SELECT * FROM FORA_QUALIDADE');
};

exports.getForaQualidade = function (id) {
    return database.oneOrNone('SELECT * FROM FORA_QUALIDADE WHERE ID_PROD = $1', [id]);
};

exports.saveForaQualidade = function (ForaQualidade) {
    return database.one('INSERT INTO FORA_QUALIDADE (ID_PROD, DEFEITO, PECA) VALUES ($1, $2, $3) RETURNING *', [ForaQualidade.id_prod, ForaQualidade.deifeito, ForaQualidade.peca]);
};

exports.updateForaQualidade = function (id, ForaQualidade) {
    return database.none('UPDATE FORA_QUALIDADE SET DEFEITO = $1, PECA = $2 WHERE ID_PROD = $3', [ForaQualidade.deifeito, ForaQualidade.peca, id]);
};

exports.deleteForaQualidade = function (id) {
    return database.none('DELETE FROM FORA_QUALIDADE WHERE ID_PROD = $1', [id]);
};
