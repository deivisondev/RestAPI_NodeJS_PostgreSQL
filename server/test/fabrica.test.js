const axios = require('axios');
const fabricaService = require('../service/fabricaService');
const setorDeProducaoService = require('../service/setorDeProducaoService');
const funcionarioService = require('../service/funcionarioService');
const maquinaService = require('../service/maquinaService');
const produtoService = require('../service/produtoService'); 
const dentroQualidadeService = require('../service/dentroQualidadeService');
const foraQualidadeService = require('../service/foraQualidadeService');
const reajusteDefeitosService = require('../service/reajusteDefeitosService');
const galpaoService = require('../service/galpaoService');

const idTest1 = 106;

const request = function (url, method, data) {
    return axios({ url, method, data });
}

// fabrica
test('Should get fabricas', async function () {
    const fabrica1 = await fabricaService.saveFabrica({
        id: idTest1,
        cnpj: 30656908000119,
        rua: 'R. Teste 1',
        num: 40,
        cidade: 'Cidade 1',
        uf: 'AA',
        cep: '62900000'
    });

    const response = await request('http://localhost:3000/fabrica', 'get');
    const fabrica = response.data;

    expect(fabrica).toHaveLength(25);

    await fabricaService.deleteFabrica(fabrica1.id);
});

test('Should save fabrica', async function () {
    const data = {
        id: idTest1,
        cnpj: 30656908000119,
        rua: 'R. Teste 1',
        num: 40,
        cidade: 'Cidade 1',
        uf: 'AA',
        cep: '62900000'
    };

    const response = await request('http://localhost:3000/fabrica', 'post', data);
    const fabrica = response.data;

    expect(fabrica.rua).toBe(data.rua);

    await fabricaService.deleteFabrica(data.id);
});

test('Should update a fabrica', async function () {
    const fabrica = await fabricaService.saveFabrica({
        id: idTest1,
        cnpj: 30656908000119,
        rua: 'R. Teste 1',
        num: 66,
        cidade: 'Cidade 1',
        uf: 'AA',
        cep: '62900000'
    });

    fabrica.rua = 'R. Teste 1 Al';

    await request(`http://localhost:3000/fabrica/${fabrica.id}`, 'put', fabrica);
    const updatedFabrica = await fabricaService.getFabrica(fabrica.id);

    expect(updatedFabrica.rua).toBe(fabrica.rua);

    await fabricaService.deleteFabrica(fabrica.id);
});

test('Should delete a fabrica', async function () {
    const fabrica = await fabricaService.saveFabrica({
        id: idTest1,
        cnpj: 30656908000119,
        rua: 'R. Teste 1',
        num: 40,
        cidade: 'Cidade 1',
        uf: 'AA',
        cep: '62900000'
    });

    await request(`http://localhost:3000/fabrica/${fabrica.id}`, 'delete');
    const fabricas = await fabricaService.getFabricas();

    expect(fabricas).toHaveLength(24);
});

//setorDeProducao
test('Should get setorDeProducaos', async function () {
    const setorDeProducao1 = await setorDeProducaoService.saveSetorDeProducao({
        id_setor: idTest1,
        localidade: '12345678',
        relatorio: 'AAAAA',
        data_hora: "2022-01-08 00:00:00",
        qtd_maquinas: 1,
        qtd_funcionarios: 1
    });

    const response = await request('http://localhost:3000/setor-de-producao', 'get');
    const setorDeProducao = response.data;

    expect(setorDeProducao).toHaveLength(13);

    await setorDeProducaoService.deleteSetorDeProducao(setorDeProducao1.id_setor);
});

test('Should save setorDeProducao', async function () {
    const data = {
        id_setor: idTest1,
        localidade: 'AAAAA',
        relatorio: 'AAAAA',
        data_hora: "2022-04-17 00:00:00",
        qtd_maquinas: 1,
        qtd_funcionarios: 1
    };

    const response = await request('http://localhost:3000/setor-de-producao', 'post', data);
    const setorDeProducao = response.data;

    expect(setorDeProducao.localidade).toBe(data.localidade);

    await setorDeProducaoService.deleteSetorDeProducao(data.id_setor);
});

test('Should update a setorDeProducao', async function () {
    const setorDeProducao = await setorDeProducaoService.saveSetorDeProducao({
        id_setor: idTest1,
        localidade: 'AAAAA',
        relatorio: 'AAAAA',
        data_hora: "2022-04-17 00:00:00",
        qtd_maquinas: 1,
        qtd_funcionarios: 1
    });

    setorDeProducao.localidade = 'BBBBB';

    await request(`http://localhost:3000/setor-de-producao/${setorDeProducao.id_setor}`, 'put', setorDeProducao);
    const updatedSetorDeProducao = await setorDeProducaoService.getSetorDeProducao(setorDeProducao.id_setor);

    expect(updatedSetorDeProducao.localidade).toBe(setorDeProducao.localidade);

    await setorDeProducaoService.deleteSetorDeProducao(setorDeProducao.id_setor);
});

test('Should delete a setorDeProducao', async function () {
    const setorDeProducao = await setorDeProducaoService.saveSetorDeProducao({
        id_setor: idTest1,
        localidade: 'AAAAA',
        relatorio: 'AAAAA',
        data_hora: "2022-04-17 00:00:00",
        qtd_maquinas: 1,
        qtd_funcionarios: 1
    });

    await request(`http://localhost:3000/setor-de-producao/${setorDeProducao.id_setor}`, 'delete');
    const setorDeProducaos = await setorDeProducaoService.getSetorDeProducaos();
    
    expect(setorDeProducaos).toHaveLength(18);
});

// funcionario
test('Should get funcionarios', async function () {
    const funcionario1 = await funcionarioService.saveFuncionario({
        id_mat: idTest1,
        id_setor: 1,
        nome: 'AAAAA',
        idade: 20,
        treinamento: 'AAAAA',
        carga_h: 40,
        carga_h_exigida: 40
    });

    const response = await request('http://localhost:3000/funcionario', 'get');
    const funcionario = response.data;

    expect(funcionario).toHaveLength(20);

    await funcionarioService.deleteFuncionario(funcionario1.id_mat);
});

test('Should save funcionario', async function () {
    const data = {
        id_mat: idTest1,
        id_setor: 1,
        nome: 'AAAAA',
        idade: 20,
        treinamento: 'AAAAA',
        carga_h: 40,
        carga_h_exigida: 40
    };

    const response = await request('http://localhost:3000/funcionario', 'post', data);
    const funcionario = response.data;

    expect(funcionario.nome).toBe(data.nome);

    await funcionarioService.deleteFuncionario(data.id_mat);
});

test('Should update a funcionario', async function () {
    const funcionario = await funcionarioService.saveFuncionario({
        id_mat: idTest1,
        id_setor: 1,
        nome: 'AAAAA',
        idade: 20,
        treinamento: 'AAAAA',
        carga_h: 40,
        carga_h_exigida: 40
    });

    funcionario.nome = 'BBBBB';

    await request(`http://localhost:3000/funcionario/${funcionario.id_mat}`, 'put', funcionario);
    const updatedFuncionario = await funcionarioService.getFuncionario(funcionario.id_mat);

    expect(updatedFuncionario.nome).toBe(funcionario.nome);

    await funcionarioService.deleteFuncionario(funcionario.id_mat);
});

test('Should delete a funcionario', async function () {
    const funcionario = await funcionarioService.saveFuncionario({
        id_mat: idTest1,
        id_setor: 1,
        nome: 'AAAAA',
        idade: 20,
        treinamento: 'AAAAA',
        carga_h: 40,
        carga_h_exigida: 40
    });

    await request(`http://localhost:3000/funcionario/${funcionario.id_mat}`, 'delete');
    const funcionarios = await funcionarioService.getFuncionarios();

    expect(funcionarios).toHaveLength(19);
});

// maquina
test('Should get maquinas', async function () {
    const maquina1 = await maquinaService.saveMaquina({
        id_tag: idTest1,
        id_setor: 1,
        nome_maquina: 'AAAA'
    });

    const response = await request('http://localhost:3000/maquina', 'get');
    const maquina = response.data;

    expect(maquina).toHaveLength(11);

    await maquinaService.deleteMaquina(maquina1.id_tag);
});

test('Should save maquina', async function () {
    const data = {
        id_tag: idTest1,
        id_setor: 4,
        nome_maquina: 'AAAA'
    };

    const response = await request('http://localhost:3000/maquina', 'post', data);
    const maquina = response.data;

    expect(maquina.nome_maquina).toBe(data.nome_maquina);

    await maquinaService.deleteMaquina(data.id_tag);
});

test('Should update a maquina', async function () {
    const maquina = await maquinaService.saveMaquina({
        id_tag: idTest1,
        id_setor: 1,
        nome_maquina: 'AAAA'
    });

    maquina.nome_maquina = 'BBBB';

    await request(`http://localhost:3000/maquina/${maquina.id_tag}`, 'put', maquina);
    const updatedMaquina = await maquinaService.getMaquina(maquina.id_tag);

    expect(updatedMaquina.nome_maquina).toBe(maquina.nome_maquina);

    await maquinaService.deleteMaquina(maquina.id_tag);
});

test('Should delete a maquina', async function () {
    const maquina = await maquinaService.saveMaquina({
        id_tag: idTest1,
        id_setor: 1,
        nome_maquina: 'AAAA'
    });

    await request(`http://localhost:3000/maquina/${maquina.id_tag}`, 'delete');
    const maquinas = await maquinaService.getMaquinas();

    expect(maquinas).toHaveLength(11);
});

// produto
test('Should get produtos', async function () {
    const produto1 = await produtoService.saveProduto({
        id_prod: idTest1,
        id_tag: 1,
        preco: 11.11,
        cor: 'AAAAA'
    });

    const response = await request('http://localhost:3000/produto', 'get');
    const produto = response.data;

    expect(produto).toHaveLength(24);

    await produtoService.deleteProduto(produto1.id_prod);
});

test('Should save produto', async function () {
    const data = {
        id_prod: idTest1,
        id_tag: 1,
        preco: 11.11,
        cor: 'AAAAA'
    };

    const response = await request('http://localhost:3000/produto', 'post', data);
    const produto = response.data;

    expect(produto.id_prod).toBe(data.id_prod);

    await produtoService.deleteProduto(data.id_prod);
});

test('Should update a produto', async function () {
    const produto = await produtoService.saveProduto({
        id_prod: idTest1,
        id_tag: 1,
        preco: 11.11,
        cor: 'AAAAA'
    });

    produto.cor = 'BBBB';

    await request(`http://localhost:3000/produto/${produto.id_prod}`, 'put', produto);
    const updatedProduto = await produtoService.getProduto(produto.id_prod);

    expect(updatedProduto.cor).toBe(produto.cor);

    await produtoService.deleteProduto(produto.id_prod);
});

test('Should delete a produto', async function () {
    const produto = await produtoService.saveProduto({
        id_prod: idTest1,
        id_tag: 1,
        preco: 11.11,
        cor: 'AAAAA'
    });

    await request(`http://localhost:3000/produto/${produto.id_prod}`, 'delete');
    const produtos = await produtoService.getProdutos();

    expect(produtos).toHaveLength(24);
});

// dentroQualidade
test('Should get dentroQualidades', async function () {
    const dentroQualidade1 = await dentroQualidadeService.saveDentroQualidade({
        id_prod: idTest1,
        peca: 'AAAA'
    });

    const response = await request('http://localhost:3000/dentroQualidade', 'get');
    const dentroQualidade = response.data;

    expect(dentroQualidade).toHaveLength(11);

    await dentroQualidadeService.deleteDentroQualidade(dentroQualidade1.id_prod);
});

test('Should save dentroQualidade', async function () {
    const data = {
        id_prod: idTest1,
        peca: 'AAAA'
    };

    const response = await request('http://localhost:3000/dentroQualidade', 'post', data);
    const dentroQualidade = response.data;

    expect(dentroQualidade.id_prod).toBe(data.id_prod);

    await dentroQualidadeService.deleteDentroQualidade(data.id_prod);
});

test('Should update a dentroQualidade', async function () {
    const dentroQualidade = await dentroQualidadeService.saveDentroQualidade({
        id_prod: idTest1,
        peca: 'AAAA'
    });

    dentroQualidade.peca = 'BBBB';

    await request(`http://localhost:3000/dentroQualidade/${dentroQualidade.id_prod}`, 'put', dentroQualidade);
    const updatedDentroQualidade = await dentroQualidadeService.getDentroQualidade(dentroQualidade.id_prod);

    expect(updatedDentroQualidade.peca).toBe(dentroQualidade.peca);

    await dentroQualidadeService.deleteDentroQualidade(dentroQualidade.id_prod);
});

test('Should delete a dentroQualidade', async function () {
    const dentroQualidade = await dentroQualidadeService.saveDentroQualidade({
        id_prod: idTest1,
        peca: 'AAAA'
    });

    await request(`http://localhost:3000/dentroQualidade/${dentroQualidade.id_prod}`, 'delete');
    const dentroQualidades = await dentroQualidadeService.getDentroQualidades();

    expect(dentroQualidades).toHaveLength(10);
});

// foraQualidade
test('Should get foraQualidades', async function () {
    const foraQualidade1 = await foraQualidadeService.saveForaQualidade({
        id_prod: idTest1,
        defeito: 'AAAA',
        peca: 'AAAA'
    });

    const response = await request('http://localhost:3000/foraQualidade', 'get');
    const foraQualidade = response.data;

    expect(foraQualidade).toHaveLength(11);

    await foraQualidadeService.deleteForaQualidade(foraQualidade1.id_prod);
});

test('Should save foraQualidade', async function () {
    const data = {
        id_prod: idTest1,
        defeito: 'AAAA',
        peca: 'AAAA'
    };

    const response = await request('http://localhost:3000/foraQualidade', 'post', data);
    const foraQualidade = response.data;

    expect(foraQualidade.id_prod).toBe(data.id_prod);

    await foraQualidadeService.deleteForaQualidade(data.id_prod);
});

test('Should update a foraQualidade', async function () {
    const foraQualidade = await foraQualidadeService.saveForaQualidade({
        id_prod: idTest1,
        defeito: 'AAAA',
        peca: 'AAAA'
    });

    foraQualidade.peca = 'BBBB';

    await request(`http://localhost:3000/foraQualidade/${foraQualidade.id_prod}`, 'put', foraQualidade);
    const updatedForaQualidade = await foraQualidadeService.getForaQualidade(foraQualidade.id_prod);

    expect(updatedForaQualidade.peca).toBe(foraQualidade.peca);

    await foraQualidadeService.deleteForaQualidade(foraQualidade.id_prod);
});

test('Should delete a foraQualidade', async function () {
    const foraQualidade = await foraQualidadeService.saveForaQualidade({
        id_prod: idTest1,
        defeito: 'AAAA',
        peca: 'AAAA'
    });

    await request(`http://localhost:3000/foraQualidade/${foraQualidade.id_prod}`, 'delete');
    const foraQualidades = await foraQualidadeService.getForaQualidades();

    expect(foraQualidades).toHaveLength(10);
});

// reajusteDefeitos
test('Should get reajusteDefeitoss', async function () {
    const reajusteDefeitos1 = await reajusteDefeitosService.saveReajusteDefeitos({
        id_setor: 1,
        id_prod: idTest1
    });

    const response = await request('http://localhost:3000/reajusteDefeitos', 'get');
    const reajusteDefeitos = response.data;

    expect(reajusteDefeitos).toHaveLength(10);

    await reajusteDefeitosService.deleteReajusteDefeitos(reajusteDefeitos1.id_setor);
});

test('Should save reajusteDefeitos', async function () {
    const data = {
        id_setor: 1,
        id_prod: idTest1
    };

    const response = await request('http://localhost:3000/reajusteDefeitos', 'post', data);
    const reajusteDefeitos = response.data;

    expect(reajusteDefeitos.id_setor).toBe(data.id_setor);

    await reajusteDefeitosService.deleteReajusteDefeitos(data.id_setor);
});

test('Should update a reajusteDefeitos', async function () {
    const reajusteDefeitos = await reajusteDefeitosService.saveReajusteDefeitos({
        id_setor: 1,
        id_prod: idTest1
    });

    reajusteDefeitos.id_prod = 105;

    await request(`http://localhost:3000/reajusteDefeitos/${reajusteDefeitos.id_setor}`, 'put', reajusteDefeitos);
    const updatedReajusteDefeitos = await reajusteDefeitosService.getReajusteDefeitos(reajusteDefeitos.id_setor);

    expect(updatedReajusteDefeitos.id_prod).toBe(reajusteDefeitos.id_prod);

    await reajusteDefeitosService.deleteReajusteDefeitos(reajusteDefeitos.id_setor);
});

test('Should delete a reajusteDefeitos', async function () {
    const reajusteDefeitos = await reajusteDefeitosService.saveReajusteDefeitos({
        id_setor: 1,
        id_prod: idTest1
    });

    await request(`http://localhost:3000/reajusteDefeitos/${reajusteDefeitos.id_setor}`, 'delete');
    const reajusteDefeitoss = await reajusteDefeitosService.getReajusteDefeitoss();

    expect(reajusteDefeitoss).toHaveLength(9);
});

//galpao
test('Should get galpaos', async function () {
    const galpao1 = await galpaoService.saveGalpao({
        id_local: idTest1,
        id_prod: 1001,
        numero: 1,
        endereco: 'AAAA'
    });

    const response = await request('http://localhost:3000/galpao', 'get');
    const galpao = response.data;

    expect(galpao).toHaveLength(11);

    await galpaoService.deleteGalpao(galpao1.id_local);
});

test('Should save galpao', async function () {
    const data = {
        id_local: idTest1,
        id_prod: 1001,
        numero: 1,
        endereco: 'AAAA'
    };

    const response = await request('http://localhost:3000/galpao', 'post', data);
    const galpao = response.data;

    expect(galpao.id_local).toBe(data.id_local);

    await galpaoService.deleteGalpao(data.id_local);
});

test.only('Should update a galpao', async function () {
    const galpao = await galpaoService.saveGalpao({
        id_local: idTest1,
        id_prod: 1001,
        numero: 1,
        endereco: 'AAAA'
    });

    galpao.endereco = 'BBBB';

    await request(`http://localhost:3000/galpao/${galpao.id_local}`, 'put', galpao);
    const updatedGalpao = await galpaoService.getGalpao(galpao.id_local);

    expect(updatedGalpao.endereco).toBe(galpao.endereco);

    await galpaoService.deleteGalpao(galpao.id_local);
});

test('Should delete a galpao', async function () {
    const galpao = await galpaoService.saveGalpao({
        id_local: idTest1,
        id_prod: 1001,
        numero: 1,
        endereco: 'AAAA'
    });

    await request(`http://localhost:3000/galpao/${galpao.id_local}`, 'delete');
    const galpaos = await galpaoService.getGalpaos();

    expect(galpaos).toHaveLength(9);
});
