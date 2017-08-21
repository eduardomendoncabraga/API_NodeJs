'use strict';
const mongoose = require('mongoose');
const Ordem = mongoose.model('Ordem');

exports.get = async (data) => {
    var res = await Ordem
        .find({}, 'numero status cliente itens')
        .populate('cliente', 'nome')
        .populate('itens.produto', 'nome');
    return res;
}

exports.create = async (data) => {
    var ordem = new Ordem(data);
    await ordem.save()
}