const express = require('express');
const router = express.Router();
const fabricaService = require('../service/fabricaService');

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

module.exports = router;
