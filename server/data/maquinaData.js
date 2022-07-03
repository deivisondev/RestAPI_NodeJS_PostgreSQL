const database = require('../infra/database');

exports.getMaquinas = function () {
    return database.query('SELECT * FROM MAQUINA');
};

exports.getMaquina = function (id_tag) {
    return database.oneOrNone('SELECT * FROM MAQUINA WHERE ID_TAG = $1', [id_tag]);
};

exports.saveMaquina = function (maquina) {
    return database.one('INSERT INTO MAQUINA (ID_TAG, ID_SETOR, NOME_MAQUINA) VALUES ($1, $2, $3) RETURNING *', [maquina.id_tag, maquina.id_setor, maquina.nome_maquina]);
};

exports.updateMaquina = function (id_tag, maquina) {
    return database.none('UPDATE MAQUINA SET NOME_MAQUINA = $1 WHERE ID_TAG = $2', [maquina.nome_maquina, id_tag]);
};

exports.deleteMaquina = function (id_tag) {
    return database.none('DELETE FROM MAQUINA WHERE ID_TAG = $1', [id_tag]);
};
