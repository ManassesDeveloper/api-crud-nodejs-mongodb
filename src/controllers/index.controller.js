const Produto = require('../models/Produto')

// Listar documentos no DB
exports.get = (req, res) => {
    Produto.find({}).then(data => {
        res.status(200).send(data)
    }).catch(error => {
        res.status(400).send(error)
    })
}

exports.post = (req, res) => {
    const produto = new Produto({
        nome: req.body.nome,
        email: req.body.email
    })
    produto.save()
    .then(response => {
        res.json({
            message: 'Cadastrado com sucesso!'
        })
    })
    .catch(error => {
        res.json({
            message: 'ERRO: ao se cadastrar!'
        })
    })
}

exports.put = (req, res) => {
    Produto.findByIdAndUpdate(req.params.id, {
        $set: {
            nome: req.body.nome,
            email: req.body.email
        }
    }).then(x => {
        res.status(200).json({
            message: 'Produto atualizado com sucesso'
        })
    }).catch(e => {
        res.status(400).json({
            message: 'Erro na atualização',
            data: e
        })
    })
}

exports.delete = (req, res) => {
    Produto.findOneAndRemove(req.body.id)
    .then(x => {
        res.status(200).json({
            message: 'Produto removido com sucesso'
        })
    }).catch(e => {
        res.status(400).json({
            message: 'Falha ao remover o produto',
            data: e
        })
    })
}