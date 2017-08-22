'use strict'

const express = require('express');
const router = express.Router();

router.get('/index.html', (req, res, next) => {
    res.status(200).send({ title: "Node API", version: "0.0.1" })
})

module.exports = router;