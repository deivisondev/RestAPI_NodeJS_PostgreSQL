const ForaQualidadeData = require('../data/foraQualidadeData');

exports.getForaQualidades = function () {
    return ForaQualidadeData.getForaQualidades();
};

exports.getForaQualidade = function (id) {
    return ForaQualidadeData.getForaQualidade(id);
};

exports.saveForaQualidade = function (ForaQualidade) {
    return ForaQualidadeData.saveForaQualidade(ForaQualidade);
};

exports.updateForaQualidade = function (id, ForaQualidade) {
    return ForaQualidadeData.updateForaQualidade(id, ForaQualidade);
};

exports.deleteForaQualidade = function (id) {
    return ForaQualidadeData.deleteForaQualidade(id);
};
