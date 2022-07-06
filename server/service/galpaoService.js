const GalpaoData = require('../data/GalpaoData');

exports.getGalpaos = function () {
    return GalpaoData.getGalpaos();
};

exports.getGalpao = function (id) {
    return GalpaoData.getGalpao(id);
};

exports.saveGalpao = function (Galpao) {
    return GalpaoData.saveGalpao(Galpao);
};

exports.updateGalpao = function (id, Galpao) {
    return GalpaoData.updateGalpao(id, Galpao);
};

exports.deleteGalpao = function (id) {
    return GalpaoData.deleteGalpao(id);
};
