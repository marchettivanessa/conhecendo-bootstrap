
let nome = document.querySelector("#nome")
let sobrenome = document.querySelector("#sobrenome")
let usuario = document.querySelector("#usuario")
let cidade = document.querySelector("#cidade")
let estado = document.querySelector("#estado")


document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)



function validaFormulario(){
  if(nome.value != "" && sobrenome.value != "" && usuario.value != "" 
  && cidade.value !="" && estado.value != ""){
  alert("Prontinho! Você receberá as novidades por email!")
  }else{
    alert("Por favor, preencha todos os campos.")
  }
}