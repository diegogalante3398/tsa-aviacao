class ListaMatriculas {

    cadastrar() {
        var dados = { "nome": inputNome.value, "email": inputEmail.value, "cpf": inputCpf.value };
        var ls = localStorage.getItem("infos");

        // verifica se o localStorage já existe
        if (ls) {
            var json = JSON.parse(ls);
            json.push(dados);
            json = JSON.stringify(json);
            localStorage.setItem("infos", json);
        } else {
            // se não existe, cria com uma array convertida em string com os dados
            localStorage.setItem("infos", JSON.stringify([dados]));
        }
    }

    lista(tbody) {
        // puxa novamente o localStorage atualizado em forma de array
        let ls_array = JSON.parse(localStorage.getItem("infos"));
        // percorre a array do localStorage e adiciona as linhas e colunas da table;
        for (var item of ls_array) {
            let tr = document.createElement("tr");

            let tdNome = document.createElement("td");
            tdNome.innerHTML = item.nome;
            tr.appendChild(tdNome);

            let tdEmail = document.createElement("td");
            tdEmail.innerHTML = item.email;
            tr.appendChild(tdEmail);

            let tdCpf = document.createElement("td");
            tdCpf.innerHTML = item.cpf;
            tr.appendChild(tdCpf);

            tbody.appendChild(tr);
        }
    }
}

let submit = document.getElementById("submit");

let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputCpf = document.getElementById("cpf");

let tbody = document.querySelector(".conteudo table tbody");
let listaMatriculas = new ListaMatriculas();

/* Se o aba aberta for lista.html ele apenas mostra os dados */
/* Senao ele faz o cadastro do cliente e redireciona para página de listagem  */
if (window.location.href == "http://127.0.0.1:5500/lista.html") {
    listaMatriculas.lista(tbody);
}else{
    submit.addEventListener("click", () => {
        window.location.href = "http://127.0.0.1:5500/lista.html";
        listaMatriculas.cadastrar();
    }); 
}
