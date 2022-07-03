const maquinaData = require('../data/maquinaData');

exports.getMaquinas = function () {
    return maquinaData.getMaquinas();
};

exports.getMaquina = function (id_tag) {
    return maquinaData.getMaquina(id_tag);
};

exports.saveMaquina = function (maquina) {
    return maquinaData.saveMaquina(maquina);
};

exports.updateMaquina = function (id_tag, maquina) {
    return maquinaData.updateMaquina(id_tag, maquina);
};

exports.deleteMaquina = function (id_tag) {
    return maquinaData.deleteMaquina(id_tag);
};
