const DentroQualidadeData = require('../data/dentroQualidadeData');

exports.getDentroQualidades = function () {
    return DentroQualidadeData.getDentroQualidades();
};

exports.getDentroQualidade = function (id) {
    return DentroQualidadeData.getDentroQualidade(id);
};

exports.saveDentroQualidade = function (DentroQualidade) {
    return DentroQualidadeData.saveDentroQualidade(DentroQualidade);
};

exports.updateDentroQualidade = function (id, DentroQualidade) {
    return DentroQualidadeData.updateDentroQualidade(id, DentroQualidade);
};

exports.deleteDentroQualidade = function (id) {
    return DentroQualidadeData.deleteDentroQualidade(id);
};
