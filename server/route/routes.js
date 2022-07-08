const express = require('express');
const router = express.Router();
const fabricaService = require('../service/fabricaService');
const setorDeProducaoService = require('../service/setorDeProducaoService');
const funcionarioService = require('../service/funcionarioService');
const maquinaService = require('../service/maquinaService');
const produtoService = require('../service/produtoService');
const dentroQualidadeService = require('../service/dentroQualidadeService');
const foraQualidadeService = require('../service/foraQualidadeService');
const reajusteDefeitosService = require('../service/reajusteDefeitosService');
const galpaoService = require('../service/galpaoService'); 
const clienteService = require('../service/clienteService');
const galpClienteService = require('../service/galpClienteService');

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
    const newProduto = await produtoService.saveProduto(produto);
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

// dentroQualidade
router.get('/dentroQualidade', async function (req, res) {
    const dentroQualidade = await dentroQualidadeService.getDentroQualidades();
    res.json(dentroQualidade);
});

router.post('/dentroQualidade', async function (req, res) {
    const dentroQualidade = req.body;
    const newDentroQualidade = await dentroQualidadeService.saveDentroQualidade(dentroQualidade);
    res.json(newDentroQualidade);
});

router.put('/dentroQualidade/:id', async function (req, res) {
    const dentroQualidade = req.body;
    await dentroQualidadeService.updateDentroQualidade(req.params.id, dentroQualidade);
    res.end();
});

router.delete('/dentroQualidade/:id', async function (req, res) {
    await dentroQualidadeService.deleteDentroQualidade(req.params.id);
    res.end();
});

// foraQualidade
router.get('/foraQualidade', async function (req, res) {
    const foraQualidade = await foraQualidadeService.getForaQualidades();
    res.json(foraQualidade);
});

router.post('/foraQualidade', async function (req, res) {
    const foraQualidade = req.body;
    const newForaQualidade = await foraQualidadeService.saveForaQualidade(foraQualidade);
    res.json(newForaQualidade);
});

router.put('/foraQualidade/:id', async function (req, res) {
    const foraQualidade = req.body;
    await foraQualidadeService.updateForaQualidade(req.params.id, foraQualidade);
    res.end();
});

router.delete('/foraQualidade/:id', async function (req, res) {
    await foraQualidadeService.deleteForaQualidade(req.params.id);
    res.end();
});

// reajusteDefeitos
router.get('/reajusteDefeitos', async function (req, res) {
    const reajusteDefeitos = await reajusteDefeitosService.getReajusteDefeitoss();
    res.json(reajusteDefeitos);
});

router.post('/reajusteDefeitos', async function (req, res) {
    const reajusteDefeitos = req.body;
    const newReajusteDefeitos = await reajusteDefeitosService.saveReajusteDefeitos(reajusteDefeitos);
    res.json(newReajusteDefeitos);
});

router.put('/reajusteDefeitos/:id', async function (req, res) {
    const reajusteDefeitos = req.body;
    await reajusteDefeitosService.updateReajusteDefeitos(req.params.id, reajusteDefeitos);
    res.end();
});

router.delete('/reajusteDefeitos/:id', async function (req, res) {
    await reajusteDefeitosService.deleteReajusteDefeitos(req.params.id);
    res.end();
});

// galpao
router.get('/galpao', async function (req, res) {
    const galpao = await galpaoService.getGalpaos();
    res.json(galpao);
});

router.post('/galpao', async function (req, res) {
    const galpao = req.body;
    const newGalpao = await galpaoService.saveGalpao(galpao);
    res.json(newGalpao);
});

router.put('/galpao/:id', async function (req, res) {
    const galpao = req.body;
    await galpaoService.updateGalpao(req.params.id, galpao);
    res.end();
});

router.delete('/galpao/:id', async function (req, res) {
    await galpaoService.deleteGalpao(req.params.id);
    res.end();
});

// cliente
router.get('/cliente', async function (req, res) {
    const cliente = await clienteService.getClientes();
    res.json(cliente);
});

router.post('/cliente', async function (req, res) {
    const cliente = req.body;
    const newCliente = await clienteService.saveCliente(cliente);
    res.json(newCliente);
});

router.put('/cliente/:id', async function (req, res) {
    const cliente = req.body;
    await clienteService.updateCliente(req.params.id, cliente);
    res.end();
});

router.delete('/cliente/:id', async function (req, res) {
    await clienteService.deleteCliente(req.params.id);
    res.end();
});

// galpCliente
router.get('/galpCliente', async function (req, res) {
    const galpCliente = await galpClienteService.getGalpClientes();
    res.json(galpCliente);
});

router.post('/galpCliente', async function (req, res) {
    const galpCliente = req.body;
    const newGalpCliente = await galpClienteService.saveGalpCliente(galpCliente);
    res.json(newGalpCliente);
});

router.put('/galpCliente/:id', async function (req, res) {
    const galpCliente = req.body;
    await galpClienteService.updateGalpCliente(req.params.id, galpCliente);
    res.end();
});

router.delete('/galpCliente/:id', async function (req, res) {
    await galpClienteService.deleteGalpCliente(req.params.id);
    res.end();
});

module.exports = router;
