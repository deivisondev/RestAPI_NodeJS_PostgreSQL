const funcionarioData = require('../data/funcionarioData');

exports.getFuncionarios = function () {
    return funcionarioData.getFuncionarios();
};

exports.getFuncionario = function (id_mat) {
    return funcionarioData.getFuncionario(id_mat);
};

exports.saveFuncionario = function (funcionario) {
    return funcionarioData.saveFuncionario(funcionario);
};

exports.updateFuncionario = function (id_mat, funcionario) {
    return funcionarioData.updateFuncionario(id_mat, funcionario);
};

exports.deleteFuncionario = function (id_mat) {
    return funcionarioData.deleteFuncionario(id_mat);
};
