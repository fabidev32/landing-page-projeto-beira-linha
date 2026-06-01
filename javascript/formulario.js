let nome = document.getElementById("nome");
let email = document.getElementById("email");
let numero = document.getElementById("numero");


let nome_cadastrado = document.getElementById("nome_cadastrado");
let email_cadastrado = document.getElementById("email_cadastrado");
let numero_cadastrado = document.getElementById("numero_cadastrado");


function Cadastrar() {

    let HTML_nome = nome.value;
    nome_cadastrado.innerHTML = HTML_nome;
    nome.classList.add("nome");

    let HTML_email = email.value;
    email_cadastrado.innerHTML = HTML_email;
    nome.classList.add("email");

    let HTML_numero = numero.value;
    numero_cadastrado.innerHTML = HTML_numero;
    nome.classList.add("numero");

}