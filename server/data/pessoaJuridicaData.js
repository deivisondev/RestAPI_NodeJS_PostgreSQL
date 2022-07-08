const database = require('../infra/database');

exports.getPessoaJuridicas = function () {
    return database.query('SELECT * FROM PESSOA_JURIDICA');
};

exports.getPessoaJuridica = function (id) {
    return database.oneOrNone('SELECT * FROM PESSOA_JURIDICA WHERE ID_CLIENTE = $1', [id]);
};

exports.savePessoaJuridica = function (PessoaJuridica) {
    return database.one('INSERT INTO PESSOA_JURIDICA (ID_CLIENTE, CGC) VALUES ($1, $2) RETURNING *', [PessoaJuridica.id_cliente, PessoaJuridica.cgc]);
};

exports.updatePessoaJuridica = function (id, PessoaJuridica) {
    return database.none('UPDATE PESSOA_JURIDICA SET CGC = $1 WHERE ID_CLIENTE = $2', [PessoaJuridica.cgc, id]);
};

exports.deletePessoaJuridica = function (id) {
    return database.none('DELETE FROM PESSOA_JURIDICA WHERE ID_CLIENTE = $1', [id]);
};
