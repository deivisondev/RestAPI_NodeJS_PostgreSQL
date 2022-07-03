const axios = require('axios');
const fabricaService = require('../service/fabricaService');
const setorDeProducaoService = require('../service/setorDeProducaoService');

const idTest1 = 93;

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

test.only('Should update a setorDeProducao', async function () {
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
    const setorDeProducao = await setorDeProducaoService.savesetorDeProducao({
        id_setor: idTest1,
        localidade: 'AAAAA',
        relatorio: 'AAAAA',
        data_hora: "2022-04-17 00:00:00",
        qtd_maquinas: 1,
        qtd_funcionarios: 1
    });

    await request(`http://localhost:3000/setor-de-producao/${setorDeProducao.id_setor}`, 'delete');
    const setorDeProducaos = await setorDeProducaoService.getsetorDeProducaos();
    
    expect(setorDeProducaos).toHaveLength(24);
});
