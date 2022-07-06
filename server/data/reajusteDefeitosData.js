const database = require('../infra/database');

exports.getReajusteDefeitoss = function () {
    return database.query('SELECT * FROM REAJUSTE_DEFEITOS');
};

exports.getReajusteDefeitos = function (id) {
    return database.oneOrNone('SELECT * FROM REAJUSTE_DEFEITOS WHERE ID_SETOR = $1', [id]);
};

exports.saveReajusteDefeitos = function (ReajusteDefeitos) {
    return database.one('INSERT INTO REAJUSTE_DEFEITOS (ID_SETOR, ID_PROD) VALUES ($1, $2) RETURNING *', [ReajusteDefeitos.id_setor, ReajusteDefeitos.id_prod]);
};

exports.updateReajusteDefeitos = function (id, ReajusteDefeitos) {
    return database.none('UPDATE REAJUSTE_DEFEITOS SET ID_PROD = $1 WHERE ID_SETOR = $2', [ReajusteDefeitos.id_prod, id]);
};

exports.deleteReajusteDefeitos = function (id) {
    return database.none('DELETE FROM REAJUSTE_DEFEITOS WHERE ID_SETOR = $1', [id]);
};
