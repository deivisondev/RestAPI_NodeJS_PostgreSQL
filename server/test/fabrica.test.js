const axios = require('axios');

test('Should get fabrica', async function () {
    const response = await axios({
        url: 'http://localhost:3000/fabrica',
        method: 'get'
    });
    const fabrica = response.data;
    expect(fabrica).toHaveLength(10);
});