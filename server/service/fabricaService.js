const fabricaData = require('../data/fabricaData');

exports.getFabricas = function () {
    return fabricaData.getFabricas();
};

exports.getFabrica = function (id) {
    return fabricaData.getFabrica(id);
};

exports.saveFabrica = function (fabrica) {
    return fabricaData.saveFabrica(fabrica);
};

exports.updateFabrica = function (id, fabrica) {
    return fabricaData.updateFabrica(id, fabrica);
};

exports.deleteFabrica = function (id) {
    return fabricaData.deleteFabrica(id);
};
