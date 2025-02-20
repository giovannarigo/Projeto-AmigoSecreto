let amigos = [];
let campo = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById('resultado');

function limparCampo() {
  campo.value = "";
}

function adicionarAmigo() {
  if (campo.value === "") {
    alert("Por favor, digite um nome");
    return;
  } else {
    amigos.push(campo.value);
    console.log(amigos);
    limparCampo();

    lista.innerHTML = "";

    for (i = 0; i < amigos.length; i++) {
      let novoAmigo = document.createElement("li");
      novoAmigo.textContent = amigos[i];
      lista.appendChild(novoAmigo);
    }
  }
}

function sortearAmigo() {
    if(amigos.length === 0){
        alert("Adicione um nome antes de sortear!");
    }else{
        let indiceSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceSorteado];

        let novoResultado = document.createElement("p");
        novoResultado.textContent = amigoSorteado;
        resultado.appendChild(novoResultado);
    }
}
