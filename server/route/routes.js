const express = require('express');
const router = express.Router();
const fabricaService = require('../service/fabricaService');
const setorDeProducaoService = require('../service/setorDeProducaoService');
const funcionarioService = require('../service/funcionarioService');
const maquinaService = require('../service/maquinaService');
const produtoService = require('../service/produtoService');

// fabrica
router.get('/fabrica', async function (req, res) {
    const fabrica = await fabricaService.getFabricas();
    res.json(fabrica);
});

router.post('/fabrica', async function (req, res) {
    const fabrica = req.body;
    const newFabrica = await fabricaService.saveFabrica(fabrica);
    res.json(newFabrica);
});

router.put('/fabrica/:id', async function (req, res) {
    const fabrica = req.body;
    await fabricaService.updateFabrica(req.params.id, fabrica);
    res.end();
});

router.delete('/fabrica/:id', async function (req, res) {
    await fabricaService.deleteFabrica(req.params.id);
    res.end();
});

// setorDeProducao
router.get('/setor-de-producao', async function (req, res) {
    const setorDeProducao = await setorDeProducaoService.getSetorDeProducaos();
    res.json(setorDeProducao);
});

router.post('/setor-de-producao', async function (req, res) {
    const setorDeProducao = req.body;
    const newSetorDeProducao = await setorDeProducaoService.saveSetorDeProducao(setorDeProducao);
    res.json(newSetorDeProducao);
});

router.put('/setor-de-producao/:id', async function (req, res) {
    const setorDeProducao = req.body;
    await setorDeProducaoService.updateSetorDeProducao(req.params.id, setorDeProducao);
    res.end();
});

router.delete('/setor-de-producao/:id', async function (req, res) {
    await setorDeProducaoService.deleteSetorDeProducao(req.params.id);
    res.end();
});

// funcionario
router.get('/funcionario', async function (req, res) {
    const funcionario = await funcionarioService.getFuncionarios();
    res.json(funcionario);
});

router.post('/funcionario', async function (req, res) {
    const funcionario = req.body;
    const newFuncionario = await funcionarioService.saveFuncionario(funcionario);
    res.json(newFuncionario);
});

router.put('/funcionario/:id', async function (req, res) {
    const funcionario = req.body;
    await funcionarioService.updateFuncionario(req.params.id, funcionario);
    res.end();
});

router.delete('/funcionario/:id', async function (req, res) {
    await funcionarioService.deleteFuncionario(req.params.id);
    res.end();
});

// maquina
router.get('/maquina', async function (req, res) {
    const maquina = await maquinaService.getMaquinas();
    res.json(maquina);
});

router.post('/maquina', async function (req, res) {
    const maquina = req.body;
    const newMaquina = await maquinaService.saveMaquina(maquina);
    res.json(newMaquina);
});

router.put('/maquina/:id', async function (req, res) {
    const maquina = req.body;
    await maquinaService.updateMaquina(req.params.id, maquina);
    res.end();
});

router.delete('/maquina/:id', async function (req, res) {
    await maquinaService.deleteMaquina(req.params.id);
    res.end();
});

// produto
router.get('/produto', async function (req, res) {
    const produto = await produtoService.getProdutos();
    res.json(produto);
});

router.post('/produto', async function (req, res) {
    const produto = req.body;
    const newproduto = await produtoService.saveProduto(produto);
    res.json(newProduto);
});

router.put('/produto/:id', async function (req, res) {
    const produto = req.body;
    await produtoService.updateProduto(req.params.id, produto);
    res.end();
});

router.delete('/produto/:id', async function (req, res) {
    await produtoService.deleteProduto(req.params.id);
    res.end();
});

module.exports = router;
