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
    return database.none('UPDATE Maquina SET CNPJ = $1, RUA = $2, NUM = $3, CIDADE = $4, UF = $5, CEP = $6 WHERE ID_TAG = $7', [maquina.id_setor, maquina.nome_maquina, id_tag]);
};

exports.deleteMaquina = function (id_tag) {
    return database.none('DELETE FROM Maquina WHERE ID_TAG = $1', [id_tag]);
};
