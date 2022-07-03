const setorDeProducaoData = require('../data/setorDeProducaoData');

exports.getSetorDeProducaos = function () {
    return setorDeProducaoData.getSetorDeProducaos();
};

exports.getSetorDeProducao = function (id_setor) {
    return setorDeProducaoData.getSetorDeProducao(id_setor);
};

exports.saveSetorDeProducao = function (setorDeProducao) {
    return setorDeProducaoData.saveSetorDeProducao(setorDeProducao);
};

exports.updateSetorDeProducao = function (id_setor, setorDeProducao) {
    return setorDeProducaoData.updateSetorDeProducao(id_setor, setorDeProducao);
};

exports.deleteSetorDeProducao = function (id_setor) {
    return setorDeProducaoData.deleteSetorDeProducao(id_setor);
};
