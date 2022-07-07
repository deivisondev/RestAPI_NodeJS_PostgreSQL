const database = require('../infra/database');

exports.getGalpClientes = function () {
    return database.query('SELECT * FROM GALP_CLIENTE');
};

exports.getGalpCliente = function (id) {
    return database.oneOrNone('SELECT * FROM GALP_CLIENTE WHERE ID_LOCAL = $1', [id]);
};

exports.saveGalpCliente = function (GalpCliente) {
    return database.one('INSERT INTO GALP_CLIENTE (ID_LOCAL, ID_CLIENTE) VALUES ($1, $2) RETURNING *', [GalpCliente.id_local, GalpCliente.id_cliente]);
};

exports.updateGalpCliente = function (id, GalpCliente) {
    return database.none('UPDATE GALP_CLIENTE SET ID_CLIENTE = $1 WHERE ID_LOCAL = $2', [GalpCliente.id_cliente, id]);
};

exports.deleteGalpCliente = function (id) {
    return database.none('DELETE FROM GALP_CLIENTE WHERE ID_LOCAL = $1', [id]);
};
