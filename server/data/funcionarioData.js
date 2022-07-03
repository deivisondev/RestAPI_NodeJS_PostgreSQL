const database = require('../infra/database');

exports.getFuncionarios = function () {
    return database.query('SELECT * FROM FUNCIONARIO');
};

exports.getFuncionario = function (id_mat) {
    return database.oneOrNone('SELECT * FROM FUNCIONARIO WHERE ID_MAT = $1', [id_mat]);
};

exports.saveFuncionario = function (funcionario) {
    return database.one('INSERT INTO FUNCIONARIO (ID_MAT, ID_SETOR, NOME, IDADE, TREINAMENTO, CARGA_H, CARGA_H_EXIGIDA) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [funcionario.id_mat, funcionario.id_setor, funcionario.nome, funcionario.idade, funcionario.treinamento, funcionario.carga_h, funcionario.carga_h_exigida]);
};

exports.updateFuncionario = function (id_mat, funcionario) {
    return database.none('UPDATE FUNCIONARIO SET NOME = $1, IDADE = $2, TREINAMENTO = $3, CARGA_H = $4, CARGA_H_EXIGIDA = $5 WHERE ID_MAT = $6', [funcionario.nome, funcionario.idade, funcionario.treinamento, funcionario.carga_h, funcionario.carga_h_exigida, id_mat]);
};

exports.deleteFuncionario = function (id_mat) {
    return database.none('DELETE FROM FUNCIONARIO WHERE ID_MAT = $1', [id_mat]);
};
