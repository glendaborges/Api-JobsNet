const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nome, cargo, nascimento, genero, estadoCivil, cpf, identidade, cep, cidade, endereco, bairro, celular, email, habilitacao, veiculo } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.nascimento = nascimento;
        newCandidate.genero = genero;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.cpf = cpf ; 
        newCandidate.identidade = identidade ; 
        newCandidate.cep = cep;
        newCandidate.cidade = cidade;
        newCandidate.endereco = endereco ; 
        newCandidate.bairro = bairro;
        newCandidate.celular = celular;
        newCandidate.email = email ; 
        newCandidate.habilitacao = habilitacao;
        newCandidate.veiculo = veiculo;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('iti malia deu probleminha!');
            }

            return res.status(200).send(savedCandidate);
        });
    },

    
    
};