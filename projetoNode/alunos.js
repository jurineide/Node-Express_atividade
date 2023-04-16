const fs=require("fs");


const alunos=
[
    {nome:"Maria", matricula:"123", media:"10"},
    {nome:"Jose", matricula:"143", media:"9"},
    {nome:"João", matricula:"173", media:"8"},
    {nome:"Carolina", matricula:"193", media:"7"},
    {nome:"Giovanna", matricula:"113", media:"6"},
    {nome:"Fernando", matricula:"103", media:"5"},
    {nome:"Juliana", matricula:"133", media:"4"},

]
 
  function alunoNome(nome){
    let alunosGeral= JSON.parse( fs.readFileSync("../db.json"))

    const alunoFiltro=alunosGeral.filter( alunosGeral=>alunosGeral.nome===nome)
return alunoFiltro  
}

function alunoMedia(media){
    let alunosGeral= JSON.parse( fs.readFileSync("../db.json"))

    const mediaFiltro=alunosGeral.filter( alunosGeral=>alunosGeral.media===media)
return mediaFiltro  
}

function insereAluno(alunoNovo){
  let alunosGeral= JSON.parse( fs.readFileSync("../db.json"))
let novaListaAlunos=[...alunosGeral,alunoNovo]
fs.writeFileSync("../db.json",JSON.stringify(novaListaAlunos))
}

function deleteAluno(nome) {
  const alunosGeral= JSON.parse(fs.readFileSync("../db.json"))
  const alunoFiltro=alunosGeral.filter(alunosGeral=>alunosGeral.nome !== nome)
  fs.writeFileSync("../db.json",JSON.stringify(alunoFiltro))
  
}



  module.exports={alunoNome,alunoMedia, insereAluno, deleteAluno}