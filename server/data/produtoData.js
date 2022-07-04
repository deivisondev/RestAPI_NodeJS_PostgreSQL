const database = require('../infra/database');

exports.getProdutos = function () {
    return database.query('SELECT * FROM Produto');
};

exports.getProduto = function (id) {
    return database.oneOrNone('SELECT * FROM Produto WHERE ID_PROD = $1', [id]);
};

exports.saveProduto = function (Produto) {
    return database.one('INSERT INTO Produto (ID_PROD, ID_TAG, PRECO, COR) VALUES ($1, $2, $3, $4) RETURNING *', [Produto.id_prod, Produto.id_tag, Produto.preco, Produto.cor]);
};

exports.updateProduto = function (id, Produto) {
    return database.none('UPDATE Produto SET PRECO = $1, COR = $2 WHERE ID_PROD = $3', [Produto.preco, Produto.cor, id]);
};

exports.deleteProduto = function (id) {
    return database.none('DELETE FROM Produto WHERE ID_PROD = $1', [id]);
};
