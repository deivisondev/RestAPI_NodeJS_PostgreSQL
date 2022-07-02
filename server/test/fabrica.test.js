const axios = require('axios');
const fabricaService = require('../service/fabricaService');

const request = function (url, method, data) {
    return axios({ url, method, data });
}

test('Should get fabrica', async function () {
    const fabrica1 = await fabricaService.saveFabrica({
        id: 37,
        cnpj: 30656908000119,
        rua: 'R. Teste 1',
        num: 40,
        cidade: 'Cidade 1',
        uf: 'AA',
        cep: '62900000'
    });
    const fabrica2 = await fabricaService.saveFabrica({
        id: 38,
        cnpj: 69997727000191,
        rua: 'R. Teste 2',
        num: 40,
        cidade: 'Cidade 2',
        uf: 'AB',
        cep: '62900000'
    });
    const fabrica3 = await fabricaService.saveFabrica({
        id: 39,
        cnpj: 16495879000120,
        rua: 'R. Teste 3',
        num: 42,
        cidade: 'Cidade 3',
        uf: 'AC',
        cep: '62900000'
    });
    const response = await request('http://localhost:3000/fabrica', 'get');
    
    const fabrica = response.data;

    expect(fabrica).toHaveLength(18);
    await fabricaService.deleteFabrica(fabrica1.id);
    await fabricaService.deleteFabrica(fabrica2.id);
    await fabricaService.deleteFabrica(fabrica3.id);
});

test('Should save fabrica', async function () {
    const data = {
        id: 40,
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
