// JavaScript para capturar a submissão do formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;
    
    if (nome && email && mensagem) {
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

