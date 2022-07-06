const ReajusteDefeitosData = require('../data/reajusteDefeitosData');

exports.getReajusteDefeitoss = function () {
    return ReajusteDefeitosData.getReajusteDefeitoss();
};

exports.getReajusteDefeitos = function (id) {
    return ReajusteDefeitosData.getReajusteDefeitos(id);
};

exports.saveReajusteDefeitos = function (ReajusteDefeitos) {
    return ReajusteDefeitosData.saveReajusteDefeitos(ReajusteDefeitos);
};

exports.updateReajusteDefeitos = function (id, ReajusteDefeitos) {
    return ReajusteDefeitosData.updateReajusteDefeitos(id, ReajusteDefeitos);
};

exports.deleteReajusteDefeitos = function (id) {
    return ReajusteDefeitosData.deleteReajusteDefeitos(id);
};
