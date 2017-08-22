'use strict';
const mongoose = require('mongoose');
const Produto = mongoose.model('Produto');

exports.get = async () => {
    const res = await Produto.find({
        ativo: true
    }, 'nome preco slug');
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Produto
        .findOne({
            slug: slug,
            ativo: true
        }, 'nome descricao preco slug tags')
    return res;
}

exports.getById = async (id) => {
    const res = await Produto
        .findById(id);
    return res;
}

exports.getByTag = async (tag) => {
    const res = Produto
        .find({
            tags: tag,
            ativo: true
        }, 'nome descricao preco slug tags')
    return res;
}

exports.create = async (data) => {
    var produto = new Produto(data);
    await produto.save()
}

exports.update = async (id, data) => {
    await Produto
        .findByIdAndUpdate(id, {
            $set: {
                nome: data.nome,
                descricao: data.descricao,
                slug: data.slug,
            }
        });
}

exports.delete = async (id) => {
    await Produto.findOneAndRemove(id);
}
