const PessoaJuridicaData = require('../data/PessoaJuridicaData');

exports.getPessoaJuridicas = function () {
    return PessoaJuridicaData.getPessoaJuridicas();
};

exports.getPessoaJuridica = function (id) {
    return PessoaJuridicaData.getPessoaJuridica(id);
};

exports.savePessoaJuridica = function (PessoaJuridica) {
    return PessoaJuridicaData.savePessoaJuridica(PessoaJuridica);
};

exports.updatePessoaJuridica = function (id, PessoaJuridica) {
    return PessoaJuridicaData.updatePessoaJuridica(id, PessoaJuridica);
};

exports.deletePessoaJuridica = function (id) {
    return PessoaJuridicaData.deletePessoaJuridica(id);
};
