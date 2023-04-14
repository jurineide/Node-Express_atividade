const express = require("express");
const fs = require("fs");
const { alunoNome } = require("./alunos");
const { alunoMedia } = require("./alunos");

const app = express();
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
app.post("/alunos/novo", (req, res) => {
  let listaAtualizada = fs.writeFileSync(
    "../db.json",
    JSON.stringify([...listaAlunos, atualizarLista])
  );

  res.send(listaAtualizada);
});

app.listen(porta, () => {
  console.log(`escutando a porta ${porta}`);
});
