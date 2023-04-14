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
    const alunosGeral= JSON.parse( fs.readFileSync("../db.json"))

    const alunoFiltro=alunosGeral.filter( alunosGeral=>alunosGeral.nome===nome)
return alunoFiltro  
}

  module.exports={alunoNome}