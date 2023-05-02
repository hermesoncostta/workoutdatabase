const express = require("express");
const router = express.Router();
const Aluno = require("../../models/Aluno");
const bcrypt= require("bcrypt")

router.post("/aluno/create", async (req, res) => {
    const { aluno_nome,
        aluno_email,
        aluno_cpf,
        aluno_endereco,
        aluno_telefone,
        aluno_sexo,
        aluno_data_nascimento,
        aluno_data_cadastro,
        aluno_cidade,
        aluno_estado,
        aluno_descricao,
        aluno_status,
        aluno_senha,
    } = req.body;

    //ESCOLHE UM CAMPO NO CADASTRO PARA VERIFICAÇÃO
    const alunoExistente = await Aluno.findOne({
        where: {
            aluno_email: req.body.aluno_email
        },
        where: {
            aluno_cpf: req.body.aluno_cpf,
        }
    });

    // VERIFICA SE O USUARIO JÁ É EXISTENTE
    if (alunoExistente) {
        return res.json({ message: 'Aluno já cadastrado' })
    }

     // CRIPTOGRAFIA DA SENHA 
     const salt = await bcrypt.genSalt(12);
     const passwordHash = await bcrypt.hash(aluno_senha, salt)
 



    const aluno = new Aluno({
        aluno_nome: aluno_nome,
        aluno_email: aluno_email,
        aluno_cpf: aluno_cpf,
        aluno_endereco: aluno_endereco,
        aluno_telefone: aluno_telefone,
        aluno_sexo: aluno_sexo,
        aluno_data_nascimento: aluno_data_nascimento,
        aluno_data_cadastro: aluno_data_cadastro,
        aluno_cidade: aluno_cidade,
        aluno_estado: aluno_estado,
        aluno_descricao: aluno_descricao,
        aluno_status: aluno_status,
        aluno_senha: passwordHash
    });




    try {
        await aluno.save();
        res.status(200);
        res.json(aluno);
    } catch (err) {
        res.json({ error: true, message: err.message });
    }
});




module.exports = router;