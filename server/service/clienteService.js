const ClienteData = require('../data/clienteData');

exports.getClientes = function () {
    return ClienteData.getClientes();
};

exports.getCliente = function (id) {
    return ClienteData.getCliente(id);
};

exports.saveCliente = function (Cliente) {
    return ClienteData.saveCliente(Cliente);
};

exports.updateCliente = function (id, Cliente) {
    return ClienteData.updateCliente(id, Cliente);
};

exports.deleteCliente = function (id) {
    return ClienteData.deleteCliente(id);
};
