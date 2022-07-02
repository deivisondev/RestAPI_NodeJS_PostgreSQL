const database = require('../infra/database');

exports.getFabricas = function () {
    return database.query('SELECT * FROM FABRICA');
};

exports.getFabrica = function (id) {
    return database.oneOrNone('SELECT * FROM FABRICA WHERE ID = $1', [id]);
};

exports.saveFabrica = function (fabrica) {
    return database.one('INSERT INTO FABRICA (ID, CNPJ, RUA, NUM, CIDADE, UF, CEP) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [fabrica.id, fabrica.cnpj, fabrica.rua, fabrica.num, fabrica.cidade, fabrica.uf, fabrica.cep]);
};

exports.updateFabrica = function (id, fabrica) {
    return database.none('UPDATE FABRICA SET CNPJ = $1, RUA = $2, NUM = $3, CIDADE = $4, UF = $5, CEP = $6 WHERE ID = $7', [fabrica.cnpj, fabrica.rua, fabrica.num, fabrica.cidade, fabrica.uf, fabrica.cep, id]);
};

exports.deleteFabrica = function (id) {
    return database.none('DELETE FROM FABRICA WHERE ID = $1', [id]);
};
