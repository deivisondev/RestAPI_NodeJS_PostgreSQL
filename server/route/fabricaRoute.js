const express = require('express');
const router = express.Router();
const fabricaService = require('../service/fabricaService');

router.get('/fabrica', async function (req, res) {
    const fabrica = await fabricaService.getFabrica();
    res.json(fabrica);
});
router.get('/fabrica/:id', async function (req, res) {

});
router.post('/fabrica', async function (req, res) {

});
router.put('/fabrica/:id', async function (req, res) {

});
router.delete('/fabrica/:id', async function (req, res) {

});

module.exports = router;
