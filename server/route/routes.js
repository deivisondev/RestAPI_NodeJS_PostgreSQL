const express = require('express');
const router = express.Router();
const fabricaService = require('../service/fabricaService');
const setorDeProducaoService = require('../service/setorDeProducaoService');
const funcionarioService = require('../service/funcionarioService');

// Fabrica
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

// SetorDeProducao
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

// Funcionario
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

module.exports = router;
