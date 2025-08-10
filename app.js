let listaNomesAmigos = [];
let nomeAmigoInput = document.getElementById("amigo");

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let nomeEntrada = nomeAmigoInput.value.trim();

    // Valida a entrada
    if (nomeEntrada === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Atualiza o array de amigos
    listaNomesAmigos.push(nomeEntrada);

    // Limpa o campo de entrada
    nomeAmigoInput.value = "";

    // Atualiza a lista na tela
    exibirListaDeAmigos();
}

function exibirListaDeAmigos() {
    // Obter o elemento da lista
    let lista = document.getElementById("listaAmigos");

    // Limpar a lista existente
    lista.innerHTML = "";

    // Percorrer o array e adicionar cada nome como <li>
    for (let i = 0; i < listaNomesAmigos.length; i++) {
        lista.innerHTML += `<li>${listaNomesAmigos[i]}</li>`;
    }
}
