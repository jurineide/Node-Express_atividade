const express = require("express");
const fs = require("fs");
const { alunoNome } = require("./alunos");
const { alunoMedia } = require("./alunos");
const {insereAluno} = require("./alunos");
const app = express();
app.use(express.json());
const porta = 3000;

//ROTA FILTRAR ALUNO
app.get("/alunos", (req, res) => {
    let alunosGeral = JSON.parse(fs.readFileSync("../db.json"));

    const nome = req.query.nome;
    const aluno = alunoNome(nome);

    const media = req.query.media;
    const nota = alunoMedia(media);

    if (nome) return res.json(aluno);
    else if (media) return res.json(nota);
    else return res.json(alunosGeral);
});

//ROTA INCLUIR
app.post("/alunos", (req, res) => {

  const  { nome, matricula, media } = req.body;
  insereAluno({ nome, matricula, media });
  if(!nome|| !matricula|| !media){
    res.status(400).json({ error: "Favor inserir NOME,MATRICULA e  MÉDIA " });
  }else 
  res.send("atualizado");
});










app.listen(porta, () => {
  console.log(`escutando a porta ${porta}`);
});
