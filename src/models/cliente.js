'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: [{ // criando um array de string onde o valores permitidos são user e adm e o valor padrão é user
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
    }],
});

module.exports = mongoose.model('Cliente', schema);
