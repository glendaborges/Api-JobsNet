const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    nascimento: { type: String, unique: false, required: true },
    genero: { type: String, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    identidade: { type: String, unique: true, required: true },
    cep: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    endereco: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    celular: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    habilitacao: { type: String, unique: false, required: true },
    veiculo: { type: String, unique: false, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);