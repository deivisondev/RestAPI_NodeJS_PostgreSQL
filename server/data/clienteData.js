const database = require('../infra/database');

exports.getClientes = function () {
    return database.query('SELECT * FROM CLIENTE');
};

exports.getCliente = function (id) {
    return database.oneOrNone('SELECT * FROM CLIENTE WHERE ID_CLIENTE = $1', [id]);
};

exports.saveCliente = function (Cliente) {
    return database.one('INSERT INTO CLIENTE (ID_CLIENTE, NOME, ENDERECO, NOME_PROD) VALUES ($1, $2, $3, $4) RETURNING *', [Cliente.id_cliente, Cliente.nome, Cliente.endereco, Cliente.nome_prod]);
};

exports.updateCliente = function (id, Cliente) {
    return database.none('UPDATE CLIENTE SET NOME = $1, ENDERECO = $2, NOME_PROD = $3 WHERE ID_CLIENTE = $4', [Cliente.nome, Cliente.endereco, Cliente.nome_prod, id]);
};

exports.deleteCliente = function (id) {
    return database.none('DELETE FROM CLIENTE WHERE ID_CLIENTE = $1', [id]);
};
