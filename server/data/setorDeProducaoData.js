const database = require('../infra/database');

exports.getSetorDeProducaos = function () {
    return database.query('SELECT * FROM SETOR_DE_PRODUCAO');
};

exports.getSetorDeProducao = function (id_setor) {
    return database.oneOrNone('SELECT * FROM SETOR_DE_PRODUCAO WHERE ID_SETOR = $1', [id_setor]);
};

exports.saveSetorDeProducao = function (setorDeProducao) {
    return database.one('INSERT INTO SETOR_DE_PRODUCAO (ID_SETOR, LOCALIDADE, RELATORIO, DATA_HORA, QTD_MAQUINAS, QTD_FUNCIONARIOS) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [setorDeProducao.id_setor, setorDeProducao.localidade, setorDeProducao.relatorio, setorDeProducao.data_hora, setorDeProducao.qtd_maquinas, setorDeProducao.qtd_funcionarios]);
};

exports.updateSetorDeProducao = function (id_setor, setorDeProducao) {
    return database.none('UPDATE SETOR_DE_PRODUCAO SET LOCALIDADE = $1, RELATORIO = $2, DATA_HORA = $3, QTD_MAQUINAS = $4, QTD_FUNCIONARIOS = $5 WHERE ID_SETOR = $6', [setorDeProducao.localidade, setorDeProducao.relatorio, setorDeProducao.data_hora, setorDeProducao.qtd_maquinas, setorDeProducao.qtd_funcionarios, id_setor]);
};

exports.deleteSetorDeProducao = function (id_setor) {
    return database.none('DELETE FROM SETOR_DE_PRODUCAO WHERE ID_SETOR = $1', [id_setor]);
};
