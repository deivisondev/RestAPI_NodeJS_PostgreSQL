const fabricaData = require('../data/fabricaData');

exports.getFabrica = function () {
    return fabricaData.getFabrica();
};

exports.saveFabrica = function (fabrica) {
    return fabricaData.saveFabrica(fabrica);
};

exports.deleteFabrica = function (id) {
    return fabricaData.deleteFabrica(id);
};
