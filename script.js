//Variavel referência da outras partes
var pagina = "login";
//Função para quando iniciar a página deixar a apenas a tela de login sem nome de úsuairo
window.onload = function () {
    const cadastro = document.getElementsByClassName('cadastro')[0];
    const tela_selecionar = document.getElementById('tela_selecionar');
    const tela_novo = document.getElementById('tela_novo');
    const tela_historico = document.getElementById('tela_historico');
    const usuario_logado = document.getElementById('usuario_logado');
    const nova_senha = document.getElementsByClassName('nova_senha')[0];
    back_icon = document.getElementById('back_icon');
    cadastro.style.display = "none";
    tela_selecionar.style.display = "none";
    tela_novo.style.display = "none";
    tela_historico.style.display = "none";
    usuario_logado.style.display = "none";
    back_icon.style.display = "none"; 
    nova_senha.style.display = "none";
}
//Função para selecionar cadastro
function FormularioCadastro(event) {
    event.preventDefault();
    const cadastro = document.getElementsByClassName('cadastro')[0];
    const login = document.getElementsByClassName('login')[0];
    cadastro.style.display = "block";
    login.style.display = "none";
}
//Função para nova senha
function FormularioNovaSenha(event) {
    event.preventDefault();
    const login = document.getElementsByClassName('login')[0]
    const nova_senha = document.getElementsByClassName('nova_senha')[0];
    login.style.display = "none";
    nova_senha.style.display = "block";
}
// Função para deixar visivel apenas a tela login
function FormularioLogin(event) {
    event.preventDefault();
    const cadastro = document.getElementsByClassName('cadastro')[0];
    const login = document.getElementsByClassName('login')[0]
    const nova_senha = document.getElementsByClassName('nova_senha')[0];
    cadastro.style.display = "none";
    nova_senha.style.display = "none";
    login.style.display = "block";   
}
// Função para deixar visivel apenas a tela selecionar
function tela_selecionar(event) {
    event.preventDefault();
    const tela_selecionar = document.getElementById('tela_selecionar');
    const tela_login = document.getElementById('tela_login');
    const usuario_logado = document.getElementById('usuario_logado');
    tela_selecionar.style.display = "block";
    tela_login.style.display = "none";
    usuario_logado.style.display = "block";
    back_icon.style.display = "block";
    pagina = "selecionar";
    console.log(pagina)
}
// Função para deixar visivel apenas a tela novo
function tela_novo(event) {
    event.preventDefault();
    const tela_selecionar = document.getElementById('tela_selecionar');
    const tela_novo = document.getElementById('tela_novo');
    tela_selecionar.style.display = "none";
    tela_novo.style.display = "block";
    pagina = "novo";
    console.log(pagina)
}
// Função para deixar visivel apenas a tela login
function tela_historico(event) {
    event.preventDefault();
    const tela_selecionar = document.getElementById('tela_selecionar');
    const tela_historico = document.getElementById('tela_historico');
    tela_selecionar.style.display = "none";
    tela_historico.style.display = "block";
    pagina = "historico";
    console.log(pagina)
}
function voltar_tela() {
    console.log("alguem me chamou")
    const tela_selecionar = document.getElementById('tela_selecionar');
    const tela_novo = document.getElementById('tela_novo');
    const tela_historico = document.getElementById('tela_historico');
    switch (pagina) {
        case "selecionar":
            location.reload()
            break;
        case "novo":
            tela_selecionar.style.display = "block";
            tela_novo.style.display = "none";
            pagina = "selecionar";
            console.log(pagina)
            break;
        case "historico":
            tela_selecionar.style.display = "block";
            tela_historico.style.display = "none";
            pagina = "selecionar";
            console.log(pagina)
            break;
    }
}
// Função para popular a tabela com os dados
async function preencherTabela(event) {
    event.preventDefault();
    try {
        let response = await fetch('dados.json');
        let data = await response.json();
        let tabelas = document.getElementById('tabela');
        for (let item of data) {
            let linha = tabelas.insertRow();
            linha.insertCell().textContent = item.Material;
            linha.insertCell().textContent = item.Quantidade;
            linha.insertCell().textContent = item.Sku;
            linha.insertCell().textContent = item.Rua;
            linha.insertCell().textContent = item.Posicao;
            let cell = linha.insertCell();
            cell.className = 'iconCell';
            let img = document.createElement('img');
            img.src = 'https://github.com/Luca-sketch/MVP_SPRINT_1/blob/main/lixeira.png?raw=true';
            img.alt = 'Seta';
            img.style.width = '20px';
            img.style.height = '20px';
            cell.appendChild(img);

            linha.addEventListener('click', function () {
                // Quando a linha é clicada, imprima os dados da linha
                console.log('Chave: ' + item.chave + ', LPN: ' + item.lpn);
            });
        }
    } catch (error) {
        console.error(error);
    }
}

