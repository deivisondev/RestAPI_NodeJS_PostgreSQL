const ProdutoData = require('../data/produtoData');

exports.getProdutos = function () {
    return ProdutoData.getProdutos();
};

exports.getProduto = function (id) {
    return ProdutoData.getProduto(id);
};

exports.saveProduto = function (Produto) {
    return ProdutoData.saveProduto(Produto);
};

exports.updateProduto = function (id, Produto) {
    return ProdutoData.updateProduto(id, Produto);
};

exports.deleteProduto = function (id) {
    return ProdutoData.deleteProduto(id);
};
