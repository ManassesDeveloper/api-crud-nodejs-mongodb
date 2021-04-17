const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
},
{ 
    timestamps: true
})

module.exports = mongoose.model('Produto', produtoSchema)

