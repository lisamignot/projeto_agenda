const form = document.getElementById("formulario")

let nomes = []  //cria array para nomes
let linhas = ""


form.addEventListener ("submit", function (e) {
    e.preventDefault() //evita envio do formulário

    adicionarContatos()   //chama primeira função
    inserirNovosContatos()   //chama segunda função
})

function adicionarContatos() {
    const inNomeContato = document.querySelector("#nome-contato")
    const inTelefone = document.querySelector("#telefone-contato")
    const inEmail = document.querySelector("#email-contato")

    if (nomes.includes(inNomeContato.value)) {
        alert(`O contato: ${inNomeContato.value} já foi cadastrado!`)  //pesquisa se o nome já está no array e impede criação de contato duplicado
    } else {
        nomes.push(inNomeContato.value) //adiciona nome ao array
    
    let linha = `<tr>`
    linha += `<td>${inNomeContato.value}</td>`
    linha += `<td>${inTelefone.value}</td>`
    linha += `<td>${inEmail.value}</td>`
    linha += `</tr>`

    linhas += linha 
    }

    inNomeContato.value = ""
    inTelefone.value = ""
    inEmail.value = ""
    //apaga formulário
}

function inserirNovosContatos() {
    const corpoTabela = document.querySelector("#conteudo-tabela") //acessa a tabela
    corpoTabela.innerHTML = linhas //modifica os valores do html
}

