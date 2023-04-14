const express=require("express");
const fs=require("fs");
const { atualizarLista, alunoNome } = require("./alunos");

const app=express();
const porta=3000




//ROTA  ALUNOS


app.get('/alunos',(req,res)=>{
    const listaAlunos= JSON.parse(fs.readFileSync("../db.json"));   
        
     res.json(listaAlunos);
});

//ROTA FILTRAR ALUNO

app.get('/alunos',(req,res)=>{
    const nome=req.query.nome
    const aluno=alunoNome(nome);
    
     res.json(aluno);
    
   }  );         


//ROTA INCLUIR
app.post('/alunos/novo',(req,res)=>{

  const listaAtualizada=  fs.writeFileSync("../db.json",JSON.stringify([...listaAlunos,atualizarLista]))

    res.send(listaAtualizada)
});







//ROTA ALTERAR
app.put('/alunos',(req,res)=>{
    res.send("alterar")
});

//ROTA DELETAR
app.delete('/alunos',(req,res)=>{
    res.send("delete")
});






app.listen(porta,()=>{
    console.log(`escutando a porta ${porta}`)
})