document.getElementById("enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != "" && 
     document.getElementById("telefone").value != "") {
        alert("Obrigada por se cadastrar! Você receberá as novidades por e-mail")
  }else {
      alert("Preencha todos os campos")
  } 
}
