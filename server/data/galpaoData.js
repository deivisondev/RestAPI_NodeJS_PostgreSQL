const database = require('../infra/database');

exports.getGalpaos = function () {
    return database.query('SELECT * FROM GALPAO');
};

exports.getGalpao = function (id) {
    return database.oneOrNone('SELECT * FROM GALPAO WHERE ID_LOCAL = $1', [id]);
};

exports.saveGalpao = function (Galpao) {
    return database.one('INSERT INTO GALPAO (ID_LOCAL, ID_PROD, NUMERO, ENDERECO) VALUES ($1, $2, $3, $4) RETURNING *', [Galpao.id_local, Galpao.id_prod, Galpao.numero, Galpao.endereco]);
};

exports.updateGalpao = function (id, Galpao) {
    return database.none('UPDATE GALPAO SET ID_LOCAL = $1, ID_PROD = $2, NUMERO = $3, ENDERECO WHERE ID_LOCAL = $4', [Galpao.numero, Galpao.endereco, id]);
};

exports.deleteGalpao = function (id) {
    return database.none('DELETE FROM GALPAO WHERE ID_LOCAL = $1', [id]);
};
