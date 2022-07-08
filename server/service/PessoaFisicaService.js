const PessoaFisicaData = require('../data/pessoaFisicaData');

exports.getPessoaFisicas = function () {
    return PessoaFisicaData.getPessoaFisicas();
};

exports.getPessoaFisica = function (id) {
    return PessoaFisicaData.getPessoaFisica(id);
};

exports.savePessoaFisica = function (PessoaFisica) {
    return PessoaFisicaData.savePessoaFisica(PessoaFisica);
};

exports.updatePessoaFisica = function (id, PessoaFisica) {
    return PessoaFisicaData.updatePessoaFisica(id, PessoaFisica);
};

exports.deletePessoaFisica = function (id) {
    return PessoaFisicaData.deletePessoaFisica(id);
};
