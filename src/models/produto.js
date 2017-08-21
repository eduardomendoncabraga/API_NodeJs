'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    slug: { // Cadeira gamer = cadeira-gamer (buscas)
        type: String,
        required: [true, 'o slug é obrigatório'],
        trim: true,
        index: true,
        unique: true
    },
    descricao: {
        type: String,
        required: true,
        trim: true
    },
    preco: {
        type: Number,
        required: true,

    },
    ativo: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        require: true
    }],
    imagem: {
        type: String,
       //required: true,
        trim: true
    }
});

module.exports = mongoose.model('Produto', schema);
