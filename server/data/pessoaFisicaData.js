const database = require('../infra/database');

exports.getPessoaFisicas = function () {
    return database.query('SELECT * FROM PESSOA_FISICA');
};

exports.getPessoaFisica = function (id) {
    return database.oneOrNone('SELECT * FROM PESSOA_FISICA WHERE ID_CLIENTE = $1', [id]);
};

exports.savePessoaFisica = function (PessoaFisica) {
    return database.one('INSERT INTO PESSOA_FISICA (ID_CLIENTE, CIC, SEXO) VALUES ($1, $2, $3) RETURNING *', [PessoaFisica.id_cliente, PessoaFisica.cic, PessoaFisica.sexo]);
};

exports.updatePessoaFisica = function (id, PessoaFisica) {
    return database.none('UPDATE PESSOA_FISICA SET CIC = $1, SEXO = $2 WHERE ID_CLIENTE = $3', [PessoaFisica.cic, PessoaFisica.sexo, id]);
};

exports.deletePessoaFisica = function (id) {
    return database.none('DELETE FROM PESSOA_FISICA WHERE ID_CLIENTE = $1', [id]);
};
