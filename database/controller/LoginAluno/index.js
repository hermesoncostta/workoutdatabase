const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Aluno = require('../../models/Aluno')

router.post('/login/entry', async (req, res) => {
  const { aluno_email, aluno_senha } = req.body;

 

  // Validação
  if (!aluno_email || !aluno_senha) {
    return res.json({ error: true, message: "Usuário ou senha inválidos" });
  }

  try {
    // Verificar se o aluno existe
    const aluno = await Aluno.findOne({ where: { aluno_email } });

    if (!aluno) {
      return res.json({ error: true, message: 'E-mail não cadastrado' });
    }

    // Verificar se a senha confere
    const checkPassword = await bcrypt.compare(aluno_senha, aluno.aluno_senha);

    if (!checkPassword) { 
      return res.json({ error: true, message: 'Senha inválida' });
    }

    // Gerar token JWT
    const secret = process.env.SECRET;
    const token = jwt.sign( { id: aluno.id }, secret);

    // Retornar token JWT com campo "access" do usuário
    return res.json(token);
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: true, message: err.message });
  }
});

module.exports = router;