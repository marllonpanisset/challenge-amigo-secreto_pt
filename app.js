let listaNomesAmigos = [];
let nomeAmigoInput = document.getElementById("amigo");
let estadoSorteio = false;

function adicionarAmigo() {
    let nomeEntrada = nomeAmigoInput.value.trim();

    if (nomeEntrada === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Se o sorteio já aconteceu, resetar o estado
    if (estadoSorteio) {
        document.getElementById("resultado").innerHTML = "";
        estadoSorteio = false;
    }

    listaNomesAmigos.push(nomeEntrada);
    nomeAmigoInput.value = "";
    exibirListaDeAmigos();
}

function exibirListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaNomesAmigos.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;
        li.classList.add("amigo-item");

        li.addEventListener("click", () => {
            removerAmigo(index);
        });

        lista.appendChild(li);
    });
}

function removerAmigo(indice) {
    listaNomesAmigos.splice(indice, 1);
    exibirListaDeAmigos();
}

function sortearAmigo() {
    if (listaNomesAmigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaNomesAmigos.length);
    let nomeSorteado = listaNomesAmigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo sorteado foi: <strong>${nomeSorteado}</strong></li>`;

    // Resetar o jogo
    listaNomesAmigos = [];
    exibirListaDeAmigos();
    estadoSorteio = true;
}
