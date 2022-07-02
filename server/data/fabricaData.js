const database = require('../infra/database');

exports.getFabrica = function () {
    return database.query('SELECT * FROM FABRICA');
};

exports.saveFabrica = function (fabrica) {
    return database.one('INSERT INTO FABRICA (ID, CNPJ, RUA, NUM, CIDADE, UF, CEP) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [fabrica.id, fabrica.cnpj, fabrica.rua, fabrica.num, fabrica.cidade, fabrica.uf, fabrica.cep]);
};

exports.deleteFabrica = function (id) {
    return database.none('DELETE FROM FABRICA WHERE ID = $1', [id]);
};
