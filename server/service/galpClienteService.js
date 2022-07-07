const GalpClienteData = require('../data/galpClienteData');

exports.getGalpClientes = function () {
    return GalpClienteData.getGalpClientes();
};

exports.getGalpCliente = function (id) {
    return GalpClienteData.getGalpCliente(id);
};

exports.saveGalpCliente = function (GalpCliente) {
    return GalpClienteData.saveGalpCliente(GalpCliente);
};

exports.updateGalpCliente = function (id, GalpCliente) {
    return GalpClienteData.updateGalpCliente(id, GalpCliente);
};

exports.deleteGalpCliente = function (id) {
    return GalpClienteData.deleteGalpCliente(id);
};
